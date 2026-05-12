export type ProjectSummaryItem = {
  term: string;
  description: string;
};

export const bridgeProject = {
  eyebrow: "Pågående projekt",
  title: "Information om Nämdö Böte brygga",
  description:
    "Föreningen arbetar med att ta fram en teknisk lösning och finansiering för renovering av Nämdö Böte trafikbrygga.",
  image: {
    src: "/images/NB W-brygga 2.JPG",
    alt: "Vy från Nämdö Böte brygga över vattnet.",
  },
  paragraphs: [
    "Föreningen förvaltar vägarna med underhåll, plogning, snöröjning m.m. samt har ansvaret för bryggorna. Historiskt har det varit svårt att nå ut med information om föreningens aktiviteter och möten. Adresser till fastighetsägare har ändrats och inga e-postadresser har funnits tillgängliga, tills nu.",
    "Nämdö Böte trafikbrygga är nu i behov av renovering. På årsmötet 2024 beslöts att en projektgrupp skulle startas för att ta fram en teknisk lösning och finna finansiering. En statusrapport redovisades på senaste årsmötet i september 2025, se bilaga. Då en renovering är kostsam, runt 3-4 MSEK, måste finansiering dels komma från externa bidragsgivare och dels från berörda medlemmar.",
    "Lantmäteriet har nycklat ut andelstal per fastighet som är knuten till Nämdö Böte trafikbrygga, i likhet med Östanviks brygga. De tyngsta bidragsgivarna som identifierats är EU/Leader Stockholmsbygd samt Trafikverket. Det krävs en hel del underlag för att ges möjlighet till bidrag, vilket projektgruppen arbetar med.",
    "För att få extern finansiering krävs underliggande behov. Projektgruppen har därför frågat och erhållit supportskrivelser från Trafikantföreningen, Visit Stockholm, Nämdö Green Archipelago och Nämdö Hembygdsförening. Dessa har poängterat vikten av att Nämdö Böte brygga görs tillgänglig och säker även i framtiden.",
    "Skärgårdsstiftelsen, som har sex andelar i Nämdö trafikbrygga, har trots begäran sedan 28 april 2025 inte inkommit med svar. Med den uppmärksamhet som funnits i pressen om Nämdö nationalpark, Stockholm Archipelago Trail m.m. anser vi att Nämdö Böte trafikbrygga utgör en viktig länk i Nämdöskärgårdens tillgänglighet.",
    "Projektarbetet har fortsatt efter sommaren. Detaljerad anbudsinfordran med förslagsritning har sänts till åtta tänkbara entreprenörer. Anbud förväntas utvärderas under november 2025.",
  ],
  summary: [
    { term: "Brygga", description: "Nämdö Böte trafikbrygga" },
    { term: "Beslut", description: "Årsmötet 2024" },
    { term: "Uppskattad kostnad", description: "3-4 MSEK" },
    { term: "Finansiering", description: "Bidrag och berörda medlemmar" },
    { term: "Nästa steg", description: "Utvärdering av anbud under november 2025" },
  ] satisfies ProjectSummaryItem[],
};
