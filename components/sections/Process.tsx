import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { waLink } from "@/lib/wa";
import type { Locale } from "@/proxy";

export async function Process({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);

  const steps = [
    {
      num: "01",
      title: dict.process.step1Title,
      desc: dict.process.step1Desc,
      cta: dict.nav.allServices,
      href: `/${lang}/services`,
    },
    {
      num: "02",
      title: dict.process.step2Title,
      desc: dict.process.step2Desc,
      cta: dict.nav.calculator,
      href: `/${lang}/calculator`,
    },
    {
      num: "03",
      title: dict.process.step3Title,
      desc: dict.process.step3Desc,
      cta: "WhatsApp",
      href: waLink(),
      external: true,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-border">
      <div className="mb-16">
        <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">
          {dict.process.subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {dict.process.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col justify-between p-8 rounded-xl border border-border bg-surface-raised relative overflow-hidden"
          >
            <div>
              <span className="font-mono text-3xl font-bold text-ink-faint block mb-6">
                {step.num}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                {step.desc}
              </p>
            </div>
            {step.external ? (
              <a
                href={step.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1"
              >
                {step.cta} →
              </a>
            ) : (
              <Link
                href={step.href}
                className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1"
              >
                {step.cta} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
