import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";

const copy = {
  zh: {
    skip: "跳到主要内容",
    brand: "Arbor Coffee",
    subtitle: "Slow bar",
    nav: {
      menu: "菜单",
      story: "品牌故事",
      visit: "到店",
    },
    cta: "预订座位",
    footer: "© 2026 Arbor Coffee. 版权所有。",
    social: {
      instagram: "Instagram",
      tiktok: "TikTok",
      newsletter: "订阅通讯",
    },
    langLabel: "语言",
    zh: "中文",
    en: "English",
  },
  en: {
    skip: "Skip to content",
    brand: "Arbor Coffee",
    subtitle: "Slow bar",
    nav: {
      menu: "Menu",
      story: "Story",
      visit: "Visit",
    },
    cta: "Reserve a table",
    footer: "© 2026 Arbor Coffee. All rights reserved.",
    social: {
      instagram: "Instagram",
      tiktok: "TikTok",
      newsletter: "Newsletter",
    },
    langLabel: "Language",
    zh: "中文",
    en: "English",
  },
} as const;

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "zh";
  const t = copy[lang];
  const base = `/${lang}`;

  return (
    <div data-lang={lang} className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 rounded-full bg-[#FBBF24] px-4 py-2 text-sm font-semibold text-[#451A03]"
      >
        {t.skip}
      </a>
      <header className="px-4 sm:px-6 lg:px-10 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-amber-900/15 bg-white/70 backdrop-blur px-6 py-3">
          <Link href={base} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#78350F] flex items-center justify-center">
              <span className="display text-lg text-[#FEF3C7]">A</span>
            </div>
            <div>
              <p className="display text-lg text-[#451A03]">{t.brand}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#92400E]">
                {t.subtitle}
              </p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <Link className="hover:text-[#92400E] transition-colors duration-200" href={`${base}/menu`}>
              {t.nav.menu}
            </Link>
            <Link className="hover:text-[#92400E] transition-colors duration-200" href={`${base}/story`}>
              {t.nav.story}
            </Link>
            <Link className="hover:text-[#92400E] transition-colors duration-200" href={`${base}/visit`}>
              {t.nav.visit}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitch
              lang={lang}
              label={t.langLabel}
              zhLabel={t.zh}
              enLabel={t.en}
            />
            <Link
              className="rounded-full bg-[#FBBF24] px-5 py-2 text-sm font-semibold text-[#451A03] shadow-sm transition-colors duration-200 hover:bg-[#F59E0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92400E] cursor-pointer"
              href={`${base}/visit`}
            >
              {t.cta}
            </Link>
          </div>
        </nav>
      </header>

      <main id="content">{children}</main>

      <footer className="px-4 sm:px-6 lg:px-10 pb-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-[#92400E]/20 pt-8">
          <p className="text-sm text-[#92400E]">{t.footer}</p>
          <div className="flex items-center gap-4 text-sm text-[#92400E]">
            <a
              className="hover:text-[#78350F] transition-colors duration-200"
              href="https://instagram.com"
            >
              {t.social.instagram}
            </a>
            <a
              className="hover:text-[#78350F] transition-colors duration-200"
              href="https://tiktok.com"
            >
              {t.social.tiktok}
            </a>
            <a
              className="hover:text-[#78350F] transition-colors duration-200"
              href="https://example.com/newsletter"
            >
              {t.social.newsletter}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
