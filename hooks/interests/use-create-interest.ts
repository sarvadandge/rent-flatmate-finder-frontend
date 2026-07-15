"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { interestApi } from "@/api";
import { queryKeys } from "@/lib/query-keys";

export function useCreateInterest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: interestApi.createInterest,

    onSuccess: () => {
      toast.success("Interest request sent.");

      queryClient.invalidateQueries({
        queryKey: queryKeys.interests.all,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
