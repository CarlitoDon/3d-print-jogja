import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";
import type { Locale } from "@/proxy";

const hanken = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3dprintjogja.com"),
  title: {
    default: "KreaForma | 3D Printing Jogja — Jasa Cetak 3D FDM & Resin SLA Presisi",
    template: "%s | KreaForma 3D Printing Jogja",
  },
  description:
    "KreaForma adalah studio manufaktur aditif & cetak 3D FDM dan Resin SLA presisi tinggi di Yogyakarta. Kalkulator estimasi biaya instan, 20+ material teknis, dan pengiriman kilat se-Indonesia.",
  icons: {
    icon: "/brand/kreaforma-mark.jpg",
    apple: "/brand/kreaforma-mark.jpg",
  },
  keywords: [
    "KreaForma",
    "3D Printing Jogja",
    "Jasa Cetak 3D Yogyakarta",
    "FDM 3D Print",
    "Resin SLA Jogja",
    "PLA+",
    "PETG",
    "TPU fleksibel",
    "PA-CF carbon fiber",
    "Kalkulator cetak 3D",
    "Maket arsitektur 3D",
    "Custom enclosure IoT",
    "Rapid prototyping Jogja",
  ],
  authors: [{ name: "KreaForma Engineering Studio" }],
  creator: "KreaForma",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://3dprintjogja.com",
    siteName: "KreaForma | 3D Printing Jogja",
    title: "KreaForma | 3D Printing Jogja — Jasa Cetak 3D FDM & Resin SLA Presisi",
    description:
      "Studio cetak 3D FDM & Resin SLA presisi industri di Yogyakarta. Kalkulator penawaran instan, siap kirim se-Indonesia.",
    images: [
      {
        url: "/brand/kreaforma-showcase.jpg",
        width: 1024,
        height: 1024,
        alt: "KreaForma 3D Printing Jogja Studio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KreaForma | 3D Printing Jogja",
    description:
      "Jasa cetak 3D FDM & Resin SLA presisi industri di Yogyakarta dengan kalkulator estimasi instan.",
    images: ["/brand/kreaforma-showcase.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]"> & { children: ReactNode }) {
  const { lang } = await params;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://3dprintjogja.com/#business",
        name: "KreaForma | 3D Printing Jogja",
        url: "https://3dprintjogja.com",
        logo: "https://3dprintjogja.com/brand/kreaforma-mark.jpg",
        image: "https://3dprintjogja.com/brand/kreaforma-showcase.jpg",
        telephone: "+6285xxxxxxxxx",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Yogyakarta",
          addressRegion: "D.I. Yogyakarta",
          postalCode: "55281",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -7.7956,
          longitude: 110.3695,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        priceRange: "$$",
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
      },
    ],
  };

  return (
    <html
      lang={lang}
      className={`dark ${hanken.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-sans text-ink antialiased min-h-screen flex flex-col selection:bg-brand selection:text-black">
        <Navbar lang={lang as Locale} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang as Locale} />
      </body>
    </html>
  );
}
