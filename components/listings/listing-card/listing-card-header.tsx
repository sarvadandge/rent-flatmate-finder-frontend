import Image from "next/image";

import { CardHeader } from "@/components/ui/card";

import { Listing } from "@/types/listing";

type ListingCardHeaderProps = {
  listing: Listing;
};

export default function ListingCardHeader({ listing }: ListingCardHeaderProps) {
  const image =
    listing.images.length > 0
      ? listing.images[0].imageUrl
      : "/images/listing-placeholder.jpg";

  return (
    <CardHeader className="p-0">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={listing.title}
          fill
          priority={false}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </CardHeader>
  );
}
