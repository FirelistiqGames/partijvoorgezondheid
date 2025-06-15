import { AccordionLandelijk2 } from "@/pages/layout/Accordion";


export function Landelijk2Inhoud() {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-8 items-start px-6 ">
                <div className="lg:w-3/5 mt-15">
                    <h1 className="text-lg text-red-700 font-bold">In Nederland moet er meer aandacht naar de mentale gezondheid van de burger in Nederland.</h1>
                    <p>
                        Mentale gezondheid betekent dat iemand zich goed voelt, met uitdagingen in het leven kan omgaan en in staat is om mee te doen aan het dagelijks leven zoals werken, studeren, sociale contacten onderhouden en tot rust komen.
                        Het gaat over je emoties, gedachten en hoe je in je vel zit.
                        Iedereen ervaart weleens stress, somberheid of spanning, maar als deze klachten te lang aanhouden of het functioneren beïnvloeden, kan er sprake zijn van een psychisch probleem zoals angst, depressie of burn-out.
                        De Nederlandse overheid neemt mentale gezondheid steeds serieuzer en werkt aan een samenleving waarin psychische klachten eerder worden herkend en aangepakt.
                        Een belangrijk voorbeeld is de campagne “Hey, het is oké”, die mensen aanmoedigt om over hun mentale gezondheid te praten en om hulp te vragen als dat nodig is.
                        Ook in het onderwijs wordt mentale gezondheid versterkt, onder meer door weerbaarheidstrainingen en het ondersteunen van docenten bij het signaleren van problemen.
                        Op lokaal niveau zetten gemeenten zich in via wijkteams, jeugd- en jongerenwerk en buurtprojecten die sociale samenhang en welzijn bevorderen.
                        Voor volwassenen en werkenden stimuleert de overheid dat werkgevers aandacht besteden aan mentale gezondheid op de werkvloer, bijvoorbeeld door goede begeleiding bij werkdruk of stress.
                        Daarnaast werkt de overheid aan het verbeteren van de geestelijke gezondheidszorg (GGZ), onder andere door wachttijden te verkorten en hulp toegankelijker te maken.
                        De focus ligt steeds meer op preventie en vroegtijdige ondersteuning, zodat mensen niet pas hulp krijgen als de problemen ernstig zijn, maar al in een vroeg stadium geholpen worden.
                        Mentale gezondheid is daarmee niet alleen een zorgthema, maar een breed maatschappelijk onderwerp waarin samenwerking nodig is tussen zorg, onderwijs, werk en de omgeving waarin mensen leven.
                    </p>
                </div>
                <AccordionLandelijk2 />
            </div>
        </>
    )
}