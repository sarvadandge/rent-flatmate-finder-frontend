"use client";

import Link from "next/link";

import { ROUTES } from "@/constants/routes";

export default function AppLogo() {
  return (
    <Link href={ROUTES.DASHBOARD} className="flex items-center gap-3 px-2 py-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
        RF
      </div>

      <div className="flex flex-col">
        <span className="font-semibold leading-none">Rent & Flatmate</span>

        <span className="text-xs text-muted-foreground">Finder</span>
      </div>
    </Link>
  );
}
