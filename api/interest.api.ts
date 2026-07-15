import api from "@/lib/api";

import { InterestRequest } from "@/types/interest";

async function createInterest(listingId: string): Promise<InterestRequest> {
  const response = await api.post(`/interest/${listingId}`);

  return response.data.data;
}

export const interestApi = {
  createInterest,
};
