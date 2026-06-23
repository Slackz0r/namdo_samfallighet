import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InfoCard from "@/components/info-card";
import SiteContainer from "@/components/site-container";
import { updates } from "@/content/updates";
import { formatDate } from "@/utils/dateUtils";

export const metadata: Metadata = {
  title: "Start",
  description:
    "Information för medlemmar och fastighetsägare i Nordöstra Nämdös Samfällighetsförening.",
};

const managedAssets = [
  "Östanviks brygga",
  "Vägen från Östanviks brygga till grindstolpen vid gamla Östanviks gård",
  "Traktorstigen mellan Östanviks gård och Nämdö Böte brygga",
  "Nämdö Böte brygga",
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-foreground text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="/images/namdo-skargarden.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>

        <SiteContainer className="relative py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-foreground/85">
              Samfällighetsförening på norra Nämdö
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              <span className="block">Nordöstra Nämdös</span>
              <span className="block">Samfällighetsförening</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Föreningen förvaltar gemensamma vägar och bryggor för 92 fastigheter och samlar
              aktuell information för medlemmar och fastighetsägare.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-md bg-pine px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary"
                href="/projects"
              >
                Läs om aktuella projekt
              </Link>
              <Link
                className="rounded-md border border-primary-foreground/70 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                href="/statutes"
              >
                Se stadgar
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteContainer>
        <section className="grid gap-8 py-10 md:py-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight">Om föreningen</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Nordöstra Nämdös samfällighetsförening etablerades vid en förrättning av
                Lantmäteriet 1985. Som fastighetsägare är man obligatoriskt ansluten till
                föreningen och omfattas av föreningens stadgar och årsstämmobeslut.
              </p>
              <p>
                Föreningen ansvarar för underhåll, drift och planering av de gemensamma vägarna och
                bryggorna. Fastighetsägare har olika andelar i föreningen, fastställda av
                Lantmäteriet, och kan göra sin röst hörd på årsstämman.
              </p>
            </div>
          </div>

          <InfoCard className="bg-sky" title="Det här förvaltar föreningen">
            <ul className="list-disc space-y-2 pl-5">
              {managedAssets.map((asset) => (
                <li key={asset}>{asset}</li>
              ))}
            </ul>
          </InfoCard>
        </section>

        <section className="border-t border-border py-10 md:py-16" aria-labelledby="updates-heading">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-muted-foreground">
                För medlemmar
              </p>
              <h2 id="updates-heading" className="mt-2 text-3xl font-semibold leading-tight">
                Senaste informationen
              </h2>
            </div>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {updates.map(({ title, date, href, summary }) => (
              <li key={title}>
                <InfoCard
                  title={title}
                  href={href}
                  meta={<time dateTime={date}>{formatDate(date)}</time>}
                >
                  <p>{summary}</p>
                </InfoCard>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-4 pb-12 md:grid-cols-3 md:pb-16" aria-label="Genvägar">
          <InfoCard title="Aktuella projekt" href="/projects">
            <p>Läs om arbetet med Nämdö Böte trafikbrygga och kommande steg.</p>
          </InfoCard>
          <InfoCard title="Stadgar" href="/statutes">
            <p>Se föreningens stadgar och kommentarerna till stadgarna.</p>
          </InfoCard>
          <InfoCard title="Kontakt" href="/contact">
            <p>Hitta enkel kontaktinformation och hur medlemmar når styrelsen.</p>
          </InfoCard>
        </section>
      </SiteContainer>
    </main>
  );
}
