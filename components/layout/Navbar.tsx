import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/lib/i18n";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import type { Locale } from "@/proxy";

export async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);
  const otherLang: Locale = lang === "id" ? "en" : "id";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo with Brand Mark */}
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-brand/40 shadow-[0_0_15px_rgba(232,255,68,0.25)] group-hover:scale-105 transition-transform">
            <Image
              src="/brand/kreaforma-mark.jpg"
              alt="KreaForma Logo Mark"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold tracking-tight text-lg text-ink leading-tight flex items-center gap-1">
              Krea<span className="text-brand">Forma</span>
            </span>
            <span className="text-[9px] font-mono text-ink-muted uppercase tracking-widest">
              3D Printing Jogja
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink-muted">
          <Link
            href={`/${lang}/calculator`}
            className="hover:text-brand transition-colors text-ink font-semibold flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            {dict.nav.calculator}
          </Link>
          <Link href={`/${lang}/services`} className="hover:text-ink transition-colors">
            {dict.nav.services}
          </Link>
          <Link href={`/${lang}/industries`} className="hover:text-ink transition-colors">
            {dict.nav.industries}
          </Link>
          <Link href={`/${lang}/how-it-works`} className="hover:text-ink transition-colors">
            {dict.nav.howItWorks}
          </Link>
          <Link href={`/${lang}/about`} className="hover:text-ink transition-colors">
            {dict.nav.about}
          </Link>
          <Link href={`/${lang}/faq`} className="hover:text-ink transition-colors">
            {dict.nav.faq}
          </Link>
          <Link href={`/${lang}/contact`} className="hover:text-ink transition-colors">
            {dict.nav.contact}
          </Link>
        </nav>

        {/* Actions: Lang toggle + WhatsApp CTA */}
        <div className="flex items-center gap-3.5">
          <Link
            href={`/${otherLang}`}
            className="text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-surface-raised text-ink-muted hover:text-ink hover:border-brand/40 transition-colors uppercase"
          >
            {otherLang}
          </Link>
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono bg-brand text-black font-semibold px-4 py-2.5 rounded-full hover:bg-brand-dim transition-all shadow-[0_0_20px_rgba(232,255,68,0.2)]"
          >
            <span>💬</span>
            <span>{dict.nav.order}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
