import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/wa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami — 3D Print Jogja",
  description: "Studio manufaktur aditif & 3D printing farm berbasis di Yogyakarta. Menghadirkan teknologi cetak 3D industri untuk makers, insinyur, dan pelaku bisnis.",
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
          Tentang Studio
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
          Mendekatkan manufaktur presisi tinggi ke ekosistem kreatif & teknologi Yogyakarta.
        </h1>
        <p className="text-lg text-ink-muted max-w-3xl leading-relaxed">
          3D Print Jogja berakar dari kebutuhan nyata para perancang produk, mahasiswa teknik, pegiat otomotif, dan seniman miniatur di Jogja yang membutuhkan purwarupa fisik cepat tanpa minimum order pabrik.
        </p>
      </div>

      {/* Workshop Image Banner */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border bg-surface-raised shadow-2xl">
        <Image
          src="/about/studio.jpg"
          alt="Studio Workshop 3D Print Jogja Farm"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/80 backdrop-blur-md border border-border text-left">
          <span className="text-xs font-mono text-brand font-semibold block mb-1">
            Workstation & Print Farm di Yogyakarta
          </span>
          <p className="text-xs text-ink-muted font-mono">
            Bambu Lab X1C / P1S Enclosed Units · Voron High-Speed · Elegoo Saturn 14K SLA Resin
          </p>
        </div>
      </div>

      {/* Values & Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col gap-4">
          <span className="text-3xl">📐</span>
          <h2 className="text-xl font-bold">Akurasi Dimensi Terjamin</h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Setiap printer dikalibrasi secara rutin (pressure advance, input shaping, vibration compensation) untuk memastikan lubang baut, ulir, dan clearance perakitan pas sesuai gambar teknik.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col gap-4">
          <span className="text-3xl">🔬</span>
          <h2 className="text-xl font-bold">Material Grade Industri</h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Tidak hanya sekadar PLA standar. Kami menyediakan filamen rekayasa: PA-CF (serat karbon tahan panas), ASA anti-UV cuaca luar ruangan, TPU fleksibel tahan abrasi, dan resin tangguh.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col gap-4">
          <span className="text-3xl">⚡</span>
          <h2 className="text-xl font-bold">Respon & Pengiriman Cepat</h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Estimasi harga langsung keluar. Farm printer kami siap beroperasi 24/7 untuk mengejar deadline tender, pameran, prototipe investor, atau tugas akhir mendesak.
          </p>
        </div>
      </div>

      {/* Location & Studio Visit */}
      <div className="p-10 rounded-2xl border border-border bg-surface-raised grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xs font-mono text-brand uppercase tracking-wider block mb-2">
            Lokasi & Kunjungan
          </span>
          <h2 className="text-3xl font-bold mb-4">Kunjungi Studio Kami</h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-6">
            Ingin melihat sampel hasil cetak berbagai material, mengecek tekstur permukaan langsung, atau membawa benda fisik untuk diukur? Hubungi kami via WhatsApp untuk membuat janji temu.
          </p>
          <div className="flex flex-col gap-2 text-xs font-mono text-ink-muted mb-6">
            <div>📍 Yogyakarta, D.I. Yogyakarta 55281</div>
            <div>⏰ Senin – Sabtu: 09.00 – 17.00 WIB</div>
            <div>📦 Pengiriman setiap hari kerja ke seluruh Indonesia</div>
          </div>
          <a
            href={waLink("Halo, saya ingin reservasi janji temu kunjungan ke studio 3D Print Jogja.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 rounded-full bg-brand text-black font-semibold text-xs font-mono hover:bg-brand-dim transition-colors"
          >
            Buat Janji Temu via WhatsApp →
          </a>
        </div>

        <div className="border border-border rounded-xl p-8 bg-surface flex flex-col gap-4 text-center items-center justify-center min-h-64">
          <span className="text-4xl">🏛️</span>
          <h3 className="font-bold text-lg">Yogyakarta Hub</h3>
          <p className="text-xs text-ink-muted font-mono max-w-xs">
            Melayani pick-up langsung di lokasi, pengiriman Grab/Gojek Instant se-DIY, dan ekspedisi kilat reguler ke Jawa, Bali, Sumatra, Kalimantan, Sulawesi, hingga Papua.
          </p>
          <Link
            href={`/${lang}/calculator`}
            className="text-xs font-mono text-brand hover:underline mt-2"
          >
            Hitung Estimasi Sekarang →
          </Link>
        </div>
      </div>
    </div>
  );
}
