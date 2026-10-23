import Link from "next/link";
import { waLink } from "@/lib/wa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanya Jawab (FAQ) — 3D Print Jogja",
  description: "Pertanyaan yang sering diajukan mengenai format file, toleransi presisi, waktu pengerjaan, pilihan material, dan pengiriman cetak 3D di Jogja.",
};

const FAQS = [
  {
    q: "Format file 3D apa saja yang didukung?",
    a: "Format yang paling direkomendasikan adalah .STL, .STEP (.stp), .OBJ, dan .3MF. Jika Anda menggunakan software CAD seperti SolidWorks, Fusion 360, atau Inventor, export dalam format .STEP untuk menjaga geometri kurva tetap mulus sempurna.",
  },
  {
    q: "Bagaimana jika saya belum memiliki file 3D sama sekali?",
    a: "Tenang, Anda tetap bisa memesan! Tim desainer 3D kami siap membantu membuat model dari awal berdasarkan sketsa tangan berdimensi, foto dari berbagai sudut, atau membawa benda fisik langsung ke studio kami untuk di-scan 3D.",
  },
  {
    q: "Berapa lama proses cetaknya?",
    a: "Untuk part kecil hingga menengah (di bawah 100 gram), waktu pengerjaan biasanya berkisar antara 6 hingga 24 jam. Proyek berskala besar atau kuantiti banyak dikerjakan secara paralel di print farm kami dengan estimasi 1-3 hari kerja.",
  },
  {
    q: "Apa perbedaan mendasar antara FDM dan Resin SLA?",
    a: "FDM mencairkan filamen plastik layer demi layer. Sangat tangguh, pilihan material beragam (dari yang fleksibel sampai serat karbon), dan sangat ekonomis untuk part mekanikal berukuran sedang-besar. Sedangkan SLA Resin menggunakan sinar UV untuk memadatkan cairan resin, menghasilkan detail mikron yang luar biasa tajam tanpa garis layer kasat mata, sangat cocok untuk miniatur karakter atau cetakan perhiasan.",
  },
  {
    q: "Berapa batas toleransi perakitan (clearance) yang disarankan?",
    a: "Untuk perakitan pas bergerak (sliding fit), kami sarankan memberikan celah (clearance) 0.3 mm – 0.4 mm pada model CAD Anda. Untuk perakitan pas tekan (press fit), celah 0.15 mm – 0.2 mm sudah ideal.",
  },
  {
    q: "Bagaimana cara pengirimannya?",
    a: "Untuk wilayah D.I. Yogyakarta, pesanan dapat diambil langsung di studio atau dikirim melalui GoSend/GrabExpress. Untuk pengiriman luar kota/luar pulau, kami menggunakan bubble wrap berlapis tebal dan kardus keras via JNE, SiCepat, atau Paxel berpendingin/reguler dengan garansi cetak ulang jika terjadi cacat selama ekspedisi.",
  },
  {
    q: "Apakah ada minimum order?",
    a: "Tidak ada minimum kuantiti! Minimum transaksi di 3D Print Jogja hanya Rp 25.000 saja. Anda bisa mencetak 1 buah part baut kecil sekalipun.",
  },
];

export default async function FaqPage({
  params,
}: PageProps<"/[lang]/faq">) {
  const { lang } = await params;

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto flex flex-col gap-16">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface-raised text-xs font-mono text-brand mb-4">
          Tanya Jawab
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Pertanyaan yang Sering Diajukan
        </h1>
        <p className="text-base text-ink-muted leading-relaxed">
          Semua yang perlu Anda ketahui tentang persiapan file, toleransi presisi, waktu pengerjaan, dan material cetak 3D.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl border border-border bg-surface-raised flex flex-col gap-3"
          >
            <h2 className="text-lg sm:text-xl font-bold text-ink">
              {faq.q}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      {/* Still have questions */}
      <div className="p-8 rounded-2xl border border-border bg-surface text-center flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold">Masih ada pertanyaan lain?</h3>
        <p className="text-xs text-ink-muted max-w-md font-mono">
          Konsultasikan langsung geometri model atau kebutuhan cetak Anda dengan teknisi kami.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a
            href={waLink("Halo, saya ingin bertanya lebih lanjut seputar jasa cetak 3D.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-brand text-black font-semibold text-xs font-mono hover:bg-brand-dim transition-colors"
          >
            Chat WhatsApp Kami →
          </a>
          <Link
            href={`/${lang}/calculator`}
            className="px-6 py-2.5 rounded-full border border-border text-ink text-xs font-mono hover:bg-surface-raised transition-colors"
          >
            Buka Kalkulator
          </Link>
        </div>
      </div>
    </div>
  );
}
