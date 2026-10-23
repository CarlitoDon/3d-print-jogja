import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi — 3D Print Jogja",
  description: "Hubungi tim 3D Print Jogja via WhatsApp, email, atau buat janji temu kunjungan langsung ke studio kami di Yogyakarta.",
};

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto flex flex-col gap-16">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface-raised text-xs font-mono text-brand mb-4">
          Hubungi Kami
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Mari wujudkan ide 3D Anda hari ini.
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
          Konsultasi teknis, penawaran harga khusus proyek skala besar, tender institusi, atau sekadar tanya rekomendasi material terbaik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* WhatsApp Channel (Fastest) */}
        <div className="p-8 rounded-2xl border border-brand/40 bg-surface-raised flex flex-col justify-between shadow-[0_0_40px_rgba(232,255,68,0.05)]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">💬</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/30">
                Respon Tercepat &lt; 15 Menit
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">WhatsApp Direct</h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              Kirimkan file 3D (.STL/.STEP), foto contoh benda, atau diskusikan spesifikasi teknis langsung dengan tim engineer kami.
            </p>
            <div className="font-mono text-xs text-ink-muted space-y-1 mb-6">
              <div>Jam Operasional: 09.00 – 21.00 WIB</div>
              <div>Kirim File Langsung Terhubung ke Teknisi</div>
            </div>
          </div>

          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-brand text-black font-semibold text-center font-mono text-sm hover:bg-brand-dim transition-colors flex items-center justify-center gap-2"
          >
            Mulai Chat via WhatsApp →
          </a>
        </div>

        {/* Email & Form Channel */}
        <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">✉️</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-ink-muted">
                Untuk Tender & Kuantiti
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Email & B2B Invoice</h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              Untuk institusi riset, universitas, instansi pemerintah, atau korporasi yang memerlukan penawaran resmi, MoU, NPWP, atau faktur pajak.
            </p>
            <div className="font-mono text-xs text-ink space-y-2 mb-6">
              <div className="p-3 rounded-lg bg-surface border border-border">
                halo@3dprintjogja.com
              </div>
            </div>
          </div>

          <a
            href="mailto:halo@3dprintjogja.com?subject=Inquiry%20Cetak%203D%20B2B"
            className="w-full py-3.5 rounded-xl border border-border bg-surface text-ink font-semibold text-center font-mono text-sm hover:bg-surface-overlay transition-colors"
          >
            Kirim Email Resmi →
          </a>
        </div>
      </div>

      {/* Studio Location Details */}
      <div className="p-8 rounded-2xl border border-border bg-surface-raised flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-brand uppercase tracking-wider block mb-1">
            Studio Workshop
          </span>
          <h3 className="text-xl font-bold text-ink">Yogyakarta Farm & Laboratory</h3>
          <p className="text-sm text-ink-muted font-mono mt-1">
            D.I. Yogyakarta, Indonesia · Kunjungan konsultasi fisik dengan janji temu
          </p>
        </div>

        <Link
          href={`/${lang}/calculator`}
          className="px-6 py-3 rounded-full bg-surface border border-border text-xs font-mono text-ink hover:text-brand hover:border-brand/40 transition-colors"
        >
          Buka Kalkulator Online →
        </Link>
      </div>
    </div>
  );
}
