import { SearchX } from "lucide-react";

type ListingEmptyProps = {
  title?: string;
  description?: string;
};

export default function ListingEmpty({
  title = "No listings found",
  description = "Try changing your filters or check back later.",
}: ListingEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
      <SearchX className="mb-4 h-12 w-12 text-muted-foreground" />

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 max-w-sm text-muted-foreground">{description}</p>
    </div>
  );
}
