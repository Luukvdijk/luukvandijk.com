import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/json-ld";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import Navbar from "./components/Navbar";
import { ScrollProvider } from "./components/ScrollContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luuk van Dijk – Webdesign, Development & Hosting",
  description:
    "Professionele websites op maat met focus op design, gebruiksvriendelijkheid en performance. Van concept tot livegang — inclusief hosting en onderhoud.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.luukvandijk.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://luukvandijk.com";
  const websiteJsonLd = buildWebsiteJsonLd({
    siteUrl,
    name: "Luuk van Dijk",
    description: "Frontend developer & designer",
    logo: "/images/logoDark.svg",
  });

  const orgJsonLd = buildOrganizationJsonLd({
    siteUrl,
    name: "Luukvandijk",
    logo: "/images/logoDark.svg",
    email: "info@luukvandijk.com",
    sameAs: ["https://www.linkedin.com/in/luuk-van-dijk-web-development"],
  });

  return (
    <html lang="en">
      <body>
        <JsonLd id="ld-website" data={websiteJsonLd} />
        <JsonLd id="ld-organization" data={orgJsonLd} />
        <ScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
