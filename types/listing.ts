export interface ListingImage {
  id: string;
  imageUrl: string;
  publicId: string;
  listingId: string;
  createdAt: string;
}

export interface ListingOwner {
  id: string;
  name: string;
  email: string;
}

export interface ListingCompatibility {
  score: number;
  explanation: string;
  generatedBy: "AI" | "RULE";
}

export interface Listing {
  id: string;

  title: string;
  description: string;

  location: string;

  rent: number;

  availableFrom: string;

  roomType: string;

  furnishingStatus: string;

  isFilled: boolean;

  ownerId: string;

  createdAt: string;
  updatedAt: string;

  images: ListingImage[];

  owner: ListingOwner;

  compatibility: ListingCompatibility | null;
}

export interface Pagination {
  page: number;

  limit: number;

  total: number;

  totalPages: number;

  hasNextPage: boolean;

  hasPreviousPage: boolean;

  nextPage: number | null;

  previousPage: number | null;
}

export interface BrowseListingsResponse {
  listings: Listing[];

  pagination: Pagination;
}