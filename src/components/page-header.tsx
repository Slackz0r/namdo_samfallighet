import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-muted-foreground">{eyebrow}</p>
      ) : null}

      <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h1>

      {description ? (
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
      ) : null}

      {children}
    </header>
  );
}
