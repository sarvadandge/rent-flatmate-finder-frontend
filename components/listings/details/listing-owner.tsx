import { Mail, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Listing } from "@/types/listing";

type ListingOwnerProps = {
  listing: Listing;
};

export default function ListingOwner({ listing }: ListingOwnerProps) {
  const initials = listing.owner.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Owner</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />

            <span className="font-medium">{listing.owner.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />

            <span className="text-sm text-muted-foreground">
              {listing.owner.email}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
