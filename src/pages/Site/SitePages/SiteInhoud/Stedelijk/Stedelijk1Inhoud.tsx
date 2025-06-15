import { AccordionStedelijk1 } from "@/pages/layout/Accordion";


export function Stedelijk1Inhoud() {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-8 items-start px-6 ">
                <div className="lg:w-3/5 mt-15">
                    <h1 className="text-xl text-red-700 font-bold">Sportprogramma Ouderen en Lage Inkomens</h1>
                </div>
                <AccordionStedelijk1 />
            </div>
        </>

    )
}