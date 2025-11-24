// src/components/parts/Pricing.jsx
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      tagline: "Perfect for quick prototypes.",
      features: [
        "Core layout components",
        "Basic sections (hero, features, FAQ)",
        "Use in unlimited personal projects",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      tagline: "For serious indie projects & agencies.",
      features: [
        "All components & sections",
        "Commercial usage included",
        "Priority updates & improvements",
      ],
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      tagline: "For product teams that ship weekly.",
      features: [
        "Seat-based licensing",
        "Shared presets & theme tokens",
        "Email support for your team",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-2xl border p-5 flex flex-col ${
            tier.highlight
              ? "border-sky-500 bg-sky-500/10"
              : "border-slate-800 bg-slate-900/40"
          }`}
        >
          <div className="mb-4">
            <h3 className="text-sm font-semibold">{tier.name}</h3>
            <p className="text-xs text-slate-300">{tier.tagline}</p>
          </div>

          <div className="mb-4">
            <span className="text-2xl font-semibold">{tier.price}</span>
            <span className="text-xs text-slate-400 ml-1">/ one-time</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-200 mb-5">
            {tier.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-[2px] text-sky-400">●</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`mt-auto rounded-xl text-xs font-semibold py-2 ${
              tier.highlight
                ? "bg-sky-500 text-slate-950 hover:bg-sky-400"
                : "bg-slate-800 text-slate-50 hover:bg-slate-700"
            } transition-colors`}
          >
            Get {tier.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
