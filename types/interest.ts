import { Listing } from "./listing";

export type InterestStatus = "PENDING" | "ACCEPTED" | "DECLINED";

export interface InterestRequest {
  id: string;

  tenantId: string;

  listingId: string;

  status: InterestStatus;

  createdAt: string;

  updatedAt: string;

  tenant: {
    id: string;

    preferredLocation: string;

    minBudget: number;

    maxBudget: number;

    moveInDate: string;

    user: {
      id: string;

      name: string;

      email: string;
    };
  };

  listing: Listing;

  compatibility: {
    id: string;

    score: number;

    explanation: string;

    generatedBy: string;
  } | null;
}
