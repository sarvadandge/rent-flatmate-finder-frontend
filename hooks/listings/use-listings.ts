"use client";

import { useQuery } from "@tanstack/react-query";

import { listingApi } from "@/api";

type UseListingsParams = {
  page?: number;
  limit?: number;
  location?: string;
  minBudget?: number;
  maxBudget?: number;
};

export function useListings(params: UseListingsParams = {}) {
  return useQuery({
    queryKey: ["listings", params],
    queryFn: () => listingApi.browseListings(params),
  });
}
