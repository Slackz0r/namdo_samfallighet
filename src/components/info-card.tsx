import Link from "next/link";
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  href?: string;
  meta?: ReactNode;
  className?: string;
};

export default function InfoCard({ title, children, href, meta, className = "" }: InfoCardProps) {
  return (
    <article className={`rounded-xl border border-border bg-surface p-6 shadow-sm ${className}`}>
      {meta ? <div className="mb-3 text-sm font-medium text-muted-foreground">{meta}</div> : null}

      <h3 className="text-xl font-semibold leading-7">
        {href ? (
          <Link className="text-primary underline-offset-4 hover:underline" href={href}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      <div className="mt-3 leading-7 text-muted-foreground">{children}</div>
    </article>
  );
}
