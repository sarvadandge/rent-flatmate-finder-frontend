import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DetailsSkeleton() {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Gallery */}
      <div className="space-y-4 lg:col-span-3">
        <Skeleton className="aspect-[16/10] w-full rounded-xl" />

        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="aspect-square rounded-lg" />
          ))}
        </div>
      </div>

      {/* Information */}
      <div className="space-y-6 lg:col-span-2">
        <Skeleton className="h-8 w-3/4" />

        <Skeleton className="h-6 w-1/3" />

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>

          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
