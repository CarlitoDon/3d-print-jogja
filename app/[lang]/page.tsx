import { Hero } from "@/components/sections/Hero";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { Process } from "@/components/sections/Process";
import { CalculatorTeaser } from "@/components/sections/CalculatorTeaser";
import { MaterialsGrid } from "@/components/sections/MaterialsGrid";
import type { Locale } from "@/proxy";
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDict(lang as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <>
      <Hero lang={lang as Locale} />
      <TechShowcase lang={lang as Locale} />
      <Process lang={lang as Locale} />
      <CalculatorTeaser lang={lang as Locale} />
      <MaterialsGrid lang={lang as Locale} />
    </>
  );
}
