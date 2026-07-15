import { ReactNode } from "react";

import { Card } from "@/components/ui/card";

import { Listing } from "@/types/listing";

import ListingCardHeader from "./listing-card-header";
import ListingCardContent from "./listing-card-content";
import ListingCardFooter from "./listing-card-footer";

type ListingCardProps = {
  listing: Listing;
  children?: ReactNode;
  className?: string;
};

export default function ListingCard({
  listing,
  children,
  className,
}: ListingCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className ?? ""}`}
    >
      <ListingCardHeader listing={listing} />

      <ListingCardContent listing={listing} />

      {children && <ListingCardFooter>{children}</ListingCardFooter>}
    </Card>
  );
}
