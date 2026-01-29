const copy = {
  zh: {
    label: "到店",
    title: "Riverside 的温暖一隅。",
    body: "来一杯浓缩、带一本书，或预约我们的品鉴时段。",
    details: [
      { label: "营业时间", value: "周一至周日 · 7:00 — 19:00" },
      { label: "周五延长", value: "日落咖啡延至 20:30" },
      { label: "地址", value: "Riverside 市场巷 58 号" },
      { label: "联系邮箱", value: "hello@arborcoffee.com" },
    ],
    parkingLabel: "最近停车场",
    parkingValue: "Market Street Garage · 步行 2 分钟",
    moodLabel: "空间氛围",
    moodTitle: "阳光角落，慢节奏",
    moodBody: "暖色光线、轻音乐与安静座位区，适合每一次咖啡对话。",
    formLabel: "预订",
    formTitle: "预约座位或品鉴。",
    formBody: "填写时间，我们将在 24 小时内确认。",
    name: "姓名",
    email: "邮箱",
    time: "期望时间",
    submit: "提交预约",
    namePlaceholder: "你的名字",
    emailPlaceholder: "you@example.com",
    timePlaceholder: "10:30",
  },
  en: {
    label: "Visit us",
    title: "A warm space in the heart of Riverside.",
    body: "Stop by for espresso, bring a book, or plan a tasting with our baristas. We’re a five-minute walk from the Central Market.",
    details: [
      { label: "Hours", value: "Mon — Sun · 7:00 AM — 7:00 PM" },
      { label: "Friday late", value: "Sunset brews until 8:30 PM" },
      { label: "Address", value: "58 Market Lane, Riverside" },
      { label: "Contact", value: "hello@arborcoffee.com" },
    ],
    parkingLabel: "Nearest parking",
    parkingValue: "Market Street Garage · 2-minute walk",
    moodLabel: "Find us",
    moodTitle: "Sunlit corner, slow mornings",
    moodBody: "Our space is designed for calm: warm light, soft playlists, and quiet seating zones for coffee conversations.",
    formLabel: "Reservations",
    formTitle: "Request a table or tasting.",
    formBody: "Share your preferred time and we’ll confirm by email within 24 hours.",
    name: "Name",
    email: "Email",
    time: "Preferred time",
    submit: "Request a table",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    timePlaceholder: "10:30 AM",
  },
} as const;

export default async function VisitPage({
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

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[#92400E]/20 bg-[#78350F] text-[#FEF3C7] p-8">
          <div className="grid gap-4">
            {t.details.map((detail) => (
              <div key={detail.label} className="border-b border-[#FBBF24]/20 pb-4 last:border-b-0">
                <p className="text-xs uppercase tracking-[0.3em] text-[#FBBF24]">{detail.label}</p>
                <p className="mt-2 text-lg font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#FEF3C7] p-5 text-[#451A03]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#92400E]">{t.parkingLabel}</p>
            <p className="mt-2 text-sm">{t.parkingValue}</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#92400E]/15 bg-white/85 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#92400E]">{t.moodLabel}</p>
          <h2 className="display text-3xl text-[#451A03] mt-3">{t.moodTitle}</h2>
          <p className="mt-3 text-[#6B360C]">{t.moodBody}</p>
          <div className="mt-6 h-44 rounded-2xl bg-gradient-to-br from-[#FDE68A] via-[#FBBF24] to-[#92400E]/40" />
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-[#92400E]/20 bg-white/85 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">{t.formLabel}</p>
            <h2 className="display text-3xl sm:text-4xl font-bold text-[#451A03] mt-3">{t.formTitle}</h2>
            <p className="mt-3 text-[#6B360C]">{t.formBody}</p>
          </div>
          <form className="grid gap-4" aria-label="Reservation form">
            <label className="text-sm font-semibold text-[#451A03]">
              {t.name}
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-xl border border-transparent bg-[#FEF3C7] px-4 py-3 text-[#451A03] placeholder-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24]"
                placeholder={t.namePlaceholder}
              />
            </label>
            <label className="text-sm font-semibold text-[#451A03]">
              {t.email}
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-transparent bg-[#FEF3C7] px-4 py-3 text-[#451A03] placeholder-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24]"
                placeholder={t.emailPlaceholder}
              />
            </label>
            <label className="text-sm font-semibold text-[#451A03]">
              {t.time}
              <input
                type="text"
                name="time"
                className="mt-2 w-full rounded-xl border border-transparent bg-[#FEF3C7] px-4 py-3 text-[#451A03] placeholder-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24]"
                placeholder={t.timePlaceholder}
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[#78350F] px-6 py-3 text-base font-semibold text-[#FEF3C7] transition-colors duration-200 hover:bg-[#5C2A0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92400E] cursor-pointer"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
