import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Locale } from "@/proxy";

export function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]"> & { children: ReactNode }) {
  const { lang } = await params;

  return (
    <>
      <Navbar lang={lang as Locale} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang as Locale} />
    </>
  );
}
