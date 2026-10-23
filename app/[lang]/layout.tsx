import type { ReactNode } from "react";
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

// Pre-render /id and /en at build time
export function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]"> & { children: ReactNode }) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`dark ${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="bg-surface font-sans text-ink antialiased min-h-screen flex flex-col">
        <Navbar lang={lang as Locale} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang as Locale} />
      </body>
    </html>
  );
}
