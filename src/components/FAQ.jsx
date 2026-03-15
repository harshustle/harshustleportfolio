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
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer',
              textAlign: 'left', fontFamily: 'inherit',
            }}>
            <span style={{
              fontSize: '0.95rem', fontWeight: 600, paddingRight: '2rem',
              color: open === i ? 'var(--accent)' : 'var(--c-text)',
              transition: 'color 0.2s',
            }}>
              {item.q}
            </span>
            <span style={{
              width: '22px', height: '22px', borderRadius: '50%',
              border: `1px solid ${open === i ? 'var(--accent)' : 'var(--c-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', flexShrink: 0,
              color: open === i ? 'var(--accent)' : 'var(--c-text-faint)',
              transform: open === i ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.25s ease, border-color 0.2s, color 0.2s',
            }}>+</span>
          </button>
          <div style={{
            overflow: 'hidden',
            maxHeight: open === i ? '300px' : '0',
            transition: 'max-height 0.35s ease',
          }}>
            <div style={{ paddingBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)', lineHeight: 1.8 }}>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
      <div style={{ borderTop: `1px solid var(--c-border-subtle)` }} />
    </div>
  );
}

export default FAQ;
