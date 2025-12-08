import { ToastOptions, toast } from "react-toastify";

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, options);
};

export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, options);
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, options);
};