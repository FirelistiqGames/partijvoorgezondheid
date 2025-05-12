import { AccordionLandelijk1 } from "@/pages/layout/Accordion";


export function Landelijk1Inhoud(){
    return(
        <>
        <div className="flex flex-col lg:flex-row gap-8 items-start px-6 mt-15">
        <div className="lg:w-3/5 ">
        <h1 className="text-xl text-red-700 font-bold">Preventieve gezondheidszorg</h1>
        </div>
        <AccordionLandelijk1 />
        </div>
        </>
        
        
    )
}