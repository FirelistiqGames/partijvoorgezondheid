import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Stedelijk3Header } from "../../Headers/Stedelijk/Stedelijk3Header";
import { Stedelijk3Inhoud } from "../SiteInhoud/Stedelijk/Stedelijk3Inhoud";
import { Helmet } from "react-helmet";
import { Footer } from "@/pages/layout/footer";



export function Stedelijk3() {
    return (
        <>
            <Helmet>
                <title>PvG - Stedelijk3</title>
                <link rel="icon" type="ico" href="/logo.ico" />
            </Helmet>
            <SidebarProvider>
                <SidebarApp />
                <SidebarInset>
                    <Stedelijk3Header />
                    <Stedelijk3Inhoud />
                    <Footer/>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}