import { useEffect, useState } from "react";

function MetricsStrip() {
  const metrics = [
    { label: "Projects Completed", value: 30, icon: "🚀", color: "bg-white", suffix: "+" },
    { label: "Years Experience", value: 3, icon: "⚡", color: "bg-white", suffix: "+" },
    { label: "Client Satisfaction", value: 100, icon: "⭐", color: "bg-white", suffix: "%" },
    { label: "Happy Clients", value: 25, icon: "🌍", color: "bg-white", suffix: "+" },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));

  // Smooth count animation
  useEffect(() => {
    const duration = 2000;
    const fps = 60;
    const steps = Math.round((duration / 1000) * fps);

    metrics.forEach((m, i) => {
      let count = 0;
      const increment = m.value / steps;

      const timer = setInterval(() => {
        count += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(count);
          return updated;
        });

        if (count >= m.value) clearInterval(timer);
      }, duration / steps);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {metrics.map((m, i) => (
        <div
          key={m.label}
          className="group relative overflow-hidden rounded-xl border border-white/10 p-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-white/5 to-indigo-500/10"
        >
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

          {/* Icon */}
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {m.icon}
          </div>

          {/* Value */}
          <div className="text-3xl font-bold mb-1 text-white relative z-10">
            {counts[i]}{m.suffix}
          </div>

          {/* Label */}
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors relative z-10 uppercase tracking-wide">
            {m.label}
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-indigo-500/50 transition-all duration-500" />
        </div>
      ))}
    </div>
  );
}

export default MetricsStrip;
