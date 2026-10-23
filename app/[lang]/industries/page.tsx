import type { Locale } from "@/proxy";

// Render at request time (dynamic params: lang)
export const instant = false;

export default async function IndustriPage({
  params,
}: PageProps<"/[lang]/industries">) {
  const { lang } = await params;
  void lang;

  return (
    <section className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs text-brand uppercase tracking-wider mb-2">
          industries
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Industri
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl">
          Kami melayani berbagai industri: otomotif, arsitektur, elektronik, dan lainnya.
        </p>
      </div>
      <div className="border border-border rounded-xl p-12 bg-surface-raised text-center text-ink-faint font-mono text-sm">
        🚧 Halaman ini sedang dibangun
      </div>
    </section>
  );
}
