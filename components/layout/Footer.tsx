import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/lib/i18n";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import type { Locale } from "@/proxy";

export async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);

  return (
    <footer className="border-t border-border bg-surface-raised text-ink-muted text-sm py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-brand/40 shadow-[0_0_15px_rgba(232,255,68,0.2)]">
              <Image
                src="/brand/kreaforma-mark.jpg"
                alt="KreaForma Logo Mark"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-tight text-lg text-ink leading-tight">
                Krea<span className="text-brand">Forma</span>
              </span>
              <span className="text-[9px] font-mono text-ink-muted uppercase tracking-widest">
                3D Printing Jogja
              </span>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-ink-muted">
            {dict.footer.blurb}
          </p>
          <p className="text-xs text-ink-faint font-mono">
            © 2025 KreaForma. {dict.footer.rights}
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-xs text-ink uppercase tracking-wider mb-2 font-semibold">
            {dict.nav.services}
          </span>
          <Link href={`/${lang}/services#fdm`} className="text-xs hover:text-brand transition-colors">
            Cetak 3D FDM / FFF
          </Link>
          <Link href={`/${lang}/services#resin`} className="text-xs hover:text-brand transition-colors">
            Cetak Resin SLA 14K
          </Link>
          <Link href={`/${lang}/services#reverse`} className="text-xs hover:text-brand transition-colors">
            3D Scanning & Reverse Engineering
          </Link>
          <Link href={`/${lang}/calculator`} className="text-xs hover:text-brand transition-colors text-ink font-semibold">
            Kalkulator Penawaran Instan →
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-xs text-ink uppercase tracking-wider mb-2 font-semibold">
            Informasi
          </span>
          <Link href={`/${lang}/industries`} className="text-xs hover:text-brand transition-colors">
            {dict.nav.industries}
          </Link>
          <Link href={`/${lang}/how-it-works`} className="text-xs hover:text-brand transition-colors">
            {dict.nav.howItWorks}
          </Link>
          <Link href={`/${lang}/about`} className="text-xs hover:text-brand transition-colors">
            {dict.nav.about}
          </Link>
          <Link href={`/${lang}/faq`} className="text-xs hover:text-brand transition-colors">
            {dict.nav.faq}
          </Link>
          <Link href={`/${lang}/contact`} className="text-xs hover:text-brand transition-colors">
            {dict.nav.contact}
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-ink uppercase tracking-wider mb-2 font-semibold">
            Studio KreaForma
          </span>
          <p className="text-xs">Yogyakarta, D.I. Yogyakarta 55281</p>
          <p className="text-xs">Senin – Sabtu: 09.00 – 17.00 WIB</p>
          <p className="text-xs text-brand font-mono">Farm Aktif 24/7 untuk Batch Order</p>
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-brand hover:underline mt-1 font-semibold"
          >
            Chat WhatsApp KreaForma →
          </a>
        </div>
      </div>
    </footer>
  );
}
