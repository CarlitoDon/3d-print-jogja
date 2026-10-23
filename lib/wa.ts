const WA_NUMBER = "6285xxxxxxxxx"; // TODO: ganti nomor WA

export function waLink(text?: string) {
  const base = `https://wa.me/${WA_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT_MESSAGE =
  "Halo KreaForma | 3D Printing Jogja! 👋\n\nSaya mau konsultasi jasa cetak 3D.\n• Yang mau dicetak: \n• Material: (kalau belum tahu, mohon dibantu rekomendasinya)\n• Jumlah: \n\nMohon dibantu estimasi harganya ya. Terima kasih!";
