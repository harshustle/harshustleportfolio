import { useState } from 'react';

const QUESTIONS = [
  { q: 'what benefits do i get working with a solopreneur vs an agency?', a: 'direct communication, faster execution, and higher quality control. you work directly with the builder — no project managers slowing things down. your vision is translated into code exactly as intended.' },
  { q: 'what tech stack do you specialize in?', a: 'we build with the modern web stack: next.js, react, tailwind css, and node.js. for automation and ai, we use python, openai api, anthropic claude, n8n, and zapier.' },
  { q: 'what is your typical turnaround time?', a: 'speed is a core value. standard landing pages or automations: 3-5 days. complex saas mvps or full-scale applications: 2-4 weeks depending on scope.' },
  { q: 'do you offer post-launch support?', a: 'yes. 30 days of free bug-fixing after launch. retention packages are available for ongoing maintenance, feature updates, and monitoring.' },
  { q: 'how does payment work?', a: '50% upfront to lock in your slot and start work. remaining 50% on successful completion and handover. all payments via razorpay.' },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {QUESTIONS.map((item, i) => (
        <div key={item.q} style={{ borderTop: `1px solid var(--c-border-subtle)` }}>
          <button type="button" onClick={() => setOpen(prev => prev === i ? -1 : i)}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--c-text)', paddingRight: '2rem' }}>{item.q}</span>
            <span style={{ color: 'var(--c-text-faint)', fontSize: '1.25rem', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>+</span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)', lineHeight: 1.8 }}>{item.a}</p>
            </div>
          )}
        </div>
      ))}
      <div style={{ borderTop: `1px solid var(--c-border-subtle)` }} />
    </div>
  );
}

export default FAQ;
