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
        title: "Subsidies op sportlidmaatschappen",
        content:
            "Regelmatig sporten draagt sterk bij aan een betere lichamelijke en mentale gezondheid. Toch is het voor veel mensen financieel niet haalbaar om lid te worden van een sportclub of sportschool. Door sportlidmaatschappen landelijk goedkoper te maken, bijvoorbeeld via subsidies of belastingvoordelen, kan de overheid sport voor iedereen toegankelijk maken. Denk aan gerichte steun voor huishoudens met een laag inkomen, jongeren of mensen met een chronische aandoening. Investeren in sport als preventieve maatregel helpt om overgewicht, diabetes type 2, hart- en vaatziekten en psychische klachten te voorkomen, en verlaagt op termijn de druk op de zorg.",
    },
    {
        id: "3",
        title: "Alcohol preventie",
        content:
            "Alcoholgebruik brengt grote gezondheidsrisico's met zich mee, zoals leverschade, verslaving, psychische problemen en een verhoogde kans op kanker. Daarom is het belangrijk om op landelijk niveau maatregelen te nemen die alcoholgebruik ontmoedigen. Voorbeelden hiervan zijn het verhogen van de accijnzen op alcohol, het beperken van alcoholreclame, duidelijke waarschuwingen op verpakkingen én het verhogen van de minimumleeftijd voor alcohol van 18 naar 21 jaar. Vooral jongeren zijn gevoelig voor de schadelijke effecten van alcohol; hoe later zij beginnen met drinken, hoe kleiner het risico op latere problemen. Met een stevige preventieve aanpak wordt de volksgezondheid versterkt en worden toekomstige zorgkosten beperkt.",
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
        title: "Voorlichting op scholen",
        content:
            "Om mentale problemen in een vroeg stadium te voorkomen, is het belangrijk dat jongeren leren hoe ze met emoties, stress en druk om kunnen gaan. De overheid maakt mentale gezondheid daarom een vast onderdeel van het lesprogramma in het basis- en voortgezet onderwijs. Scholen ontvangen erkend lesmateriaal en docenten worden getraind om mentale gezondheid bespreekbaar te maken in de klas. Door deze structurele aandacht bouwen jongeren vanaf jonge leeftijd aan veerkracht en zelfinzicht.",
    },
    {
        id: "2",
        title: "Meldplicht op scholen",
        content:
            "Mentale problemen onder jongeren blijven vaak onzichtbaar, terwijl scholen juist een centrale rol spelen in het dagelijks leven van kinderen en jongeren. Daarom wordt er een landelijke meldplicht ingevoerd waarbij scholen verplicht worden om serieuze signalen van psychische klachten, zoals langdurige somberheid, terugtrekgedrag of extreme onrust, te bespreken binnen het interne zorgteam of door te verwijzen naar passende hulp. Zo zorgt de overheid ervoor dat jongeren sneller gezien en geholpen worden, voordat klachten verergeren.",
    },
    {
        id: "3",
        title: "Aandacht op de werkvloer",
        content:
            "Mentaal verzuim op het werk neemt toe en steeds meer mensen raken overbelast door stress, prestatiedruk of gebrek aan ondersteuning. De werkvloer is een belangrijke plek om mentale gezondheid te versterken. Door werkgevers wettelijk te verplichten om aandacht te besteden aan mentale gezondheid binnen het arbobeleid, kan er sneller worden ingegrepen bij signalen van overbelasting. De overheid zorgt dat vertrouwenspersonen, coaching en trainingen in stresspreventie standaard worden opgenomen in de aanpak van werkgerelateerde gezondheid.",
    },
    {
        id: "4",
        title: "Mentale zorg in het basispakket",
        content:
            "Voor veel mensen is de drempel naar psychische hulp nog te hoog, vooral vanwege kosten. Hierdoor blijven klachten vaak te lang onbehandeld en groeien ze uit tot grotere problemen. Door laagdrempelige mentale hulp volledig op te nemen in het basispakket van de zorgverzekering, wordt hulp eerder en breder toegankelijk. De overheid maakt het mogelijk dat gesprekken met psychologen en andere vormen van lichte begeleiding bij beginnende klachten niet langer voor eigen rekening komen, zodat iedereen tijdig hulp durft en kan zoeken.",
    },
];


const Landelijk3s = [
    {
        id: "1",
        title: "Prestatiegerichte subsidie voor collegegeld",
        content:
            "Om medische studies voor een bredere groep studenten bereikbaar te maken, stelt de overheid een subsidie beschikbaar waarmee het collegegeld vanaf de start van de opleiding wordt verlaagd. Alle studenten ontvangen dit gelijke startbedrag, zodat financiële achtergrond geen belemmering vormt om aan een medische opleiding te beginnen. Tegelijkertijd stimuleert de regeling verantwoordelijkheid en inzet: de hoogte van de subsidie wordt gedurende de studie aangepast op basis van studieresultaten. Als de voortgang structureel achterblijft, wordt de subsidie geleidelijk afgebouwd of volledig stopgezet. Op deze manier wordt instroom eerlijker verdeeld en studie-uitval actief tegengegaan, zonder dat het open karakter van de opleiding verloren gaat.",
    },
    {
        id: "2",
        title: "Meer opleidingsplekken voor medische studies",
        content:
            "Veel studenten die zich aanmelden voor medische studies worden uitgeloot, terwijl ze voldoen aan de gestelde eisen en de motivatie hebben om een bijdrage te leveren aan de zorg. Tegelijkertijd kampt de sector met een toenemend tekort aan professionals, wat de druk op het zorgstelsel vergroot. Door te investeren in de uitbreiding van opleidingscapaciteit bij universiteiten en hogescholen, maakt de overheid het mogelijk dat meer studenten worden toegelaten. Het afbouwen van numerus fixus-beperkingen en het beter afstemmen van instroom op de arbeidsmarktbehoefte zorgen ervoor dat studies niet alleen toegankelijker worden, maar ook bijdragen aan de toekomstbestendigheid van de zorg.",
    },
    {
        id: "3",
        title: "Eerlijke en toegankelijke selectieprocedures",
        content:
            "De huidige toelatingsprocedures voor medische studies zijn vaak opgebouwd uit elementen zoals motivatiebrieven of selectiedagen, die sterk beïnvloed worden door iemands achtergrond, voorbereiding of netwerk. Studenten uit kansrijke milieus hebben hierdoor een voorsprong, terwijl anderen met evenveel potentie onterecht achterblijven. Om dit te doorbreken, stelt de overheid richtlijnen op die onderwijsinstellingen verplichten om gebruik te maken van objectieve, inhoudelijke en transparante toetsvormen. Hiermee wordt de toegang tot medische opleidingen gelijker verdeeld en gebaseerd op kwaliteit en geschiktheid, in plaats van sociale positie of betaalde voorbereiding.",
    },
    {
        id: "4",
        title: "Landelijke voortrajecten voor bredere instroom",
        content:
            "Niet iedere student heeft direct toegang tot een medische studie, bijvoorbeeld vanwege een andere vooropleiding of gemiste toelatingseisen. Toch beschikt deze groep vaak over de motivatie en het leervermogen om in de zorgsector aan de slag te gaan. Door in samenwerking met mbo’s, vo-scholen en hogescholen landelijke voortrajecten aan te bieden, vergroot de overheid de instroommogelijkheden naar medische opleidingen. Deze trajecten bieden inhoudelijke bijspijkering, studiekeuzehulp en loopbaanoriëntatie, en vormen zo een brug tussen uiteenlopende achtergronden en het hoger medisch onderwijs. Hierdoor krijgen meer mensen de kans om hun talent in te zetten voor de gezondheidszorg.",
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
            <h2 className="text-xl font-bold text-red-700">Wat gaan we doen?</h2>
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
            <h2 className="text-xl font-bold text-red-700">Wat gaan we doen?</h2>
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
        title: "Inzetten op het Volwassenenfonds",
        content:
            "Voor mensen met een laag inkomen zijn sportabonnementen vaak onbetaalbaar, terwijl juist zij veel baat hebben bij meer beweging. Door als gemeente actief gebruik te maken van het Volwassenenfonds Sport & Cultuur kunnen deze inwoners gratis sporten bij een vereniging of deelnemen aan georganiseerde activiteiten. Dit fonds is landelijk georganiseerd, maar werkt lokaal het best als de gemeente goed samenwerkt met huisartsen, wijkteams en sportaanbieders om inwoners door te verwijzen en te ondersteunen bij de aanvraag. Zo wordt sporten weer een realistische optie voor mensen die anders buitengesloten raken.",
    },
    {
        id: "2",
        title: "Gratis activiteiten in de wijk",
        content:
            "Voor ouderen en minima zijn drempels als vervoer, anonimiteit of een gebrek aan passend aanbod vaak redenen om niet te bewegen. Door in samenwerking met Sport.Gouda gratis en herkenbare beweegactiviteiten aan te bieden in de eigen wijk (zoals wandelgroepen, yoga, stoelyoga of lichte fitness) wordt de stap om mee te doen een stuk kleiner. Als deze activiteiten plaatsvinden op vaste momenten in laagdrempelige locaties zoals buurthuizen of ontmoetingscentra, ontstaat er niet alleen een gezonde routine, maar ook meer sociale verbinding in de wijk.",
    },
    {
        id: "3",
        title: "Groepslessen op vaste locaties",
        content:
            "Veel mensen hebben behoefte aan structuur, herkenning en veiligheid als het gaat om sport. Daarom is het waardevol als de gemeente op centrale plekken in de stad (denk aan wijkcentra, buurthuizen of sporthallen) wekelijks gratis groepslessen organiseert. Deze lessen kunnen gericht zijn op ouderen of mensen met weinig sportervaring, zoals seniorengym, valpreventie of laagdrempelige dans- of beweeggroepen. Door het aanbod openbaar, gratis en terugkerend te maken, wordt deelname vanzelfsprekender, ook voor mensen die normaal niet snel in beweging komen.",
    },
    {
        id: "4",
        title: "Sportvergoeding via minimaregeling",
        content:
            "Ook structurele deelname aan sport moet mogelijk zijn voor mensen met weinig financiële ruimte. De gemeente kan sport en beweging opnemen in de bestaande minimaregeling en een specifiek bedrag beschikbaar stellen waarmee inwoners bijvoorbeeld een sportabonnement, zwemles of deelname aan groepslessen kunnen bekostigen. Door dit automatisch toe te kennen aan mensen die al bekend zijn bij de gemeente, wordt onnodige administratie voorkomen en worden juist de inwoners bereikt die extra ondersteuning het hardst nodig hebben. Dit bevordert niet alleen de gezondheid, maar ook de zelfredzaamheid en het welzijn op de lange termijn.",
    },
];


const Stedelijk2s = [
    {
        id: "1",
        title: "Vertrouwenspersoon subsidiëren",
        content:
            "De gemeente Gouda moet scholen ondersteunen bij het aanstellen van een vaste vertrouwenspersoon, omdat veel leerlingen vandaag de dag kampen met mentale druk, sociale onzekerheid of problemen thuis. Niet elke school heeft de middelen om hier structureel een professional voor in te zetten. Door een gemeentelijke subsidieregeling op te zetten, maakt Gouda het mogelijk voor scholen om iemand aan te stellen die laagdrempelig beschikbaar is voor leerlingen. Dit voorkomt dat mentale klachten onopgemerkt blijven en zorgt ervoor dat jongeren tijdig hulp kunnen krijgen in een vertrouwde omgeving.",
    },
    {
        id: "2",
        title: "Gratis lesaanbod mentale gezondheid",
        content:
            "Mentale gezondheid verdient een vaste plek in het lesprogramma, net zoals vakken als biologie of burgerschap. Jongeren hebben praktische handvatten nodig om met stress, prestatiedruk en emotionele uitdagingen om te gaan. De gemeente Gouda kan dit mogelijk maken door één regionaal lesprogramma te laten ontwikkelen of in te kopen, in samenwerking met GGD of onderwijspartners. Door dit aanbod gratis beschikbaar te stellen aan scholen in Gouda, hoeven individuele scholen het wiel niet zelf uit te vinden én wordt de kwaliteit en consistentie gewaarborgd binnen het hele onderwijsveld.",
    },
    {
        id: "3",
        title: "Coördinator mentale gezondheid aanstellen",
        content:
            "Scholen hebben vaak wel de intentie om mentale gezondheid aan te pakken, maar missen capaciteit, expertise en structuur om dat goed te doen. Daarom is het van belang dat de gemeente Gouda een lokale coördinator aanstelt die zich specifiek richt op mentale gezondheid binnen het onderwijs. Deze persoon of dit team begeleidt scholen bij de invoering van het lesaanbod, regelt bijscholing voor docenten en fungeert als brug tussen scholen, jeugdzorg, GGD en welzijnsorganisaties. Zo zorgt Gouda voor samenhang en voorkomt het versnipperen van inspanningen.",
    },
    {
        id: "4",
        title: "Jongeren laten meedenken",
        content:
            "Jongeren weten zelf het beste wat hen bezighoudt en wat zij nodig hebben. Daarom is het essentieel dat de gemeente Gouda jongeren actief betrekt bij het opzetten van beleid rondom mentale gezondheid op school. Dit kan door leerlingenpanels op te richten, scholen te ondersteunen bij het houden van klasgesprekken of anonieme vragenlijsten uit te zetten. Op basis van deze input kan de gemeente beter inspelen op wat er écht speelt onder jongeren. Tegelijk wordt de kans vergroot dat jongeren de ondersteuning herkennen, vertrouwen en daadwerkelijk gebruiken.",
    },
];


const Stedelijk3s = [
    {
        id: "1",
        title: "Begeleiding bij Gezonde School",
        content:
            "Gouda moet scholen actief begeleiden bij het invoeren van de Gezonde School-aanpak omdat dit dé manier is om gezondheid structureel te verankeren binnen het onderwijs. Veel basisscholen willen wel aan de slag met gezonde voeding of beweging, maar weten niet waar ze moeten beginnen of missen de capaciteit. Door als gemeente samen te werken met de GGD om deze aanpak toegankelijk en uitvoerbaar te maken, kunnen scholen ondersteund worden met expertise, tijd en praktische hulpmiddelen. Gouda kan hiervoor een projectteam opzetten dat scholen adviseert, koppelt aan de juiste partijen en helpt bij het opstellen van een plan op maat. Zo zorgt de gemeente ervoor dat gezondheid niet afhankelijk is van toevallige inzet of subsidies, maar een vast onderdeel wordt van het schoolbeleid.",
    },
    {
        id: "2",
        title: "Lesprogramma met GGD ontwikkelen",
        content:
            "Gouda moet investeren in een gezamenlijk lesprogramma over gezonde voeding en beweging, omdat kinderen beter leren wanneer ze op jonge leeftijd actief en herhaaldelijk met deze thema's bezig zijn. Momenteel verschilt het sterk per school wat er wel of niet wordt aangeboden, en dat zorgt voor ongelijkheid. Door samen met de GGD een regionaal lespakket te ontwikkelen dat vanaf groep 5 op alle scholen kan worden gebruikt, creëert Gouda een basisaanpak waar alle leerlingen toegang toe hebben. De gemeente kan dit programma gratis beschikbaar stellen en zorgen voor scholing van leraren, zodat het ook goed en eenduidig wordt uitgevoerd. Dit bevordert niet alleen de kennis van kinderen, maar zorgt ook voor gedragsverandering op de lange termijn.",
    },
    {
        id: "3",
        title: "GGD vast op school",
        content:
            "Gouda moet regelen dat de GGD structureel op scholen aanwezig is, omdat gezondheid dan zichtbaar en vertrouwd wordt in het dagelijks leven van leerlingen. Gastlessen of eenmalige projecten zijn waardevol, maar hebben pas echt effect als ze regelmatig terugkomen en herkenbaar worden voor kinderen. Door bijvoorbeeld elk kwartaal een GGD-medewerker op school te laten komen voor een interactieve les, een workshop of een themadag, leren kinderen op een speelse en laagdrempelige manier over gezonde keuzes. De gemeente kan dit organiseren door met de GGD vaste schoolbezoeken af te spreken en dit onderdeel te maken van het gemeentelijk preventiebeleid. Zo wordt gezondheid niet iets vrijblijvends, maar iets dat letterlijk de klas binnenkomt.",
    },
    {
        id: "4",
        title: "Gezondheidsdata delen met scholen",
        content:
            "Gouda moet scholen actief betrekken bij het gebruik van gezondheidsgegevens, omdat scholen daarmee beter zicht krijgen op wat hun leerlingen nodig hebben. Zonder duidelijke informatie is het lastig om beleid te maken of te evalueren. De GGD verzamelt al gegevens over o.a. BMI, beweging en voeding, en de gemeente kan ervoor zorgen dat deze informatie op schoolniveau wordt teruggekoppeld in begrijpelijke rapportages. Daarbij kan Gouda de GGD inzetten om scholen te begeleiden bij het analyseren van de data en bij het kiezen van passende acties. Denk aan extra voorlichting, het aanpassen van het beweegaanbod of gesprekken met ouders. Door gezondheid inzichtelijk te maken, wordt het niet alleen een gevoel van urgentie, maar ook een concrete basis voor gericht en effectief schoolbeleid.",
    },
];




// !!!!LANDELIJK1!!!
export function AccordionStedelijk1() {
    return (
        
            <Card className="ml-auto w-full lg:w-2/5 mr-5 pr-5 pt-5 mb-5 pb-5 sticky top-[4rem] self-start"> 
            {/* </Card><Card className="ml-auto w-100 mr-5 pr-5 mt-5 pt-5 mb-5 pb-5">  */}
            <Accordion type="single" collapsible className="w-full ml-3 " >
            <h2 className="text-xl font-bold text-red-700   ">Wat gaan we doen?</h2>
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
            <h2 className="text-xl font-bold text-red-700   ">Wat gaan we doen?</h2>
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
            <h2 className="text-xl font-bold text-red-700   ">Wat gaan we doen?</h2>
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