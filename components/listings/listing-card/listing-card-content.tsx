import { MapPin, CalendarDays } from "lucide-react";

import { CardContent } from "@/components/ui/card";

import CompatibilityBadge from "@/components/listings/shared/compatibility-badge";
import ListingPrice from "@/components/listings/shared/listing-price";
import ListingStatus from "@/components/listings/shared/listing-status";

import { formatDate } from "@/lib/format";
import { Listing } from "@/types/listing";

type ListingCardContentProps = {
  listing: Listing;
};

export default function ListingCardContent({
  listing,
}: ListingCardContentProps) {
  return (
    <CardContent className="space-y-5 p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="line-clamp-1 text-lg font-semibold">
            {listing.title}
          </h3>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{listing.location}</span>
          </div>
        </div>

        <ListingStatus isFilled={listing.isFilled} />
      </div>

      <p className="line-clamp-2 text-sm text-muted-foreground">
        {listing.description}
      </p>

      <ListingPrice rent={listing.rent} />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />

          <span>Available {formatDate(listing.availableFrom)}</span>
        </div>

        <CompatibilityBadge score={listing.compatibility?.score ?? null} />
      </div>
    </CardContent>
  );
}
