import { CalendarDays, MapPin, BedSingle, Sofa } from "lucide-react";

import CompatibilityBadge from "@/components/listings/shared/compatibility-badge";
import ListingPrice from "@/components/listings/shared/listing-price";
import ListingStatus from "@/components/listings/shared/listing-status";

import { formatDate } from "@/lib/format";
import { Listing } from "@/types/listing";

type ListingInfoProps = {
  listing: Listing;
};

export default function ListingInfo({ listing }: ListingInfoProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{listing.title}</h1>

        <div className="flex flex-wrap items-center gap-3">
          <ListingStatus isFilled={listing.isFilled} />

          <CompatibilityBadge score={listing.compatibility?.score ?? null} />
        </div>

        <ListingPrice rent={listing.rent} />
      </div>

      <div className="grid gap-4 rounded-xl border p-5 sm:grid-cols-2">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Location</p>

            <p className="font-medium">{listing.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Available From</p>

            <p className="font-medium">{formatDate(listing.availableFrom)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BedSingle className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Room Type</p>

            <p className="font-medium">{listing.roomType}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sofa className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Furnishing</p>

            <p className="font-medium">{listing.furnishingStatus}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Description</h2>

        <p className="leading-7 text-muted-foreground">{listing.description}</p>
      </div>
    </div>
  );
}
