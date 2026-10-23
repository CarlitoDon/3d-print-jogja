
export default async function IndustryPage({
  params,
}: PageProps<"/[lang]/industries/[slug]">) {
  const { slug } = await params;

  return (
    <section className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight capitalize mb-4">
        {slug.replace(/-/g, " ")}
      </h1>
      <div className="border border-border rounded-xl p-12 bg-surface-raised text-center text-ink-faint font-mono text-sm">
        🚧 Sedang dibangun
      </div>
    </section>
  );
}
