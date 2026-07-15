import ListingCard from "./listing-card/listing-card";
import ListingEmpty from "./listing-empty";
import ListingSkeleton from "../common/skeletons/listing-skeleton";

import { Listing } from "@/types/listing";

type ListingGridProps = {
  listings: Listing[];
  loading?: boolean;
  children?: (listing: Listing) => React.ReactNode;
};

export default function ListingGrid({
  listings,
  loading = false,
  children,
}: ListingGridProps) {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl mx-auto">
        <ListingSkeleton />
      </div>
    );
  }

  if (!listings.length) {
    return <ListingEmpty />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl mx-auto">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing}>
          {children?.(listing)}
        </ListingCard>
      ))}
    </div>
  );
}
