import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/wa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang KreaForma — 3D Printing Jogja",
  description: "Studio cetak 3D mandiri & workshop produksi berbasis di Yogyakarta. Menghadirkan teknologi FDM dan Resin SLA presisi untuk makers, insinyur, arsitek, dan pelaku bisnis.",
};

export default async function AboutPage({
  params,
}: PageProps<"/[lang]/about">) {
  const { lang } = await params;

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto flex flex-col gap-20">
      {/* Hero Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface-raised text-xs font-mono text-brand mb-4">
          Tentang KreaForma
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
          Menghadirkan manufaktur presisi dari workshop nyata di Yogyakarta.
        </h1>
        <p className="text-lg text-ink-muted max-w-3xl leading-relaxed">
          KreaForma berawal dari garasi studio mandiri di Jogja untuk menjawab kebutuhan perancang produk, insinyur, arsitek, dan makers yang membutuhkan purwarupa fisik cepat tanpa minimum order pabrik.
        </p>
      </div>

      {/* Workshop Image Banner */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border bg-surface-raised shadow-2xl">
        <Image
          src="/about/studio.jpg"
          alt="Studio Workshop Semi Gudang 3D Printing KreaForma di Yogyakarta"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/85 backdrop-blur-md border border-border text-left">
          <span className="text-xs font-mono text-brand font-semibold block mb-1">
            Workshop & Farm KreaForma di Yogyakarta
          </span>
          <p className="text-xs text-ink-muted font-mono">
            Setup semi-gudang mandiri · Bambu Lab Enclosed Units · Filament Dry Storage & Inspection Bench
          </p>
        </div>
      </div>

      {/* Values & Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col gap-4">
          <span className="text-3xl">📐</span>
          <h2 className="text-xl font-bold">Akurasi & Fitting Nyata</h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Setiap part diuji dengan digital caliper langsung di meja perakitan kami untuk memastikan toleransi lubang baut, ulir, dan clearance komponen presisi sesuai gambar teknik Anda.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col gap-4">
          <span className="text-3xl">📦</span>
          <h2 className="text-xl font-bold">Penyimpanan Terjaga</h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Semua filamen disimpan dalam dry box tertutup kedap udara dengan silica gel aktif untuk mencegah kelembapan tropis, menjamin part Anda bebas gelembung dan tidak rapuh.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col gap-4">
          <span className="text-3xl">⚡</span>
          <h2 className="text-xl font-bold">Lokal, Cepat, Fleksibel</h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Tanpa birokrasi berbelit. Pesanan bisa diambil langsung di lokasi Jogja, dikirim GoSend/Grab instan hari yang sama, atau dikemas aman dengan bubble tebal ke luar kota.
          </p>
        </div>
      </div>

      {/* Location & Studio Visit */}
      <div className="p-10 rounded-2xl border border-border bg-surface-raised grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xs font-mono text-brand uppercase tracking-wider block mb-2">
            Lokasi & Kunjungan
          </span>
          <h2 className="text-3xl font-bold mb-4">Kunjungi Workshop Kami</h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-6">
            Ingin melihat sampel cetak berbagai filamen, memegang langsung material TPU fleksibel atau serat karbon PA-CF, atau membawa benda fisik untuk diukur? Silakan hubungi kami via WhatsApp untuk membuat janji temu.
          </p>
          <div className="flex flex-col gap-2 text-xs font-mono text-ink-muted mb-6">
            <div>📍 Yogyakarta, D.I. Yogyakarta 55281</div>
            <div>⏰ Senin – Sabtu: 09.00 – 17.00 WIB</div>
            <div>📦 Pengiriman setiap hari kerja (JNE, SiCepat, J&T, Paxel, Grab/Gojek)</div>
          </div>
          <a
            href={waLink("Halo KreaForma, saya ingin reservasi janji temu kunjungan ke workshop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 rounded-full bg-brand text-black font-semibold text-xs font-mono hover:bg-brand-dim transition-colors"
          >
            Buat Janji Temu via WhatsApp →
          </a>
        </div>

        <div className="border border-border rounded-xl p-8 bg-surface flex flex-col gap-4 text-center items-center justify-center min-h-64">
          <span className="text-4xl">🛠️</span>
          <h3 className="font-bold text-lg">Workshop Studio Jogja</h3>
          <p className="text-xs text-ink-muted font-mono max-w-xs">
            Melayani pick-up langsung di lokasi, pengiriman instan se-DIY, dan ekspedisi kilat reguler ke seluruh kota di Indonesia.
          </p>
          <Link
            href={`/${lang}/calculator`}
            className="text-xs font-mono text-brand hover:underline mt-2 font-semibold"
          >
            Coba Kalkulator Biaya Online →
          </Link>
        </div>
      </div>
    </div>
  );
}
