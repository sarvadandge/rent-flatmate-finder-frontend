import { ReactNode } from "react";

import { CardFooter } from "@/components/ui/card";

type ListingCardFooterProps = {
  children: ReactNode;
};

export default function ListingCardFooter({
  children,
}: ListingCardFooterProps) {
  return (
    <CardFooter className="flex items-center justify-end gap-2 border-t p-4">
      {children}
    </CardFooter>
  );
}