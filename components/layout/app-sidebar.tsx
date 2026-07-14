"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { ownerNavigation, tenantNavigation } from "@/constants/navigation";
import AppLogo from "@/components/layout/app-logo";
import NavMain from "@/components/layout/nav-main";
import { useAuthStore } from "@/store/auth.store";

export default function AppSidebar() {
  const { user } = useAuthStore();

  const navigation =
    user?.role === "OWNER" ? ownerNavigation : tenantNavigation;

  return (
    <Sidebar>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navigation} />
      </SidebarContent>
    </Sidebar>
  );
}
