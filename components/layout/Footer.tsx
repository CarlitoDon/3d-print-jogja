import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/wa";
import type { Locale } from "@/proxy";

export async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDict(lang);

  return (
    <footer className="border-t border-border bg-surface-raised text-ink-muted text-sm py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="font-mono font-bold tracking-tight text-lg text-ink">
            3D<span className="text-brand">PRINT</span>.JOGJA
          </span>
          <p className="text-xs leading-relaxed text-ink-muted">
            {dict.footer.blurb}
          </p>
          <p className="text-xs text-ink-faint">
            © 2025 3D Print Jogja. {dict.footer.rights}
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-ink uppercase tracking-wider mb-2">
            {dict.nav.services}
          </span>
          <Link href={`/${lang}/services#fdm`} className="text-xs hover:text-ink transition-colors">
            Cetak 3D FDM
          </Link>
          <Link href={`/${lang}/services#resin`} className="text-xs hover:text-ink transition-colors">
            Cetak Resin SLA
          </Link>
          <Link href={`/${lang}/calculator`} className="text-xs hover:text-ink transition-colors">
            {dict.nav.calculator}
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-ink uppercase tracking-wider mb-2">
            Info
          </span>
          <Link href={`/${lang}/how-it-works`} className="text-xs hover:text-ink transition-colors">
            {dict.nav.howItWorks}
          </Link>
          <Link href={`/${lang}/about`} className="text-xs hover:text-ink transition-colors">
            {dict.nav.about}
          </Link>
          <Link href={`/${lang}/faq`} className="text-xs hover:text-ink transition-colors">
            {dict.nav.faq}
          </Link>
          <Link href={`/${lang}/contact`} className="text-xs hover:text-ink transition-colors">
            {dict.nav.contact}
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-ink uppercase tracking-wider mb-2">
            {dict.nav.contact}
          </span>
          <p className="text-xs">Yogyakarta, D.I. Yogyakarta</p>
          <p className="text-xs">Senin–Sabtu: 09.00 – 17.00 WIB</p>
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-brand hover:underline"
          >
            Chat via WhatsApp →
          </a>
        </div>
      </div>
    </footer>
  );
}
