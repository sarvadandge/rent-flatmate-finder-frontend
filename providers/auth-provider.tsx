"use client";

import { ReactNode, useEffect } from "react";

import { authApi } from "@/api";
import { useAuthStore } from "@/store/auth.store";

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const { token, user, setUser, logout, setLoading } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      if (!token || user) {
        setLoading(false);
        return;
      }

      try {
        const response = await authApi.getCurrentUser();

        setUser(response.data);
      } catch (error) {
        console.error("Failed to restore session", error);

        logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [token, user, setUser, logout, setLoading]);

  return children;
}
