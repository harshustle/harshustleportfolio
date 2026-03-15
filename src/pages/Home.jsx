import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MetricsStrip from '../components/MetricsStrip';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BookCallPreview from '../components/BookCallPreview';
import UserDetailsModal from '../components/UserDetailsModal';
import TrustBar from '../components/TrustBar';
import StickyMobileCTA from '../components/StickyMobileCTA';
import { openRazorpayCheckout } from '../utils/razorpay';

const services = [
    {
        tag: 'WEB DESIGN & DEV',
        title: 'sites that convert.',
        desc: 'static site at ₹15k. or go full-stack with notion database + ai chatbot for ₹30k. seo optimized, mobile-first, delivered in under 14 days.',
        price: 'from ₹15,000', priceNote: 'one-time', priceAmount: 15000,
        slug: 'web-design',
        features: ['static ₹15k / with add-ons ₹30k', 'notion database integration', 'ai chatbot option', '<14 day delivery'],
        urgency: '2 slots open',
    },
    {
        tag: 'AI VIDEO & EDITING',
        title: 'videos that retain.',
        desc: 'ai-generated faceless videos + human-edited short-form. reels, ugc ads, youtube shorts — 8 videos delivered per month at ₹30,000.',
        price: '₹30,000', priceNote: '/ 8 videos', priceAmount: 30000,
        slug: 'video-editing',
        features: ['8 videos / month', 'ai generation + human edit', 'reels / shorts / ugc ads', 'hook-first structure'],
        featured: true,
        urgency: 'most popular',
    },
    {
        tag: 'AUTOMATION',
        title: 'systems, not chaos.',
        desc: 'crm integrations · lead follow-ups · email & whatsapp automation · ai internal tools. one-time setup, runs forever.',
        price: '₹45,000', priceNote: 'one-time', priceAmount: 45000,
        slug: 'automation',
        features: ['n8n / zapier', 'api integrations', 'workflow audit', '30-day support'],
        urgency: '1 slot left',
    },
];

const whyUs = [
    { n: '01', title: 'speed is non-negotiable.', desc: 'most web projects ship in under 14 days. automations in 3-7. we run in sprints, not months.' },
    { n: '02', title: 'direct access. no layers.', desc: 'you work directly with the builder — no project managers, no miscommunication, no delays.' },
    { n: '03', title: 'built for scale.', desc: 'every system we build is designed to handle 10x growth. we\'re building assets, not deliverables.' },
    { n: '04', title: 'ai-first approach.', desc: 'we integrate ai into everything — from content generation to automation workflows to design systems.' },
];

const stackBadges = ['react', 'next.js', 'node.js', 'tailwind', 'openai', 'anthropic', 'n8n', 'zapier', 'figma', 'typescript', 'aws', 'docker'];

/* Fade-in hook using IntersectionObserver */
function useFadeIn(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

function FadeSection({ children, delay = 0, style = {}, ...props }) {
    const [ref, visible] = useFadeIn();
    return (
        <div ref={ref} style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
            ...style,
        }} {...props}>
            {children}
        </div>
    );
}

function Home() {
    const [buyService, setBuyService] = useState(null);
    const [hoveredService, setHoveredService] = useState(null);
    const [hoveredWhy, setHoveredWhy] = useState(null);

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
                {/* Background gradient orb */}
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
                {/* Subtle grid overlay */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--c-grid) 1px, transparent 1px), linear-gradient(90deg, var(--c-grid) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.4, pointerEvents: 'none' }} />

                <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
                    {/* Live badge */}
                    <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.9rem', border: `1px solid rgba(34,197,94,0.35)`, borderRadius: '999px', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-muted)', marginBottom: '2rem', background: 'rgba(34,197,94,0.05)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
                        available for new projects
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: 'var(--c-text)' }}>
                        digitizing<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>basti.</span>
                    </h1>

                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--c-text-muted)', maxWidth: '550px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
                        on a genuine mission to bring basti into the digital age. transforming local businesses with world-class web, content, and automation systems.
                    </p>

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/book-a-call" id="hero-cta-primary" style={{
                            padding: '0.9rem 2rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)',
                            fontWeight: 700, borderRadius: '8px', fontSize: '0.9rem', display: 'inline-block',
                            animation: 'cta-pulse 3s ease-in-out infinite',
                            boxShadow: '0 0 0 0 rgba(168,85,247,0.4)',
                        }}>
                            book a free call
                        </Link>
                        <Link to="/services" style={{
                            padding: '0.9rem 2rem', border: `1px solid var(--c-border)`,
                            color: 'var(--c-text)', fontWeight: 600, borderRadius: '8px', fontSize: '0.9rem', display: 'inline-block',
                        }}>
                            view services →
                        </Link>
                    </div>

                    {/* Trust bar — social proof right under CTAs */}
                    <TrustBar />
                </div>
            </section>

            {/* ─── METRICS ─────────────────────────── */}
            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <FadeSection>
                        <MetricsStrip />
                    </FadeSection>
                </div>
            </section>

            {/* ─── SERVICES ────────────────────────── */}
            <section style={{ padding: '6rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <FadeSection>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>what we do</p>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                            three services.<br />
                            <span style={{ color: 'var(--c-text-dim)' }}>one obsession.</span>
                        </h2>
                    </FadeSection>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                        {services.map((s, idx) => (
                            <FadeSection key={s.tag} delay={idx * 80}>
                                <div
                                    style={{
                                        background: s.featured
                                            ? 'var(--accent-dim)'
                                            : hoveredService === s.tag ? 'var(--c-bg-hover)' : 'var(--c-bg-card)',
                                        padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem',
                                        position: 'relative', cursor: 'pointer', height: '100%',
                                        transition: 'background 0.2s ease, box-shadow 0.2s ease',
                                        boxShadow: hoveredService === s.tag ? '0 0 0 2px var(--accent) inset' : s.featured ? '0 0 0 2px rgba(168,85,247,0.3) inset' : 'none',
                                    }}
                                    onMouseEnter={() => setHoveredService(s.tag)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    {/* Urgency pill */}
                                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.2rem 0.55rem', background: s.featured ? 'rgba(168,85,247,0.18)' : 'var(--c-bg-subtle)', border: `1px solid ${s.featured ? 'rgba(168,85,247,0.35)' : 'var(--c-border)'}`, borderRadius: '4px', color: s.featured ? 'var(--accent)' : 'var(--c-text-dim)' }}>
                                        {s.urgency}
                                    </div>

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
                                        <button
                                            onClick={() => setBuyService(s)}
                                            style={{
                                                padding: '0.6rem 1.25rem',
                                                background: s.featured ? 'var(--accent)' : hoveredService === s.tag ? 'var(--c-btn-bg)' : 'var(--c-bg-subtle)',
                                                color: s.featured ? '#fff' : hoveredService === s.tag ? 'var(--c-btn-text)' : 'var(--c-text)',
                                                fontWeight: 700, fontSize: '0.8rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                transform: hoveredService === s.tag ? 'scale(1.05)' : 'scale(1)',
                                            }}>
                                            get started
                                        </button>
                                    </div>
                                </div>
                            </FadeSection>
                        ))}
                    </div>

                    {/* Secondary CTA nudge */}
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--c-text-muted)' }}>
                            not sure which fits? <Link to="/book-a-call" style={{ color: 'var(--accent)', fontWeight: 600, borderBottom: '1px solid rgba(168,85,247,0.3)' }}>book a free call and we'll figure it out →</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── WHY DIFFERENT ───────────────────── */}
            <section style={{ padding: '6rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <FadeSection>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>why choose us</p>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                            why this is<br />
                            <span style={{ color: 'var(--c-text-dim)' }}>different.</span>
                        </h2>
                    </FadeSection>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                        {whyUs.map((w, idx) => (
                            <FadeSection key={w.n} delay={idx * 60}>
                                <div
                                    style={{
                                        background: hoveredWhy === w.n ? 'var(--accent-dim)' : 'var(--c-bg-card)',
                                        padding: '2rem', height: '100%',
                                        transition: 'background 0.2s ease',
                                        cursor: 'default',
                                    }}
                                    onMouseEnter={() => setHoveredWhy(w.n)}
                                    onMouseLeave={() => setHoveredWhy(null)}
                                >
                                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: hoveredWhy === w.n ? 'var(--accent)' : 'var(--c-text-ghost)', marginBottom: '1.25rem', transition: 'color 0.2s' }}>{w.n}</p>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{w.title}</h3>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{w.desc}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TECH STACK BADGES ───────────────── */}
            <section style={{ padding: '4rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <FadeSection>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '2rem' }}>our tech stack</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                            {stackBadges.map(b => (
                                <span key={b} style={{
                                    padding: '0.4rem 0.9rem', border: `1px solid var(--c-border)`,
                                    borderRadius: '999px', fontSize: '0.75rem', color: 'var(--c-text-dim)',
                                    fontWeight: 500, transition: 'all 0.2s',
                                    cursor: 'default',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(168,85,247,0.05)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--c-border)'; e.currentTarget.style.color = 'var(--c-text-dim)'; e.currentTarget.style.background = 'transparent'; }}>
                                    {b}
                                </span>
                            ))}
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─────────────────────── */}
            <section style={{ padding: '6rem 1.5rem', borderTop: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <FadeSection>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>testimonials</p>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                            words from<br />
                            <span style={{ color: 'var(--c-text-dim)' }}>our clients.</span>
                        </h2>
                    </FadeSection>
                    <FadeSection delay={100}>
                        <Testimonials />
                    </FadeSection>
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
                    <FadeSection>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>faq</p>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem', color: 'var(--c-text)' }}>
                            questions<br />
                            <span style={{ color: 'var(--c-text-dim)' }}>answered.</span>
                        </h2>
                    </FadeSection>
                    <FadeSection delay={80}>
                        <FAQ />
                    </FadeSection>
                </div>
            </section>

            {/* ─── FINAL CTA ───────────────────────── */}
            <section style={{ padding: '8rem 1.5rem', borderTop: `1px solid var(--c-divider)`, textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'var(--accent-dim)' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <FadeSection style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(168,85,247,0.6)', marginBottom: '1rem' }}>ready to start?</p>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: 'var(--c-text)', lineHeight: 1.05 }}>
                        let's build<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>something great.</span>
                    </h2>
                    <p style={{ color: 'var(--c-text-muted)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
                        one conversation is all it takes. book a free 30-min call — no obligation.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/book-a-call" id="final-cta-primary" style={{
                            padding: '1rem 2.25rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)',
                            fontWeight: 700, borderRadius: '8px', fontSize: '0.95rem', display: 'inline-block',
                        }}>
                            book a free call →
                        </Link>
                        <Link to="/services" style={{
                            padding: '1rem 2.25rem', border: `1px solid var(--c-border)`,
                            color: 'var(--c-text)', fontWeight: 600, borderRadius: '8px', fontSize: '0.95rem', display: 'inline-block',
                        }}>
                            view all services
                        </Link>
                    </div>
                    {/* Risk reversal */}
                    <p style={{ fontSize: '0.75rem', color: 'var(--c-text-faint)', marginTop: '1.5rem' }}>
                        🔒 no commitment · free 30-min call · payment only after you're satisfied
                    </p>
                </FadeSection>
            </section>

            <UserDetailsModal isOpen={!!buyService} onClose={() => setBuyService(null)} onSubmit={handleBuySubmit} serviceName={buyService?.title} />
            <StickyMobileCTA />
        </div>
    );
}

export default Home;
