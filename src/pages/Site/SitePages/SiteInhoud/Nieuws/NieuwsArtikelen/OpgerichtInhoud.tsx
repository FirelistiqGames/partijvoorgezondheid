

export function OpgerichtInhoud() {
    return (
        <>
            <div className="mt-15">
                <div className="">

                    <img
                        src={`${import.meta.env.BASE_URL}tygobanner.png`}
                        alt="Banner for light mode"
                        className="w-full lg:w-2/3 mx-auto h-auto block dark:hidden border border-gray-300 dark:border-gray-600 rounded-sm"
                    />


                    <img
                        src={`${import.meta.env.BASE_URL}tygobanner.png`}
                        alt="Banner for dark mode"
                        className="w-full lg:w-2/3 mx-auto h-auto hidden dark:block border border-gray-300 dark:border-gray-600 rounded-sm"
                    />
                </div>

                <div className="w-5/6 lg:w-2/3 mx-auto ">
                    <p className="text-muted-foreground">PvG Nieuws &bull; 10:14 - 12-5-2025 </p>
                    <p className="text-muted-foreground">Door: Robbe Zeelenberg </p>
                    <h1 className="text-xl text-red-700 font-semibold">Nieuwe politieke partij 'Partij voor Gezondheid' gelanceerd in Gouda</h1>
                </div>
                <div className="w-full lg:w-4/6 border-t border-gray-300 dark:border-gray-700 my-6 mx-auto" />
                <div className="w-5/6 lg:w-3/5 mx-auto mb-5">

                    <p className="mb-2">
                        Gouda, 12 mei 2025 - Vandaag werd in Gouda officieel de nieuwe politieke partij Partij voor Gezondheid (PvG) gepresenteerd.
                        De partij heeft als doelstelling de fysieke en mentale gezondheid van burgers aanzienlijk te verbeteren, zowel lokaal als landelijk.
                        Oprichters benadrukken dat preventie en mentale welzijnsprogramma&apos;s centraal moeten staan in het overheidsbeleid. </p>
                    <h1 className="text-xl text-red-700 font-semibold mb-1 ">Preventieve gezondheidszorg centraal</h1>
                    <p className="mb-2">De Partij voor Gezondheid pleit landelijk voor meer investeringen in preventieve gezondheidszorg.
                        Volgens de PvG moet de overheid haar uitgaven verhogen om te voorkomen dat burgers ziek worden, wat uiteindelijk leidt tot een verbetering van de algehele volksgezondheid en een verlaging van de zorgkosten op lange termijn.
                        Daarnaast wil de partij ook landelijk meer aandacht voor mentale gezondheid.
                        “Het is tijd om mentale problemen net zo serieus te nemen als lichamelijke aandoeningen,” aldus partijvoorzitter Tygo van den Heuvel.
                        Een ander belangrijk landelijk punt is het verhogen van subsidies voor onderzoek gericht op medische kennis en oplossingen. </p>
                    <h1 className="text-xl text-red-700 font-semibold">Lokale initiatieven voor Gouda</h1>
                    <p className="mb-2">Ook op lokaal niveau heeft de partij duidelijke ambities.
                        De PvG wil in Gouda gratis sport- en beweegprogramma's aanbieden voor ouderen en inwoners met een laag inkomen.
                        Hiermee moet iedereen gelijke kansen krijgen op een gezonde levensstijl.
                        Daarnaast streeft de partij ernaar om scholen in Gouda te verplichten om mentale gezondheidstrainingen aan te bieden en ervoor te zorgen dat elke school beschikt over een goed opgeleide vertrouwenspersoon.
                        Tot slot wil de PvG dat lokale GGD&apos;s structureel gaan samenwerken met basisscholen om jonge kinderen al vroeg bewust te maken van het belang van gezonde voeding en beweging.
                        De komende maanden zal de Partij voor Gezondheid actief campagne voeren in Gouda en daarbuiten, met het doel bij de volgende gemeentelijke en landelijke verkiezingen zetels te behalen om haar ambitieuze gezondheidsagenda te verwezenlijken.
                    </p>

                </div>
            </div>
        </>
    )
}