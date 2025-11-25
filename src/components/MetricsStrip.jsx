import { useEffect, useState } from "react";

function MetricsStrip() {
  const metrics = [
    { label: "Components", value: 20 },
    { label: "Projects shipped", value: 50 },
    { label: "Hours saved", value: 3200 },
    { label: "Global teams", value: 15 },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));

  // Smooth count animation
  useEffect(() => {
    const duration = 1500;
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
    <div className="
      rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md
      p-6 grid grid-cols-2 sm:grid-cols-4 gap-8 shadow-lg animate-fadeIn
    ">
      {metrics.map((m, i) => (
        <div
          key={m.label}
          className="flex flex-col group transition-all duration-300 hover:scale-[1.04]"
        >
          <span className="text-xs uppercase tracking-wider text-center text-white/40">
            {m.label}
          </span>

          <span
            className="text-3xl font-bold mt-1 text-white
                       group-hover:tracking-tight transition-all duration-300 text-center"
          >
            {counts[i]}+
          </span>
        </div>
      ))}
    </div>
  );
}

export default MetricsStrip;
