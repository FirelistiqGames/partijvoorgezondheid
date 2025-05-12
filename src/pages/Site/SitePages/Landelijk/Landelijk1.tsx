import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarApp } from "@/pages/layout/SidebarApp";

import { Landelijk1Inhoud } from "../SiteInhoud/Landelijk/Landelijk1Inhoud";
import { Landelijk1Header } from "../../Headers/Landelijk/Landelijk1Header";
import { Helmet } from "react-helmet";
import { Footer } from "@/pages/layout/footer";


export function PreventieveGezondheidszorg(){
    return(
      <>
      <Helmet>
      <title>PvG - Preventieve Gezondheidszorg</title>
      <link rel="icon" type="ico" href="/logo.ico"/>
    </Helmet>
      <SidebarProvider>
        <SidebarApp />
        <SidebarInset>
          <Landelijk1Header />
          <Landelijk1Inhoud />
          <Footer/>
        </SidebarInset>
      </SidebarProvider>
      </>
    
      
    )
}