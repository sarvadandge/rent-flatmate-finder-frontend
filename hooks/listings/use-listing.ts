"use client";

import { useQuery } from "@tanstack/react-query";

import { listingApi } from "@/api";
import { queryKeys } from "@/lib/query-keys";

export function useListing(listingId: string) {
  return useQuery({
    queryKey: queryKeys.listings.detail(listingId),
    queryFn: () => listingApi.getListingById(listingId),
    enabled: !!listingId,
  });
}