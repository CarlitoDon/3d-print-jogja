import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/wa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Cetak 3D FDM & Resin SLA — 3D Print Jogja",
  description: "Layanan manufaktur aditif lengkap: FDM Filament, SLA Resin, 3D Scanning, Reverse Engineering, dan Desain 3D CAD di Yogyakarta.",
};

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto flex flex-col gap-24">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface-raised text-xs font-mono text-brand mb-4">
          Layanan Manufaktur Aditif
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Solusi cetak 3D dari prototipe hingga produksi massal.
        </h1>
        <p className="text-lg text-ink-muted max-w-3xl leading-relaxed">
          Kami menyediakan teknologi cetak FDM dan SLA Resin presisi tinggi, didukung konsultasi pemilihan material rekayasa dan optimasi desain untuk manufaktur (DFAM).
        </p>
      </div>

      {/* Service 1: FDM Printing */}
      <section id="fdm" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-border">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded bg-brand/10 text-brand border border-brand/30 font-semibold">
              01 · FDM
            </span>
            <span className="text-xs font-mono text-ink-muted">Fused Deposition Modeling</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
            Cetak 3D FDM / FFF
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Metode cetak filamen termoplastik lapis demi lapis. Sangat ekonomis untuk part berskala besar, prototipe fungsional, jig & fixture pabrik, serta housing elektronik yang kokoh.
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs font-mono bg-surface-raised p-6 rounded-xl border border-border">
            <div>
              <span className="text-ink font-semibold block mb-1">Mulai Dari</span>
              <span className="text-brand font-bold text-sm">Rp 600 / gram</span>
            </div>
            <div>
              <span className="text-ink font-semibold block mb-1">Ukuran Cetak Maksimal</span>
              <span className="text-ink">350 × 350 × 400 mm</span>
            </div>
            <div>
              <span className="text-ink font-semibold block mb-1">Layer Resolution</span>
              <span className="text-ink">0.12 mm – 0.28 mm</span>
            </div>
            <div>
              <span className="text-ink font-semibold block mb-1">Material Support</span>
              <span className="text-ink">PLA+, PETG, TPU, ABS, ASA, PA-CF</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/${lang}/calculator`}
              className="px-6 py-3 rounded-full bg-brand text-black font-semibold text-xs font-mono hover:bg-brand-dim transition-colors"
            >
              Hitung Biaya FDM →
            </Link>
            <a
              href={waLink("Halo 3D Print Jogja, saya ingin konsultasi cetak FDM.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border bg-surface-raised text-ink text-xs font-mono hover:bg-surface-overlay transition-colors"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface-raised">
          <Image
            src="/hero/fdm-printer.jpg"
            alt="Proses Cetak 3D FDM Nozzle"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Service 2: SLA Resin Printing */}
      <section id="resin" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-border">
        <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface-raised">
          <Image
            src="/hero/resin-printer.jpg"
            alt="Proses Cetak 3D Resin SLA"
            fill
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded bg-brand/10 text-brand border border-brand/30 font-semibold">
              02 · SLA / MSLA
            </span>
            <span className="text-xs font-mono text-ink-muted">Stereolithography Photopolymer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
            Cetak 3D Resin SLA
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Menggunakan sinar UV untuk memadatkan cairan resin fotopolimer dengan resolusi layar 14K. Menghasilkan permukaan kaca halus tanpa garis layer, ideal untuk detail mikron, model miniatur, casting perhiasan, dan purwarupa presisi tinggi.
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs font-mono bg-surface-raised p-6 rounded-xl border border-border">
            <div>
              <span className="text-ink font-semibold block mb-1">Mulai Dari</span>
              <span className="text-brand font-bold text-sm">Rp 1.200 / gram</span>
            </div>
            <div>
              <span className="text-ink font-semibold block mb-1">Layer Resolution</span>
              <span className="text-ink">0.025 mm – 0.05 mm</span>
            </div>
            <div>
              <span className="text-ink font-semibold block mb-1">Finishing</span>
              <span className="text-ink">Ultrasonic Wash + UV Curing Oven</span>
            </div>
            <div>
              <span className="text-ink font-semibold block mb-1">Material Resin</span>
              <span className="text-ink">Standard, Tough, Castable, Bio</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/${lang}/calculator`}
              className="px-6 py-3 rounded-full bg-brand text-black font-semibold text-xs font-mono hover:bg-brand-dim transition-colors"
            >
              Hitung Biaya Resin →
            </Link>
            <a
              href={waLink("Halo 3D Print Jogja, saya ingin konsultasi cetak Resin SLA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border bg-surface-raised text-ink text-xs font-mono hover:bg-surface-overlay transition-colors"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Service 3 & 4: 3D Scan & CAD Modeling */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-border">
        {/* 3D Scanning */}
        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-brand uppercase tracking-wider block mb-2">
              03 · Reverse Engineering
            </span>
            <h3 className="text-2xl font-bold mb-3">3D Scanning & Inspeksi</h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              Punya part fisik yang rusak, langka, atau tanpa gambar teknik? Bawa ke studio kami untuk di-scan 3D menjadi file mesh digital CAD dengan akurasi hingga 0.02 mm.
            </p>
          </div>
          <a
            href={waLink("Halo, saya ingin tanya jasa 3D scan & reverse engineering.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1 font-semibold"
          >
            Konsultasi 3D Scan via WhatsApp →
          </a>
        </div>

        {/* 3D CAD Modeling */}
        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-brand uppercase tracking-wider block mb-2">
              04 · Desain Produk
            </span>
            <h3 className="text-2xl font-bold mb-3">3D Modeling & CAD Design</h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              Hanya punya sketsa kasar di kertas atau ide konsep? Tim desainer kami membantu memodelkan part ke format STEP/STL siap cetak dengan toleransi perakitan presisi.
            </p>
          </div>
          <a
            href={waLink("Halo, saya belum punya file 3D dan ingin dibantu pemodelan CAD.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1 font-semibold"
          >
            Konsultasi Jasa Desain CAD →
          </a>
        </div>
      </section>
    </div>
  );
}
