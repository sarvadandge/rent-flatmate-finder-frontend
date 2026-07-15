"use client";

import DetailsSkeleton from "@/components/common/skeletons/listing-details-skeleton";
import { useListing } from "@/hooks/listings/use-listing";
import ListingGallery from "./listing-gallery";
import ListingInfo from "@/components/common/info-item";
import ListingOwner from "./listing-owner";
import ListingActions from "./listing-actions";

export default function ListingDetailsView({
  listingId,
}: {
  listingId: string;
}) {
  const { data: listing, isLoading, isError, error } = useListing(listingId);

  if (isLoading) {
    return <DetailsSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-destructive">
        {error instanceof Error ? error.message : "Failed to load listing"}
      </div>
    );
  }

  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{listing.title}</h1>

      <p>{listing.location}</p>

      <p>{listing.description}</p>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ListingGallery images={listing.images} />
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-6 lg:col-span-2">
            <ListingInfo listing={listing} />

            <ListingOwner listing={listing} />

            <ListingActions
              listingId={listing.id}
              isFilled={listing.isFilled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
