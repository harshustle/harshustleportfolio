import { Link } from 'react-router-dom';

const BookCallPreview = () => (
    <section style={{ padding: '6rem 1.5rem', background: 'var(--c-bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}
            className="grid-2" >
            <div style={{ gap: '5rem', alignItems: 'center' }}>

                {/* Left */}
                <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>let's talk</p>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        book a call.<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>it's free.</span>
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--c-text-muted)', lineHeight: 1.8, maxWidth: '400px', marginBottom: '2rem' }}>
                        schedule a free 30-minute strategy session. discuss your project, get custom recommendations, no obligation.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                        {['30-minute strategy session', 'custom solution recommendations', 'completely free, no obligation'].map(item => (
                            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid rgba(168,85,247,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                                <span style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <Link to="/book-a-call" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem' }}>
                        book a free call →
                    </Link>
                </div>
            </div>

            {/* Right — Profile Card */}
            <div>
                <div style={{ border: `1px solid var(--c-border)`, borderRadius: '16px', padding: '2rem', background: 'var(--c-bg-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: `1px solid var(--c-border-subtle)` }}>
                        <div style={{ position: 'relative' }}>
                            <img src="https://github.com/harshustle.png" alt="Harsh" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '2px', right: '2px', width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', border: '2px solid var(--c-bg)' }} />
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, color: 'var(--c-text)' }}>harsh srivastav</p>
                            <p style={{ fontSize: '0.78rem', color: 'var(--c-text-dim)' }}>@harshustle · available now</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[{ dur: '15', label: '15 min meeting', desc: 'quick intro & fit check' }, { dur: '30', label: '30 min meeting', desc: 'full project deep-dive' }].map(opt => (
                            <Link key={opt.dur} to="/book-a-call"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', border: `1px solid var(--c-border)`, borderRadius: '10px', textDecoration: 'none', transition: 'all 0.2s', background: 'transparent' }}>
                                <div>
                                    <p style={{ fontWeight: 600, color: 'var(--c-text)', fontSize: '0.875rem' }}>{opt.label}</p>
                                    <p style={{ fontSize: '0.73rem', color: 'var(--c-text-dim)', marginTop: '0.15rem' }}>{opt.desc}</p>
                                </div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--c-text-faint)' }}>→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default BookCallPreview;
