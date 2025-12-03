import React from "react";
import { bentoData } from "../data/features";
import { ArrowRight, Rocket } from "lucide-react";

const BentoLayout = () => {
  const { primary, snapshot, node, flow, summary } = bentoData;

  return (
    <section className="py-16 px-4 flex justify-center relative overflow-hidden">
      {/* Background glow effects similar to Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="w-full max-w-5xl space-y-8 relative z-10">
        {/* Heading */}
        <header className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            From Onboarding to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Delivery
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A transparent, step-by-step journey to your perfect product.
          </p>
        </header>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px]">
          {/* Main card (hero) */}
          <div className="md:col-span-2 md:row-span-2">
            <div className="relative h-full w-full bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 hover:border-purple-500/50 rounded-2xl shadow-lg p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 group overflow-hidden">
              {/* Background decorative element */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />

              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                  <Rocket className="text-purple-400" size={24} />
                </div>

                <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {primary.customTitle}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  {primary.customDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics card */}
          <div className="md:col-span-2 md:row-span-1">
            <div className="h-full w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-2xl shadow-lg p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 group backdrop-blur-sm">
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  {snapshot.subtitle}
                </p>
              </div>
              <div className="text-right grid grid-cols-2 gap-x-4 gap-y-1">
                {snapshot.stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Small node card */}
          <div className="md:col-span-1 md:row-span-1">
            <div className="h-full w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-2xl shadow-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 group backdrop-blur-sm">
              <div>
                <p className="text-sm text-gray-300 mb-2 font-semibold">
                  {node.customTitle}
                </p>
                <ul className="space-y-1">
                  {node.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-purple-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tall flow card */}
          <div className="md:col-span-1 md:row-span-2 overflow-hidden">
            <div className="h-full w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-2xl shadow-lg p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 group backdrop-blur-sm">
              <div className="flex-shrink-0 mb-4">
                <p className="text-sm text-gray-300 font-semibold">
                  {flow.customTitle}
                </p>
              </div>
              <div className="space-y-3 text-sm text-gray-300 overflow-y-auto pr-1 custom-scrollbar">
                {flow.steps.map((step, idx) => (
                  <div key={step.id} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                    <span className="text-purple-400 font-mono text-xs">{String(step.id).padStart(2, '0')}</span>
                    <span className="truncate group-hover:text-white transition-colors">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom wide CTA card */}
          <div className="md:col-span-3 md:row-span-1">
            <div className="h-full w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-2xl shadow-lg p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 group backdrop-blur-sm">
              <div>
                <p className="text-sm text-gray-300">
                  {summary.customSubtitle}
                </p>
              </div>
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 border border-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                {summary.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoLayout;
