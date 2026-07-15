import { IndianRupee } from "lucide-react";

import { formatCurrency } from "@/lib/format";

type ListingPriceProps = {
  rent: number;
};

export default function ListingPrice({ rent }: ListingPriceProps) {
  return (
    <div className="flex items-center gap-1">
      <IndianRupee className="h-4 w-4 text-primary" />

      <span className="text-xl font-bold tracking-tight">
        {formatCurrency(rent)}
      </span>

      <span className="text-sm text-muted-foreground">/month</span>
    </div>
  );
}
