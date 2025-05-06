import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ScrollProvider } from "./components/ScrollContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luuk van dijk",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
