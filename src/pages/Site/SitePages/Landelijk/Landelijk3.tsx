import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Landelijk3Header } from "../../Headers/Landelijk/Landelijk3Header";
import { Landelijk3Inhoud } from "../SiteInhoud/Landelijk/Landelijk3Inhoud";
import { Helmet } from "react-helmet";
import { Footer } from "@/pages/layout/footer";


export function SubsidiesMedischeStudies(){
    return(
      <>
      <Helmet>
      <title>PvG - Subsidies Medische Studies </title>
      <link rel="icon" type="ico" href="/logo.ico"/>
    </Helmet>
        <SidebarProvider>
        <SidebarApp />
        <SidebarInset>
          <Landelijk3Header />
          <Landelijk3Inhoud />
          <Footer/>
        </SidebarInset>
      </SidebarProvider>
      </>
    )
}