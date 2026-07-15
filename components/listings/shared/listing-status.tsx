import { Badge } from "@/components/ui/badge";

type ListingStatusProps = {
  isFilled: boolean;
};

export default function ListingStatus({ isFilled }: ListingStatusProps) {
  return (
    <Badge
      className={
        isFilled
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-green-600 text-white hover:bg-green-700"
      }
    >
      {isFilled ? "Occupied" : "Available"}
    </Badge>
  );
}
