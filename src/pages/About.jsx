import { Link } from 'react-router-dom';

const values = [
    { n: '01', title: 'speed first.', desc: 'we move fast. most projects are live in under 14 days because momentum matters more than perfection at launch.' },
    { n: '02', title: 'direct access.', desc: 'no account managers. no layers. you talk to the builder directly every single time.' },
    { n: '03', title: 'systems thinking.', desc: 'every project is designed to scale. we build infrastructure, not one-off deliverables.' },
    { n: '04', title: 'ai-first everything.', desc: 'we integrate ai into every service we offer — from content pipelines to automated business workflows.' },
];

const timeline = [
    { year: '2021', event: 'started freelancing as a web developer. first client. first win.' },
    { year: '2022', event: 'expanded into automation and ai systems. started building real workflows for real businesses.' },
    { year: '2023', event: 'pivoted to content — ai ugc, short-form video, and seo content systems at scale.' },
    { year: '2024', event: 'launched digibasti as a full-service digital studio. now serving 25+ clients globally.' },
    { year: '2025', event: 'building the next generation of ai-powered business systems. just getting started.' },
];

function About() {
    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>

            {/* Hero */}
            <section style={{ padding: '6rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '40%', right: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>about</p>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                            hi, i'm harsh.<br />
                            <span style={{ color: 'var(--c-text-dim)' }}>i build things.</span>
                        </h1>
                        <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '2rem' }}>
                            ai automation expert. full-stack developer. content strategist. founder of digibasti — a one-person studio that helps businesses scale with smart systems.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <Link to="/book-a-call" style={{ padding: '0.75rem 1.5rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem', display: 'inline-block' }}>book a call</Link>
                            <a href="https://twitter.com/harshustle" target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem 1.5rem', border: `1px solid var(--c-border)`, color: 'var(--c-text)', fontWeight: 600, borderRadius: '8px', fontSize: '0.875rem', display: 'inline-block' }}>follow on twitter →</a>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: `1px solid var(--c-border)`, borderRadius: '16px', overflow: 'hidden', background: 'var(--c-bg-subtle)' }}>
                            <img src="https://github.com/harshustle.png" alt="Harsh Srivastav" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <p style={{ fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.25rem' }}>harsh srivastav</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--c-text-dim)' }}>@harshustle · founder, digibasti</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                                    {['ai', 'automation', 'web dev', 'content', 'saas'].map(tag => (
                                        <span key={tag} style={{ padding: '0.2rem 0.6rem', border: `1px solid var(--c-border)`, borderRadius: '999px', fontSize: '0.7rem', color: 'var(--c-text-dim)' }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '6rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>values</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '3rem' }}>
                        what i believe<br /><span style={{ color: 'var(--c-text-dim)' }}>in building.</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                        {values.map(v => (
                            <div key={v.n} style={{ background: 'var(--c-bg-card)', padding: '2rem' }}>
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--c-text-ghost)', marginBottom: '1.25rem' }}>{v.n}</p>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.75rem' }}>{v.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '6rem 1.5rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>timeline</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '3rem' }}>
                        the journey<br /><span style={{ color: 'var(--c-text-dim)' }}>so far.</span>
                    </h2>
                    {timeline.map((t, i) => (
                        <div key={t.year} style={{ display: 'flex', gap: '2rem', paddingBottom: '2.5rem', borderLeft: i < timeline.length - 1 ? `1px solid var(--c-divider)` : 'none', marginLeft: '0.5rem', paddingLeft: '2rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-5px', top: '4px', width: '9px', height: '9px', borderRadius: '50%', border: '2px solid rgba(168,85,247,0.6)', background: 'var(--c-bg)' }} />
                            <div style={{ minWidth: '50px' }}>
                                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)' }}>{t.year}</p>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{t.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '6rem 1.5rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        let's work<br /><span style={{ color: 'var(--c-text-dim)' }}>together.</span>
                    </h2>
                    <Link to="/book-a-call" style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem' }}>
                        book a call →
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default About;
