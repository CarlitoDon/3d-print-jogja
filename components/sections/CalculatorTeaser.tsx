import Link from "next/link";
import { getDict } from "@/lib/i18n";
import type { Locale } from "@/proxy";

const MATERIALS_FDM = [
  "PLA+", "PETG", "TPU", "ABS", "ASA", "PLA-CF", "PETG-CF",
  "Easy PA", "PC", "PA-CF", "PA6-GF", "PA6-CF", "PA12-CF",
];

const MATERIALS_RESIN = [
  "Standard Resin", "ABS-Like Resin", "Flex Resin", "Castable Resin",
];

export async function CalculatorTeaser({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);

  return (
    <section id="calculator" className="py-24 px-6 max-w-7xl mx-auto border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">
            {dict.calculator.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {dict.calculator.title}
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-8">
            {dict.calculator.weightHelp}
          </p>

          {/* Materials preview */}
          <div className="mb-6">
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-3">
              FDM — {MATERIALS_FDM.length} material
            </span>
            <div className="flex flex-wrap gap-2">
              {MATERIALS_FDM.map((m) => (
                <span
                  key={m}
                  className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface-raised text-ink-muted font-mono"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-3">
              SLA / Resin — {MATERIALS_RESIN.length} material
            </span>
            <div className="flex flex-wrap gap-2">
              {MATERIALS_RESIN.map((m) => (
                <span
                  key={m}
                  className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface-raised text-ink-muted font-mono"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/${lang}/calculator`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand text-black text-sm font-mono font-semibold hover:bg-brand-dim transition-colors"
          >
            {dict.hero.cta}
          </Link>
        </div>

        {/* Right: upload dropzone mockup */}
        <div className="border border-dashed border-border rounded-2xl bg-surface-raised p-10 flex flex-col items-center justify-center min-h-64 text-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-surface-overlay flex items-center justify-center text-2xl">
            ⬆
          </div>
          <p className="text-sm font-mono text-ink-muted">{dict.calculator.uploadPrompt}</p>
          <p className="text-xs text-ink-faint font-mono">{dict.calculator.formats}</p>
          <Link
            href={`/${lang}/calculator`}
            className="text-xs font-mono text-brand hover:underline"
          >
            {dict.nav.calculator} →
          </Link>
        </div>
      </div>
    </section>
  );
}
