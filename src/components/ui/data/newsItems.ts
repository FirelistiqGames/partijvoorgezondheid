// src/data/newsItems.ts

export interface NewsItem {
    title: string
    content: string
    image: string
    link: string
  }
  
  export const newsItems: NewsItem[] = [
    {
      title: "Nieuwe politieke partij 'Partij voor Gezondheid' gelanceerd in Gouda",
      content:
        "Gouda, 12 mei 2025 - Vandaag werd in Gouda officieel de nieuwe politieke partij Partij voor Gezondheid (PvG) gepresenteerd. De partij heeft als doelstelling de fysieke en mentale gezondheid van burgers aanzienlijk te verbeteren, zowel lokaal als landelijk.",
      image: `${import.meta.env.BASE_URL}tygobanner.png`,
      link: "/nieuws/opgericht",
    },
    /*
    {
      title: "Nieuwe politieke partij 'Partij voor Gezondheid' gelanceerd in Gouda",
      content:
        "Gouda, 12 mei 2025 - Vandaag werd in Gouda officieel de nieuwe politieke partij Partij voor Gezondheid (PvG) gepresenteerd. De partij heeft als doelstelling de fysieke en mentale gezondheid van burgers aanzienlijk te verbeteren, zowel lokaal als landelijk.",
      image: `${import.meta.env.BASE_URL}banner-light.png`,
      link: "/Nieuws/opgericht2222",
    },
    {
        title: "Partij voor Gezondheid Opgericht2222!",
        content:
          "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
        image: `${import.meta.env.BASE_URL}banner-light.png`,
        link: "/nieuws/opgericht3333",
      },
    {
        title: "Partij voor Gezondheid Opgericht2222!",
        content:
          "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
        image: `${import.meta.env.BASE_URL}banner-light.png`,
        link: "/nieuws/opgericht4444",
      },
    {
        title: "Partij voor Gezondheid Opgericht2222!",
        content:
          "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
        image: `${import.meta.env.BASE_URL}banner-light.png`,
        link: "#",
      }, */

  ]
  