import Link from "next/link";

const copy = {
  zh: {
    label: "邻里咖啡馆",
    title: "为爱咖啡的人准备的安静仪式。",
    lead: "单一产地浓缩、手冲与季节甜点，在温暖克制的空间里慢慢呈现。慢晨、晴午与金色时刻的香气。",
    primaryCta: "查看菜单",
    secondaryCta: "营业时间与地址",
    highlights: ["每周小批量烘焙", "黄金时段座位与柔和音乐"],
    featureTitle: "今日手冲",
    featureOrigin: "埃塞俄比亚 · 古吉",
    featureBody: "茉莉、蜂蜜与柑橘的明亮层次。92°C 精准萃取，尾韵干净。",
    stats: [
      { label: "萃取时间", value: "3:10" },
      { label: "风味", value: "茉莉 · 蜂蜜 · 柑橘" },
      { label: "产地", value: "埃塞俄比亚 古吉" },
    ],
    menuTitle: "极简菜单，最大风味。",
    menuLabel: "菜单精选",
    menuCards: [
      { title: "招牌浓缩", body: "可可、烤杏仁与干净收尾。", price: "¥26 起" },
      { title: "慢吧手冲", body: "季节单一产地，现点现冲。", price: "¥38 起" },
      { title: "手作甜点", body: "黄油可颂、豆蔻卷等每日出炉。", price: "每日供应" },
    ],
    storyLabel: "品牌故事",
    storyTitle: "为慢咖啡而生的空间。",
    storyBody:
      "Arbor Coffee 是一段邻里仪式。我们与小型烘焙商合作，呈现每一支产地的风味差异。空间强调柔和光线与安静角落。",
    storyStats: [
      { label: "烘焙伙伴", value: "6 家小型烘焙商" },
      { label: "萃取方式", value: "V60 · Kalita · AeroPress" },
    ],
    playlistLabel: "今日氛围",
    playlistTitle: "店内歌单",
    playlistBody: "Lo-fi 爵士、柔和灵魂乐与周五的黑胶夜。",
    hoursLabel: "营业时间",
    hoursValue: "周一至周日 · 7:00 — 19:00",
    hoursNote: "周五延长到 20:30",
    visitLabel: "到店",
    visitTitle: "准备好一场慢晨了吗？",
    visitBody: "预订座位、举办品鉴，或来体验季节浓缩航班。距离中央市集步行 5 分钟。",
    visitCardLabel: "地址",
    visitCardAddress: "Riverside 市场巷 58 号",
    visitCardHours: "每日营业 · 7:00 — 19:00",
    visitCta: "规划到店",
  },
  en: {
    label: "Neighborhood coffee house",
    title: "A quiet ritual for coffee people.",
    lead: "Single-origin espresso, delicate pour-overs, and seasonal pastries served in a warm, minimalist space. Slow mornings, bright afternoons, and golden-hour sips.",
    primaryCta: "Explore the menu",
    secondaryCta: "See hours & location",
    highlights: ["Small-batch roasted weekly", "Golden-hour seating & soft playlists"],
    featureTitle: "Today’s pour-over",
    featureOrigin: "Ethiopia · Guji",
    featureBody: "Floral, honeyed, and citrus-bright. Brewed at 92°C for a clean, delicate finish.",
    stats: [
      { label: "Brew time", value: "3:10" },
      { label: "Tasting notes", value: "Jasmine · Honey · Citrus" },
      { label: "Origin", value: "Guji, Ethiopia" },
    ],
    menuTitle: "Minimal menu, maximal flavor.",
    menuLabel: "Menu highlights",
    menuCards: [
      { title: "Signature espresso", body: "Cocoa, toasted almond, and a clean finish.", price: "From $4" },
      { title: "Slow bar pour-overs", body: "Seasonal single-origin lineup brewed to order.", price: "From $6" },
      { title: "House-made pastries", body: "Butter croissants, cardamom buns, and more.", price: "Baked daily" },
    ],
    storyLabel: "Our story",
    storyTitle: "An intentional space for slow coffee.",
    storyBody:
      "Arbor Coffee is a neighborhood ritual built around craft and calm. We work with micro-roasters across Asia and Africa, brewing each cup to highlight its origin.",
    storyStats: [
      { label: "Roaster partners", value: "6 micro-roasters" },
      { label: "Brew methods", value: "V60 · Kalita · AeroPress" },
    ],
    playlistLabel: "Today at Arbor",
    playlistTitle: "House playlist",
    playlistBody: "Lo-fi jazz, mellow soul, and vinyl nights every Friday.",
    hoursLabel: "Hours",
    hoursValue: "Mon — Sun · 7:00 AM — 7:00 PM",
    hoursNote: "Sunset brews until 8:30 PM on Fridays",
    visitLabel: "Visit us",
    visitTitle: "Ready for a slow morning?",
    visitBody: "Reserve a table, host a tasting, or stop by for our seasonal espresso flights. We’re a five-minute walk from the Central Market.",
    visitCardLabel: "Address",
    visitCardAddress: "58 Market Lane, Riverside",
    visitCardHours: "Open daily · 7 AM — 7 PM",
    visitCta: "Plan your visit",
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "zh";
  const t = copy[lang];

  return (
    <div>
      <section className="px-4 sm:px-6 lg:px-10 pt-20" aria-labelledby="hero-title">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{t.label}</p>
            <h1 id="hero-title" className="display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] text-[#451A03]">
              {t.title}
            </h1>
            <p className="text-lg text-[#6B360C] max-w-xl">{t.lead}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#78350F] px-6 py-3 text-base font-semibold text-[#FEF3C7] shadow-sm transition-colors duration-200 hover:bg-[#5C2A0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92400E] cursor-pointer"
                href={`/${lang}/menu`}
              >
                {t.primaryCta}
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-[#92400E]/30 px-6 py-3 text-base font-semibold text-[#78350F] transition-colors duration-200 hover:border-[#92400E] hover:text-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92400E] cursor-pointer"
                href={`/${lang}/visit`}
              >
                {t.secondaryCta}
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#92400E]">
              {t.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full border border-[#92400E]/40 bg-white/60" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] border border-[#92400E]/15 bg-white/50" />
            <div className="relative rounded-[28px] bg-white/90 p-8 shadow-xl">
              <p className="display text-3xl text-[#451A03]">{t.featureTitle}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#92400E]">{t.featureOrigin}</p>
              <p className="mt-4 text-[#6B360C]">{t.featureBody}</p>
              <div className="mt-6 space-y-4">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b border-[#92400E]/15 pb-3 last:border-b-0">
                    <span className="text-sm text-[#92400E]">{stat.label}</span>
                    <span className="text-sm font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pt-24" aria-labelledby="menu-preview">
        <div className="max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{t.menuLabel}</p>
          <h2 id="menu-preview" className="display text-4xl sm:text-5xl font-bold text-[#451A03] mt-3">
            {t.menuTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.menuCards.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#92400E]/15 bg-white/80 p-6 shadow-sm transition-colors duration-200 hover:border-[#92400E]/40"
              >
                <h3 className="text-xl font-semibold text-[#451A03]">{item.title}</h3>
                <p className="mt-3 text-[#6B360C]">{item.body}</p>
                <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#92400E]">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pt-24" aria-labelledby="story-preview">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center max-w-6xl">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{t.storyLabel}</p>
            <h2 id="story-preview" className="display text-4xl sm:text-5xl font-bold text-[#451A03] mt-3">
              {t.storyTitle}
            </h2>
            <p className="mt-6 text-[#6B360C]">{t.storyBody}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.storyStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#92400E]/15 bg-white/70 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-[#451A03]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-[#92400E]/20 bg-white/85 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#92400E]">{t.playlistLabel}</p>
            <h3 className="display text-3xl text-[#451A03] mt-3">{t.playlistTitle}</h3>
            <p className="mt-3 text-[#6B360C]">{t.playlistBody}</p>
            <div className="mt-6 border-t border-[#92400E]/15 pt-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{t.hoursLabel}</p>
              <p className="mt-2 text-lg font-semibold text-[#451A03]">{t.hoursValue}</p>
              <p className="mt-1 text-sm text-[#6B360C]">{t.hoursNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pt-24 pb-24" aria-labelledby="visit-preview">
        <div className="max-w-6xl rounded-[32px] border border-[#92400E]/20 bg-[#78350F] text-[#FEF3C7] p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#FBBF24]">{t.visitLabel}</p>
              <h2 id="visit-preview" className="display text-4xl sm:text-5xl font-bold mt-3">
                {t.visitTitle}
              </h2>
              <p className="mt-4 text-[#FDE68A]">{t.visitBody}</p>
            </div>
            <div className="rounded-3xl bg-[#FEF3C7] p-6 text-[#451A03]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#92400E]">{t.visitCardLabel}</p>
              <p className="mt-3 text-lg font-semibold">{t.visitCardAddress}</p>
              <p className="mt-2 text-sm text-[#6B360C]">{t.visitCardHours}</p>
              <div className="mt-6 h-32 rounded-2xl bg-gradient-to-br from-[#FDE68A] via-[#FBBF24] to-[#92400E]/40" />
              <Link
                href={`/${lang}/visit`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#78350F] px-5 py-2 text-sm font-semibold text-[#FEF3C7] transition-colors duration-200 hover:bg-[#5C2A0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FEF3C7] cursor-pointer"
              >
                {t.visitCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
