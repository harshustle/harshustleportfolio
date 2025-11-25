// src/components/parts/Testimonials.jsx
function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Frontend Engineer",
      quote:
        "These components took my landing page from basic to premium in a weekend. I mostly just plugged them in.",
    },
    {
      name: "Kriti Sharma",
      role: "Product Designer",
      quote:
        "The layouts give enough structure without boxing you in. It feels like a design system that respects creativity.",
    },
    {
      name: "Liam Parker",
      role: "Indie Maker",
      quote:
        "I hate rebuilding the same hero and pricing over and over. Now I just tweak the copy and ship.",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="
            group rounded-2xl border border-white/15 
            bg-black p-6 
            transition-all duration-300 
            hover:border-[#D4A5FF] hover:-translate-y-1
          "
        >
          <p className="text-sm text-white/85 leading-relaxed mb-5 group-hover:text-[white] transition-colors">
            “{t.quote}”
          </p>

          <figcaption className="text-sm">
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-white/60">{t.role}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Testimonials;
