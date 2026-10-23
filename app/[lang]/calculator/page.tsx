import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator Estimasi Biaya Cetak 3D — 3D Print Jogja",
  description: "Hitung estimasi harga cetak 3D FDM & Resin SLA seketika. Upload file STL atau masukkan berat dalam gram, dapatkan penawaran akurat dalam hitungan detik.",
};

export default async function CalculatorPage({
  params,
}: PageProps<"/[lang]/calculator">) {
  const { lang } = await params;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-raised text-xs font-mono text-brand mb-4">
          Kalkulator Cetak 3D Online
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Estimasi Biaya & Konsultasi Instan
        </h1>
        <p className="text-base text-ink-muted max-w-2xl leading-relaxed">
          Unggah file model 3D (STL/OBJ/3MF/STEP) atau gunakan berat hasil slicer Anda untuk mendapatkan perkiraan biaya cetak transparan secara instan.
        </p>
      </div>

      <CalculatorForm lang={lang as "id" | "en"} />
    </section>
  );
}
