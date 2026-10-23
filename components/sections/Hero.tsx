import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/lib/i18n";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import type { Locale } from "@/proxy";

export async function Hero({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);

  return (
    <section className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-border">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(232,255,68,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface-raised text-xs font-mono text-ink-muted mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          {dict.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl leading-[1.05] mb-6">
          {dict.hero.headlineLead}{" "}
          <span className="text-brand font-mono font-medium underline decoration-brand/30 underline-offset-8">
            {dict.hero.headlineAccent}
          </span>{" "}
          {dict.hero.headlineTrail}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-ink-muted max-w-2xl mb-10 leading-relaxed font-sans">
          {dict.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <Link
            href={`/${lang}/calculator`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand text-black font-semibold text-sm font-mono hover:bg-brand-dim transition-all shadow-[0_0_30px_rgba(232,255,68,0.2)]"
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

        {/* Hero Visual Showpiece */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-surface-raised shadow-2xl group">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/hero/hero-desktop.jpg"
              alt="Hasil cetak 3D FDM dan Resin SLA 3D Print Jogja"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/40 via-transparent to-surface/40" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface/80 backdrop-blur-md border border-border text-left">
              <div>
                <span className="text-[11px] font-mono text-brand uppercase tracking-wider block">
                  Studio Sample Display
                </span>
                <p className="text-sm font-medium text-ink">
                  Mechanical parts, custom enclosures, gear ratio & high-detail miniatures
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                <span className="px-2 py-1 rounded bg-surface-raised border border-border">FDM (0.12mm)</span>
                <span className="px-2 py-1 rounded bg-surface-raised border border-border">SLA (0.05mm)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-12 pt-8 border-t border-border/50 text-left">
          <div>
            <span className="text-2xl md:text-3xl font-mono font-bold text-ink block">20+</span>
            <span className="text-xs text-ink-muted font-mono">Pilihan Material Filament & Resin</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-mono font-bold text-brand block">0.05 mm</span>
            <span className="text-xs text-ink-muted font-mono">Presisi Layer SLA Tertinggi</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-mono font-bold text-ink block">&lt; 24 Jam</span>
            <span className="text-xs text-ink-muted font-mono">Turnaround Prototipe Cepat</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-mono font-bold text-ink block">100%</span>
            <span className="text-xs text-ink-muted font-mono">Kirim Aman se-Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
