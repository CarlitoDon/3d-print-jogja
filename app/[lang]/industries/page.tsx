import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sektor Industri & Portofolio — 3D Print Jogja",
  description: "Penerapan cetak 3D di berbagai sektor industri: Otomotif, Arsitektur, Elektronik & IoT, Hobi & Miniatur, Manufaktur, dan Medis.",
};

const INDUSTRIES = [
  {
    slug: "automotive",
    title: "Otomotif & Motorsport",
    subtitle: "Air intake duct, bracket dashboard, housing sensor, part modifikasi kustom",
    desc: "Menggunakan material tahan panas dan tahan getaran seperti ASA dan PA-CF (Nylon Carbon Fiber). Part dapat langsung dipasang di ruang mesin mobil atau motor.",
    image: "/industries/automotive.jpg",
    materials: ["ASA", "PA-CF", "PETG-CF", "ABS"],
  },
  {
    slug: "architecture",
    title: "Maket Arsitektur & Properti",
    subtitle: "Maket gedung, lanskap tapak, interior, fasad skala 1:50 hingga 1:500",
    desc: "Cetak maket putih bersih dengan presisi sudut tajam untuk presentasi tender arsitek, pameran pengembang real estate, dan tugas akhir mahasiswa arsitektur.",
    image: "/industries/architecture.jpg",
    materials: ["PLA+ Matte White", "Standard Resin", "PETG"],
  },
  {
    slug: "electronics",
    title: "Elektronik & Perangkat IoT",
    subtitle: "Custom enclosure box, casing PCB, mount baterai, fitting sensor",
    desc: "Housing kustom dengan lubang ventilasi honeycomb, dudukan baut brass heat-set insert, dan kompartemen baterai presisi tanpa perlu investasi cetakan injeksi mahal.",
    image: "/industries/electronics.jpg",
    materials: ["PETG Flame Retardant", "PLA+", "TPU Gasket", "ABS"],
  },
  {
    slug: "miniatures",
    title: "Hobi, Miniatur & Action Figure",
    subtitle: "Figurin tabletop RPG, diorama, keycaps kustom, cosplay props",
    desc: "Resolusi mikron SLA 14K menangkap tekstur zirah ksatria, lipatan jubah, ekspresi wajah, hingga detail mata tanpa garis layer terlihat sama sekali.",
    image: "/industries/miniatures.jpg",
    materials: ["14K Standard Resin", "ABS-Like Tough", "Flex Resin"],
  },
];

export default async function IndustriesPage({
  params,
}: PageProps<"/[lang]/industries">) {
  const { lang } = await params;

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto flex flex-col gap-16">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface-raised text-xs font-mono text-brand mb-4">
          Sektor Industri
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Manufaktur aditif untuk kebutuhan industri Anda.
        </h1>
        <p className="text-lg text-ink-muted max-w-3xl leading-relaxed">
          Kami telah bermitra dengan puluhan startup teknologi, konsultan arsitektur, bengkel modifikasi, institusi riset kampus di Jogja dan sekitarnya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.slug}
            className="rounded-2xl border border-border bg-surface-raised overflow-hidden flex flex-col group hover:border-brand/40 transition-colors"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-ink">{ind.title}</h2>
                <p className="text-xs font-mono text-brand mb-4">{ind.subtitle}</p>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">{ind.desc}</p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-ink-faint uppercase tracking-wider mb-2">
                  Material Direkomendasikan:
                </div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {ind.materials.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface border border-border text-ink-muted"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/${lang}/calculator`}
                  className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  Hitung Estimasi Kategori Ini →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
