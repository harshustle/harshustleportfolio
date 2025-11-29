import { useEffect, useState } from "react";

function MetricsStrip() {
  const metrics = [
    { label: "Projects", value: 20, icon: "🚀", color: "from-purple-500 to-purple-400", suffix: "+" },
    { label: "Hours", value: 50, icon: "⏱️", color: "from-purple-500 to-purple-400", suffix: "+" },
    { label: "Satisfaction", value: 97, icon: "⭐", color: "from-purple-600 to-purple-500", suffix: "%" },
    { label: "Team", value: 4, icon: "👥", color: "from-purple-400 to-purple-300", suffix: "" },
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
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 border border-white/10 hover:border-white/20 p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

          {/* Icon */}
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {m.icon}
          </div>

          {/* Value */}
          <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
            {counts[i]}{m.suffix}
          </div>

          {/* Label */}
          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            {m.label}
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${m.color} transition-all duration-500" />
        </div>
      ))}
    </div>
  );
}

export default MetricsStrip;
