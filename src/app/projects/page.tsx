import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import ProjectSummaryCard from "@/components/project-summary-card";
import SiteContainer from "@/components/site-container";
import { bridgeProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "Aktuella projekt",
  description:
    "Information om arbetet med renovering och finansiering av Nämdö Böte trafikbrygga.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <article className="py-10 md:py-16">
          <PageHeader
            eyebrow={bridgeProject.eyebrow}
            title={bridgeProject.title}
            description={bridgeProject.description}
          />

          <figure className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
            <Image
              src={bridgeProject.image.src}
              alt={bridgeProject.image.alt}
              fill
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover object-bottom"
            />
          </figure>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <section
              aria-label="Projektinformation"
              className="max-w-3xl space-y-6 rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8"
            >
              {bridgeProject.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>

            <ProjectSummaryCard title="Projektstatus" items={bridgeProject.summary} />
          </div>
        </article>
      </SiteContainer>
    </main>
  );
}
