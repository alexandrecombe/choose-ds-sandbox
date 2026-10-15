import { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarInset,
} from "@/components/ui/sidebar";
import ColorsPage from "./pages/colors";
import TypographyPage from "./pages/typography";
import IconsPage from "./pages/icons";
import ButtonPage from "./pages/button";
import BadgePage from "./pages/badge";
import AlertBannerPage from "./pages/alert-banner";

// ---------------------------------------------------------------------------
// Navigation structure — add new pages here
// ---------------------------------------------------------------------------

type Page =
  | "colors"
  | "typography"
  | "icons"
  | "button"
  | "badge"
  | "alert-banner";

interface NavItem {
  key: Page;
  label: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Fondations",
    items: [
      { key: "colors", label: "Colors" },
      { key: "typography", label: "Typography" },
      { key: "icons", label: "Icons" },
    ],
  },
  {
    title: "Composants",
    items: [
      { key: "button", label: "Button" },
      { key: "badge", label: "Badge" },
      { key: "alert-banner", label: "Alert banner" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Page map
// ---------------------------------------------------------------------------

const PAGES: Record<Page, React.FC> = {
  colors: ColorsPage,
  typography: TypographyPage,
  icons: IconsPage,
  button: ButtonPage,
  badge: BadgePage,
  "alert-banner": AlertBannerPage,
};

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

export default function App() {
  const [page, setPage] = useState<Page>("colors");
  const ActivePage = PAGES[page];

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="sticky top-0 h-svh">
        <SidebarHeader className="px-4 py-4">
          <span className="font-display text-sm font-semibold tracking-tight">
            Choose DS
          </span>
        </SidebarHeader>
        <SidebarContent>
          {NAV_SECTIONS.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.key}>
                      <SidebarMenuButton
                        isActive={page === item.key}
                        onClick={() => setPage(item.key)}
                      >
                        {item.label}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <ActivePage />
      </SidebarInset>
    </SidebarProvider>
  );
}
