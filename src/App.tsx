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
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import { NAV_SECTIONS, type Page } from "./nav";
import { NavContext } from "./doc/nav-context";
import { ChooseLogo } from "./choose-logo";
import { ThemeProvider } from "./theme";
import { ThemeToggle } from "./theme-toggle";
import ColorsPage from "./pages/colors";
import TypographyPage from "./pages/typography";
import IconsPage from "./pages/icons";
import ButtonPage from "./pages/button";
import BadgePage from "./pages/badge";
import AlertBannerPage from "./pages/alert-banner";
import AvatarPage from "./pages/avatar";
import BreadcrumbDocPage from "./pages/breadcrumb";
import CardPage from "./pages/card";
import FramePage from "./pages/frame";
import InputPage from "./pages/input";
import ItemPage from "./pages/item";
import PaginationPage from "./pages/pagination";
import ButtonGroupPage from "./pages/button-group";
import AlertDialogPage from "./pages/alert-dialog";
import AttachmentPage from "./pages/attachment";
import CheckboxPage from "./pages/checkbox";
import ComboboxPage from "./pages/combobox";
import ContextMenuPage from "./pages/context-menu";
import DropdownMenuPage from "./pages/dropdown-menu";
import EmptyPage from "./pages/empty";
import HoverCardPage from "./pages/hover-card";
import FiltersPage from "./pages/filters";
import SelectPage from "./pages/select";
import SeparatorPage from "./pages/separator";
import SkeletonPage from "./pages/skeleton";
import TabsPage from "./pages/tabs";

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
  avatar: AvatarPage,
  breadcrumb: BreadcrumbDocPage,
  card: CardPage,
  frame: FramePage,
  input: InputPage,
  item: ItemPage,
  pagination: PaginationPage,
  "button-group": ButtonGroupPage,
  "alert-dialog": AlertDialogPage,
  attachment: AttachmentPage,
  checkbox: CheckboxPage,
  combobox: ComboboxPage,
  "context-menu": ContextMenuPage,
  "dropdown-menu": DropdownMenuPage,
  empty: EmptyPage,
  "hover-card": HoverCardPage,
  filters: FiltersPage,
  select: SelectPage,
  separator: SeparatorPage,
  skeleton: SkeletonPage,
  tabs: TabsPage,
};

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

export default function App() {
  const [page, setPage] = useState<Page>("colors");
  const ActivePage = PAGES[page];

  return (
    <ThemeProvider>
      <NavContext.Provider value={{ page, setPage }}>
        <SidebarProvider>
          <Sidebar collapsible="none" className="sticky top-0 h-svh">
            <SidebarHeader className="px-4 py-4">
              <ChooseLogo className="h-5 w-auto self-start text-foreground" />
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
            <SidebarFooter className="px-4 py-4">
              <ThemeToggle />
            </SidebarFooter>
          </Sidebar>

          <SidebarInset>
            <ActivePage />
          </SidebarInset>
        </SidebarProvider>
      </NavContext.Provider>
    </ThemeProvider>
  );
}
