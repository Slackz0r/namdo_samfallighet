"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNavigation } from "@/content/navigation";
import SiteContainer from "./site-container";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-999 relative bg-surface/95 ${
        isMenuOpen ? "border-b-0" : "border-b border-border"
      } md:border-b md:border-border`}
    >
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
              className="inline-flex h-11 w-11 items-center justify-center overflow-visible rounded-md border border-border text-foreground transition hover:border-primary hover:bg-sky hover:text-primary md:hidden"
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span className="relative h-6 w-6 overflow-visible" aria-hidden="true">
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition duration-200 ease-out ${
                    isMenuOpen ? "top-[11px] rotate-45" : "top-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[11px] h-0.5 w-6 rounded-full bg-current transition duration-200 ease-out ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition duration-200 ease-out ${
                    isMenuOpen ? "top-[11px] -rotate-45" : "top-[18px]"
                  }`}
                />
              </span>
            </button>
          </div>

          <nav
            id="site-navigation"
            aria-label="Huvudmeny"
            className={`${
              isMenuOpen
                ? "visible max-h-96 translate-y-0 opacity-100 "
                : "invisible max-h-0 -translate-y-2 opacity-0 "
            } absolute inset-x-0 top-[calc(100%-1px)] overflow-hidden border-b border-border bg-surface/95 shadow-sm transition-[max-height,opacity,transform,visibility] duration-200 ease-out md:static md:visible md:max-h-none md:translate-y-0 md:overflow-visible md:border-0 md:bg-transparent md:opacity-100 md:shadow-none`}
          >
            <ul className="mx-auto flex w-full max-w-(--site-max-width) flex-col gap-1 px-4 py-3 text-base font-semibold text-muted-foreground sm:px-6 md:flex-row md:flex-wrap md:px-0 md:py-0">
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
