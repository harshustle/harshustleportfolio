import { Link } from 'react-router-dom';
import { useState } from 'react';
import MetricsStrip from '../components/MetricsStrip';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BookCallPreview from '../components/BookCallPreview';
import UserDetailsModal from '../components/UserDetailsModal';
import { openRazorpayCheckout } from '../utils/razorpay';

const services = [
    {
        tag: 'WEB DESIGN & DEV',
        title: 'sites that convert.',
        desc: 'static site at ₹15k. or go full-stack with notion database + ai chatbot for ₹30k. seo optimized, mobile-first, delivered in under 14 days.',
        price: 'from ₹15,000', priceNote: 'one-time', priceAmount: 15000,
        slug: 'web-design',
        features: ['static ₹15k / with add-ons ₹30k', 'notion database integration', 'ai chatbot option', '<14 day delivery'],
    },
    {
        tag: 'AI VIDEO & EDITING',
        title: 'videos that retain.',
        desc: 'ai-generated faceless videos + human-edited short-form. reels, ugc ads, youtube shorts — 8 videos delivered per month at ₹30,000.',
        price: '₹30,000', priceNote: '/ 8 videos', priceAmount: 30000,
        slug: 'video-editing',
        features: ['8 videos / month', 'ai generation + human edit', 'reels / shorts / ugc ads', 'hook-first structure'],
    },
    {
        tag: 'AUTOMATION',
        title: 'systems, not chaos.',
        desc: 'crm integrations · lead follow-ups · email & whatsapp automation · ai internal tools. one-time setup, runs forever.',
        price: '₹45,000', priceNote: 'one-time', priceAmount: 45000,
        slug: 'automation',
        features: ['n8n / zapier', 'api integrations', 'workflow audit', '30-day support'],
    },
];

const whyUs = [
    { n: '01', title: 'speed is non-negotiable.', desc: 'most web projects ship in under 14 days. automations in 3-7. we run in sprints, not months.' },
    { n: '02', title: 'direct access. no layers.', desc: 'you work directly with the builder — no project managers, no miscommunication, no delays.' },
    { n: '03', title: 'built for scale.', desc: 'every system we build is designed to handle 10x growth. we\'re building assets, not deliverables.' },
    { n: '04', title: 'ai-first approach.', desc: 'we integrate ai into everything — from content generation to automation workflows to design systems.' },
];

const stackBadges = ['react', 'next.js', 'node.js', 'tailwind', 'openai', 'anthropic', 'n8n', 'zapier', 'figma', 'typescript', 'aws', 'docker'];

function Home() {
    const [buyService, setBuyService] = useState(null);

    const handleBuySubmit = (name, phone) => {
        if (buyService) {
            openRazorpayCheckout(buyService.priceAmount, 'INR', buyService.title, buyService.tag, { name, contact: phone });
            setBuyService(null);
        }
    };

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.3s ease' }}>

            {/* ─── HERO ─────────────────────────────── */}
            <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', border: `1px solid var(--c-border)`, borderRadius: '999px', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                        available for new projects
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: 'var(--c-text)' }}>
                        web. content.<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>automation.</span>
                    </h1>

                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--c-text-muted)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
                        one studio. every digital system you need. ai-powered, speed-obsessed, built to scale.
                    </p>

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/book-a-call" style={{ padding: '0.85rem 1.75rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem', display: 'inline-block' }}>
                            book a free call
                        </Link>
                        <Link to="/services" style={{ padding: '0.85rem 1.75rem', border: `1px solid var(--c-border)`, color: 'var(--c-text)', fontWeight: 600, borderRadius: '8px', fontSize: '0.875rem', display: 'inline-block' }}>
                            view services →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── METRICS ─────────────────────────── */}
            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <MetricsStrip />
                </div>
            </section>

            {/* ─── SERVICES ────────────────────────── */}
            <section style={{ padding: '6rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>what we do</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                        three services.<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>one obsession.</span>
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                        {services.map(s => (
                            <div key={s.tag} style={{ background: s.featured ? 'var(--accent-dim)' : 'var(--c-bg-card)', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                                {s.featured && (
                                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', padding: '0.2rem 0.5rem', background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '4px', color: 'var(--accent)' }}>POPULAR</div>
                                )}
                                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--c-text-faint)' }}>{s.tag}</p>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)' }}>{s.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{s.desc}</p>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                                    {s.features.map(f => (
                                        <li key={f} style={{ fontSize: '0.8rem', color: 'var(--c-text-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ color: 'var(--accent)' }}>—</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: `1px solid var(--c-border-subtle)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <p style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--c-text)' }}>{s.price}</p>
                                        <p style={{ fontSize: '0.7rem', color: 'var(--c-text-faint)' }}>{s.priceNote}</p>
                                    </div>
                                    <button onClick={() => setBuyService(s)} style={{ padding: '0.6rem 1.25rem', background: s.featured ? 'var(--accent)' : 'var(--c-bg-subtle)', color: s.featured ? '#fff' : 'var(--c-text)', fontWeight: 700, fontSize: '0.8rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                                        get started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHY DIFFERENT ───────────────────── */}
            <section style={{ padding: '6rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>why choose us</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                        why this is<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>different.</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                        {whyUs.map(w => (
                            <div key={w.n} style={{ background: 'var(--c-bg-card)', padding: '2rem' }}>
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--c-text-ghost)', marginBottom: '1.25rem' }}>{w.n}</p>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{w.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TECH STACK BADGES ───────────────── */}
            <section style={{ padding: '4rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '2rem' }}>our tech stack</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                        {stackBadges.map(b => (
                            <span key={b} style={{ padding: '0.4rem 0.9rem', border: `1px solid var(--c-border)`, borderRadius: '999px', fontSize: '0.75rem', color: 'var(--c-text-dim)', fontWeight: 500 }}>
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─────────────────────── */}
            <section style={{ padding: '6rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>testimonials</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                        words from<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>our clients.</span>
                    </h2>
                    <Testimonials />
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link to="/reviews" style={{ fontSize: '0.875rem', color: 'var(--c-text-dim)', borderBottom: `1px solid var(--c-border)`, paddingBottom: '2px' }}>
                            see all reviews →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── BOOK CALL ───────────────────────── */}
            <section style={{ borderTop: `1px solid var(--c-divider)` }}>
                <BookCallPreview />
            </section>

            {/* ─── FAQ ─────────────────────────────── */}
            <section style={{ padding: '6rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>faq</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                        questions<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>answered.</span>
                    </h2>
                    <FAQ />
                </div>
            </section>

            {/* ─── FINAL CTA ───────────────────────── */}
            <section style={{ padding: '8rem 1.5rem', borderTop: `1px solid var(--c-divider)`, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: 'var(--c-text)', lineHeight: 1.05 }}>
                        let's build<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>something great.</span>
                    </h2>
                    <p style={{ color: 'var(--c-text-muted)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
                        one conversation is all it takes. book a free 30-min call — no obligation.
                    </p>
                    <Link to="/book-a-call" style={{ padding: '0.9rem 2rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.9rem', display: 'inline-block' }}>
                        book a free call →
                    </Link>
                </div>
            </section>

            <UserDetailsModal isOpen={!!buyService} onClose={() => setBuyService(null)} onSubmit={handleBuySubmit} serviceName={buyService?.title} />
        </div>
    );
}

export default Home;
