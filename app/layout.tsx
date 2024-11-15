import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
      <nav>
        <Navbar />
      </nav>
      <body>{children}</body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
