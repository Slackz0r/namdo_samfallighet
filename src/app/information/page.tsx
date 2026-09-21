import type { Metadata } from "next";
import InfoCard from "@/components/info-card";
import PageHeader from "@/components/page-header";
import SiteContainer from "@/components/site-container";
import { residentInformation } from "@/content/resident-information";

export const metadata: Metadata = {
  title: "Information för boende",
  description:
    "Praktisk information om Simpleko, sophämtning, grovavfall och boendefrågor för Nordöstra Nämdös Samfällighetsförening.",
};

export default function InformationPage() {
  const { waste } = residentInformation;

  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <article className="py-10 md:py-16">
          <PageHeader
            eyebrow={residentInformation.eyebrow}
            title={residentInformation.title}
            description={residentInformation.description}
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <section
              id={waste.id}
              aria-labelledby={`${waste.id}-heading`}
              className="max-w-3xl rounded-xl border border-border bg-surface p-6 shadow-sm scroll-mt-8 md:p-8"
            >
              <p className="text-sm font-semibold uppercase text-muted-foreground">
                Avfallshantering 2026
              </p>
              <h2
                id={`${waste.id}-heading`}
                className="mt-2 text-3xl font-semibold leading-tight text-foreground"
              >
                {waste.title}
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">{waste.description}</p>

              <section aria-labelledby="hamtningsveckor-heading" className="mt-8">
                <h3 id="hamtningsveckor-heading" className="text-2xl font-semibold leading-tight">
                  Hämtning från egna soptunnor
                </h3>

                <div className="mt-5 divide-y divide-border">
                  {waste.collectionPeriods.map((period, index) => (
                    <div
                      className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)]"
                      key={`${period.label}-${index}`}
                    >
                      <p className="font-semibold">{period.label}</p>
                      <ul className="flex flex-wrap gap-2" aria-label={`Veckor med ${period.label.toLowerCase()}`}>
                        {period.weeks.map((week) => (
                          <li
                            className="rounded-full bg-surface-muted px-3 py-1 text-sm font-medium text-muted-foreground"
                            key={week}
                          >
                            v. {week}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-5 rounded-lg bg-sky p-4 leading-7 text-muted-foreground">
                  {waste.winterInfo}
                </p>
              </section>

              <section aria-labelledby="grovavfall-heading" className="mt-10">
                <h3 id="grovavfall-heading" className="text-2xl font-semibold leading-tight">
                  {waste.bulkyWaste.title}
                </h3>
                <p className="mt-4 leading-8 text-muted-foreground">{waste.bulkyWaste.intro}</p>
                <p className="mt-4 leading-8 text-muted-foreground">{waste.bulkyWaste.ferryIntro}</p>

                <ul className="mt-5 space-y-4">
                  {waste.bulkyWaste.visits.map((visit) => (
                    <li className="border-l-4 border-primary pl-4" key={visit.date}>
                      <p className="font-semibold">
                        <time dateTime={visit.date}>{visit.label}</time>
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        {visit.time}, {visit.location}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-lg border border-border bg-surface-muted p-4 font-semibold text-foreground">
                  OBS: {waste.bulkyWaste.warning}
                </p>

                <p className="mt-5 leading-8 text-muted-foreground">{waste.bulkyWaste.largeBag}</p>
              </section>
            </section>

            <aside aria-labelledby="information-aside-heading" className="space-y-4">
              <h2 id="information-aside-heading" className="text-xl font-semibold">
                Snabbt till
              </h2>

              <InfoCard title="Logga in på Simpleko" href="#simpleko">
                <p>Uppdatera din e-postadress och andra kontaktuppgifter.</p>
              </InfoCard>

              <InfoCard title="Sophämtning" href={`#${waste.id}`}>
                <p>Hämtningsveckor, Grovsopfärjan och kontaktvägar för avfall.</p>
              </InfoCard>

              <InfoCard title="Värmdö kommun">
                <address className="not-italic">
                  <p className="font-semibold text-foreground">{waste.bulkyWaste.contact.name}</p>
                  <p className="mt-3">
                    E-post:{" "}
                    <a
                      className="font-semibold text-primary hover:underline"
                      href={`mailto:${waste.bulkyWaste.contact.email}`}
                    >
                      {waste.bulkyWaste.contact.email}
                    </a>
                  </p>
                  <p className="mt-2">
                    Telefon:{" "}
                    <a
                      className="font-semibold text-primary hover:underline"
                      href={waste.bulkyWaste.contact.phoneHref}
                    >
                      {waste.bulkyWaste.contact.phone}
                    </a>
                  </p>
                </address>
              </InfoCard>
            </aside>
          </div>

          <section
            id="simpleko"
            aria-labelledby="simpleko-heading"
            className="mt-10 max-w-3xl rounded-xl border border-border bg-surface p-6 shadow-sm scroll-mt-8 md:p-8"
          >
            <p className="text-sm font-semibold uppercase text-muted-foreground">För medlemmar</p>
            <h2 id="simpleko-heading" className="mt-2 text-3xl font-semibold leading-tight">
              Så här loggar du in på Simpleko – vår förvaltare
            </h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              Registrera och uppdatera gärna din e-postadress i Simplekos portal. Då kan
              föreningen och förvaltaren enklare nå dig med relevant information.
            </p>

            <ol className="mt-8 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-primary">
              <li className="pl-1 leading-8 text-muted-foreground">
                Gå in på Simplekos hemsida{" "}
                <a
                  className="font-semibold text-primary hover:underline"
                  href="https://simpleko.se/"
                  rel="noreferrer"
                  target="_blank"
                >
                  simpleko.se
                </a>{" "}
                med din dator eller läsplatta.
              </li>
              <li className="pl-1 leading-8 text-muted-foreground">
                Klicka på <strong className="text-foreground">LOGGA IN</strong> i övre, högra
                hörnet.
              </li>
              <li className="pl-1 leading-8 text-muted-foreground">
                Gå ned till <strong className="text-foreground">PORTALEN</strong> och klicka på
                <strong className="text-foreground"> Logga in i Portalen</strong>.
              </li>
              <li className="pl-1 leading-8 text-muted-foreground">
                Klicka på <strong className="text-foreground">Nordöstra Nämdös
                Samfällighetsförening (Medlem)</strong>.
              </li>
              <li className="pl-1 leading-8 text-muted-foreground">
                Gå till övre, högra hörnet där det står ditt namn och Nordöstra Nämdös
                Samfällighetsförening. Klicka på nedåtpilen ”V” och gå till ”Inställningar”.
              </li>
              <li className="pl-1 leading-8 text-muted-foreground">
                Klicka på <strong className="text-foreground">Kontaktuppgifter</strong>. Fyll i
                din e-postadress och övriga data.
              </li>
              <li className="pl-1 leading-8 text-muted-foreground">
                Klicka på <strong className="text-foreground">Spara kontaktuppgifterna</strong>{" "}
                nere till höger. Du får en bekräftelse i ett grönt fält att dina uppgifter
                sparats.
              </li>
              <li className="pl-1 leading-8 text-muted-foreground">
                Klicka på nedåtpilen uppe till höger och välj sedan ”Logga ut” i listan.
              </li>
            </ol>
          </section>
        </article>
      </SiteContainer>
    </main>
  );
}
