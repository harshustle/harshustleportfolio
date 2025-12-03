import { useState } from "react";
import { bentoData } from "../data/features";
import GetStartedModal from "./GetStartedModal";
import { ArrowRight } from "lucide-react";

function FeaturesGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { primary, flow, summary } = bentoData;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-full w-full max-w-7xl mx-auto p-4">
        {/* PRIMARY BLOCK - Top (3x2) - Expanded to full width */}
        <div className="md:col-span-3 md:row-span-2 rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Label removed */}
            <h2 className="text-3xl font-bold text-white mb-4">{primary.customTitle}</h2>
            {/* Description removed */}
          </div>

          <div className="relative z-10 mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-300 transition-colors group/btn"
            >
              Start Project <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* SNAPSHOT BLOCK REMOVED */}
        {/* NODE BLOCK REMOVED */}

        {/* SUMMARY STRIP - Bottom Left (2x1) */}
        <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 flex items-center justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex-1 mr-6">
            {/* Label removed */}
            {/* Description removed */}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white text-xs font-bold tracking-wider uppercase transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {summary.cta}
          </button>
        </div>

        {/* FLOW BLOCK - Bottom Right (1x1) - Adjusted row span if needed, but keeping 1x2 might break grid if row 3 is gone? 
            Wait, original grid was 3 rows.
            Primary was 2x2 (col-span-2, row-span-2).
            Snapshot was 1x1 (col-span-1, row-span-1).
            Node was 1x1 (col-span-1, row-span-1).
            Summary was 2x1 (col-span-2, row-span-1).
            Flow was 1x2 (col-span-1, row-span-2).
            
            If I remove Snapshot (1x1) and Node (1x1), that frees up the right column for rows 1 and 2.
            If I make Primary col-span-3, it takes the whole top 2 rows.
            So Primary is now 3x2.
            
            Row 3:
            Summary is 2x1 (Bottom Left).
            Flow was 1x2 (Bottom Right). But Flow was row-span-2 starting from... wait.
            
            Original Layout:
            R1: Primary (2 cols), Snapshot (1 col)
            R2: Primary (2 cols), Node (1 col)
            R3: Summary (2 cols), Flow (1 col) -> Wait, Flow was row-span-2?
            
            Let's check original code:
            Primary: col-span-2 row-span-2 (Top Left) -> R1, R2, C1, C2
            Snapshot: col-span-1 row-span-1 (Top Right) -> R1, C3
            Node: col-span-1 row-span-1 (Middle Right) -> R2, C3
            Summary: col-span-2 row-span-1 (Bottom Left) -> R3, C1, C2
            Flow: col-span-1 row-span-2 (Bottom Right) -> R3, C3 ... AND R4?
            
            Wait, grid-rows-3.
            If Flow is row-span-2 and starts at R3 (implied by order?), it would go to R4.
            But the grid is defined as `grid-rows-3`.
            
            Let's look at the original code order:
            1. Primary (2x2)
            2. Snapshot (1x1)
            3. Node (1x1)
            4. Summary (2x1)
            5. Flow (1x2)
            
            If Flow is the last item, and Summary is before it.
            Summary takes R3 C1-C2.
            Flow takes R3 C3... and R4 C3?
            
            If the grid is fixed to `grid-rows-3`, Flow might be cut off or extend.
            
            My new layout:
            Primary: col-span-3 row-span-2 (R1, R2, All Cols).
            Summary: col-span-2 row-span-1 (R3, C1-C2).
            Flow: col-span-1 row-span-1 (R3, C3).
            
            So Flow should be row-span-1 now to fit in the 3x3 grid.
        */}
        <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 relative overflow-hidden group flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 mb-4 flex-shrink-0">
            {/* Label removed */}
            {/* Description removed */}
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
            {flow.steps.map((step) => (
              <div key={step.id} className="group/step">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-mono text-rose-500/50">{String(step.id).padStart(2, '0')}</span>
                  <h4 className="text-sm font-bold text-white group-hover/step:text-rose-300 transition-colors">{step.title}</h4>
                </div>
                {/* Goal removed? User said "remove the content". Assuming description text. */}
                {/* Keeping step title and ID as they are structural/list items, not just "content paragraphs". */}
                {/* Removing the paragraph descriptions inside steps too? "remove the content" usually means the big text blocks. 
                    I'll remove the goal/action text to be safe/consistent with "minimal". */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* <style jsx> removed */}
    </>
  );
}

export default FeaturesGrid;
