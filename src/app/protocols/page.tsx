import type { Metadata } from "next";
import InfoCard from "@/components/info-card";
import PageHeader from "@/components/page-header";
import SiteContainer from "@/components/site-container";
import { meetingProtocols } from "@/content/meetings";
import { formatDate } from "@/utils/dateUtils";

export const metadata: Metadata = {
  title: "Protokoll",
  description:
    "Stämmoprotokoll och möteshandlingar för Nordöstra Nämdös Samfällighetsförening.",
};

export default function ProtocolsPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <article className="py-10 md:py-16">
          <PageHeader
            eyebrow="Protokoll"
            title="Stämmoprotokoll"
            description="Här samlas föreningens protokoll som statiska sidor. Välj ett protokoll för att läsa det i sin helhet."
          />

          <section aria-labelledby="protocol-list-heading" className="mt-10 max-w-4xl">
            <h2 id="protocol-list-heading" className="sr-only">
              Tillgängliga protokoll
            </h2>

            <ul className="space-y-4">
              {meetingProtocols.map((meeting) => (
                <li key={meeting.id}>
                  <InfoCard
                    title={meeting.title}
                    href={`/protocols/${meeting.id}`}
                    meta={<time dateTime={meeting.date}>{formatDate(meeting.date)}</time>}
                  >
                    <p>{meeting.protocol.intro}</p>
                  </InfoCard>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </SiteContainer>
    </main>
  );
}
