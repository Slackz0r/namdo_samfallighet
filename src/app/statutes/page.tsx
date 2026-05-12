import type { Metadata } from "next";
import SiteContainer from "@/components/site-container";

export const metadata: Metadata = {
  title: "Stadgar",
  description: "Stadgar för Nordöstra Nämdös samfällighetsförening.",
};

export default function StatutesPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <article aria-labelledby="stadgar-heading" className="py-10 md:py-16">
          <header className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-medium uppercase text-muted-foreground">
              Nordöstra Nämdös samfällighetsförening
            </p>

            <h1 id="stadgar-heading" className="text-4xl font-semibold leading-tight md:text-5xl">
              Stadgar
            </h1>

            <dl className="mt-6 grid gap-3 rounded-xl border border-border bg-surface p-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-medium text-muted-foreground">Sammanträdesdatum</dt>
                <dd>1985-11-07</dd>
              </div>

              <div>
                <dt className="font-medium text-muted-foreground">Organisationsnummer</dt>
                <dd>716418-9107</dd>
              </div>

              <div>
                <dt className="font-medium text-muted-foreground">Kommun</dt>
                <dd>Värmdö</dd>
              </div>
            </dl>

            <p className="mt-6 leading-7">
              Stadgar för samfällighetsförening, bildad enligt lagen (1973:1150) om förvaltning av
              samfälligheter. Lagens bestämmelser om förvaltningen skall gälla i den mån inte annat
              framgår av dessa stadgar.
            </p>
          </header>

          <div className="max-w-4xl space-y-10">
            <section aria-labelledby="firma-heading">
              <h2 id="firma-heading" className="text-2xl font-semibold">
                § 1 Firma
              </h2>
              <p className="mt-3 leading-7">
                Föreningens firma är Nordöstra Nämdös samfällighetsförening.
              </p>
            </section>

            <section aria-labelledby="samfalligheter-heading">
              <h2 id="samfalligheter-heading" className="text-2xl font-semibold">
                § 2 Samfälligheter
              </h2>
              <p className="mt-3 leading-7">
                Föreningen förvaltar anläggningssamfällighet avseende bryggor och vägar tillkommen
                genom anläggningsbeslut 1985-11-07, dnr AB6:6-83-3.
              </p>
            </section>

            <section aria-labelledby="forvaltning-heading">
              <h2 id="forvaltning-heading" className="text-2xl font-semibold">
                § 3 Grunderna för förvaltningen
              </h2>
              <p className="mt-3 leading-7">
                Samfälligheten skall förvaltas i enlighet med vad som vid bildandet bestämts om dess
                ändamål.
              </p>
            </section>

            <section aria-labelledby="medlem-heading">
              <h2 id="medlem-heading" className="text-2xl font-semibold">
                § 4 Medlem
              </h2>
              <p className="mt-3 leading-7">
                Medlem i föreningen är ägare till fastighet eller därmed jämställd egendom, som har
                del i samfällighet upptagen under § 2.
              </p>
            </section>

            <section aria-labelledby="styrelse-sate-heading">
              <h2 id="styrelse-sate-heading" className="text-2xl font-semibold">
                § 5 Styrelse – säte och sammansättning
              </h2>
              <p className="mt-3 leading-7">
                För föreningen skall finnas en styrelse med säte i Värmdö kommun.
              </p>
              <p className="mt-3 leading-7">
                Styrelsen skall bestå av 5 ledamöter och 2 suppleanter.
              </p>
            </section>

            <section aria-labelledby="styrelse-val-heading">
              <h2 id="styrelse-val-heading" className="text-2xl font-semibold">
                § 6 Styrelse – val
              </h2>
              <p className="mt-3 leading-7">Styrelsen väljs vid ordinarie föreningsstämma.</p>
              <p className="mt-3 leading-7">
                Mandattiden för ledamot är 2 år och för suppleant ett år.
              </p>
              <p className="mt-3 leading-7">
                Första gången val äger rum skall 2 ledamöter väljas på endast ett år.
              </p>
              <p className="mt-3 leading-7">
                Stämman utser ordförande bland styrelsens ledamöter. I övrigt konstituerar styrelsen
                sig själv.
              </p>
            </section>

            <section aria-labelledby="styrelse-kallelse-heading">
              <h2 id="styrelse-kallelse-heading" className="text-2xl font-semibold">
                § 7 Styrelse – kallelse till sammanträde och föredragningslista
              </h2>
              <p className="mt-3 leading-7">
                Kallelse till styrelsesammanträde, vilken skall innehålla uppgift om förekommande
                ärenden skall tillställas ledamöterna minst 14 dagar före sammanträdet.
                Suppleanterna skall inom samma tid tillställas underrättelse om sammanträdet och
                förekommande ärenden.
              </p>
              <p className="mt-3 leading-7">
                Ledamot, som är förhindrad att närvara, skall genast meddela detta till ordföranden,
                som har att omedelbart kalla suppleant i ledamotens ställe. Suppleant som ej
                tjänstgör i ledamots ställe har rätt att närvara vid sammanträdet men har ej
                rösträtt.
              </p>
            </section>

            <section aria-labelledby="styrelse-beslut-heading">
              <h2 id="styrelse-beslut-heading" className="text-2xl font-semibold">
                § 8 Styrelse – beslutförhet och protokoll
              </h2>
              <p className="mt-3 leading-7">
                Styrelsen är beslutför när kallelse skett i behörig ordning och minst halva antalet
                styrelseledamöter är närvarande. Utan hinder härav skall styrelsesammanträde anses
                behörigen utlyst om samtliga ordinarie ledamöter infunnit sig till sammanträdet.
              </p>
              <p className="mt-3 leading-7">
                Som styrelsens beslut gäller den mening om vilken de flesta röstande förenar sig.
                Vid lika röstetal avgörs val genom lottning. I andra frågor gäller den mening som
                biträdes av ordföranden.
              </p>
              <p className="mt-3 leading-7">
                Utan att ha angivits i kallelsen får ärende avgöras om minst två tredjedelar av
                styrelseledamöterna är närvarande och ense om beslutet.
              </p>
              <p className="mt-3 leading-7">
                Fråga får utan hinder av bestämmelserna i första stycket avgöras utan kallelse om
                samtliga ordinarie ledamöter är ense om beslutet.
              </p>
              <p className="mt-3 leading-7">
                Den som deltagit i avgörandet av ärende äger anföra reservation mot beslutet. Sådan
                reservation skall anmälas före sammanträdets slut.
              </p>
              <p className="mt-3 leading-7">
                Över ärenden i vilka styrelsen fattat beslut skall föras protokoll som upptar datum,
                deltagande ledamöter och suppleanter, kort beskrivning av ärendet, styrelsens beslut
                samt anförda reservationer. Protokollet skall justeras av ordföranden eller annan
                ledamot som vid förfall för ordföranden lett sammanträdet.
              </p>
            </section>

            <section aria-labelledby="styrelse-forvaltning-heading">
              <h2 id="styrelse-forvaltning-heading" className="text-2xl font-semibold">
                § 9 Styrelse – förvaltning
              </h2>
              <p className="mt-3 leading-7">Styrelsen skall:</p>
              <ol className="mt-3 list-decimal space-y-2 pl-6 leading-7">
                <li>förvalta samfälligheten och föreningens tillgångar,</li>
                <li>föra redovisning över föreningens räkenskaper,</li>
                <li>föra förteckning över delägande fastigheter, dessas andelstal och ägare,</li>
                <li>
                  årligen till ordinarie stämma avge förvaltningsberättelse över föreningens
                  verksamhet och ekonomi,
                </li>
                <li>
                  om förvaltningen omfattar flera samfälligheter eller annars är uppdelad på olika
                  verksamhetsgrenar och medlemmarnas andelar inte är lika stora i alla
                  verksamhetsgrenarna, föra särskild redovisning för varje sådan gren,
                </li>
                <li>
                  i övrigt fullgöra vad lagen föreskriver om styrelsens handhavande av föreningens
                  angelägenheter.
                </li>
              </ol>
            </section>

            <section aria-labelledby="revision-heading">
              <h2 id="revision-heading" className="text-2xl font-semibold">
                § 10 Revision
              </h2>
              <p className="mt-3 leading-7">
                För granskning av styrelsens förvaltning skall medlemmarna på ordinarie
                föreningsstämma utse 2 revisorer och 2 suppleanter.
              </p>
              <p className="mt-3 leading-7">
                Revisionsberättelse skall överlämnas till styrelsen senast tre veckor före ordinarie
                stämma.
              </p>
            </section>

            <section aria-labelledby="rakenskapsperiod-heading">
              <h2 id="rakenskapsperiod-heading" className="text-2xl font-semibold">
                § 11 Räkenskapsperiod
              </h2>
              <p className="mt-3 leading-7">
                Föreningens räkenskapsperiod omfattar tiden 1 maj–30 april.
              </p>
            </section>

            <section aria-labelledby="foreningsstamma-heading">
              <h2 id="foreningsstamma-heading" className="text-2xl font-semibold">
                § 12 Föreningsstämma
              </h2>
              <p className="mt-3 leading-7">
                Ordinarie stämma skall årligen hållas under juli månad på tid och plats som
                styrelsen bestämmer.
              </p>
              <p className="mt-3 leading-7">
                Styrelsen kan när den finner det erforderligt utlysa extra stämma.
              </p>
              <p className="mt-3 leading-7">
                Om stämma skall godkänna uttaxering skall styrelsen bereda medlemmarna tillfälle att
                från det kallelseåtgärd vidtagits ta del av debiteringslängd, utvisande det belopp
                som skall uttaxeras, vad som belöper på varje medlem och när betalning skall ske.
                Före ordinarie stämma skall dessutom förvaltningsberättelse och revisionsberättelse
                för den avslutade räkenskapsperioden samt utgifts- och inkomststat finnas
                tillgänglig för granskning under samma tid.
              </p>
            </section>

            <section aria-labelledby="kallelse-stamma-heading">
              <h2 id="kallelse-stamma-heading" className="text-2xl font-semibold">
                § 13 Kallelse till stämma
              </h2>
              <p className="mt-3 leading-7">
                Kallelse till stämma skall utfärdas av styrelsen och ske genom skriftligt meddelande
                som utsänds med posten.
              </p>
              <p className="mt-3 leading-7">
                Kallelseåtgärd skall vidtas senast 1 månad före sammanträdet.
              </p>
              <p className="mt-3 leading-7">
                I kallelsen skall anges vilka ärenden som skall förekomma på stämman och lämnas
                uppgift om plats där i § 12 angivna handlingar finns tillgängliga.
              </p>
              <p className="mt-3 leading-7">
                Andra meddelanden skall genom styrelsens försorg bringas till medlemmarnas kännedom
                genom skriftligt meddelande som utsänds med posten.
              </p>
            </section>

            <section aria-labelledby="motioner-heading">
              <h2 id="motioner-heading" className="text-2xl font-semibold">
                § 14 Motioner
              </h2>
              <p className="mt-3 leading-7">
                Medlem kan genom motion väcka förslag rörande föreningens verksamhet. Motion, som
                skall behandlas på ordinarie stämma, skall vara styrelsen tillhanda senast under maj
                månad.
              </p>
              <p className="mt-3 leading-7">
                Styrelsen skall bereda avgivna motioner och hålla dem tillgängliga för medlemmarna
                tillsammans med förvaltningsberättelsen.
              </p>
            </section>

            <section aria-labelledby="dagordning-heading">
              <h2 id="dagordning-heading" className="text-2xl font-semibold">
                § 15 Dagordning vid ordinarie stämma
              </h2>
              <p className="mt-3 leading-7">
                Vid ordinarie stämma skall följande ärenden behandlas:
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-6 leading-7">
                <li>val av ordförande för stämman</li>
                <li>val av sekreterare för stämman, normalt föreningens sekreterare</li>
                <li>val av två justeringsmän</li>
                <li>styrelsens och revisorernas berättelser</li>
                <li>ansvarsfrihet för styrelsen</li>
                <li>framställningar från styrelsen eller motioner från medlemmarna</li>
                <li>ersättning till styrelsen och revisorerna</li>
                <li>styrelsens förslag till utgifts- och inkomststat samt debiteringslängd</li>
                <li>val av styrelse och styrelseordförande</li>
                <li>val av revisorer</li>
                <li>fråga om val av valberedning</li>
                <li>övriga frågor</li>
                <li>meddelande av plats där stämmoprotokollet hålles tillgängligt</li>
              </ol>
            </section>

            <section aria-labelledby="avkastning-heading">
              <h2 id="avkastning-heading" className="text-2xl font-semibold">
                § 16 Disposition av avkastning
              </h2>
              <p className="mt-3 leading-7">
                Fördelning av överskott skall ske efter medlemmarnas andelar i samfälligheten.
              </p>
            </section>

            <section aria-labelledby="stammobeslut-heading">
              <h2 id="stammobeslut-heading" className="text-2xl font-semibold">
                § 17 Stämmobeslut
              </h2>
              <p className="mt-3 leading-7">
                Beslut fattas med acklamation om inte omröstning begärs.
              </p>
              <p className="mt-3 leading-7">
                I fråga om omröstning m m gäller 48, 49, 51 och 52 §§ lagen om förvaltning av
                samfälligheter.
              </p>
              <p className="mt-3 leading-7">
                När omröstning företas skall till protokollet antecknas de omständigheter angående
                rösträtt, andelstal, ombud m m som har betydelse för bedömandet av röstresultatet.
              </p>
              <p className="mt-3 leading-7">Val skall ske med slutna sedlar om någon begär det.</p>
            </section>

            <section aria-labelledby="verksamhetsgrenar-heading">
              <h2 id="verksamhetsgrenar-heading" className="text-2xl font-semibold">
                § 18 Flera verksamhetsgrenar
              </h2>
              <p className="mt-3 leading-7">
                Skall omröstning ske i fråga som berör flera verksamhetsgrenar gemensamt har vid
                tillämpning av huvudtalsmetoden varje medlem en röst även om han har del i flera
                verksamhetsgrenar.
              </p>
              <p className="mt-3 leading-7">
                Vid tillämpning av andelsmetoden skall i motsvarande fall varje medlems röstetal
                framräknas på följande sätt. Först reduceras medlemmens röstetal inom varje
                verksamhetsgren i förhållande till verksamhetsgrenens andel i den gemensamma
                verksamhet omröstningen avser. Därefter sammanläggs de reducerade röstetalen för
                varje medlem.
              </p>
              <p className="mt-3 leading-7">
                Verksamhetsgrenarnas andelar i verksamhet som är gemensam för samfälligheten utgör
                lika andelar, 1/3 per sektion.
              </p>
            </section>

            <section aria-labelledby="protokoll-heading">
              <h2 id="protokoll-heading" className="text-2xl font-semibold">
                § 19 Protokollsjustering och tillgänglighållande
              </h2>
              <p className="mt-3 leading-7">
                Stämmoprotokollet skall justeras inom två veckor efter stämman och därefter hållas
                tillgängligt för medlemmarna.
              </p>
            </section>
          </div>

          <aside
            aria-labelledby="kommentarer-heading"
            className="mt-16 max-w-4xl rounded-xl border border-border bg-surface-muted p-6 md:p-8"
          >
            <header className="max-w-3xl">
              <p className="text-sm font-medium uppercase text-muted-foreground">
                Bilaga
              </p>

              <h2 id="kommentarer-heading" className="mt-2 text-3xl font-semibold leading-tight">
                Kommentar till stadgarna
              </h2>

              <p className="mt-4 leading-7">
                Vid hänvisning till lagrum avser SFL lagen (1973:1150) om förvaltning av
                samfälligheter i dess lydelse den 1 juli 1974.
              </p>
            </header>

            <div className="mt-10 space-y-8">
              <section aria-labelledby="kommentar-ingressen-heading">
                <h3 id="kommentar-ingressen-heading" className="text-xl font-semibold">
                  Till ingressen
                </h3>

                <p className="mt-3 leading-7">
                  SFL innehåller tvingande regler för föreningsförvaltningen och stadgarnas
                  innehåll. Genom bestämmelser i stadgarna kan föreningsmedlemmarna dock i vissa
                  hänseenden avvika från SFL. I SFL anges i vilka situationer stadgarna får
                  innehålla avvikelser från lagen.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-1-heading">
                <h3 id="kommentar-paragraf-1-heading" className="text-xl font-semibold">
                  Till § 1
                </h3>

                <p className="mt-3 leading-7">
                  Samfällighetsförenings firma skall innehålla ordet samfällighetsförening. Firman
                  skall tydligt skilja sig från andra hos länsstyrelsen registrerade ännu bestående
                  samfällighetsföreningsfirmor (29 § SFL).
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-2-heading">
                <h3 id="kommentar-paragraf-2-heading" className="text-xl font-semibold">
                  Till § 2
                </h3>

                <p className="mt-3 leading-7">
                  Samfällighetsförenings ändamål är att förvalta den samfällighet för vilken den
                  bildats. Samfällighetsförening får ej driva verksamhet som är främmande för det
                  ändamål som samfälligheten skall tillgodose (18 § SFL). Förvaltningen omfattar
                  även fastighet som föreningen äger samt medel som influtit vid försäljning.
                </p>

                <p className="mt-3 leading-7">
                  Alla samfälligheter skall anges uttömmande och på ett sådant sätt att de kan
                  identifieras. Om marksamfällighet eller gemensamhetsanläggning blivit registrerad
                  bör registerbeteckningen anges.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-3-heading">
                <h3 id="kommentar-paragraf-3-heading" className="text-xl font-semibold">
                  Till § 3
                </h3>

                <p className="mt-3 leading-7">
                  Samfällighets ändamål kan ha bestämts vid lantmäteriförrättning och framgår i så
                  fall av förrättningshandlingarna. Är det vid förrättning bestämda ändamålet oklart
                  eller har det blivit inaktuellt eller har något ändamål inte föreskrivits vid
                  förrättning bör grunderna för förvaltningen preciseras i stadgarna. Stadgar som
                  strider mot förrättningsavgörande kan komma att underkännas vid registreringen.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-4-heading">
                <h3 id="kommentar-paragraf-4-heading" className="text-xl font-semibold">
                  Till § 4
                </h3>

                <p className="mt-3 leading-7">
                  Med delägarfastighet förstås fastighet som har del i samfällighet och med delägare
                  ägaren av delägarfastighet (1 § 2 stycket SFL). Medlemmarna i
                  samfällighetsförening utgöres av delägarna i samfällighet (17 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Lagens bestämmelser om fastighet äger motsvarande tillämpning på sådan tomträtt,
                  gruva, byggnad eller annan anläggning på ofri grund, naturreservat, som har del i
                  samfällighet enligt 1 § 1 stycket 3 eller 4 SFL. Den som innehar fastighet på
                  grund av testamentariskt förordnande utan att äganderätten tillkommer någon anses
                  vid lagens tillämpning som fastighetens ägare. Som ägare av naturreservat anses
                  den som förvaltar reservatet.
                </p>

                <p className="mt-3 rounded-lg border border-border bg-background p-4 text-sm leading-6 text-muted-foreground">
                  Obs: Den sista meningen under kommentaren till § 4 är avklippt i den inskannade
                  versionen och bör kontrolleras mot originalet innan publicering.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-5-heading">
                <h3 id="kommentar-paragraf-5-heading" className="text-xl font-semibold">
                  Till § 5
                </h3>

                <p className="mt-3 leading-7">
                  Styrelsen för samfällighetsförening skall bestå av en eller flera ledamöter och ha
                  sitt säte i den ort där medlemmarnas fastigheter eller huvuddelen av dessa ligger.
                  Styrelseledamot skall vara myndig (30 § SFL) men behöver inte vara medlem.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-6-heading">
                <h3 id="kommentar-paragraf-6-heading" className="text-xl font-semibold">
                  Till § 6
                </h3>

                <p className="mt-3 leading-7">
                  När skäl därtill föreligger, får länsstyrelsen förordna att styrelsen skall bestå
                  av flera ledamöter än som anges i stadgarna (31 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Styrelseledamot kan av den som utsett honom skiljas från sitt uppdrag före
                  utgången av den tid för vilken han utsetts (32 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Har styrelseledamots uppdrag upphört eller är styrelseledamot förhindrad att utöva
                  uppdraget och är styrelsen ej ändå beslutför, får länsstyrelsen förordna syssloman
                  i sådan ledamots ställe. Finns av skäl som nu sagts icke någon styrelseledamot att
                  tillgå, får sysslomannen ensam handha föreningens angelägenheter och företräda
                  föreningen som styrelse (33 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Om ej annat följer av stadgarna eller av föreningsstämmobeslut, får styrelsen utse
                  särskild firmatecknare. Bemyndigande att teckna firma kan av styrelsen när som
                  helst återkallas (34 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Uppgift om föreningens postadress, om styrelseledamöternas fullständiga namn,
                  bostads- och postadress och telefon samt om firmatecknare om sådan utsetts skall
                  anmälas till länsstyrelsen (26 § SFL). Även ändring i dessa förhållanden skall
                  anmälas till länsstyrelsen (39 § SFL).
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-8-heading">
                <h3 id="kommentar-paragraf-8-heading" className="text-xl font-semibold">
                  Till § 8
                </h3>

                <p className="mt-3 leading-7">
                  Som styrelsens beslut gäller den mening om vilken vid styrelsesammanträde de
                  flesta röstande förenar sig. Vid lika röstetal avgörs val genom lottning. I andra
                  frågor gäller den mening som biträdes av ordföranden.
                </p>

                <p className="mt-3 leading-7">
                  Första stycket gäller ej, om annat föreskrives i stadgarna (38 § SFL).
                </p>

                <p className="mt-3 leading-7">Med ledamot avses även tjänstgörande suppleant.</p>

                <p className="mt-3 leading-7">
                  Tredje stycket avser bl a då kontakt tas brevledes eller per telefon.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-9-heading">
                <h3 id="kommentar-paragraf-9-heading" className="text-xl font-semibold">
                  Till § 9
                </h3>

                <p className="mt-3 leading-7">
                  Styrelsen handhar samfällighetens angelägenheter i överensstämmelse med denna lag
                  (SFL), stadgarna och föreningsstämmobeslut, i den mån beslutet ej strider mot
                  denna lag (SFL) eller annan författning eller mot stadgarna (35 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Styrelseledamot får ej taga befattning med angelägenhet i vilken han har ett
                  väsentligt intresse som strider mot föreningens (36 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Styrelsen är behörig att företräda föreningen i förhållande till tredje man. Samma
                  behörighet tillkommer firmatecknare. Styrelsen och firmatecknaren får dock ej utan
                  stöd av stadgarna eller föreningsstämmobeslut överlåta eller söka inteckning i
                  fast egendom eller upplåta sådan egendom med nyttjanderätt för längre tid än fem
                  år (37 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Bestämmelsen under punkten 5 är endast avsedd för föreningar med flera
                  samfälligheter eller andra verksamhetsgrenar, i vilka medlemmarna har del efter
                  olika andelstal. Bestämmelsen anknyter till 41 §, 42 §, 45 §, 48 § och 60 § SFL.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-10-heading">
                <h3 id="kommentar-paragraf-10-heading" className="text-xl font-semibold">
                  Till § 10
                </h3>

                <p className="mt-3 leading-7">
                  Revisionen avser räkenskapsperiod. Eftersom räkenskapsperiod inte behöver stämma
                  överens med styrelsens mandattid, kan styrelsens förvaltning komma att revideras i
                  omgångar.
                </p>

                <p className="mt-3 leading-7">
                  Av allmänna rättsregler följer att till revisor inte får väljas den som ingått i
                  styrelsen under den räkenskapsperiod revisionen avser.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-12-heading">
                <h3 id="kommentar-paragraf-12-heading" className="text-xl font-semibold">
                  Till § 12
                </h3>

                <p className="mt-3 leading-7">
                  Tiden för ordinarie stämma bör bestämmas så långt efter räkenskapsperiods utgång
                  att revisorerna får tid att revidera och avge revisionsberättelse och styrelsen
                  därefter får tid att kalla till stämma.
                </p>

                <p className="mt-3 leading-7">
                  Om minst en femtedel av samtliga röstberättigade medlemmar eller det mindre antal,
                  som kan vara bestämt i stadgarna, hos styrelsen begär att extra föreningsstämma
                  skall hållas och därvid anger de ärenden som skall behandlas, åligger det
                  styrelsen att inom en vecka kalla till sådan stämma att hållas så snart det med
                  iakttagande av föreskriven kallelsetid kan ske. Sker det ej, utlyser länsstyrelsen
                  stämma på anmälan av medlem (47 § 3 st SFL).
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-13-heading">
                <h3 id="kommentar-paragraf-13-heading" className="text-xl font-semibold">
                  Till § 13
                </h3>

                <p className="mt-3 leading-7">
                  Kallelse till föreningsstämma sker genom styrelsens försorg. I kallelsen anges
                  vilka ärenden som skall behandlas på stämman. Underlåter styrelsen att utfärda
                  kallelse till ordinarie föreningsstämma i enlighet med stadgarnas föreskrifter
                  skall länsstyrelsen på anmälan av medlem utlysa föreningsstämma (47 § SFL).
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-15-heading">
                <h3 id="kommentar-paragraf-15-heading" className="text-xl font-semibold">
                  Till § 15
                </h3>

                <p className="mt-3 leading-7">
                  Styrelsen är skyldig att på föreningsstämma lämna de upplysningar om föreningens
                  verksamhet som medlem begär och som kan vara av betydelse för medlemmarna (50 §
                  SFL).
                </p>

                <p className="mt-3 leading-7">
                  Över beslut som fattas på föreningsstämma skall genom styrelsens försorg föras
                  protokoll, vilket skall hållas tillgängligt för medlemmarna senast två veckor
                  efter stämman (50 § 2 st SFL).
                </p>

                <p className="mt-3 leading-7">
                  Talan får föras mot uttaxering (46 § SFL) och stämmobeslut (53 § SFL).
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-16-heading">
                <h3 id="kommentar-paragraf-16-heading" className="text-xl font-semibold">
                  Till § 16
                </h3>

                <p className="mt-3 leading-7">
                  Om föreningens verksamhet är sådan att den inte ger ekonomiskt överskott bör
                  bestämmelsen utgå.
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-17-heading">
                <h3 id="kommentar-paragraf-17-heading" className="text-xl font-semibold">
                  Till § 17
                </h3>

                <p className="mt-3 leading-7">
                  Den som underlåtit att i rätt tid fullgöra sin bidragsskyldighet får deltaga i
                  förhandlingarna men ej utöva rösträtt innan han fullgjort vad han eftersatt (48 §
                  SFL).
                </p>

                <p className="mt-3 leading-7">
                  Medlem eller annan får icke, själv eller genom ombud eller som ombud, deltaga i
                  behandlingen av angelägenhet, vari han äger ett väsentligt intresse som strider
                  mot föreningens (48 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Innehavare av rättighet i delägarfastighet får närvara och yttra sig vid
                  behandling av fråga som rör hans rätt (48 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Röstberättigad medlem, som är närvarande vid föreningsstämma, har, oavsett om han
                  äger en eller flera delägarfastigheter, en röst (huvudtalsmetod). I fråga som har
                  ekonomisk betydelse skall medlemmarnas röstetal i stället beräknas efter
                  delägarfastigheternas andelstal, om medlem begär det. Dock får medlems röstetal ej
                  överstiga en femtedel av det sammanlagda röstetalet för samtliga närvarande
                  röstberättigade medlemmar (49 § SFL) (andelstalsmetod).
                </p>

                <p className="mt-3 leading-7">
                  Medlems rösträtt kan utövas genom ombud. Ombud får ej företräda mer än en medlem.
                  Som stämmans beslut gäller den mening för vilken de flesta rösterna avgivits. Vid
                  lika röstetal avgörs val genom lottning, medan i andra frågor den mening gäller
                  som biträdes av ordföranden. Avvikelse från bestämmelserna om ombud kan dock
                  föreskrivas i stadgarna (49 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  För beslut att överlåta eller söka inteckning i fast egendom eller upplåta sådan
                  egendom med nyttjanderätt för längre tid än fem år fordras minst två tredjedelar
                  av de avgivna rösterna, om ej annat föreskrives i stadgarna (51 § SFL).
                </p>

                <p className="mt-3 leading-7">
                  Vid omröstning i fråga om ändring av föreningens stadgar har varje röstberättigad
                  medlem, oavsett om han äger en eller flera delägarfastigheter, en röst. För beslut
                  om sådan ändring fordras minst två tredjedelar av de avgivna rösterna. Föreskrives
                  strängare villkor i stadgarna skall det gälla.
                </p>

                <p className="mt-3 leading-7">
                  Beslut om stadgeändring skall genom styrelsens försorg genast anmälas för
                  registrering. Vid anmälan skall fogas två bestyrkta avskrifter av protokoll över
                  beslutet. Beslutet får ej tillämpas innan registrering skett (52 § SFL).
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-18-heading">
                <h3 id="kommentar-paragraf-18-heading" className="text-xl font-semibold">
                  Till § 18
                </h3>

                <p className="mt-3 leading-7">
                  Angående innebörden av huvudtalsmetod och andelstalsmetod, se kommentaren till §
                  17.
                </p>

                <p className="mt-3 leading-7">
                  Några i alla sammanhang godtagbara hållpunkter för en jämförelse mellan
                  samfälligheter eller andra verksamhetsgrenar när det gäller intresset och ansvaret
                  för gemensamma åtgärder kan knappast uppställas. Om det emellertid är avgjort hur
                  intresset och ansvaret för den gemensamma åtgärden är att fördela mellan
                  verksamhetsgrenarna finns en norm för den angivna jämförelsen. Ett sådant
                  avgörande kan åstadkommas genom att i stadgarna bestäms hur kostnaderna för viss
                  verksamhet, exempelvis administrationskostnader, skall bäras av de olika
                  verksamhetsgrenarna (se prop 1973:160 s 578).
                </p>
              </section>

              <section aria-labelledby="kommentar-paragraf-19-heading">
                <h3 id="kommentar-paragraf-19-heading" className="text-xl font-semibold">
                  Till § 19
                </h3>

                <p className="mt-3 leading-7">
                  Angående tillgänglighållande av protokollet, se kommentaren till § 15.
                </p>
              </section>
            </div>
          </aside>

          <footer className="mt-12 max-w-4xl border-t border-border pt-6 text-sm text-muted-foreground">
            <p>Dessa stadgar har antagits vid sammanträde enligt datum på första sidan.</p>
          </footer>
        </article>
      </SiteContainer>
    </main>
  );
}
