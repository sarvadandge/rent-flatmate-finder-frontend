"use client";

import { Button } from "@/components/ui/button";

import ConfirmationDialog from "@/components/common/dialogs/confirmation-dialog";

import { useCreateInterest } from "@/hooks/interests/use-create-interest";

type ExpressInterestDialogProps = {
  listingId: string;
};

export default function ExpressInterestDialog({
  listingId,
}: ExpressInterestDialogProps) {
  const mutation = useCreateInterest();

  return (
    <ConfirmationDialog
      title="Express Interest"
      description="This will send your interest request to the property owner."
      confirmLabel="Send Request"
      loading={mutation.isPending}
      onConfirm={() =>
        mutation.mutate(listingId)
      }
      trigger={
        <Button
          className="w-full"
          size="lg"
        >
          Express Interest
        </Button>
      }
    />
  );
}