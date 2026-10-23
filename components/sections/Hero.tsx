import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import type { Locale } from "@/proxy";

export async function Hero({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-border">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-surface-overlay)_0%,_transparent_70%)] pointer-events-none opacity-40" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-raised text-xs font-mono text-ink-muted mb-8">
        <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
        {dict.hero.badge}
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.08] mb-6">
        {dict.hero.headlineLead}{" "}
        <span className="text-brand italic font-mono font-normal">
          {dict.hero.headlineAccent}
        </span>{" "}
        {dict.hero.headlineTrail}
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-ink-muted max-w-2xl mb-10 leading-relaxed">
        {dict.hero.subtitle}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href={`/${lang}/calculator`}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand text-black font-semibold text-sm font-mono hover:bg-brand-dim transition-colors"
        >
          {dict.hero.cta}
        </Link>
        <a
          href={waLink(WA_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border bg-surface-raised text-ink text-sm font-mono hover:bg-surface-overlay transition-colors"
        >
          {dict.hero.ctaWa}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-ink-faint text-xs font-mono">
        <span>{dict.hero.scroll}</span>
        <div className="w-px h-6 bg-border animate-bounce" />
      </div>
    </section>
  );
}
