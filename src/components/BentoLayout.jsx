import React from "react";

const BentoLayout = () => {
  return (
    <section className="bg-[#d4a5ff] py-16 px-4 flex justify-center rounded-2xl shadow-lg">
      <div className="w-full max-w-5xl space-y-6">
        {/* Optional heading */}
        <header className="flex flex-col gap-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-900">
            Bento overview
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">
            Clean cards for a flexible layout
          </h2>
        </header>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[170px]">
          {/* Main white card (hero) */}
          <div className="md:col-span-2 md:row-span-2">
            <div className="h-full w-full bg-white border-2 border-slate-800 rounded-3xl shadow-lg p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                    Primary block
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Central content area
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use this to anchor your main message, product highlight, or
                  hero visual. The surrounding tiles support this story.
                </p>
              </div>

              <div className="flex gap-2 mt-3">
                <span className="text-[11px] text-slate-600 border border-slate-800 rounded-full px-3 py-1">
                  Layout
                </span>
                <span className="text-[11px] text-slate-600 border border-slate-800 rounded-full px-3 py-1">
                  Focus
                </span>
              </div>
            </div>
          </div>

          {/* Light blue card – status / metrics */}
          <div className="md:col-span-2 md:row-span-1">
            <div className="h-full w-full bg-[#e7f4ff] border-2 border-slate-800 rounded-3xl shadow-lg p-4 flex items-center justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                  Snapshot
                </p>
                <p className="text-xs text-slate-700">
                  Quick metrics, states, or updates at a glance.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-slate-700">Projects</p>
                <p className="text-xl font-semibold text-slate-900 leading-none">
                  24
                </p>
              </div>
            </div>
          </div>

          {/* Small white card – tag / link */}
          <div className="md:col-span-1 md:row-span-1">
            <div className="h-full w-full bg-white border-2 border-slate-800 rounded-3xl shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                  Node
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  Use for links, tags, or small details.
                </p>
              </div>
              <span className="mt-2 text-[11px] font-mono text-slate-600">
                /mini-tile
              </span>
            </div>
          </div>

          {/* Tall yellow card – steps / timeline */}
          <div className="md:col-span-1 md:row-span-2">
            <div className="h-full w-full bg-[#000000] border-2 border-slate-800 rounded-3xl shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                  Flow
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  Stack small process steps here.
                </p>
              </div>
              <div className="mt-3 space-y-1 text-xs text-slate-800">
                <p>01 · Plan</p>
                <p>02 · Build</p>
                <p>03 · Launch</p>
              </div>
            </div>
          </div>

          {/* Bottom wide white card – CTA / summary */}
          <div className="md:col-span-3 md:row-span-1">
            <div className="h-full w-full bg-white border-2 border-slate-800 rounded-3xl shadow-lg p-4 flex items-center justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                  Summary strip
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  Perfect for a compact call-to-action or a one-line value
                  proposition.
                </p>
              </div>
              <button className="rounded-full border border-slate-900 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
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
