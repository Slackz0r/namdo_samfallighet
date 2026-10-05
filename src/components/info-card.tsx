import Link from "next/link";
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  href?: string;
  target?: string;
  meta?: ReactNode;
  className?: string;
};

export default function InfoCard({
  title,
  children,
  href,
  target,
  meta,
  className = "",
}: InfoCardProps) {
  const cardClassName = `rounded-xl border border-border bg-surface p-6 shadow-sm ${
    href
      ? "group block transition hover:border-primary hover:bg-surface-muted hover:shadow-small"
      : ""
  } ${className}`;

  const content = (
    <>
      {meta ? <div className="mb-3 text-sm font-medium text-muted-foreground">{meta}</div> : null}

      <h3
        className={`text-xl font-semibold leading-7 ${
          href ? "text-foreground transition group-hover:text-primary" : ""
        }`}
      >
        {title}
      </h3>

      <div className="mt-3 leading-7 text-muted-foreground">{children}</div>
    </>
  );

  if (href) {
    return (
      <Link className={cardClassName} href={href} target={target}>
        <article>{content}</article>
      </Link>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
