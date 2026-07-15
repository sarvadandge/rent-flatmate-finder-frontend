"use client";

import type { ReactElement } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ConfirmationDialogProps = {
  trigger: ReactElement;

  title: string;

  description: string;

  confirmLabel?: string;

  cancelLabel?: string;

  loading?: boolean;

  onConfirm: () => void | Promise<void>;
};

export default function ConfirmationDialog({
  trigger,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  loading = false,
  onConfirm,
}: ConfirmationDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={trigger} />

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>

          <AlertDialogAction disabled={loading} onClick={onConfirm}>
            {loading ? "Please wait..." : confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
