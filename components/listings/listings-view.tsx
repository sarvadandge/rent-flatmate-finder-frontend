"use client";

import ListingGrid from "./listing-grid";

import { useListings } from "@/hooks/listings/use-listings";

export default function ListingsView() {
  const { data, isLoading, isError, error } = useListings({
    page: 1,
  });

  if (isError) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-8 py-6">
        <h2 className="font-semibold text-destructive">
          Failed to load listings
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {error instanceof Error ? error.message : "Something went wrong."}
        </p>
      </div>
    );
  }

  return <ListingGrid listings={data?.listings ?? []} loading={isLoading} />;
}
