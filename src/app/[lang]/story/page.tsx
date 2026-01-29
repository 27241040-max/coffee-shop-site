const copy = {
  zh: {
    label: "品牌故事",
    title: "为慢晨与专注萃取而生。",
    body: "Arbor Coffee 起源于一间小型慢吧，如今成为邻里共享的静谧空间。",
    featureTitle: "从烘焙到仪式",
    featureBody:
      "我们与亚洲、非洲、拉丁美洲的小型烘焙商合作，确保每一杯都能讲述产地的故事。",
    featureCards: [
      { label: "每周品测", value: "每周二 14:00" },
      { label: "咖啡课程", value: "每月一次" },
    ],
    moodLabel: "视觉氛围",
    moodTitle: "温暖光线与柔软材质",
    moodBody: "中性色织物、木质台面与柔和灯光，让空间保持松弛感。",
    valuesTitle: "我们的价值观",
    values: [
      {
        title: "重视产地",
        detail: "坚持透明溯源与可持续合作。",
      },
      {
        title: "慢而有序",
        detail: "每一杯都被计时、称量并细致把控。",
      },
      {
        title: "邻里温度",
        detail: "为对话、记录与社区而设。",
      },
    ],
  },
  en: {
    label: "Our story",
    title: "Built for slow mornings and intentional brews.",
    body: "Arbor Coffee began as a small slow bar and grew into a community space. We celebrate the quiet moments between meetings and the gentle rituals of a well-made cup.",
    featureTitle: "From roaster to ritual",
    featureBody:
      "We partner with micro-roasters across Asia, Africa, and Latin America to highlight provenance and process. Each coffee is cupped weekly, and our slow bar lineup rotates to reflect the season.",
    featureCards: [
      { label: "Weekly cuppings", value: "Every Tuesday at 2 PM" },
      { label: "Coffee education", value: "Brew classes monthly" },
    ],
    moodLabel: "Visual mood",
    moodTitle: "Warm light, soft textures",
    moodBody: "Neutral textiles, oak surfaces, and soft lighting create a calm backdrop for quiet mornings.",
    valuesTitle: "Our values",
    values: [
      {
        title: "Origin first",
        detail: "We work with farms that prioritize transparency, traceability, and craft.",
      },
      {
        title: "Slow by design",
        detail: "Every brew is measured, timed, and tasted to honor the bean.",
      },
      {
        title: "Neighborhood warmth",
        detail: "A quiet space designed for conversations, journals, and community.",
      },
    ],
  },
} as const;

export default async function StoryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "zh";
  const t = copy[lang];

  return (
    <div className="px-4 sm:px-6 lg:px-10 pt-20 pb-24">
      <header className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{t.label}</p>
        <h1 className="display text-4xl sm:text-5xl font-bold text-[#451A03] mt-3">{t.title}</h1>
        <p className="mt-4 text-[#6B360C] max-w-2xl">{t.body}</p>
      </header>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="rounded-[28px] border border-[#92400E]/15 bg-white/85 p-8">
          <h2 className="display text-3xl text-[#451A03]">{t.featureTitle}</h2>
          <p className="mt-4 text-[#6B360C]">{t.featureBody}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.featureCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-[#92400E]/15 bg-white/90 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{card.label}</p>
                <p className="mt-2 text-lg font-semibold text-[#451A03]">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] border border-[#92400E]/20 bg-white/85 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#92400E]">{t.moodLabel}</p>
          <h3 className="display text-3xl text-[#451A03] mt-3">{t.moodTitle}</h3>
          <p className="mt-3 text-[#6B360C]">{t.moodBody}</p>
          <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-[#FDE68A] via-[#FBBF24] to-[#78350F]/70" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="display text-3xl sm:text-4xl text-[#451A03]">{t.valuesTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {t.values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-[#92400E]/15 bg-white/80 p-5">
              <h3 className="text-lg font-semibold text-[#451A03]">{value.title}</h3>
              <p className="mt-3 text-sm text-[#6B360C]">{value.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
