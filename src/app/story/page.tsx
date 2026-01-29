const values = [
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
];

export default function StoryPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 pt-20 pb-24">
      <header className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">Our story</p>
        <h1 className="display text-4xl sm:text-5xl font-bold text-[#451A03] mt-3">
          Built for slow mornings and intentional brews.
        </h1>
        <p className="mt-4 text-[#6B360C] max-w-2xl">
          Arbor Coffee began as a small slow bar and grew into a community space.
          We celebrate the quiet moments between meetings and the gentle rituals
          of a well-made cup.
        </p>
      </header>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="rounded-[28px] border border-[#92400E]/15 bg-white/85 p-8">
          <h2 className="display text-3xl text-[#451A03]">From roaster to ritual</h2>
          <p className="mt-4 text-[#6B360C]">
            We partner with micro-roasters across Asia, Africa, and Latin America
            to highlight provenance and process. Each coffee is cupped weekly, and
            our slow bar lineup rotates to reflect the season.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#92400E]/15 bg-white/90 p-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">Weekly cuppings</p>
              <p className="mt-2 text-lg font-semibold text-[#451A03]">Every Tuesday at 2 PM</p>
            </div>
            <div className="rounded-2xl border border-[#92400E]/15 bg-white/90 p-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#92400E]">Coffee education</p>
              <p className="mt-2 text-lg font-semibold text-[#451A03]">Brew classes monthly</p>
            </div>
          </div>
        </div>
        <div className="rounded-[28px] border border-[#92400E]/20 bg-white/85 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#92400E]">Visual mood</p>
          <h3 className="display text-3xl text-[#451A03] mt-3">Warm light, soft textures</h3>
          <p className="mt-3 text-[#6B360C]">
            Neutral textiles, oak surfaces, and soft lighting create a calm
            backdrop for quiet mornings.
          </p>
          <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-[#FDE68A] via-[#FBBF24] to-[#78350F]/70" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="display text-3xl sm:text-4xl text-[#451A03]">Our values</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-[#92400E]/15 bg-white/80 p-5"
            >
              <h3 className="text-lg font-semibold text-[#451A03]">{value.title}</h3>
              <p className="mt-3 text-sm text-[#6B360C]">{value.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
