export type ProjectSummaryItem = {
  term: string;
  description: string;
};

export type ProjectContentSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export const bridgeProject = {
  eyebrow: "Aktuellt projekt",
  title: "Renovering av Nämdö Böte Trafikbrygga",
  description:
    "Statusrapport våren 2026 om arbetet med teknisk lösning, finansiering och förrättning för Nämdö Böte trafikbrygga.",
  image: {
    src: "/images/NB W-brygga 2.JPG",
    alt: "Vy från Nämdö Böte brygga över vattnet.",
  },
  sections: [
    {
      heading: "Bakgrund",
      paragraphs: [
        "Nordöstra Nämdö Samfällighetsförening förvaltar Nämdö Böte och Östanviks trafikbryggor samt vissa vägavsnitt. Nämdö Böte brygga byggdes i betong 1981. Den vilar i sin tur på en drygt 70 år gammal stenkista, som vittrat sönder i vissa delar. Betongplattan har därför börjat sjunka, om än sakta.",
        "Belastningen på bryggan har ökat genom åren. De bogtilläggande fartyg som Waxholmsbolaget använde på 80-talet hade cirka 50 tons deplacement. De flesta nuvarande stävtilläggande fartyg väger cirka 250 ton, vilket har ökat belastningen på bryggan. En renovering är därför nödvändig. Kostnaden är beräknad till cirka 3 MSEK.",
        "En sammanställning över projektets aktiviteter och kontaktytor mot entreprenörer, myndigheter, organisationer och föreningar finns i projektöversikten “Renovering av Nämdö Böte Trafikbrygga”, daterad 2026-04-20.",
      ],
    },
    {
      heading: "Projektgrupp",
      paragraphs: [
        "Vid årsmötet i Nordöstra Nämdö Samfällighetsförening 2024-08-31 beslutades att renovera Nämdö Böte trafikbrygga. En projektgrupp utsågs på årsmötet för att ta fram en teknisk lösning och finna finansiering för renoveringen. Projektgruppen består av fastighetsägare på Nämdö Böte som arbetar ideellt:",
      ],
      items: ["Benny Norling, projektledare", "Peter Kjellman", "Peter Lindström", "Jörgen Carlberg"],
    },
    {
      heading: "Teknisk lösning",
      paragraphs: [
        "På uppdrag av projektgruppen har konsultfirman ELU tagit fram en förslagsskiss för renoveringen. Konstruktionen är tänkt att förlänga bryggans livstid med minst 50 år. ELU har genomfört dykundersökningar på bryggan under hösten 2025.",
        "Förslaget baseras i huvudsak på att fyra kraftiga stålrör borras genom befintlig betongplatta och förankras i berggrunden. Betongplattan kommer att förstärkas och den underliggande stenkistan förankras ordentligt. Föreningen har lagt ut cirka 100 kSEK för ELU:s arbete.",
        "Projektgruppen har sammanställt ett detaljerat offertunderlag som distribuerades till tio olika bryggentreprenörer. Underlaget är synkroniserat med Region Stockholms krav på trafikbryggor, klass 3. Två företag har lämnat offert och projektgruppen har valt det bästa och billigaste alternativet. Priset är cirka 2,7 MSEK inklusive moms och omfattar en helentreprenad.",
        "Styrelsen har tecknat en avsiktsförklaring med entreprenören Sjöliv AB. Det innebär att föreningen ger uppdraget till Sjöliv AB under den aktuella tidsperioden, förutsatt att föreningen har den finansiering som krävs.",
        "Realistiskt kommer bryggan att kunna renoveras först under hösten 2027, men i bästa fall under hösten 2026. Det är inte tillåtet att utföra arbeten i vatten under sommartid.",
      ],
    },
    {
      heading: "Finansiering",
      paragraphs: [
        "Vid förrättningen av föreningen 1985 beslutade Lantmäteriet att 23 av föreningens cirka 90 fastigheter är anslutna till Nämdö Böte brygga och övriga till Östanviks brygga. Kostnaden för renovering av Nämdö Böte brygga ska därför täckas av de 23 berörda fastigheterna.",
        "Det är uteslutet att belasta de 23 berörda fastighetsägarna med hela kostnaden för renoveringen. Det har heller aldrig funnits någon avsättning till underhållsfond för bryggan. Projektgruppen har identifierat Region Stockholm, Trafikverket och EU Leader/Stockholmsbygd som potentiella bidragsgivare.",
        "Våren 2026 finns ingen garanti för att föreningen kan erhålla bidrag från dessa organisationer och myndigheter. Bidrag betalas dessutom ut i efterskott, vilket innebär ett utmanande kassaflöde för föreningen. En plan för kassaflödet har tagits fram och redovisats för styrelsen.",
      ],
      items: [
        "Region Stockholm anslår maximalt 2,5 MSEK per år till hela skärgårdsområdet för renovering av trafikbryggor. Maximalt anslag per brygga är 500 kSEK.",
        "Trafikverket kan anslå maximalt 40 procent av byggkostnaden. En förutsättning är dock att det finns en körväg fram till bryggan.",
        "EU Leader/Stockholmsbygd har fått omfattande underlag från projektgruppen. Leader Stockholmsbygd beslutade 2026-03-19 att bordlägga föreningens ansökan i väntan på lantmäteriförrättningen och tiden för eventuellt överklagande.",
        "Trots potentiella bidragsgivare krävs ytterligare cirka 800 kSEK som behöver bekostas av berörda fastighetsägare. Projektgruppen och styrelsen undersöker lösningar, exempelvis utdebiteringar och möjlighet till lån.",
      ],
    },
    {
      heading: "Förrättning av väg",
      paragraphs: [
        "För att få bidrag från Trafikverket krävs en körväg, eller en genomförd förrättning om att en sådan väg kan anläggas fram till Nämdö Böte brygga. På föreningens årsmöte 2025 beslutades att avsätta 150 kSEK för att genomföra en sådan förrättning.",
        "Trafikverket har olika vägklasser och förrättningen avser en grusväg av trafikklass låg med en bredd om 3 meter, alltså något bredare än dagens traktorväg.",
        "Förrättningen berör fastigheten Östanvik 1:67, som är naturreservat. Därför måste Länsstyrelsen besluta i ärendet innan Lantmäteriet kan genomföra en förrättning. Länsstyrelsen meddelade 2026-03-27 att beslut tagits och att inga hinder för en förrättning av väg föreligger. Skärgårdsstiftelsen, som förvaltar fastigheten, har inte några invändningar.",
      ],
    },
    {
      heading: "Stöd för renoveringen",
      paragraphs: [
        "Som stöd för renoveringen har projektgruppen varit i kontakt med flera organisationer och bett dem stötta projektet moraliskt. De har inkommit med skrivelser som betonar hur viktig bryggan är för norra Nämdö:",
      ],
      items: [
        "Skärgårdsstiftelsen",
        "Stockholm Archipelago Trail, Business Region Stockholm",
        "Nämdö Hembygdsförening",
        "Nämdö Green Archipelago",
        "Skärgårdens Trafikantförening",
      ],
    },
    {
      heading: "Nämdös regionala betydelse",
      paragraphs: [
        "Nämdö har klassats som en kärnö enligt Regional utvecklingsplan för Stockholmsregionen, RUFS 2050. Föreningen hoppas att det kan gynna arbetet med att finna extern finansiering. Region Stockholms statistik för 2025 visar att Nämdö Böte är väl använd för passagerartrafik.",
      ],
    },
  ] satisfies ProjectContentSection[],
  summary: [
    { term: "Projekt", description: "Renovering av Nämdö Böte trafikbrygga" },
    { term: "Statusrapport", description: "Våren 2026" },
    { term: "Beräknad kostnad", description: "Cirka 3 MSEK" },
    { term: "Vald entreprenör", description: "Sjöliv AB, förutsatt finansiering" },
    { term: "Möjlig tidplan", description: "Hösten 2027, i bästa fall hösten 2026" },
  ] satisfies ProjectSummaryItem[],
};
