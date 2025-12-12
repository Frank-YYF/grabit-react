// src/api/axiosInstance.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  Canceler,
} from "axios";
import { ApiError } from "@/types/api.types";

class AxiosService {
  private instance: AxiosInstance;
  private pendingRequests: Map<string, Canceler> = new Map();

  constructor(
    baseURL: string = process.env.REACT_APP_API_URL ||
      "http://8.140.242.103:8078/api"
  ) {
    this.instance = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      withCredentials: true, // ✅ 关键：允许携带 cookie
    });

    this.setupInterceptors();
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }

  private generateRequestKey(config: AxiosRequestConfig): string {
    const { method, url, params, data } = config;
    return `${method}-${url}-${JSON.stringify(params)}-${JSON.stringify(data)}`;
  }

  private addPendingRequest(config: AxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config);

    if (this.pendingRequests.has(requestKey)) {
      const cancel = this.pendingRequests.get(requestKey);
      cancel?.("重复请求被取消");
      this.pendingRequests.delete(requestKey);
    }

    const cancelToken = new axios.CancelToken((cancel) => {
      this.pendingRequests.set(requestKey, cancel);
    });

    config.cancelToken = cancelToken;
  }

  private removePendingRequest(config: AxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config);
    this.pendingRequests.delete(requestKey);
  }

  private setupInterceptors(): void {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        this.addPendingRequest(config);

        // 如果是 FormData
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

        if (error.config) {
          this.removePendingRequest(error.config);
        }

        const apiError = this.handleError(error);
        this.showErrorMessage(apiError);

        return Promise.reject(apiError);
      }
    );
  }

  // 这里不再从 localStorage/sessionStorage 获取 token
  // 前端请求会自动携带 cookie
  // private getToken(): string | null {
  //   return null;
  // }

  private handleError(error: any): ApiError {
    if (!error.response) {
      return {
        code: -1,
        message: "网络错误，请检查网络连接",
        details: error.message,
      };
    }

    const { status, data } = error.response;

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
        return { code: status, message: "没有权限访问此资源", details: data };
      case 404:
        return { code: status, message: "请求的资源不存在", details: data };
      case 408:
        return { code: status, message: "请求超时，请稍后重试", details: data };
      case 500:
        return { code: status, message: "服务器内部错误", details: data };
      case 502:
        return { code: status, message: "网关错误", details: data };
      case 503:
        return { code: status, message: "服务暂时不可用", details: data };
      default:
        return {
          code: status,
          message: data?.message || "请求失败",
          details: data,
        };
    }
  }

  private handleUnauthorized(): void {
    // 前端不再存 token，直接跳转登录
    const currentPath = window.location.pathname + window.location.search;
    if (!currentPath.includes("/login")) {
      window.location.href = `/login?redirect=${encodeURIComponent(
        currentPath
      )}`;
    }
  }

  private showErrorMessage(error: ApiError): void {
    if (process.env.NODE_ENV === "development") {
      console.error("❌ API错误:", error);
    }
  }

  public cancelAllRequests(): void {
    this.pendingRequests.forEach((cancel) => cancel("所有请求已取消"));
    this.pendingRequests.clear();
  }

  public cancelRequest(requestKey: string): void {
    const cancel = this.pendingRequests.get(requestKey);
    if (cancel) {
      cancel(`请求 ${requestKey} 已取消`);
      this.pendingRequests.delete(requestKey);
    }
  }
}

const axiosService = new AxiosService();
export const axiosInstance = axiosService.getInstance();
export const cancelAllRequests =
  axiosService.cancelAllRequests.bind(axiosService);
export const cancelRequest = axiosService.cancelRequest.bind(axiosService);
export default axiosInstance;
