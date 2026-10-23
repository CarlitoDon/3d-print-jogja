import type { Locale } from "@/proxy";

// Render at request time (dynamic params: lang)
export const instant = false;

export default async function LayananPage({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  void lang;

  return (
    <section className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">
          services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Layanan
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl">
          Cetak 3D FDM & resin SLA, reverse engineering, dan 3D modeling.
        </p>
      </div>
      <div className="border border-border rounded-xl p-12 bg-surface-raised text-center text-ink-faint font-mono text-sm">
        🚧 Halaman ini sedang dibangun
      </div>
    </section>
  );
}
