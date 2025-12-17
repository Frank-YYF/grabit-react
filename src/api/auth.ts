import axiosInstance from "./axiosInstance";
import { RegisterRequest, RegisterResponse } from "@/types/auth.type";
import { RequestConfig, BaseResponse } from "@/types/api.types";
/**
 * 用户注册接口
 * @param data 注册参数
 * @param config 可选请求配置
 */
export const register = async (
  data: RegisterRequest,
  config?: RequestConfig
): Promise<BaseResponse<RegisterResponse>> => {
  const response = await axiosInstance.post<BaseResponse<RegisterResponse>>(
    "/auth/register",
    data,
    config
  );

  return response.data;
};
