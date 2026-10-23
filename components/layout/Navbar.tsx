import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import type { Locale } from "@/proxy";

export async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);
  const otherLang: Locale = lang === "id" ? "en" : "id";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="font-mono font-bold tracking-tight text-lg text-ink">
          3D<span className="text-brand">PRINT</span>.JOGJA
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-ink-muted">
          <Link href={`/${lang}/calculator`} className="hover:text-ink transition-colors">
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
        <div className="flex items-center gap-4">
          <Link
            href={`/${otherLang}`}
            className="text-xs font-mono px-2 py-1 border border-border rounded text-ink-muted hover:text-ink transition-colors uppercase"
          >
            {otherLang}
          </Link>
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono bg-brand text-black font-semibold px-4 py-2 rounded-full hover:bg-brand-dim transition-colors"
          >
            {dict.nav.order}
          </a>
        </div>
      </div>
    </header>
  );
}
