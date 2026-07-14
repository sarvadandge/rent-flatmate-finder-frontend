"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, UserCircle, ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/auth.store";

export default function NavUser() {
  const router = useRouter();

  const { user, logout } = useAuthStore();

  if (!user) {
    return null;
  }

  const initials = user.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = () => {
    logout();
    router.replace(ROUTES.LOGIN);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="flex items-center gap-3 rounded-lg border bg-background px-3 py-2 hover:bg-accent transition-colors">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>

            <div className="hidden text-left md:block">
              <p className="text-sm font-medium">{user.name}</p>

              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>

            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        }
      />

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem render={<Link href={ROUTES.PROFILE} />}>
          <UserCircle />
          Profile
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" onClick={handleLogout}>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}