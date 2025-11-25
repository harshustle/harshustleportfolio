// src/components/parts/FeaturesGrid.jsx
import { Zap, LayoutTemplate, Sparkles, Workflow } from "lucide-react";

const features = [
  {
    icon: LayoutTemplate,
    title: "Composable layouts",
    description:
      "Design once, reuse everywhere. Mix and match sections without rewriting your layout.",
    layout: "md:col-span-3 md:row-span-2", // big card
  },
  {
    icon: Zap,
    title: "Motion-ready",
    description:
      "Works seamlessly with GSAP, Framer Motion, and any custom animation pipeline.",
    layout: "md:col-span-3 md:row-span-1", // wide short card
  },
  {
    icon: Sparkles,
    title: "Pixel-perfect visuals",
    description:
      "Sharp typography, spacing, and composition so your UI feels premium out of the box.",
    layout: "md:col-span-2 md:row-span-1", // medium card
  },
  {
    icon: Workflow,
    title: "Production-focused",
    description:
      "A structure that stays maintainable when the project grows and requirements change.",
    layout: "md:col-span-4 md:row-span-1", // wide bottom card
  },
];

function FeaturesGrid() {
  return (
    <div
      className="
        grid gap-4
        grid-cols-1
        md:grid-cols-6
        auto-rows-[minmax(130px,auto)]
      "
    >
      {features.map(({ icon: Icon, title, description, layout }, index) => (
        <article
          key={title}
          className={`
            group relative overflow-hidden
            rounded-2xl border border-white
            bg-[#dabbff]
            p-5 sm:p-6
            flex flex-col justify-between
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:border-white/40 hover:bg-black
            ${layout}
          `}
        >
          {/* subtle top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-white" />

          {/* content */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className="
                h-9 w-9 flex items-center justify-center
                border border-white rounded-md
                transition-transform duration-300
                group-hover:scale-110 group-hover:-translate-y-0.5
              "
            >
              <Icon className="h-4 w-4 text-black group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-black tracking-tight group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="mt-1 text-[11px] text-black leading-relaxed group-hover:text-white transition-colors">
                {description}
              </p>
            </div>
          </div>

          {/* footer / index tag */}
          <div className="flex items-center justify-between text-[10px] text-white">
            <span className="uppercase tracking-[0.18em]">
              Feature {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-white group-hover:w-12 group-hover:bg-white transition-all duration-300" />
          </div>
        </article>
      ))}
    </div>
  );
}

export default FeaturesGrid;
