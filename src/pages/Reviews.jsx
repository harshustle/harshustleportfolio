const reviews = [
    { name: 'rohan das', role: 'ceo, techflow', rating: 5, project: 'automation + crm', quote: 'harsh didn\'t just build a website — he totally automated our lead generation. we\'re saving 20 hours a week thanks to his ai workflows. genuinely transformative.' },
    { name: 'sarah jenkins', role: 'founder, artistry', rating: 5, project: 'web design', quote: 'i was worried about working with a developer who didn\'t "get" design. harsh proved me completely wrong. the visuals are stunning and the animations are silky smooth.' },
    { name: 'mike chen', role: 'saas entrepreneur', rating: 5, project: 'saas mvp', quote: 'speed is an understatement. he delivered the mvp in 4 days, and it was cleaner than codebases i\'ve seen from expensive agencies charging 10x the price.' },
    { name: 'priya sharma', role: 'marketing head, d2c brand', rating: 5, project: 'ai content system', quote: 'our content output tripled within the first month. the ai system harsh built publishes seo-optimized articles consistently without us lifting a finger.' },
    { name: 'alex turner', role: 'cto, fintech startup', rating: 5, project: 'ai chatbot', quote: 'the chatbot handles 70% of our support tickets now. it\'s scarily good at qualifying leads and routing them to the right team. best investment this quarter.' },
    { name: 'neha kapoor', role: 'founder, edtech platform', rating: 5, project: 'web + automation', quote: 'he understood our vision immediately and delivered something better than what we imagined. on time, on budget, zero drama. will definitely work again.' },
];

const stats = [
    { value: '4.9', label: 'average rating' },
    { value: '50+', label: 'total reviews' },
    { value: '100%', label: 'recommend' },
    { value: '25+', label: 'global clients' },
];

function Reviews() {
    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>

            <section style={{ padding: '6rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>reviews</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        don't take<br /><span style={{ color: 'var(--c-text-dim)' }}>our word for it.</span>
                    </h1>
                </div>
            </section>

            {/* Stats Row */}
            <section style={{ borderTop: `1px solid var(--c-divider)`, borderBottom: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--c-bg-subtle)' }}>
                    {stats.map((s, i) => (
                        <div key={s.label} style={{ padding: '2.5rem 2rem', borderRight: i < stats.length - 1 ? `1px solid var(--c-divider)` : 'none', textAlign: 'center' }}>
                            <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--c-text)', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>{s.value}</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--c-text-dim)', letterSpacing: '0.05em' }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews Grid */}
            <section style={{ padding: '5rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                    {reviews.map(r => (
                        <div key={r.name} style={{ background: 'var(--c-bg-card)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                {[...Array(r.rating)].map((_, i) => <span key={i} style={{ color: 'var(--accent)', fontSize: '0.875rem' }}>★</span>)}
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--c-text-body)', lineHeight: 1.8, fontStyle: 'italic' }}>"{r.quote}"</p>
                            <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: `1px solid var(--c-border-subtle)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <p style={{ fontWeight: 700, color: 'var(--c-text)', fontSize: '0.875rem' }}>{r.name}</p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--c-text-dim)' }}>{r.role}</p>
                                </div>
                                <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '4px', color: 'rgba(168,85,247,0.7)', letterSpacing: '0.08em' }}>{r.project}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Reviews;
