import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nordöstra Nämdö Samfällighetsförening",
    template: "%s | Nordöstra Nämdö Samfällighetsförening",
  },
  description:
    "Information om vägar, bryggor, stadgar och aktuella projekt för Nordöstra Nämdö Samfällighetsförening.",
  applicationName: "Nordöstra Nämdö Samfällighetsförening",
  openGraph: {
    title: "Nordöstra Nämdö Samfällighetsförening",
    description:
      "Information om vägar, bryggor, stadgar och aktuella projekt för Nordöstra Nämdö Samfällighetsförening.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
