import type { Metadata } from "next";
import { Cormorant_Garamond, Spectral, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./components/LangProvider";
import { NextMassBar } from "./components/NextMassBar";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Church of Saint Luke · Stroudsburg, PA",
  description:
    "Bringing Christ, in Word and Sacrament, to a diverse and loving community in the heart of Stroudsburg, Pennsylvania.",
  icons: { icon: "/images/logo.jpg" },
  openGraph: {
    title: "Church of Saint Luke | Stroudsburg, PA",
    description:
      "Bringing Christ, in Word and Sacrament, to a diverse community in Stroudsburg, PA.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spectral.variable} ${inter.variable}`}>
      <body>
        <LangProvider>
          <NextMassBar />
          <SiteHeader />
          {children}
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
