// src/components/parts/FeaturesGrid.jsx
import { Zap, LayoutTemplate, Sparkles, Workflow } from "lucide-react";

const features = [
  {
    icon: LayoutTemplate,
    title: "Composable layouts",
    description:
      "Design once, reuse everywhere. Mix and match sections without rewriting your layout.",
    layout: "md:col-span-3 md:row-span-2",
    gradient: "from-purple-900/20 to-pink-900/20",
    border: "border-purple-500/30",
    hoverBorder: "hover:border-purple-500/60"
  },
  {
    icon: Zap,
    title: "Motion-ready",
    description:
      "Works seamlessly with GSAP, Framer Motion, and any custom animation pipeline.",
    layout: "md:col-span-3 md:row-span-1",
    gradient: "from-yellow-900/20 to-orange-900/20",
    border: "border-yellow-500/30",
    hoverBorder: "hover:border-yellow-500/60"
  },
  {
    icon: Sparkles,
    title: "Pixel-perfect visuals",
    description:
      "Sharp typography, spacing, and composition so your UI feels premium out of the box.",
    layout: "md:col-span-2 md:row-span-1",
    gradient: "from-pink-900/20 to-rose-900/20",
    border: "border-pink-500/30",
    hoverBorder: "hover:border-pink-500/60"
  },
  {
    icon: Workflow,
    title: "Production-focused",
    description:
      "A structure that stays maintainable when the project grows and requirements change.",
    layout: "md:col-span-4 md:row-span-1",
    gradient: "from-blue-900/20 to-cyan-900/20",
    border: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60"
  },
];

function FeaturesGrid() {
  return (
    <div
      className="
        grid gap-4
        grid-cols-1
        md:grid-cols-6
        auto-rows-[minmax(160px,auto)]
      "
    >
      {features.map(({ icon: Icon, title, description, layout, gradient, border, hoverBorder }, index) => (
        <article
          key={title}
          className={`
            group relative overflow-hidden
            rounded-2xl border ${border} ${hoverBorder}
            bg-gradient-to-br ${gradient}
            p-6 sm:p-8
            flex flex-col justify-between
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-lg
            ${layout}
          `}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* content */}
          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="
                  h-12 w-12 flex items-center justify-center
                  bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl
                  transition-all duration-300
                  group-hover:scale-110 group-hover:bg-white/20
                "
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* footer / index tag */}
          <div className="relative flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
            <span className="uppercase tracking-wider">
              Feature {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px w-12 bg-white/30 group-hover:w-20 group-hover:bg-white/60 transition-all duration-300" />
          </div>
        </article>
      ))}
    </div>
  );
}

export default FeaturesGrid;
