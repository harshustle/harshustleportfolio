// src/components/parts/FAQ.jsx
import { useState } from "react";

const QUESTIONS = [
  {
    q: "Can I customize the styling?",
    a: "Yes. Components use regular className props, so you can plug in Tailwind, CSS Modules, or any design system you prefer.",
  },
  {
    q: "Do I need to use Bit?",
    a: "No. You can use these components in any React project. If you use Bit, you can also version and share them as isolated components.",
  },
  {
    q: "Is this production-ready?",
    a: "The patterns are built to be production friendly, but you should still adapt them to your code style, design tokens, and architecture.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {QUESTIONS.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.q}
            className="rounded-xl border border-slate-800 bg-slate-900/40"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center px-4 py-3 text-left text-xs"
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
            >
              <span className="font-medium text-slate-50">{item.q}</span>
              <span className="text-slate-400 text-xs">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 pb-3 text-xs text-slate-300">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
