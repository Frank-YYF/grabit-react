export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber: string;
  addressLine1: string;
  country: string;
  regionState: string;
  city: string;
  postalCode: string;
  password: string;
  confirmPassword: string;
}
export interface RegisterResponse {
  code: number;
  message: string;
}
