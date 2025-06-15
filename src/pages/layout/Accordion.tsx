import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";

const Landelijk1s = [
    {
        id: "1",
        title: "Accijns op fastfood",
        content:
            "Een accijns op fastfood kan helpen om overgewicht en andere leefstijlgerelateerde ziekten zoals diabetes type 2 en hart- en vaatziekten te verminderen. Door ongezond voedsel duurder te maken, worden mensen gestimuleerd om gezondere keuzes te maken. Financiële prikkels zijn bewezen effectief in het veranderen van gedrag, net als bij tabak en alcohol. De opbrengsten van zo'n belasting kunnen bovendien worden ingezet voor gezondheidsbevorderende maatregelen, zoals het subsidiëren van groente en fruit of het organiseren van leefstijlprogramma's in kwetsbare wijken.",
    },
    {
        id: "2",
        title: "Sport lidmaatschappen goedkoper",
        content:
            "Regelmatig sporten draagt sterk bij aan een betere lichamelijke en mentale gezondheid. Toch is het voor veel mensen financieel niet haalbaar om lid te worden van een sportclub of sportschool. Door sportlidmaatschappen landelijk goedkoper te maken, bijvoorbeeld via subsidies of belastingvoordelen, kan de overheid sport voor iedereen toegankelijk maken. Denk aan gerichte steun voor huishoudens met een laag inkomen, jongeren of mensen met een chronische aandoening. Investeren in sport als preventieve maatregel helpt om overgewicht, diabetes type 2, hart- en vaatziekten en psychische klachten te voorkomen, en verlaagt op termijn de druk op de zorg.",
    },
    {
        id: "3",
        title: "Alcohol preventie",
        content:
            "Alcoholgebruik brengt grote gezondheidsrisico’s met zich mee, zoals leverschade, verslaving, psychische problemen en een verhoogde kans op kanker. Daarom is het belangrijk om op landelijk niveau maatregelen te nemen die alcoholgebruik ontmoedigen. Voorbeelden hiervan zijn het verhogen van de accijnzen op alcohol, het beperken van alcoholreclame, duidelijke waarschuwingen op verpakkingen én het verhogen van de minimumleeftijd voor alcohol van 18 naar 21 jaar. Vooral jongeren zijn gevoelig voor de schadelijke effecten van alcohol; hoe later zij beginnen met drinken, hoe kleiner het risico op latere problemen. Met een stevige preventieve aanpak wordt de volksgezondheid versterkt en worden toekomstige zorgkosten beperkt.",
    },
    {
        id: "4",
        title: "Vapen",
        content:
            "Vapen vormt een ernstig risico voor de volksgezondheid, vooral onder jongeren. Ondanks bestaande maatregelen zoals het verbod op smaakjes, neemt het gebruik van e-sigaretten onder tieners nog altijd toe. Vapes bevatten verslavende nicotine en schadelijke stoffen, en de lange termijngevolgen zijn nog onvoldoende bekend. Daarom is een veel strengere aanpak noodzakelijk. Naast accijnzen, neutrale verpakkingen en een totaal verbod op reclame, moeten er harde maatregelen komen tegen jongeren die vapen. Denk aan boetes voor minderjarigen die vapen in het openbaar en inbeslagname van vapes op schoolterreinen of stations. Ook moet de verkoop aan jongeren zwaarder bestraft worden, bijvoorbeeld met vergunningintrekking voor verkopers die zich niet aan de regels houden. Alleen met strikte handhaving en duidelijke consequenties kan het gebruik van vapes onder jongeren écht worden teruggedrongen.",
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
        
            <Card className="ml-auto w-full lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5 sticky top-[4rem] self-start"> 
            {/* </Card><Card className="ml-auto w-100 mr-5 pr-5 mt-5 pt-5 mb-5 pb-5">  */}
            <Accordion type="single" collapsible className="w-full ml-3 " >
            <h2 className="text-xl font-bold text-red-700   ">Wat gaan we doen?</h2>
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
        <Card className="ml-auto w-full lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5 sticky top-[4rem] self-start">
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
        <Card className="ml-auto w-full lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5 sticky top-[4rem] self-start">
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


const Stedelijk1s = [
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


const Stedelijk2s = [
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


const Stedelijk3s = [
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
export function AccordionStedelijk1() {
    return (
        
            <Card className="ml-auto w-full lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5 sticky top-[4rem] self-start"> 
            {/* </Card><Card className="ml-auto w-100 mr-5 pr-5 mt-5 pt-5 mb-5 pb-5">  */}
            <Accordion type="single" collapsible className="w-full ml-3 " >
            <h2 className="text-xl font-bold text-red-700   ">Hoe?</h2>
                {Stedelijk1s.map((Stedelijk1) => (
                    <AccordionItem value={Stedelijk1.id} key={Stedelijk1.id} className="py-2">
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                <span className="flex items-center gap-3">
                                    <span>{Stedelijk1.title}</span>
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
                            {Stedelijk1.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </Card>
    );
}


// !!!!LANDELIJK2!!!!
export function AccordionStedelijk2() {
    return (
        
            <Card className="ml-auto w-full lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5 sticky top-[4rem] self-start"> 
            {/* </Card><Card className="ml-auto w-100 mr-5 pr-5 mt-5 pt-5 mb-5 pb-5">  */}
            <Accordion type="single" collapsible className="w-full ml-3 " >
            <h2 className="text-xl font-bold text-red-700   ">Hoe?</h2>
                {Stedelijk2s.map((Stedelijk2) => (
                    <AccordionItem value={Stedelijk2.id} key={Stedelijk2.id} className="py-2">
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                <span className="flex items-center gap-3">
                                    <span>{Stedelijk2.title}</span>
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
                            {Stedelijk2.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </Card>
    );
}


// !!!!LANDELIJK3!!!!
export function AccordionStedelijk3() {
    return (
        
            <Card className="ml-auto w-full lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5 sticky top-[4rem] self-start"> 
            {/* </Card><Card className="ml-auto w-100 mr-5 pr-5 mt-5 pt-5 mb-5 pb-5">  */}
            <Accordion type="single" collapsible className="w-full ml-3 " >
            <h2 className="text-xl font-bold text-red-700   ">Hoe?</h2>
                {Stedelijk3s.map((Stedelijk3) => (
                    <AccordionItem value={Stedelijk3.id} key={Stedelijk3.id} className="py-2">
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                <span className="flex items-center gap-3">
                                    <span>{Stedelijk3.title}</span>
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
                            {Stedelijk3.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </Card>
    );
}