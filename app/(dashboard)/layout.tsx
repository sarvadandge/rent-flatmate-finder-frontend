"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import LoadingScreen from "@/components/common/loading-screen";
import DashboardShell from "@/components/layout/dashboard-shell";

import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/auth.store";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.replace(ROUTES.LOGIN);
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <DashboardShell>{children}</DashboardShell>;
}
