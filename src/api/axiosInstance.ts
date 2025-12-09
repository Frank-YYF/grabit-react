// src/api/axiosInstance.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  Canceler,
} from "axios";
import { RequestConfig, ApiError } from "@/types/api.types";

// 创建 axios 实例
class AxiosService {
  private instance: AxiosInstance;
  private pendingRequests: Map<string, Canceler> = new Map();

  constructor(baseURL: string = process.env.REACT_APP_API_URL || "") {
    this.instance = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    this.setupInterceptors();
  }

  // 获取实例
  public getInstance(): AxiosInstance {
    return this.instance;
  }

  // 生成请求key
  private generateRequestKey(config: AxiosRequestConfig): string {
    const { method, url, params, data } = config;
    return `${method}-${url}-${JSON.stringify(params)}-${JSON.stringify(data)}`;
  }

  // 添加请求到pending队列
  private addPendingRequest(config: AxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config);

    // 如果请求已存在，取消前一个
    if (this.pendingRequests.has(requestKey)) {
      const cancel = this.pendingRequests.get(requestKey);
      cancel?.("重复请求被取消");
      this.pendingRequests.delete(requestKey);
    }

    // 添加取消token
    const cancelToken = new axios.CancelToken((cancel) => {
      this.pendingRequests.set(requestKey, cancel);
    });

    config.cancelToken = cancelToken;
  }

  // 从pending队列移除请求
  private removePendingRequest(config: AxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config);
    this.pendingRequests.delete(requestKey);
  }

  // 设置拦截器
  private setupInterceptors(): void {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        this.addPendingRequest(config);

        // 获取token
        const token = this.getToken();
        if (token && !(config as RequestConfig).skipAuth) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // 处理FormData
        if (config.data instanceof FormData) {
          config.headers["Content-Type"] = "multipart/form-data";
        }

        // 开发环境日志
        if (process.env.NODE_ENV === "development") {
          console.groupCollapsed(
            `🚀 ${config.method?.toUpperCase()} ${config.url}`
          );
          console.log("请求参数:", config.params);
          console.log("请求体:", config.data);
          console.log("请求头:", config.headers);
          console.groupEnd();
        }

        return config;
      },
      (error) => {
        console.error("❌ 请求配置错误:", error);
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.removePendingRequest(response.config);

        // 开发环境日志
        if (process.env.NODE_ENV === "development") {
          console.groupCollapsed(
            `✅ ${response.status} ${response.config.method?.toUpperCase()} ${
              response.config.url
            }`
          );
          console.log("响应数据:", response.data);
          console.groupEnd();
        }

        return response;
      },
      (error) => {
        if (axios.isCancel(error)) {
          console.log("请求被取消:", error.message);
          return Promise.reject({
            code: -1,
            message: "请求已取消",
            isCancel: true,
          });
        }

        // 移除pending请求
        if (error.config) {
          this.removePendingRequest(error.config);
        }

        // 统一错误处理
        const apiError = this.handleError(error);
        this.showErrorMessage(apiError);

        return Promise.reject(apiError);
      }
    );
  }

  // 获取token
  private getToken(): string | null {
    return (
      localStorage.getItem("token") || sessionStorage.getItem("token") || null
    );
  }

  // 错误处理
  private handleError(error: any): ApiError {
    if (!error.response) {
      // 网络错误或请求超时
      return {
        code: -1,
        message: "网络错误，请检查网络连接",
        details: error.message,
      };
    }

    const { status, data } = error.response;

    // 根据HTTP状态码处理
    switch (status) {
      case 400:
        return {
          code: status,
          message: data?.message || "请求参数错误",
          details: data,
        };

      case 401:
        this.handleUnauthorized();
        return {
          code: status,
          message: "登录已过期，请重新登录",
          details: data,
        };

      case 403:
        return {
          code: status,
          message: "没有权限访问此资源",
          details: data,
        };

      case 404:
        return {
          code: status,
          message: "请求的资源不存在",
          details: data,
        };

      case 408:
        return {
          code: status,
          message: "请求超时，请稍后重试",
          details: data,
        };

      case 500:
        return {
          code: status,
          message: "服务器内部错误",
          details: data,
        };

      case 502:
        return {
          code: status,
          message: "网关错误",
          details: data,
        };

      case 503:
        return {
          code: status,
          message: "服务暂时不可用",
          details: data,
        };

      default:
        return {
          code: status,
          message: data?.message || "请求失败",
          details: data,
        };
    }
  }

  // 处理未授权
  private handleUnauthorized(): void {
    // 清除token
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    // 跳转到登录页
    const currentPath = window.location.pathname + window.location.search;
    if (!currentPath.includes("/login")) {
      window.location.href = `/login?redirect=${encodeURIComponent(
        currentPath
      )}`;
    }
  }

  // 显示错误消息
  private showErrorMessage(error: ApiError): void {
    // 这里可以集成消息提示组件，如antd message、toast等
    if (process.env.NODE_ENV === "development") {
      console.error("❌ API错误:", error);
    }

    // 示例：使用alert
    if (error.code !== -1 && error.code !== 401) {
      // alert(error.message);
    }
  }

  // 取消所有pending请求
  public cancelAllRequests(): void {
    this.pendingRequests.forEach((cancel) => {
      cancel("所有请求已取消");
    });
    this.pendingRequests.clear();
  }

  // 取消特定请求
  public cancelRequest(requestKey: string): void {
    const cancel = this.pendingRequests.get(requestKey);
    if (cancel) {
      cancel(`请求 ${requestKey} 已取消`);
      this.pendingRequests.delete(requestKey);
    }
  }
}

// 创建实例
const axiosService = new AxiosService();

// 导出实例和方法
export const axiosInstance = axiosService.getInstance();
export const cancelAllRequests =
  axiosService.cancelAllRequests.bind(axiosService);
export const cancelRequest = axiosService.cancelRequest.bind(axiosService);
export default axiosInstance;
