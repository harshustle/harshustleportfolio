// src/components/parts/FAQ.jsx
import { useState } from "react";

const QUESTIONS = [
  {
    q: "What benefits do I get working with a solopreneur vs an agency?",
    a: "Direct communication, faster execution, and higher quality control. You work directly with the builder (me) without project managers slowing things down. This ensures your vision is perfectly translated into code.",
  },
  {
    q: "What tech stack do you specialize in?",
    a: "I build with the modern web stack: Next.js, React, Tailwind CSS, and Node.js. For automation and AI, I leverage Python, OpenAI API, Anthropic Claude, and various workflow automation tools like n8n and Zapier.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Speed is one of my core values. For standard landing pages or automations, I typically deliver within 3-5 days. More complex SaaS MVPs or full-scale applications can take 2-4 weeks depending on the scope.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. I don't just ship and ghost. I offer 30 days of free bug-fixing support after launch. I also have retention packages for ongoing maintenance, feature updates, and server monitoring.",
  },
  {
    q: "How does the payment structure work?",
    a: "I typically work on a 50/50 basis—50% upfront to lock in your slot and start the work, and the remaining 50% upon successful completion and handover of the project.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {QUESTIONS.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.q}
            className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center px-6 py-5 text-left text-lg"
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
            >
              <span className="font-medium text-slate-50">{item.q}</span>
              <span className="text-slate-400 text-lg ml-4">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-base text-slate-300 leading-relaxed">
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
