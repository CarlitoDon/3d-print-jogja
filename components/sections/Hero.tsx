import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/lib/i18n";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
import type { Locale } from "@/proxy";

export async function Hero({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);

  return (
    <section className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-border">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(232,255,68,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Animated Badge */}
        <ScaleIn delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-surface-raised text-xs font-mono text-ink mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(232,255,68,0.15)]">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
            <span className="text-brand font-semibold">KreaForma</span>
            <span className="text-ink-faint">|</span>
            <span className="text-ink-muted">3D Printing Jogja</span>
          </div>
        </ScaleIn>

        {/* Animated Headline */}
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl leading-[1.05] mb-6">
            {dict.hero.headlineLead}{" "}
            <span className="text-brand font-mono font-medium underline decoration-brand/40 underline-offset-8">
              {dict.hero.headlineAccent}
            </span>{" "}
            {dict.hero.headlineTrail}
          </h1>
        </FadeIn>

        {/* Animated Subtitle */}
        <FadeIn direction="up" delay={0.3} duration={0.6}>
          <p className="text-lg md:text-xl text-ink-muted max-w-2xl mb-10 leading-relaxed font-sans">
            {dict.hero.subtitle}
          </p>
        </FadeIn>

        {/* Animated CTAs */}
        <FadeIn direction="up" delay={0.4} duration={0.6}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <Link
              href={`/${lang}/calculator`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand text-black font-semibold text-sm font-mono hover:bg-brand-dim transition-all shadow-[0_0_35px_rgba(232,255,68,0.3)] hover:scale-105 active:scale-95"
            >
              {dict.hero.cta} →
            </Link>
            <a
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-border bg-surface-raised text-ink text-sm font-mono hover:bg-surface-overlay hover:border-brand/40 transition-all hover:scale-105 active:scale-95"
            >
              {dict.hero.ctaWa}
            </a>
          </div>
        </FadeIn>

        {/* Hero Visual Showpiece with KreaForma signature showcase */}
        <FadeIn direction="up" delay={0.5} duration={0.7} className="w-full">
          <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-surface-raised shadow-2xl group hover:border-brand/40 transition-colors">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/brand/kreaforma-showcase.jpg"
                alt="KreaForma Signature Parametric 3D Sculpture & Mechanical Prototype"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/30 via-transparent to-surface/30" />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-surface/85 backdrop-blur-md border border-border text-left">
                <div className="flex items-center gap-3">
                  <div className="relative w-7 h-7 rounded overflow-hidden border border-brand/40 flex-shrink-0">
                    <Image src="/brand/kreaforma-mark.jpg" alt="KreaForma" fill sizes="28px" className="object-cover object-center" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-brand uppercase tracking-wider block font-semibold">
                      KreaForma Master Sculpture Series
                    </span>
                    <p className="text-sm font-medium text-ink">
                      Parametric lattice FDM carbon gear architecture + optical resin SLA precision
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                  <span className="px-2.5 py-1 rounded bg-surface-raised border border-border text-brand">FDM 0.12mm</span>
                  <span className="px-2.5 py-1 rounded bg-surface-raised border border-border text-brand">SLA 0.025mm</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Quick Stats Grid with Stagger */}
        <FadeIn direction="up" delay={0.6} duration={0.6} className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-12 pt-8 border-t border-border/50 text-left">
            <div className="p-4 rounded-xl bg-surface-raised border border-border/60 hover:border-brand/30 transition-colors">
              <span className="text-2xl md:text-3xl font-mono font-bold text-ink block mb-1">20+</span>
              <span className="text-xs text-ink-muted font-mono">Pilihan Material Filament & Resin</span>
            </div>
            <div className="p-4 rounded-xl bg-surface-raised border border-border/60 hover:border-brand/30 transition-colors">
              <span className="text-2xl md:text-3xl font-mono font-bold text-brand block mb-1">0.025 mm</span>
              <span className="text-xs text-ink-muted font-mono">Presisi Layer SLA Mikron</span>
            </div>
            <div className="p-4 rounded-xl bg-surface-raised border border-border/60 hover:border-brand/30 transition-colors">
              <span className="text-2xl md:text-3xl font-mono font-bold text-ink block mb-1">&lt; 24 Jam</span>
              <span className="text-xs text-ink-muted font-mono">Turnaround Prototipe Kilat</span>
            </div>
            <div className="p-4 rounded-xl bg-surface-raised border border-border/60 hover:border-brand/30 transition-colors">
              <span className="text-2xl md:text-3xl font-mono font-bold text-ink block mb-1">100%</span>
              <span className="text-xs text-ink-muted font-mono">Garansi Pengiriman Se-Indonesia</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
