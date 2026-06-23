import Link from "next/link";
import { mainNavigation } from "@/content/navigation";
import SiteContainer from "./site-container";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-muted">
      <SiteContainer className="grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-xl">
          <p className="font-semibold">Nordöstra Nämdös Samfällighetsförening</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Information för medlemmar och fastighetsägare om vägar, bryggor, stadgar och aktuella
            projekt på norra Nämdö.
          </p>
        </div>

        <nav aria-label="Sidfotsmeny">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground md:justify-end">
            {mainNavigation.map(({ label, href }) => (
              <li key={href}>
                <Link className="hover:text-primary hover:underline" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SiteContainer>
    </footer>
  );
}
