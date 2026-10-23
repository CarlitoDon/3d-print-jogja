"use client";

import { useState, useId } from "react";
import { waLink } from "@/lib/wa";

interface MaterialOption {
  id: string;
  name: string;
  type: "fdm" | "resin";
  density: number; // g/cm3
  pricePerGram: number; // IDR
  desc: string;
}

const MATERIALS: MaterialOption[] = [
  // FDM
  { id: "pla-plus", name: "PLA+", type: "fdm", density: 1.24, pricePerGram: 600, desc: "Paling populer, finishing rapi, ideal untuk prototipe & display." },
  { id: "petg", name: "PETG", type: "fdm", density: 1.27, pricePerGram: 750, desc: "Tahan benturan & cuaca, tidak getas, tahan suhu hingga 75°C." },
  { id: "tpu", name: "TPU (Flexible)", type: "fdm", density: 1.21, pricePerGram: 950, desc: "Elastis seperti karet, tahan gesekan, untuk seal/casing." },
  { id: "abs", name: "ABS", type: "fdm", density: 1.05, pricePerGram: 800, desc: "Tahan panas hingga 95°C, bisa diamplas & di-vapor smoothing." },
  { id: "asa", name: "ASA (UV Outdoor)", type: "fdm", density: 1.07, pricePerGram: 850, desc: "Formula ABS khusus outdoor tahan sinar matahari tanpa pudar." },
  { id: "pa-cf", name: "PA-CF (Carbon)", type: "fdm", density: 1.09, pricePerGram: 1800, desc: "Nylon diperkuat serat karbon. Sangat kaku untuk part mesin." },
  // Resin SLA
  { id: "resin-std", name: "Standard Resin", type: "resin", density: 1.10, pricePerGram: 1200, desc: "Detail mikron sangat tajam, cocok untuk miniatur & figurin." },
  { id: "resin-tough", name: "ABS-Like Tough Resin", type: "resin", density: 1.18, pricePerGram: 1500, desc: "Lebih liat tidak mudah patah dibanding standard resin." },
  { id: "resin-cast", name: "Castable Jewelry Resin", type: "resin", density: 1.12, pricePerGram: 2500, desc: "Resin khusus pengecoran logam perak/emas tanpa abu residu." },
];

export function CalculatorForm({ lang }: { lang: "id" | "en" }) {
  const fileInputId = useId();
  const [selectedType, setSelectedType] = useState<"fdm" | "resin">("fdm");
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("pla-plus");
  const [infill, setInfill] = useState<number>(20);
  const [supportLevel, setSupportLevel] = useState<number>(15); // +15% support
  const [manualWeight, setManualWeight] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [parsedVolumeCm3, setParsedVolumeCm3] = useState<number | null>(null);

  const activeMaterial = MATERIALS.find((m) => m.id === selectedMaterialId) || MATERIALS[0];

  // Weight calculation
  let calculatedWeight = 0;
  if (manualWeight && !isNaN(Number(manualWeight)) && Number(manualWeight) > 0) {
    calculatedWeight = Number(manualWeight);
  } else if (parsedVolumeCm3 !== null) {
    // Basic solid volume * material density
    // Effective infill weighting (walls ~20% solid + infill ratio)
    const effectiveDensityFactor = 0.25 + (infill / 100) * 0.75;
    const rawWeight = parsedVolumeCm3 * activeMaterial.density * effectiveDensityFactor;
    calculatedWeight = Math.round(rawWeight * (1 + supportLevel / 100));
  } else {
    // Default dummy estimate if nothing uploaded
    calculatedWeight = 50;
  }

  // Price estimate (Minimum order Rp 25.000)
  const basePrice = Math.round(calculatedWeight * activeMaterial.pricePerGram);
  const totalPrice = Math.max(25000, basePrice);

  // File parsing (Binary / ASCII STL reader)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = (event) => {
      const buffer = event.target?.result as ArrayBuffer;
      if (!buffer) return;

      try {
        // Fast STL volume estimation
        const volume = calculateStlVolume(buffer);
        if (volume > 0) {
          setParsedVolumeCm3(Math.round(volume * 100) / 100);
        }
      } catch {
        // fallback
      }
    };

    reader.readAsArrayBuffer(file);
  };

  // WhatsApp Message
  const waMessage = [
    "Halo KreaForma | 3D Printing Jogja! 👋",
    "",
    "Saya ingin konsultasi & order cetak 3D via Kalkulator KreaForma:",
    fileName ? `• File: ${fileName}` : "• File: (akan dikirim via WhatsApp)",
    `• Proses: ${selectedType === "fdm" ? "FDM (Filament)" : "SLA (Resin)"}`,
    `• Material: ${activeMaterial.name}`,
    selectedType === "fdm" ? `• Infill: ${infill}%` : null,
    `• Estimasi Berat: ~ ${calculatedWeight} gram`,
    `• Estimasi Biaya: Rp ${totalPrice.toLocaleString("id-ID")}`,
    "",
    "Mohon info ketersediaan antrean & konfirmasi penawarannya. Terima kasih!",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Form Controls */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        {/* Upload Zone */}
        <div className="rounded-2xl border-2 border-dashed border-border bg-surface-raised p-8 text-center hover:border-brand/40 transition-colors">
          <input
            id={fileInputId}
            type="file"
            accept=".stl,.obj,.3mf,.step,.stp"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label htmlFor={fileInputId} className="cursor-pointer flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-surface-overlay border border-border flex items-center justify-center text-3xl">
              📦
            </div>
            {fileName ? (
              <div>
                <p className="font-mono text-sm font-semibold text-brand">{fileName}</p>
                {parsedVolumeCm3 && (
                  <p className="text-xs text-ink-muted font-mono mt-1">
                    Volume Terbaca: {parsedVolumeCm3} cm³
                  </p>
                )}
                <span className="text-xs text-ink-faint hover:underline block mt-2">
                  Klik untuk ganti file
                </span>
              </div>
            ) : (
              <div>
                <p className="font-medium text-ink text-base mb-1">
                  {lang === "id" ? "Klik atau seret file 3D ke sini" : "Click or drag 3D file here"}
                </p>
                <p className="text-xs font-mono text-ink-faint">
                  STL · OBJ · 3MF · STEP · Maks 100 MB
                </p>
              </div>
            )}
          </label>
        </div>

        {/* Process Switcher (FDM / Resin) */}
        <div>
          <label className="text-xs font-mono text-ink-muted uppercase tracking-wider block mb-3">
            1. Pilih Metode Cetak
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedType("fdm");
                setSelectedMaterialId("pla-plus");
              }}
              className={`p-4 rounded-xl border text-left font-mono transition-all ${
                selectedType === "fdm"
                  ? "border-brand bg-brand/10 text-brand font-semibold shadow-[0_0_20px_rgba(232,255,68,0.1)]"
                  : "border-border bg-surface-raised text-ink-muted hover:border-ink-faint"
              }`}
            >
              <div className="text-base mb-1">FDM · Filament</div>
              <div className="text-xs text-ink-faint font-sans">
                Kuat, ekonomis, pilihan material luas
              </div>
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedType("resin");
                setSelectedMaterialId("resin-std");
              }}
              className={`p-4 rounded-xl border text-left font-mono transition-all ${
                selectedType === "resin"
                  ? "border-brand bg-brand/10 text-brand font-semibold shadow-[0_0_20px_rgba(232,255,68,0.1)]"
                  : "border-border bg-surface-raised text-ink-muted hover:border-ink-faint"
              }`}
            >
              <div className="text-base mb-1">SLA · Resin UV</div>
              <div className="text-xs text-ink-faint font-sans">
                Mikron presisi, tanpa layer line
              </div>
            </button>
          </div>
        </div>

        {/* Material Selection */}
        <div>
          <label className="text-xs font-mono text-ink-muted uppercase tracking-wider block mb-3">
            2. Pilih Material
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MATERIALS.filter((m) => m.type === selectedType).map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMaterialId(m.id)}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                  selectedMaterialId === m.id
                    ? "border-brand bg-surface-overlay ring-1 ring-brand"
                    : "border-border bg-surface-raised hover:border-ink-faint"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-ink">{m.name}</span>
                    <span className="text-xs font-mono text-brand">
                      Rp {m.pricePerGram.toLocaleString("id-ID")}/g
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">{m.desc}</p>
                </div>
                <div className="text-[11px] font-mono text-ink-faint mt-3">
                  Densitas: {m.density} g/cm³
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Infill Slider (Only for FDM) */}
        {selectedType === "fdm" && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                3. Kepadatan Infill: <span className="text-brand font-bold">{infill}%</span>
              </label>
              <span className="text-xs font-mono text-ink-faint">
                {infill <= 20 ? "Display / Kosmetik" : infill <= 50 ? "Standar Fungsional" : "Beban Berat (Solid)"}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={infill}
              onChange={(e) => setInfill(Number(e.target.value))}
              className="w-full accent-brand cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-ink-faint mt-1">
              <span>10% (Ringan)</span>
              <span>20% (Rekomendasi)</span>
              <span>50% (Kuat)</span>
              <span>100% (Solid)</span>
            </div>
          </div>
        )}

        {/* Support Complexity */}
        <div>
          <label className="text-xs font-mono text-ink-muted uppercase tracking-wider block mb-2">
            4. Perkiraan Support Geometri
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Tanpa Support", value: 0, desc: "Datar / self-supporting" },
              { label: "Sedikit Support", value: 15, desc: "Overhang sedang (+15%)" },
              { label: "Banyak Support", value: 35, desc: "Banyak overhang (+35%)" },
            ].map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => setSupportLevel(s.value)}
                className={`p-3 rounded-lg border text-left text-xs font-mono transition-colors ${
                  supportLevel === s.value
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-border bg-surface-raised text-ink-muted"
                }`}
              >
                <div className="font-semibold">{s.label}</div>
                <div className="text-[10px] text-ink-faint mt-0.5">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Manual Slicer Weight Override */}
        <div>
          <label className="text-xs font-mono text-ink-muted uppercase tracking-wider block mb-2">
            Sudah Slicing Sendiri? (Opsional)
          </label>
          <div className="relative">
            <input
              type="number"
              placeholder="Masukkan berat gram dari Slicer (Cura/Orca/Bambu)"
              value={manualWeight}
              onChange={(e) => setManualWeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface-raised text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand font-mono"
            />
            <span className="absolute right-4 top-3 text-xs font-mono text-ink-faint">
              gram
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Instant Live Quotation Card */}
      <div className="lg:col-span-5 sticky top-24">
        <div className="rounded-2xl border border-border bg-surface-raised p-8 shadow-xl flex flex-col gap-6">
          <div className="border-b border-border pb-6">
            <span className="text-[11px] font-mono text-brand uppercase tracking-wider block mb-1">
              Ringkasan Estimasi
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-ink">
              Penawaran Instan
            </h3>
          </div>

          <div className="flex flex-col gap-3 text-sm font-mono">
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-ink-muted">Metode</span>
              <span className="text-ink font-semibold uppercase">{selectedType}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-ink-muted">Material</span>
              <span className="text-brand font-semibold">{activeMaterial.name}</span>
            </div>
            {selectedType === "fdm" && (
              <div className="flex justify-between py-1 border-b border-border/50">
                <span className="text-ink-muted">Infill</span>
                <span className="text-ink">{infill}%</span>
              </div>
            )}
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-ink-muted">Estimasi Berat</span>
              <span className="text-ink font-semibold">~ {calculatedWeight} gram</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-ink-muted">Tarif Satuan</span>
              <span className="text-ink">Rp {activeMaterial.pricePerGram.toLocaleString("id-ID")} /g</span>
            </div>
          </div>

          {/* Grand Total */}
          <div className="p-4 rounded-xl bg-surface border border-border flex items-baseline justify-between">
            <div>
              <span className="text-xs text-ink-muted font-mono block">Estimasi Total</span>
              <span className="text-xs text-ink-faint">Min. order Rp 25.000</span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-mono font-bold text-brand">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
          </div>

          {/* WhatsApp Submit Button */}
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-brand text-black font-semibold text-center font-mono text-sm hover:bg-brand-dim transition-all shadow-[0_0_30px_rgba(232,255,68,0.25)] flex items-center justify-center gap-2"
          >
            <span>💬</span> Pesan Sekarang via WhatsApp
          </a>

          <div className="text-[11px] text-ink-faint text-center leading-relaxed font-sans">
            Harga final akan dikonfirmasi oleh tim kami setelah memeriksa geometri 3D, orientasi cetak, dan kebutuhan support.
          </div>
        </div>
      </div>
    </div>
  );
}

// STL Volume Calculator helper
function calculateStlVolume(buffer: ArrayBuffer): number {
  const dataView = new DataView(buffer);
  // Check if binary STL
  if (buffer.byteLength < 84) return 0;

  const trianglesCount = dataView.getUint32(80, true);
  if (84 + trianglesCount * 50 > buffer.byteLength) {
    // Might be ASCII STL or truncated
    return 0;
  }

  let totalVolume = 0;
  let offset = 84;

  for (let i = 0; i < trianglesCount; i++) {
    // Skip normal vector (12 bytes)
    offset += 12;

    const v1x = dataView.getFloat32(offset, true);
    const v1y = dataView.getFloat32(offset + 4, true);
    const v1z = dataView.getFloat32(offset + 8, true);
    offset += 12;

    const v2x = dataView.getFloat32(offset, true);
    const v2y = dataView.getFloat32(offset + 4, true);
    const v2z = dataView.getFloat32(offset + 8, true);
    offset += 12;

    const v3x = dataView.getFloat32(offset, true);
    const v3y = dataView.getFloat32(offset + 4, true);
    const v3z = dataView.getFloat32(offset + 8, true);
    offset += 12;

    // Attribute byte count (2 bytes)
    offset += 2;

    // Signed volume of tetrahedron formed with origin
    const v321 = v3x * v2y * v1z;
    const v231 = v2x * v3y * v1z;
    const v312 = v3x * v1y * v2z;
    const v132 = v1x * v3y * v2z;
    const v213 = v2x * v1y * v3z;
    const v123 = v1x * v2y * v3z;

    totalVolume += (1.0 / 6.0) * (-v321 + v231 + v312 - v132 - v213 + v123);
  }

  // Convert mm3 to cm3 (1 cm3 = 1000 mm3)
  return Math.abs(totalVolume) / 1000.0;
}
