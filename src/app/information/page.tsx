import type { Metadata } from "next";
import InfoCard from "@/components/info-card";
import PageHeader from "@/components/page-header";
import SiteContainer from "@/components/site-container";
import { residentInformation } from "@/content/resident-information";

export const metadata: Metadata = {
  title: "Information för boende",
  description:
    "Praktisk information om sophämtning, grovavfall och boendefrågor för Nordöstra Nämdös Samfällighetsförening.",
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
        </article>
      </SiteContainer>
    </main>
  );
}
