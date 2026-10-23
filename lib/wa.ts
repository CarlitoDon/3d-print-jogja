const WA_NUMBER = "6285190977575";

export function waLink(text?: string) {
  const base = `https://wa.me/${WA_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT_MESSAGE =
  "Halo 3D Print Jogja! 👋\n\nSaya mau tanya jasa cetak 3D.\n• Yang mau dicetak: \n• Material: (kalau belum tahu, mohon dibantu rekomendasinya)\n• Jumlah: \n\nMohon dibantu estimasi harganya ya. Terima kasih!";
