// src/components/parts/Testimonials.jsx
function Testimonials() {
  const testimonials = [
    {
      name: "Rohan Das",
      role: "CEO, TechFlow",
      quote:
        "Harsh didn't just build a website; he totally automated our lead generation. We're saving 20 hours a week thanks to his AI workflows.",
    },
    {
      name: "Sarah Jenkins",
      role: "Founder, Artistry",
      quote:
        "I was worried about working with a developer who didn't 'get' design. Harsh proved me wrong. The visuals are stunning and the animations are silky smooth.",
    },
    {
      name: "Mike Chen",
      role: "SaaS Entrepreneur",
      quote:
        "Speed is an understatement. He delivered the MVP in 4 days, and it was cleaner than codebases I've seen from expensive agencies.",
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
