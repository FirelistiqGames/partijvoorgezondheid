import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Landelijk2Inhoud } from "../SiteInhoud/Landelijk/Landelijk2Inhoud";
import { Landelijk2Header } from "../../Headers/Landelijk/Landelijk2Header";
import { Helmet } from "react-helmet";
import { Footer } from "@/pages/layout/footer";


export function MentaleGezondheid(){
    return(
      <>
      <Helmet>
      <title>PvG - Mentale Gezondheid </title>
      <link rel="icon" type="ico" href="/logo.ico"/>
    </Helmet>
        <SidebarProvider>
        <SidebarApp />
        <SidebarInset>
          <Landelijk2Header/>
          <Landelijk2Inhoud/>
          <Footer/>
        </SidebarInset>
      </SidebarProvider>
      </>
    )
}