import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Footer } from "@/pages/layout/footer";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Helmet } from "react-helmet";
import { TermsofServiceInhoud } from "./SiteInhoud/TermsofServiceInhoud";
import { TermsofServiceHeader } from "../Headers/TermsofServiceHeader";


export function TermsofService(){
    return(
        <>
            <Helmet>
              <title>PvG - Terms of Service</title>
              <link rel="icon" type="ico" href="/logo2.ico"/>
            </Helmet>
            <SidebarProvider>
              <SidebarApp />
              <SidebarInset>
                <TermsofServiceHeader/>
                <TermsofServiceInhoud/>
                <Footer/>
              </SidebarInset>
            </SidebarProvider>
        
        
        
        </>
    )
}