import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import "./globals.css";

const figtree = Figtree({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dinesen Solutions | Skræddersyede IT-løsninger",
  description: "Vi leverer hurtige og intelligente webløsninger med moderne teknologi og AI-integration. Få din næste webapplikation eller hjemmeside udviklet af en dedikeret dansk udvikler.",
  keywords: "webudvikling københavn, webbureau, next.js udvikler, skræddersyede webapplikationer",
  openGraph: {
    title: "Dinesen Solutions | Skræddersyede IT-løsninger",
    description: "Hurtige og intelligente webløsninger med moderne teknologi",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${figtree.variable} font-sans antialiased`}>
        {children}
        <SmoothCursor />
      </body>
    </html>
  );
}