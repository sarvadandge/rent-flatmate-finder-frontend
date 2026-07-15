import api from "@/lib/api";

import { BrowseListingsResponse, Listing } from "@/types/listing";

const browseListings = async (params?: {
  page?: number;
  limit?: number;
  location?: string;
  minBudget?: number;
  maxBudget?: number;
}): Promise<BrowseListingsResponse> => {
  const response = await api.get("/listings", {
    params,
  });

  return response.data.data;
};

const getListingById = async (listingId: string): Promise<Listing> => {
  const response = await api.get(`/listings/${listingId}`);

  return response.data.data;
};

const createListing = async (data: FormData): Promise<Listing> => {
  const response = await api.post("/listings", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.data;
};

const updateListing = async (
  listingId: string,
  data: FormData,
): Promise<Listing> => {
  const response = await api.patch(`/listings/${listingId}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.data;
};

const deleteListing = async (listingId: string): Promise<void> => {
  await api.delete(`/listings/${listingId}`);
};

const markListingAsFilled = async (listingId: string): Promise<Listing> => {
  const response = await api.patch(`/listings/${listingId}/filled`);

  return response.data.data;
};

export const listingApi = {
  browseListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing,
  markListingAsFilled,
};
