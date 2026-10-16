import {
  Tabs as TabsBase,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsBase>) {
  return <TabsBase className={cn("font-sans", className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
