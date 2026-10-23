import { FadeIn, Stagger, StaggerItem, MotionCard } from "@/components/ui/motion";
import type { Locale } from "@/proxy";

interface Material {
  name: string;
  desc: string;
  density: string;
  use: string;
  type: "fdm" | "resin";
}

const MATERIALS: Material[] = [
  { name: "PLA+", desc: "Andalan harian rapi & presisi", density: "1.24 g/cm³", use: "Prototipe, display, part kustom", type: "fdm" },
  { name: "PETG", desc: "Kuat, tahan cuaca & kimia", density: "1.27 g/cm³", use: "Enclosure, komponen fungsional", type: "fdm" },
  { name: "TPU 95A", desc: "Elastis fleksibel seperti karet", density: "1.21 g/cm³", use: "Seal, gasket, bumper pelindung", type: "fdm" },
  { name: "ABS", desc: "Tahan panas & benturan tinggi", density: "1.05 g/cm³", use: "Otomotif, housing elektronik", type: "fdm" },
  { name: "ASA", desc: "Formula UV outdoor tahan terik", density: "1.07 g/cm³", use: "Part eksterior kendaraan, signage", type: "fdm" },
  { name: "PA-CF", desc: "Nylon diperkuat serat karbon", density: "1.09 g/cm³", use: "Komponen mekanik beban ekstrem", type: "fdm" },
  { name: "Standard Resin", desc: "Detail mikron permukaan kaca", density: "1.10 g/cm³", use: "Miniatur karakter, perhiasan", type: "resin" },
  { name: "ABS-Like Resin", desc: "Resin liat tidak mudah getas", density: "1.18 g/cm³", use: "Prototipe fungsional berpresisi", type: "resin" },
];

export function MaterialsGrid({ lang: _lang }: { lang: Locale }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-border">
      <FadeIn direction="up">
        <div className="mb-16">
          <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">Material Engineering</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Pilih material terbaik untuk fungsi part Anda.
          </h2>
        </div>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {MATERIALS.map((m) => (
          <StaggerItem key={m.name}>
            <MotionCard className="p-6 rounded-2xl border border-border bg-surface-raised flex flex-col justify-between h-full hover:border-brand/40 transition-colors">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-base font-bold text-ink">{m.name}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    m.type === "fdm"
                      ? "border-brand/40 text-brand bg-brand/5"
                      : "border-border text-ink-muted bg-surface"
                  }`}>
                    {m.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-ink-muted mb-3 leading-relaxed">{m.desc}</p>
                <p className="text-[11px] text-ink-faint font-mono mb-4">Densitas: {m.density}</p>
              </div>
              <p className="text-xs text-ink-muted border-t border-border pt-3 font-sans">
                {m.use}
              </p>
            </MotionCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
