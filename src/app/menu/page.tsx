const menuSections = [
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
];

export default function MenuPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 pt-20 pb-24">
      <header className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">Menu</p>
        <h1 className="display text-4xl sm:text-5xl font-bold text-[#451A03] mt-3">
          A focused menu that highlights origin and craft.
        </h1>
        <p className="mt-4 text-[#6B360C] max-w-2xl">
          We rotate beans weekly and keep the menu intentional. Each beverage is
          dialed in to highlight clarity, sweetness, and balance.
        </p>
      </header>

      <div className="mt-12 grid gap-8">
        {menuSections.map((section) => (
          <section
            key={section.title}
            className="rounded-[28px] border border-[#92400E]/15 bg-white/80 p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="display text-3xl text-[#451A03]">{section.title}</h2>
                <p className="mt-2 text-[#6B360C] max-w-xl">{section.description}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#92400E]">
                Seasonal rotation
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {section.items.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-[#92400E]/10 bg-white/90 p-4 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#451A03]">{item.name}</h3>
                  <p className="mt-2 text-sm text-[#6B360C]">{item.detail}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#92400E]">
                    {item.price}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-[28px] border border-[#92400E]/20 bg-[#78350F] text-[#FEF3C7] p-8 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FBBF24]">Pairing notes</p>
            <h2 className="display text-3xl sm:text-4xl font-bold mt-3">
              Ask our baristas for a flavor flight.
            </h2>
            <p className="mt-3 text-[#FDE68A]">
              We pair single-origin espresso with pastry tastings and curated
              playlists.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full bg-[#FBBF24] px-6 py-3 text-base font-semibold text-[#451A03] transition-colors duration-200 hover:bg-[#F59E0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FEF3C7] cursor-pointer"
            href="/visit"
          >
            Reserve tasting
          </a>
        </div>
      </section>
    </div>
  );
}
