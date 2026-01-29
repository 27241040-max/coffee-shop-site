import Link from "next/link";

const copy = {
  zh: {
    label: "菜单",
    title: "一份专注于风味与产地的菜单。",
    body: "我们每周轮换豆单，让菜单保持清晰、克制而有层次。",
    sections: [
      {
        title: "浓缩吧",
        description: "招牌浓缩与顺滑牛奶咖啡。",
        items: [
          { name: "招牌浓缩", detail: "可可 · 烤杏仁 · 干净收尾", price: "¥26" },
          { name: "卡布奇诺", detail: "绵密奶泡 · 自家拼配", price: "¥32" },
          { name: "科尔塔多", detail: "浓缩与牛奶 1:1", price: "¥28" },
        ],
      },
      {
        title: "慢吧",
        description: "为清晰与甜感而生的手冲。",
        items: [
          { name: "V60 手冲", detail: "埃塞 · 古吉 · 茉莉蜂蜜", price: "¥38" },
          { name: "Kalita Wave", detail: "哥伦比亚 · 可可柑橘", price: "¥38" },
          { name: "AeroPress", detail: "肯尼亚 · 莓果明亮", price: "¥38" },
        ],
      },
      {
        title: "烘焙甜点",
        description: "每日新鲜出炉，季节限定。",
        items: [
          { name: "黄油可颂", detail: "酥脆 · 经典", price: "¥24" },
          { name: "豆蔻卷", detail: "红糖 · 香料", price: "¥26" },
          { name: "橄榄油蛋糕", detail: "柑橘 · 松软", price: "¥28" },
        ],
      },
    ],
    rotation: "季节轮换",
    noteLabel: "搭配建议",
    noteTitle: "向咖啡师提出风味小航班。",
    noteBody: "我们提供手冲与甜点的搭配品鉴。",
    noteCta: "预订品鉴",
  },
  en: {
    label: "Menu",
    title: "A focused menu that highlights origin and craft.",
    body: "We rotate beans weekly and keep the menu intentional. Each beverage is dialed in to highlight clarity, sweetness, and balance.",
    sections: [
      {
        title: "Espresso Bar",
        description: "Our signature espresso, balanced lattes, and seasonal specials.",
        items: [
          { name: "Signature espresso", detail: "Cocoa · toasted almond · clean finish", price: "$4" },
          { name: "Cappuccino", detail: "Velvety foam · house blend", price: "$5" },
          { name: "Cortado", detail: "Equal parts espresso & milk", price: "$4.5" },
        ],
      },
      {
        title: "Slow Bar",
        description: "Brewed to order for clarity and sweetness.",
        items: [
          { name: "V60 pour-over", detail: "Ethiopia Guji · jasmine · honey", price: "$6" },
          { name: "Kalita Wave", detail: "Colombia Huila · cocoa · citrus", price: "$6" },
          { name: "AeroPress", detail: "Kenya Nyeri · berry · bright", price: "$6" },
        ],
      },
      {
        title: "Bakery",
        description: "Baked each morning with seasonal fillings.",
        items: [
          { name: "Butter croissant", detail: "Flaky · golden · classic", price: "$4" },
          { name: "Cardamom bun", detail: "Brown sugar · spice", price: "$4.5" },
          { name: "Olive oil cake", detail: "Citrus zest · soft crumb", price: "$5" },
        ],
      },
    ],
    rotation: "Seasonal rotation",
    noteLabel: "Pairing notes",
    noteTitle: "Ask our baristas for a flavor flight.",
    noteBody: "We pair single-origin espresso with pastry tastings and curated playlists.",
    noteCta: "Reserve tasting",
  },
} as const;

export default async function MenuPage({
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

      <div className="mt-12 grid gap-8">
        {t.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-[28px] border border-[#92400E]/15 bg-white/80 p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="display text-3xl text-[#451A03]">{section.title}</h2>
                <p className="mt-2 text-[#6B360C] max-w-xl">{section.description}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#92400E]">{t.rotation}</span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {section.items.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-[#92400E]/10 bg-white/90 p-4 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#451A03]">{item.name}</h3>
                  <p className="mt-2 text-sm text-[#6B360C]">{item.detail}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#92400E]">{item.price}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-[28px] border border-[#92400E]/20 bg-[#78350F] text-[#FEF3C7] p-8 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FBBF24]">{t.noteLabel}</p>
            <h2 className="display text-3xl sm:text-4xl font-bold mt-3">{t.noteTitle}</h2>
            <p className="mt-3 text-[#FDE68A]">{t.noteBody}</p>
          </div>
          <Link
            className="inline-flex items-center justify-center rounded-full bg-[#FBBF24] px-6 py-3 text-base font-semibold text-[#451A03] transition-colors duration-200 hover:bg-[#F59E0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FEF3C7] cursor-pointer"
            href={`/${lang}/visit`}
          >
            {t.noteCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
