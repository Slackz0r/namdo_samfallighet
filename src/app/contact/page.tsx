import type { Metadata } from "next";
import Link from "next/link";
import InfoCard from "@/components/info-card";
import PageHeader from "@/components/page-header";
import SiteContainer from "@/components/site-container";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktinformation för medlemmar och fastighetsägare i Nordöstra Nämdö Samfällighetsförening.",
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <article className="py-10 md:py-16">
          <PageHeader
            eyebrow="Kontakt"
            title="Kontakta föreningen"
            description="För frågor om vägar, bryggor, stadgar eller årsstämma kan medlemmar kontakta styrelsen via de kontaktuppgifter som kommuniceras i kallelser och medlemsutskick."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section
              aria-labelledby="contact-details-heading"
              className="max-w-3xl rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8"
            >
              <h2 id="contact-details-heading" className="text-2xl font-semibold leading-tight">
                För medlemmar och fastighetsägare
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                Använd de kontaktvägar som anges i senaste kallelse, protokoll eller utskick från
                styrelsen. På så sätt hålls kontaktuppgifterna korrekta utan att webbplatsen behöver
                ett administrativt system.
              </p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-surface-muted p-4">
                  <dt className="text-sm font-medium text-muted-foreground">Organisation</dt>
                  <dd className="mt-1 font-semibold">716418-9107</dd>
                </div>
                <div className="rounded-lg bg-surface-muted p-4">
                  <dt className="text-sm font-medium text-muted-foreground">Kommun</dt>
                  <dd className="mt-1 font-semibold">Värmdö</dd>
                </div>
              </dl>
            </section>

            <aside aria-labelledby="quick-links-heading" className="space-y-4">
              <h2 id="quick-links-heading" className="text-xl font-semibold">
                Snabbt till
              </h2>
              <InfoCard title="Aktuella projekt" href="/projects">
                <p>Information om projektet för Nämdö Böte trafikbrygga.</p>
              </InfoCard>
              <InfoCard title="Stadgar" href="/statutes">
                <p>Föreningens stadgar och kommentarer till stadgarna.</p>
              </InfoCard>
              <Link className="inline-flex text-sm font-semibold text-primary hover:underline" href="/">
                Till startsidan
              </Link>
            </aside>
          </div>
        </article>
      </SiteContainer>
    </main>
  );
}
