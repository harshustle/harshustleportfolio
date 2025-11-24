// src/components/parts/UseCases.jsx
function UseCases() {
  const useCases = [
    {
      title: "SaaS marketing sites",
      body: "Compose hero sections, feature grids, and testimonial blocks to ship landing pages in hours.",
    },
    {
      title: "Developer portfolios",
      body: "Use PixelCard, Stack, and CircularGallery to show projects, tools, and your story with style.",
    },
    {
      title: "Internal dashboards",
      body: "Turn CardNav and Bento layouts into navigation hubs for analytics, ops, and admin tools.",
    },
  ];

  return (
    <div className="space-y-4 mb-24">
      {useCases.map((item, i) => (
        <article
          key={item.title}
          className="
            group relative overflow-hidden
            rounded-xl border border-white
            bg-black
            p-5
            transition-all duration-300
            hover:bg-black hover:border-white hover:-translate-y-1
          "
        >
          {/* Left vertical accent line */}
          <span
            className="
              absolute left-0 top-0 h-full w-[2px]
              bg-white
              group-hover:bg-white transition-colors
            "
          />

          {/* Top index number */}
          <span className="absolute top-3 right-4 text-[10px] uppercase tracking-[0.18em] text-white">
            {String(i + 1).padStart(2, "0")}
          </span>

          <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
            {item.title}
          </h3>

          <p className="text-xs text-white leading-relaxed group-hover:text-white transition-colors">
            {item.body}
          </p>
        </article>
      ))}
    </div>
  );
}

export default UseCases;
