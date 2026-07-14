import api from "@/lib/api";

import type {
  ApiResponse,
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "@/types/auth";

const login = async (data: LoginRequest) => {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/auth/login",
    data,
  );

  return response.data;
};

const register = async (data: RegisterRequest) => {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/auth/register",
    data,
  );

  return response.data;
};

const getCurrentUser = async () => {
  const response = await api.get<ApiResponse<User>>("/auth/me");

  return response.data;
};

const logout = async () => {
  const response = await api.post<ApiResponse<AuthResponse>>("/auth/logout");

  return response?.data;
}

export const authService = {
    login,
    register,
    getCurrentUser,
    logout
};