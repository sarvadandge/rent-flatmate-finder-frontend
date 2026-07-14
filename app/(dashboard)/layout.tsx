"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import LoadingScreen from "@/components/common/loading-screen";
import { useAuthStore } from "@/store/auth.store";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { user, isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    console.log(user)
    if (isLoading) return;

    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (user?.role === "OWNER" && pathname.startsWith("/tenant")) {
      router.replace("/owner");
      return;
    }

    if (user?.role === "TENANT" && pathname.startsWith("/owner")) {
      router.replace("/tenant");
      return;
    }
  }, [isAuthenticated, isLoading, pathname, router, user]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <main className="min-h-screen bg-white">{children}</main>;
}
