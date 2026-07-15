import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type ListingSkeletonProps = {
  count?: number;
};

export default function ListingSkeleton({ count = 6 }: ListingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="p-0">
            <Skeleton className="aspect-16/10 w-full rounded-none" />
          </CardHeader>

          <CardContent className="space-y-4 p-5">
            <Skeleton className="h-6 w-2/3" />

            <Skeleton className="h-4 w-1/2" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-4 w-4/5" />

            <Skeleton className="h-8 w-1/3" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
