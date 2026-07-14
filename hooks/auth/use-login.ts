"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { authService } from "@/services";
import { loginSchema, LoginSchema } from "@/lib/validations/auth.schema";
import { useAuthStore } from "@/store/auth.store";
import { useAuth } from "@/hooks/auth";

export const useLogin = () => {
  const router = useRouter();
  const { login } = useAuth();

  const loginStore = login;

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: authService.login,

    onSuccess: (response) => {
      loginStore(response.data.user, response.data.token);

      toast.success(response.message);

      router.push("/dashboard");
    },

    onError: (error: any) => {
      toast.error(error.response?.data?.message ?? "Login failed");
    },
  });

  const onSubmit = (data: LoginSchema) => {
    mutation.mutate(data);
  };

  return {
    ...form,
    onSubmit,
    isPending: mutation.isPending,
  };
};
