import type { Locale } from "@/proxy";

export async function getDict(lang: Locale) {
  const dict = await import(`@/messages/${lang}.json`);
  return dict.default as Record<string, Record<string, string>>;
}
