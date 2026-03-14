const testimonials = [
  { name: 'rohan das', role: 'ceo, techflow', project: 'crm automation', initials: 'RD', color: '#9333ea', quote: "harsh didn't just build a website — he totally automated our lead generation. we're saving 20 hours a week thanks to his ai workflows." },
  { name: 'sarah jenkins', role: 'founder, artistry', project: 'web design', initials: 'SJ', color: '#7c3aed', quote: "i was worried about working with a developer who didn't \"get\" design. harsh proved me wrong. the visuals are stunning and the animations silky smooth." },
  { name: 'mike chen', role: 'saas entrepreneur', project: 'saas mvp', initials: 'MC', color: '#6d28d9', quote: "speed is an understatement. he delivered the mvp in 4 days, and it was cleaner than codebases i've seen from expensive agencies." },
];

function Testimonials() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
      {testimonials.map((t, idx) => (
        <div key={t.name} style={{ background: 'var(--c-bg-card)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', overflow: 'hidden' }}>
          {/* Large quote decoration */}
          <span style={{ position: 'absolute', top: '-0.5rem', left: '1.25rem', fontSize: '5rem', color: 'rgba(168,85,247,0.07)', fontFamily: 'Georgia, serif', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>"</span>

          {/* Stars */}
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#facc15', fontSize: '0.8rem' }}>★</span>)}
            <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', color: 'var(--c-text-faint)', alignSelf: 'center' }}>verified client</span>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--c-text-body)', lineHeight: 1.8, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>"{t.quote}"</p>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: `1px solid var(--c-border-subtle)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Avatar with initial */}
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
                {t.initials}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--c-text)', fontSize: '0.875rem' }}>{t.name}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--c-text-dim)' }}>{t.role}</p>
              </div>
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '4px', color: 'rgba(168,85,247,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {t.project}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
