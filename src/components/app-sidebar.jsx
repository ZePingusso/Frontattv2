"use client";

import {
  ChartBar,
  House,
  Newspaper,
  BookOpen,
  FileText,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { authClient } from "@/lib/auth-client";

const data = {
  navMain: [
    {
      title: "Início",
      url: "/dashboard",
      icon: House,
    },
    {
      title: "Artigos",
      url: "/artigos",
      icon: Newspaper,
    },
    {
      title: "Posts",
      url: "/post-admin",
      icon: FileText,
    },
    {
      title: "Categorias",
      url: "/categorias",
      icon: BookOpen,
    },
    {
      title: "Estatísticas",
      url: "/analytics",
      icon: ChartBar,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user
    ? {
      name: session.user.name ?? "Usuário",
      email: session.user.email ?? "",
      avatar:
        session.user.image ??
        `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
          session.user.name ?? "User"
        )}`,
    }
    : null;

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="/dashboard">
                <BookOpen className="size-5!" />
                <span className="text-base font-semibold">
                  BlogMens
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        {!isPending && user && <NavUser user={user} />}
      </SidebarFooter>
    </Sidebar>
  );
}
