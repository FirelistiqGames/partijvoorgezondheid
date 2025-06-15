import { AccordionLandelijk3 } from "@/pages/layout/Accordion";




export function Landelijk3Inhoud(){
    return(
        <>
        <div className="flex flex-col lg:flex-row gap-8 items-start px-6 ">
        <div className="lg:w-3/5 mt-15">
        <h1 className="text-lg text-red-700 font-bold">Subsidies medische studies</h1>
        </div>
        <AccordionLandelijk3/>
        </div>
        </>
    )
}