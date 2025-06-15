import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Footer } from "@/pages/layout/footer";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Helmet } from "react-helmet";
import { PrivacyBeleidHeader } from "../Headers/PrivacyBeleidHeader";
import { PrivacyBeleidInhoud } from "./SiteInhoud/PrivacyBeleidInhoud";


export function PrivacyBeleid(){
    return(
        <>
            <Helmet>
              <title>PvG - Privacy Policy</title>
              <link rel="icon" type="ico" href="/logo2.ico"/>
            </Helmet>
            <SidebarProvider>
              <SidebarApp />
              <SidebarInset>
                <PrivacyBeleidHeader/>
                <PrivacyBeleidInhoud/>
                <Footer/>
              </SidebarInset>
            </SidebarProvider>
        
        
        
        </>
    )
}