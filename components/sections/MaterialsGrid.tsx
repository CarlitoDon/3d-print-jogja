import type { Locale } from "@/proxy";

interface Material {
  name: string;
  desc: string;
  density: string;
  use: string;
  type: "fdm" | "resin";
}

const MATERIALS: Material[] = [
  { name: "PLA+", desc: "Andalan sehari-hari", density: "1.24 g/cm³", use: "Prototipe, display, kustom part", type: "fdm" },
  { name: "PETG", desc: "Kuat + tahan kimia", density: "1.27 g/cm³", use: "Enclosure, komponen fungsional", type: "fdm" },
  { name: "TPU", desc: "Fleksibel & elastis", density: "1.21 g/cm³", use: "Seal, grip, pelindung", type: "fdm" },
  { name: "ABS", desc: "Tahan panas & benturan", density: "1.05 g/cm³", use: "Otomotif, housing elektronik", type: "fdm" },
  { name: "ASA", desc: "UV-resistant outdoor", density: "1.07 g/cm³", use: "Part outdoor, signage", type: "fdm" },
  { name: "PA-CF", desc: "Nylon serat karbon", density: "1.09 g/cm³", use: "Part rekayasa beban tinggi", type: "fdm" },
  { name: "Standard Resin", desc: "Detail tinggi", density: "1.1 g/cm³", use: "Miniatur, jewelry, gigi", type: "resin" },
  { name: "ABS-Like Resin", desc: "Tough resin", density: "1.18 g/cm³", use: "Prototipe fungsional", type: "resin" },
];

export function MaterialsGrid({ lang: _lang }: { lang: Locale }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-border">
      <div className="mb-16">
        <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">Material</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Pilih material yang tepat
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MATERIALS.map((m) => (
          <div
            key={m.name}
            className="p-6 rounded-xl border border-border bg-surface-raised flex flex-col gap-3 hover:border-brand/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-base font-semibold text-ink">{m.name}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                m.type === "fdm"
                  ? "border-brand/30 text-brand"
                  : "border-ink-faint text-ink-muted"
              }`}>
                {m.type.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-ink-muted">{m.desc}</p>
            <p className="text-xs text-ink-faint font-mono">{m.density}</p>
            <p className="text-xs text-ink-muted border-t border-border pt-3">{m.use}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
