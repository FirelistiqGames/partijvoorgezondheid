import { AccordionStedelijk2 } from "@/pages/layout/Accordion";


export function Stedelijk2Inhoud() {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-8 items-start px-6 ">
                <div className="lg:w-3/5 mt-15">
                    <h1 className="text-xl text-red-700 font-bold">Vertrouwenspersoon op School</h1>
                </div>
                <AccordionStedelijk2 />
            </div>
        </>
    )
}