import Link from "next/link";
import { waLink } from "@/lib/wa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cara Kerja & Alur Pemesanan — 3D Print Jogja",
  description: "Alur pemesanan jasa cetak 3D FDM & Resin SLA: Siapkan file -> Dapatkan penawaran -> Produksi -> Quality check & pengiriman.",
};

const STEPS = [
  {
    step: "01",
    title: "Kirim File Model 3D",
    desc: "Unggah file format STL, OBJ, 3MF, atau STEP langsung ke kalkulator kami atau kirimkan via WhatsApp / Email. Jika belum memiliki file 3D, kirimkan foto benda atau sketsa ukuran untuk kami bantu pemodelan CAD.",
    badge: "Format: STL, OBJ, 3MF, STEP",
  },
  {
    step: "02",
    title: "Review Geometri & Penawaran Harga",
    desc: "Tim teknis kami membedah orientasi cetak, kekuatan part, kebutuhan support, dan merekomendasikan material paling optimal. Anda menerima penawaran harga final & estimasi waktu pengerjaan dalam hitungan menit.",
    badge: "Transparan & Tanpa Biaya Tersembunyi",
  },
  {
    step: "03",
    title: "Proses Cetak di 3D Farm",
    desc: "File diproses dengan slicer terkalibrasi tinggi pada printer tertutup (enclosed) dengan profil filamen yang sudah dituning. Pengerjaan dimulai segera setelah konfirmasi pembayaran DP.",
    badge: "Kontrol Suhu & Kelembapan Terjaga",
  },
  {
    step: "04",
    title: "Post-Processing & Quality Control",
    desc: "Untuk FDM: pembersihan support dan deburring. Untuk Resin: ultrasonic alcohol wash, UV light post-curing chamber, serta inspeksi dimensi dengan kaliper digital.",
    badge: "Standar Toleransi Presisi",
  },
  {
    step: "05",
    title: "Pengemasan Aman & Pengiriman",
    desc: "Part dibungkus berlapis bubble wrap tebal dan kardus kokoh. Dikirim via kurir instan (Grab/Gojek) untuk area Jogja atau ekspedisi (JNE, SiCepat, Paxel, J&T) dengan nomor resi aktif.",
    badge: "Kirim ke Seluruh Indonesia",
  },
];

export default async function HowItWorksPage({
  params,
}: PageProps<"/[lang]/how-it-works">) {
  const { lang } = await params;

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto flex flex-col gap-16">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface-raised text-xs font-mono text-brand mb-4">
          Alur Kerja
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Proses pemesanan mudah, cepat, dan transparan.
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
          Dari file digital hingga benda fisik di tangan Anda hanya dalam beberapa langkah terukur.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {STEPS.map((s) => (
          <div
            key={s.step}
            className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl border border-border bg-surface-raised items-start"
          >
            <span className="font-mono text-3xl sm:text-4xl font-bold text-brand block sm:w-16 flex-shrink-0">
              {s.step}
            </span>
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-ink">{s.title}</h2>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-surface border border-border text-ink-muted self-start">
                  {s.badge}
                </span>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-10 rounded-2xl border border-brand/30 bg-surface-raised flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Siap mencetak proyek Anda?</h3>
          <p className="text-sm text-ink-muted">
            Hitung estimasi seketika atau chat langsung dengan teknisi kami.
          </p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            href={`/${lang}/calculator`}
            className="px-6 py-3 rounded-full bg-brand text-black font-semibold text-xs font-mono hover:bg-brand-dim transition-colors"
          >
            Kalkulator Online →
          </Link>
          <a
            href={waLink("Halo, saya ingin tanya alur pemesanan cetak 3D.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-border bg-surface text-ink text-xs font-mono hover:bg-surface-overlay transition-colors"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
