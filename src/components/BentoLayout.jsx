import React from "react";

const BentoLayout = () => {
  return (
    <section className="py-16 px-4 flex justify-center">
      <div className="w-full max-w-5xl space-y-8">
        {/* Optional heading */}
        <header className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-purple-400">
            Bento overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Clean cards for a flexible layout
          </h2>
          <p className="text-gray-400">
            Modular grid system for showcasing content beautifully
          </p>
        </header>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px]">
          {/* Main card (hero) */}
          <div className="md:col-span-2 md:row-span-2">
            <div className="h-full w-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-500/50 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 group">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 border border-purple-500/30 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                    Primary block
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Central content area
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Use this to anchor your main message, product highlight, or
                  hero visual. The surrounding tiles support this story.
                </p>
              </div>

              <div className="flex gap-2 mt-4">
                <span className="text-xs text-gray-300 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1.5">
                  Layout
                </span>
                <span className="text-xs text-gray-300 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1.5">
                  Focus
                </span>
              </div>
            </div>
          </div>

          {/* Metrics card */}
          <div className="md:col-span-2 md:row-span-1">
            <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 hover:border-blue-500/50 rounded-2xl shadow-lg p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/20 group">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Snapshot
                </p>
                <p className="text-sm text-gray-300">
                  Quick metrics, states, or updates at a glance.
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">Projects</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  24
                </p>
              </div>
            </div>
          </div>

          {/* Small node card */}
          <div className="md:col-span-1 md:row-span-1">
            <div className="h-full w-full bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-2xl shadow-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20 group">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2">
                  Node
                </p>
                <p className="text-sm text-gray-300">
                  Use for links, tags, or small details.
                </p>
              </div>
              <span className="text-xs font-mono text-gray-400 group-hover:text-emerald-300 transition-colors">
                /mini-tile
              </span>
            </div>
          </div>

          {/* Tall flow card */}
          <div className="md:col-span-1 md:row-span-2">
            <div className="h-full w-full bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 hover:border-pink-500/50 rounded-2xl shadow-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/20 group">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-pink-300 mb-2">
                  Flow
                </p>
                <p className="text-sm text-gray-300 mb-6">
                  Stack small process steps here.
                </p>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                  <span className="text-pink-400">01</span>
                  <span>Plan</span>
                </div>
                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: '50ms' }}>
                  <span className="text-pink-400">02</span>
                  <span>Build</span>
                </div>
                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: '100ms' }}>
                  <span className="text-pink-400">03</span>
                  <span>Launch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wide CTA card */}
          <div className="md:col-span-3 md:row-span-1">
            <div className="h-full w-full bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/30 hover:border-violet-500/50 rounded-2xl shadow-lg p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/20 group">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-2">
                  Summary strip
                </p>
                <p className="text-sm text-gray-300">
                  Perfect for a compact call-to-action or a one-line value proposition.
                </p>
              </div>
              <button className="rounded-full bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/50 hover:border-violet-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-violet-200 transition-all transform hover:scale-105">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoLayout;
