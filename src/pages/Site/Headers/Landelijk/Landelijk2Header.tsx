import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumbs } from "@/pages/layout/Breadcrumbs"
import { Outlet } from "react-router-dom"


export function Landelijk2Header() {
  return (
    // <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
    <header className="fixed top-0 w-full z-50 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12  shrink-0 items-center gap-2 border-b bg-background transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumbs/>
        <Outlet/>
      </div>
    </header>
  )
}
