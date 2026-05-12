import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import ProjectSummaryCard from "@/components/project-summary-card";
import SiteContainer from "@/components/site-container";
import { bridgeProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "Aktuella projekt",
  description:
    "Statusrapport våren 2026 om renoveringen av Nämdö Böte trafikbrygga.",
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
              {bridgeProject.sections.map(({ heading, paragraphs, items }) => (
                <section key={heading} aria-labelledby={`${heading.toLowerCase().replaceAll(" ", "-")}-heading`}>
                  <h2
                    id={`${heading.toLowerCase().replaceAll(" ", "-")}-heading`}
                    className="text-2xl font-semibold leading-tight text-foreground"
                  >
                    {heading}
                  </h2>

                  {paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}

                  {items ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </section>

            <ProjectSummaryCard title="Projektstatus" items={bridgeProject.summary} />
          </div>
        </article>
      </SiteContainer>
    </main>
  );
}
