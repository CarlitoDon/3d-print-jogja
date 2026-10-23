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
    default: "3D Print Jogja — Jasa Cetak 3D FDM & Resin SLA Yogyakarta",
    template: "%s | 3D Print Jogja",
  },
  description:
    "Jasa cetak 3D FDM & Resin SLA presisi tinggi di Yogyakarta. Kalkulator estimasi biaya instan, pilihan 20+ material teknis, dan pengiriman aman ke seluruh Indonesia.",
  keywords: [
    "3D printing Jogja",
    "Jasa cetak 3D Yogyakarta",
    "3D print FDM",
    "Resin SLA Jogja",
    "PLA+",
    "PETG",
    "TPU fleksibel",
    "PA-CF carbon fiber",
    "Kalkulator cetak 3D",
    "Maket arsitektur 3D",
    "Enclosure IoT 3D print",
  ],
  authors: [{ name: "3D Print Jogja Team" }],
  creator: "3D Print Jogja",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://3dprintjogja.com",
    siteName: "3D Print Jogja",
    title: "3D Print Jogja — Jasa Cetak 3D FDM & Resin SLA Yogyakarta",
    description:
      "Jasa cetak 3D FDM & Resin SLA presisi tinggi di Yogyakarta. Estimasi harga instan, siap kirim se-Indonesia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "3D Print Jogja Additive Manufacturing Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Print Jogja — Jasa Cetak 3D FDM & Resin SLA",
    description:
      "Jasa cetak 3D FDM & Resin SLA presisi tinggi di Yogyakarta dengan kalkulator estimasi instan.",
    images: ["/og-image.jpg"],
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
        name: "3D Print Jogja",
        url: "https://3dprintjogja.com",
        image: "https://3dprintjogja.com/og-image.jpg",
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
      <body className="bg-surface font-sans text-ink antialiased min-h-screen flex flex-col">
        <Navbar lang={lang as Locale} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang as Locale} />
      </body>
    </html>
  );
}
