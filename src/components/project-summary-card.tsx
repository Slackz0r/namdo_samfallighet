import type { ProjectSummaryItem } from "@/content/projects";

type ProjectSummaryCardProps = {
  title: string;
  items: ProjectSummaryItem[];
};

export default function ProjectSummaryCard({ title, items }: ProjectSummaryCardProps) {
  return (
    <aside
      aria-labelledby="project-summary-heading"
      className="rounded-xl border border-border bg-sky p-6 shadow-sm"
    >
      <h2 id="project-summary-heading" className="text-xl font-semibold">
        {title}
      </h2>

      <dl className="mt-6 space-y-5">
        {items.map(({ term, description }) => (
          <div key={term}>
            <dt className="text-sm font-medium text-muted-foreground">{term}</dt>
            <dd className="mt-1 font-medium">{description}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
