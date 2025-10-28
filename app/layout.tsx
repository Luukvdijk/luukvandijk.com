import { buildLinkedGraphJsonLd } from "@/lib/json-ld";
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
  return (
    <html lang="en">
      <body>
        <JsonLd data={buildLinkedGraphJsonLd()} />

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
