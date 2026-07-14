import {
  House,
  LayoutDashboard,
  Heart,
  MessageSquare,
  User,
} from "lucide-react";

import { ROUTES } from "./routes";

export const ownerNavigation = [
  {
    title: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "My Listings",
    href: ROUTES.LISTINGS,
    icon: House,
  },
  {
    title: "Interest Requests",
    href: ROUTES.INTERESTS,
    icon: Heart,
  },
  {
    title: "Chat",
    href: ROUTES.CHAT,
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: ROUTES.PROFILE,
    icon: User,
  },
];

export const tenantNavigation = [
  {
    title: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "Browse Listings",
    href: ROUTES.LISTINGS,
    icon: House,
  },
  {
    title: "My Interests",
    href: ROUTES.INTERESTS,
    icon: Heart,
  },
  {
    title: "Chat",
    href: ROUTES.CHAT,
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: ROUTES.PROFILE,
    icon: User,
  },
];