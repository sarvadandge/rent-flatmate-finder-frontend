import { create } from "zustand";

import { User } from "@/types/auth";

type AuthState = {
  user: User | null;
  token: string | null;

  isAuthenticated: boolean;
  isLoading: boolean;

  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setUser: (user: User | null) => void;
};

const storedToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: storedToken,

  isAuthenticated: !!storedToken,
  isLoading: true,

  login: (user, token) => {
    localStorage.setItem("accessToken", token);

    set({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  logout: () => {
    localStorage.removeItem("accessToken");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),

  setUser: (user) =>
    set((state) => ({
      user,
      token: state.token,
      isAuthenticated: !!state.token && !!user,
    })),
}));
