import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/proxy";

interface TechShowcaseProps {
  lang: Locale;
}

export function TechShowcase({ lang }: TechShowcaseProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-border">
      <div className="mb-16">
        <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">
          Teknologi & Produksi
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Dua metode cetak untuk setiap kebutuhan.
        </h2>
        <p className="text-ink-muted text-base max-w-2xl leading-relaxed">
          Dari prototipe fungsional tahan benturan hingga miniatur figurin ultra detail dengan ketebalan layer mikron.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* FDM Card */}
        <div className="rounded-2xl border border-border bg-surface-raised overflow-hidden flex flex-col group hover:border-brand/40 transition-colors">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/hero/fdm-printer.jpg"
              alt="FDM 3D Printing Nozzle Extruding PLA filament"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md border border-border text-xs font-mono text-brand font-semibold">
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
                  <span>0.12 – 0.28 mm</span>
                </div>
                <div>
                  <span className="text-ink block font-semibold mb-1">Max Build Size</span>
                  <span>Hingga 350 × 350 × 400 mm</span>
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
              Pelajari Cetak FDM →
            </Link>
          </div>
        </div>

        {/* SLA Resin Card */}
        <div className="rounded-2xl border border-border bg-surface-raised overflow-hidden flex flex-col group hover:border-brand/40 transition-colors">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/hero/resin-printer.jpg"
              alt="SLA Resin 3D Printing Lifting High-Detail Miniature"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md border border-border text-xs font-mono text-brand font-semibold">
              SLA · UV Photopolymer Resin
            </div>
          </div>
          <div className="p-8 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stereolithography (SLA Resin)</h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                Presisi ekstrem tanpa garis layer kasat mata. Sempurna untuk figurin, miniatur tabletop, perhiasan, mold dental, dan master casting.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-ink-muted mb-6 pt-4 border-t border-border">
                <div>
                  <span className="text-ink block font-semibold mb-1">Layer Height</span>
                  <span>0.025 – 0.05 mm (Micro-detail)</span>
                </div>
                <div>
                  <span className="text-ink block font-semibold mb-1">Resolusi Screen</span>
                  <span>14K Mono LCD</span>
                </div>
                <div>
                  <span className="text-ink block font-semibold mb-1">Material Utama</span>
                  <span>Standard, Tough, Castable, Bio</span>
                </div>
                <div>
                  <span className="text-ink block font-semibold mb-1">Karakter</span>
                  <span>Permukaan mulus, tajam mikron</span>
                </div>
              </div>
            </div>
            <Link
              href={`/${lang}/services#resin`}
              className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1 font-semibold"
            >
              Pelajari Cetak Resin →
            </Link>
          </div>
        </div>
      </div>

      {/* Materials Banner */}
      <div className="rounded-2xl border border-border bg-surface-raised overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-border">
          <Image
            src="/hero/materials.jpg"
            alt="Spool filament 3D print beraneka warna dan material"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="text-xs font-mono text-brand uppercase tracking-wider">
            Stok & Pilihan Filament
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Pilihan filamen industri siap pakai setiap hari.
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            Kami menjaga filamen dalam dry box tertutup dengan kelembapan di bawah 15% RH untuk memastikan hasil cetak tanpa stringing, gelembung udara, atau delaminasi antar layer.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["PLA+ High Speed", "PETG Weatherproof", "TPU 95A Flexible", "ABS Heat Resistant", "ASA UV Stable", "PA-CF Carbon"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-3 py-1 rounded-md bg-surface border border-border text-ink">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
