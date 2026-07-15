"use client";

import { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import AppNavbar from "@/components/layout/app-navbar";
import AppSidebar from "@/components/layout/app-sidebar";

type DashboardShellProps = {
  children: ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />

      <SidebarInset>
        <AppNavbar />

        <main className="flex-1 overflow-y-auto bg-muted/30 px-8 py-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
