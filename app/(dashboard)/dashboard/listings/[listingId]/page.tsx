import ListingDetailsView from "@/components/listings/details/listing-details-page";

type ListingDetailsPageProps = {
  params: Promise<{
    listingId: string;
  }>;
};

export default async function ListingDetailsPage({
  params,
}: ListingDetailsPageProps) {
  const { listingId } = await params;

  return <ListingDetailsView listingId={listingId} />;
}
