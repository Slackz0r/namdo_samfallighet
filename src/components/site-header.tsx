"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNavigation } from "@/content/navigation";
import SiteContainer from "./site-container";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-999 border-b border-border bg-surface/95">
      <SiteContainer className="py-2">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link
              className="inline-flex w-fit items-center text-foreground transition hover:text-primary"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/svg/island_outline_logo.svg"
                alt=""
                aria-hidden="true"
                width={100}
                height={100}
                className="h-19 w-19 text-primary"
              />
              <span className="sr-only">Nordöstra Nämdös Samfällighetsförening</span>
            </Link>

            <button
              aria-controls="site-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Stäng huvudmeny" : "Öppna huvudmeny"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground transition hover:border-primary hover:bg-sky hover:text-primary md:hidden"
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span className="relative h-5 w-6" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition ${
                    isMenuOpen ? "top-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current transition ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-current transition ${
                    isMenuOpen ? "top-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          <nav
            id="site-navigation"
            aria-label="Huvudmeny"
            className={`${isMenuOpen ? "block" : "hidden"} md:block`}
          >
            <ul className="flex flex-col gap-1 border-t border-border pt-3 text-base font-semibold text-muted-foreground md:flex-row md:flex-wrap md:border-t-0 md:pt-0">
              {mainNavigation.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    className="inline-flex w-full rounded-md px-3 py-2 transition hover:bg-sky hover:text-primary hover:shadow-sm md:w-auto"
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SiteContainer>
    </header>
  );
}
