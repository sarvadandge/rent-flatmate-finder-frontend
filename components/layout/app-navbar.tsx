"use client";

import { usePathname } from "next/navigation";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import NavUser from "@/components/layout/nav-user";
import { ownerNavigation, tenantNavigation } from "@/constants/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function AppNavbar() {
  const pathname = usePathname();

  const { user } = useAuthStore();

  const navigation =
    user?.role === "OWNER" ? ownerNavigation : tenantNavigation;

  const currentPage = navigation.find((item) => item.href === pathname);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <Separator orientation="vertical" className="h-6" />

        <div>
          <h1 className="text-lg font-semibold">
            {currentPage?.title ?? "Dashboard"}
          </h1>

          <p className="text-sm text-muted-foreground">Welcome back 👋</p>
        </div>
      </div>

      <NavUser />
    </header>
  );
}
