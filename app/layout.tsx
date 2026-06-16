import type { Metadata } from "next";
import { Playfair_Display, Nunito, Caveat } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
  display: "swap",
});

const accent = Caveat({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE ?? "Aanchal Singla",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${bodyFont.variable} ${accent.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
