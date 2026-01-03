`use client`;

import { Home, BottleWine, Settings, Grape, CalendarFold, User, Refrigerator, MapPin, Earth, Flag, Barrel } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LogoutButton } from "@/components/sidebar/LogoutButton";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const menuItems = {
  "Wines": [
    { title: "Bottles", url: "/bottles", icon: BottleWine },
    { title: "Wines", url: "/wines", icon: Barrel },
    { title: "Vintages", url: "/vintages", icon: CalendarFold },
    { title: "Grapes", url: "/grapes", icon: Grape },
    { title: "Winemakers", url: "/winemakers", icon: User },
  ],
  "Storage": [
    { title: "Storages", url: "/storages", icon: Refrigerator },
    { title: "Locations", url: "/locations", icon: MapPin },
  ],
  "Geography": [
    { title: "Regions", url: "/regions", icon: Flag },
    { title: "Countries", url: "/countries", icon: Earth },
  ],
  "Settings": [
    { title: "Users", url: "/users", icon: User },
    { title: "Application Settings", url: "/settings", icon: Settings },
  ]
}
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader><a href="/">CellarBoss</a></SidebarHeader>
      <SidebarContent>
        {Object.entries(menuItems).map(([section, items]) => (
          <SidebarGroup key={section}>
            <SidebarGroupLabel>{section}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <UserDisplay />
    </Sidebar>
  )
}

export async function UserDisplay() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const user = session?.user.username;
  if (!user) return null;
  return (
    <SidebarFooter>
      Hello, { user}
      <LogoutButton />
    </SidebarFooter>
  )
}
    