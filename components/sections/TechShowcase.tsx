import Image from "next/image";
import Link from "next/link";
import { FadeIn, MotionCard } from "@/components/ui/motion";
import type { Locale } from "@/proxy";

interface TechShowcaseProps {
  lang: Locale;
}

export function TechShowcase({ lang }: TechShowcaseProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-border">
      <FadeIn direction="up">
        <div className="mb-16">
          <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">
            Teknologi & Fasilitas Produksi
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Dua teknologi cetak untuk setiap kebutuhan Anda.
          </h2>
          <p className="text-ink-muted text-base max-w-2xl leading-relaxed">
            Dari part fungsional tahan benturan hingga figurin detail mikron, dikerjakan langsung di workshop studio Yogyakarta.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* FDM Card */}
        <FadeIn direction="up" delay={0.1}>
          <MotionCard className="rounded-2xl border border-border bg-surface-raised overflow-hidden flex flex-col group hover:border-brand/50 transition-colors h-full">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/hero/fdm-printer.jpg"
                alt="FDM 3D Printing Nozzle Extruding PLA filament"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/85 backdrop-blur-md border border-border text-xs font-mono text-brand font-semibold shadow-lg">
                FDM · Filament Extrusion
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-2">Fused Deposition Modeling (FDM)</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  Pilihan terbaik untuk prototipe mekanikal, casing elektronik, komponen tahan panas, dan batch production yang ekonomis.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-ink-muted mb-6 pt-4 border-t border-border">
                  <div>
                    <span className="text-ink block font-semibold mb-1">Layer Height</span>
                    <span className="text-brand">0.12 – 0.28 mm</span>
                  </div>
                  <div>
                    <span className="text-ink block font-semibold mb-1">Max Build Size</span>
                    <span>350 × 350 × 400 mm</span>
                  </div>
                  <div>
                    <span className="text-ink block font-semibold mb-1">Material Utama</span>
                    <span>PLA+, PETG, ABS, TPU, PA-CF</span>
                  </div>
                  <div>
                    <span className="text-ink block font-semibold mb-1">Karakter</span>
                    <span>Kuat, tahan benturan, tahan panas</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/${lang}/services#fdm`}
                className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Pelajari Cetak FDM KreaForma →
              </Link>
            </div>
          </MotionCard>
        </FadeIn>

        {/* SLA Resin Card */}
        <FadeIn direction="up" delay={0.2}>
          <MotionCard className="rounded-2xl border border-border bg-surface-raised overflow-hidden flex flex-col group hover:border-brand/50 transition-colors h-full">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/hero/resin-printer.jpg"
                alt="SLA Resin 3D Printing Lifting High-Detail Miniature"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/85 backdrop-blur-md border border-border text-xs font-mono text-brand font-semibold shadow-lg">
                SLA · 14K Photopolymer Resin
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stereolithography (SLA Resin)</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  Presisi mikron tanpa garis layer kasat mata. Sempurna untuk figurin, miniatur tabletop, perhiasan, mold dental, dan master casting.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-ink-muted mb-6 pt-4 border-t border-border">
                  <div>
                    <span className="text-ink block font-semibold mb-1">Layer Height</span>
                    <span className="text-brand">0.025 – 0.05 mm (Mikron)</span>
                  </div>
                  <div>
                    <span className="text-ink block font-semibold mb-1">Resolusi Screen</span>
                    <span>14K Mono LCD Screen</span>
                  </div>
                  <div>
                    <span className="text-ink block font-semibold mb-1">Material Utama</span>
                    <span>Standard, Tough, Castable, Bio</span>
                  </div>
                  <div>
                    <span className="text-ink block font-semibold mb-1">Karakter</span>
                    <span>Permukaan mulus tanpa layer</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/${lang}/services#resin`}
                className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Pelajari Cetak Resin KreaForma →
              </Link>
            </div>
          </MotionCard>
        </FadeIn>
      </div>

      {/* Realistic Semi-Gudang Workshop Banner */}
      <FadeIn direction="up" delay={0.3}>
        <div className="rounded-2xl border border-border bg-surface-raised overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 hover:border-brand/40 transition-colors">
          <div className="relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-border shadow-xl">
            <Image
              src="/brand/kreaforma-farm.jpg"
              alt="Studio Workshop Cetak 3D KreaForma Yogyakarta"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-surface/85 backdrop-blur-md border border-border text-[10px] font-mono text-brand">
              Studio Workshop · Yogyakarta
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
              Fasilitas Workshop Mandiri
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Workshop cetak 3D mandiri siap produksi di Yogyakarta.
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Berbasis workshop semi-gudang di Jogja, armada printer enclosed Bambu Lab & Voron kami beroperasi setiap hari dengan filament dry box tertutup, kalibrasi rutin, dan pengemasan rapi siap kirim langsung ke lokasi Anda.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["PLA+ High Speed", "PETG Weatherproof", "TPU 95A Elastic", "ABS / ASA Heat", "PA-CF Carbon", "14K Tough Resin"].map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 rounded-md bg-surface border border-border text-ink">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
