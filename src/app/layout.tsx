import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} — Bridal Makeup Artist, Hyderabad`,
  description: site.tagline,
  keywords: [
    "bridal makeup artist hyderabad",
    "swarna reddy makeovers",
    "pellikuthuru makeup",
    "soft glam bride",
    "telugu bride makeup",
    "destination wedding makeup artist",
  ],
  openGraph: {
    title: `${site.name} — Bridal Makeup Artist`,
    description: site.tagline,
    images: ["/images/hero-pink-gold-1.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cormorant.variable} ${manrope.variable} noise antialiased`}>
        {children}
      </body>
    </html>
  );
}
