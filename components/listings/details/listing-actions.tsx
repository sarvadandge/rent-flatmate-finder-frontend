"use client";

import { Button } from "@/components/ui/button";

type ListingActionsProps = {
  isFilled: boolean;
  onExpressInterest?: () => void;
};

export default function ListingActions({
  isFilled,
  onExpressInterest,
}: ListingActionsProps) {
  return (
    <Button
      className="w-full"
      size="lg"
      disabled={isFilled}
      onClick={onExpressInterest}
    >
      {isFilled ? "Listing Filled" : "Express Interest"}
    </Button>
  );
}
