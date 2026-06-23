import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import SiteContainer from "@/components/site-container";

export const metadata: Metadata = {
  title: "Karta",
  description: "Karta över området som omfattas av Nordöstra Nämdös Samfällighetsförening.",
};

export default function MapPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <section className="py-10 md:py-16">
          <PageHeader
            eyebrow="Karta"
            title="Karta över området"
            description="Översikt över området och de gemensamma vägar och bryggor som föreningen förvaltar."
          />

          <figure className="relative mt-10 aspect-[15/9] overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
            <Image
              src="/images/karta_nordostra_namdo.png"
              alt="Karta över området för Nordöstra Nämdös Samfällighetsförening."
              fill
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-contain"
            />
          </figure>
        </section>
      </SiteContainer>
    </main>
  );
}
