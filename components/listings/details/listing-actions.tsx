"use client";

import ExpressInterestDialog from "@/components/interests/express-interest-dialog";
import { Button } from "@/components/ui/button";

type ListingActionsProps = {
  listingId: string;
  isFilled: boolean;
  hasRequested?: boolean;
};

export default function ListingActions({
  listingId,
  isFilled,
  hasRequested = true,
}: ListingActionsProps) {
  if (isFilled) {
    return (
      <Button className="w-full" size="lg" disabled>
        Listing Filled
      </Button>
    );
  }

  if (hasRequested) {
    return (
      <Button className="w-full" size="lg" disabled>
        Interest Sent
      </Button>
    );
  }

  return <ExpressInterestDialog listingId={listingId} />;
}
