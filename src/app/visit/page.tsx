const details = [
  { label: "Hours", value: "Mon — Sun · 7:00 AM — 7:00 PM" },
  { label: "Friday late", value: "Sunset brews until 8:30 PM" },
  { label: "Address", value: "58 Market Lane, Riverside" },
  { label: "Contact", value: "hello@arborcoffee.com" },
];

export default function VisitPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 pt-20 pb-24">
      <header className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">Visit us</p>
        <h1 className="display text-4xl sm:text-5xl font-bold text-[#451A03] mt-3">
          A warm space in the heart of Riverside.
        </h1>
        <p className="mt-4 text-[#6B360C] max-w-2xl">
          Stop by for espresso, bring a book, or plan a tasting with our baristas.
          We’re a five-minute walk from the Central Market.
        </p>
      </header>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[#92400E]/20 bg-[#78350F] text-[#FEF3C7] p-8">
          <div className="grid gap-4">
            {details.map((detail) => (
              <div key={detail.label} className="border-b border-[#FBBF24]/20 pb-4 last:border-b-0">
                <p className="text-xs uppercase tracking-[0.3em] text-[#FBBF24]">{detail.label}</p>
                <p className="mt-2 text-lg font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#FEF3C7] p-5 text-[#451A03]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#92400E]">Nearest parking</p>
            <p className="mt-2 text-sm">Market Street Garage · 2-minute walk</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#92400E]/15 bg-white/85 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#92400E]">Find us</p>
          <h2 className="display text-3xl text-[#451A03] mt-3">Sunlit corner, slow mornings</h2>
          <p className="mt-3 text-[#6B360C]">
            Our space is designed for calm: warm light, soft playlists, and quiet
            seating zones for coffee conversations.
          </p>
          <div className="mt-6 h-44 rounded-2xl bg-gradient-to-br from-[#FDE68A] via-[#FBBF24] to-[#92400E]/40" />
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-[#92400E]/20 bg-white/85 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">Reservations</p>
            <h2 className="display text-3xl sm:text-4xl font-bold text-[#451A03] mt-3">
              Request a table or tasting.
            </h2>
            <p className="mt-3 text-[#6B360C]">
              Share your preferred time and we’ll confirm by email within 24 hours.
            </p>
          </div>
          <form className="grid gap-4" aria-label="Reservation form">
            <label className="text-sm font-semibold text-[#451A03]">
              Name
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-xl border border-transparent bg-[#FEF3C7] px-4 py-3 text-[#451A03] placeholder-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24]"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-semibold text-[#451A03]">
              Email
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-transparent bg-[#FEF3C7] px-4 py-3 text-[#451A03] placeholder-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24]"
                placeholder="you@example.com"
              />
            </label>
            <label className="text-sm font-semibold text-[#451A03]">
              Preferred time
              <input
                type="text"
                name="time"
                className="mt-2 w-full rounded-xl border border-transparent bg-[#FEF3C7] px-4 py-3 text-[#451A03] placeholder-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24]"
                placeholder="10:30 AM"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[#78350F] px-6 py-3 text-base font-semibold text-[#FEF3C7] transition-colors duration-200 hover:bg-[#5C2A0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92400E] cursor-pointer"
            >
              Request a table
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
