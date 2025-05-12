import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";

const Landelijk1s = [
    {
        id: "1",
        title: "Accijns op fastfood",
        content:
            "Uitleg waarom accijns op fastfood",
    },
    {
        id: "2",
        title: "Sport lidmaatschappen goedkoper",
        content:
            "Uitleg",
    },
    {
        id: "3",
        title: "Alcohol preventie",
        content:
            "Uitleg",
    },
    {
        id: "4",
        title: "Vapen",
        content:
            "Uitleg",
    },
];


const Landelijk2s = [
    {
        id: "1",
        title: "1",
        content:
            "Uitleg ",
    },
    {
        id: "2",
        title: "2",
        content:
            "Uitleg",
    },
    {
        id: "3",
        title: "3",
        content:
            "Uitleg",
    },
    {
        id: "4",
        title: "4",
        content:
            "Uitleg",
    },
];


const Landelijk3s = [
    {
        id: "1",
        title: "1",
        content:
            "Uitleg",
    },
    {
        id: "2",
        title: "2",
        content:
            "Uitleg",
    },
    {
        id: "3",
        title: "3",
        content:
            "Uitleg",
    },
    {
        id: "4",
        title: "4",
        content:
            "Uitleg",
    },
];

// !!!!LANDELIJK1!!!
export function AccordionLandelijk1() {
    return (
        
            <Card className="ml-auto lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5"> 
            {/* </Card><Card className="ml-auto w-100 mr-5 pr-5 mt-5 pt-5 mb-5 pb-5">  */}
            <Accordion type="single" collapsible className="w-full ml-3 " >
            <h2 className="text-xl font-bold text-red-700   ">Hoe?</h2>
                {Landelijk1s.map((Landelijk1) => (
                    <AccordionItem value={Landelijk1.id} key={Landelijk1.id} className="py-2">
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                <span className="flex items-center gap-3">
                                    <span>{Landelijk1.title}</span>
                                </span>
                                <Plus
                                    size={16}
                                    strokeWidth={2}
                                    className="shrink-0 opacity-60 transition-transform duration-200"
                                    aria-hidden="true"
                                />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className=" text-muted-foreground">
                            {Landelijk1.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </Card>
    );
}


// !!!!LANDELIJK2!!!!
export function AccordionLandelijk2() {
    return (
        <Card className="ml-auto lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5">
            <Accordion type="single" collapsible className="w-full ml-3" >
            <h2 className="text-xl font-bold text-red-700">Hoe?</h2>
                {Landelijk2s.map((Landelijk2) => (
                    <AccordionItem value={Landelijk2.id} key={Landelijk2.id} className="py-2">
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                <span className="flex items-center gap-3">
                                    <span>{Landelijk2.title}</span>
                                </span>
                                <Plus
                                    size={16}
                                    strokeWidth={2}
                                    className="shrink-0 opacity-60 transition-transform duration-200"
                                    aria-hidden="true"
                                />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className=" text-muted-foreground">
                            {Landelijk2.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </Card>
    );
}



// !!!!LANDELIJK3!!!!
export function AccordionLandelijk3() {
    return (
        <Card className="ml-auto lg:w-2/5 mr-5 pr-5  pt-5 mb-5 pb-5">
            <Accordion type="single" collapsible className="w-full ml-3" >
            <h2 className="text-xl font-bold text-red-700">Hoe?</h2>
                {Landelijk3s.map((Landelijk3) => (
                    <AccordionItem value={Landelijk3.id} key={Landelijk3.id} className="py-2">
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                <span className="flex items-center gap-3">
                                    <span>{Landelijk3.title}</span>
                                </span>
                                <Plus
                                    size={16}
                                    strokeWidth={2}
                                    className="shrink-0 opacity-60 transition-transform duration-200"
                                    aria-hidden="true"
                                />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className=" text-muted-foreground">
                            {Landelijk3.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </Card>
    );
}

