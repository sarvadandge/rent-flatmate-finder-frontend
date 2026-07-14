"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "@/services";
import { RegisterSchema } from "@/lib/validations/auth.schema";
import { useAuthStore } from "@/store/auth.store";

export const useRegister = () => {
  const router = useRouter();

  const loginStore = useAuthStore((state) => state.login);

  const mutation = useMutation({
    mutationFn: authService.register,

    onSuccess: (response) => {
      loginStore(response.data.user, response.data.token);

      toast.success(response.message);

      router.push(response.data.user.role === "OWNER" ? "/owner" : "/tenant");
    },

    onError: (error: any) => {
      toast.error(error.response?.data?.message ?? "Registration failed");
    },
  });

  const onSubmit = (data: RegisterSchema) => {
    mutation.mutate(data);
  };

  return {
    onSubmit,
    isPending: mutation.isPending,
  };
};
