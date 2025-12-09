import { AxiosRequestConfig, CancelToken, Canceler } from "axios";

// 基础响应类型
export interface BaseResponse<T = any> {
  code: number;
  message: string;
  data: T;
  success: boolean;
  timestamp?: number;
}
// 分页参数
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  [key: string]: any;
}
// 分页响应
export interface PaginatedResponse<T = any> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}
// 错误类型
export interface ApiError {
  code: number;
  message: string;
  details?: any;
  timestamp?: number;
}
// 请求配置扩展
export interface RequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean; // 跳过认证
  retry?: number; // 重试次数
  timeout?: number; // 自定义超时
  showLoading?: boolean; // 是否显示loading
  showError?: boolean; // 是否显示错误提示
}
// 取消请求 token
export interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}
