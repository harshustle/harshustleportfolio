import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserDetailsModal from '../components/UserDetailsModal';
import { openRazorpayCheckout } from '../utils/razorpay';

const services = [
    {
        slug: 'web-design',
        tag: 'WEB DESIGN & DEV', title: 'sites that convert.', icon: '🎨',
        price: '₹41,500', priceAmount: 41500, priceNote: 'one-time',
        desc: 'premium dark-mode focused ui, fully responsive, seo optimized, and conversion-focused. built with react + tailwindcss. delivered in under 14 days.',
        features: ['custom ui/ux design', 'react + vite + tailwindcss', 'seo & performance optimized', 'responsive across all devices', 'contact form + analytics', 'vercel / netlify deployment'],
    },
    {
        slug: 'ai-content',
        tag: 'AI CONTENT CREATION', title: 'content on autopilot.', icon: '✍️',
        price: '₹1,25,000', priceAmount: 125000, priceNote: '/month', featured: true,
        desc: 'blog posts · social media · seo long-form · ugc-style video scripts · multi-language. ai-generated, human-polished, published on schedule.',
        features: ['10+ pieces of content/month', 'seo keyword research', 'ai + human polish', 'social media captions', 'ugc / short-form video scripts', 'monthly performance report'],
    },
    {
        slug: 'automation',
        tag: 'AUTOMATION & AI SYSTEMS', title: 'systems, not chaos.', icon: '⚡',
        price: '₹66,400', priceAmount: 66400, priceNote: '/month',
        desc: 'crm integrations · lead follow-up · email & whatsapp automation · ai internal tools. we audit your workflows and automate everything possible.',
        features: ['full workflow audit', 'n8n / zapier / make.com', 'crm & api integrations', 'email + whatsapp automation', 'ai-powered internal tools', '30-day support included'],
    },
    {
        slug: 'video-editing',
        tag: 'VIDEO EDITING', title: 'videos that retain.', icon: '🎬',
        price: '₹25,000', priceAmount: 25000, priceNote: '/month',
        desc: 'short-form content · reels · youtube · ugc ads · motion graphics. high-retention editing designed for algorithms and audiences.',
        features: ['8-12 videos/month', 'reels / tiktok / youtube shorts', 'motion graphics & captions', 'hook-optimized editing', 'thumbnail design', 'fast 3-day turnaround'],
    },
    {
        slug: 'ai-chatbots',
        tag: 'AI CHATBOTS', title: 'support that never sleeps.', icon: '🤖',
        price: '₹33,200', priceAmount: 33200, priceNote: 'one-time',
        desc: 'custom ai chatbots trained on your business knowledge base. embedded on your site or whatsapp. qualify leads, answer faqs, and book calls — 24/7.',
        features: ['custom knowledge base', 'gemini / gpt-4 powered', 'whatsapp or website embedded', 'lead qualification flows', 'handoff to human agent', 'analytics dashboard'],
    },
    {
        slug: 'saas-mvp',
        tag: 'SAAS & MVP', title: 'build fast. learn faster.', icon: '🚀',
        price: '₹83,000', priceAmount: 83000, priceNote: 'one-time',
        desc: 'full-stack saas mvps with auth, payments, dashboards, and apis. designed to ship in days — not months. built for validation and scale.',
        features: ['next.js + node.js + postgres', 'auth (clerk / supabase)', 'razorpay / stripe payments', 'admin dashboard', 'api-ready backend', '2-4 week delivery'],
    },
];

function Services() {
    const [buyService, setBuyService] = useState(null);

    const handleBuySubmit = (name, phone) => {
        if (buyService) {
            openRazorpayCheckout(buyService.priceAmount, 'INR', buyService.title, buyService.tag, { name, contact: phone });
            setBuyService(null);
        }
    };

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>

            {/* Hero */}
            <section style={{ padding: '6rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>services</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        everything you need.<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>nothing you don't.</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: '500px', lineHeight: 1.7 }}>
                        six services. one team. built for founders, agencies, and businesses that want results — not just deliverables.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section style={{ borderTop: `1px solid var(--c-divider)` }}>
                {services.map(s => (
                    <div key={s.tag} style={{ borderBottom: `1px solid var(--c-divider)`, background: s.featured ? 'var(--accent-dim)' : 'var(--c-bg)' }}>
                        <div className="grid-2 service-row" style={{ maxWidth: '1200px', margin: '0 auto', gap: '4rem', alignItems: 'start' }}>
                            {/* Left */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                                    <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--c-text-faint)' }}>{s.tag}</p>
                                    {s.featured && <span style={{ fontSize: '0.6rem', fontWeight: 700, padding: '0.15rem 0.5rem', background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '4px', color: 'var(--accent)', letterSpacing: '0.1em' }}>POPULAR</span>}
                                </div>
                                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '1rem' }}>{s.title}</h2>
                                <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{s.desc}</p>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <button onClick={() => setBuyService(s)} style={{ padding: '0.65rem 1.25rem', background: s.featured ? 'var(--accent)' : 'var(--c-btn-bg)', color: s.featured ? '#fff' : 'var(--c-btn-text)', fontWeight: 700, fontSize: '0.8rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                                        get started — {s.price}
                                    </button>
                                    <Link to={`/process/${s.slug}`} style={{ display: 'inline-block', padding: '0.65rem 1.25rem', border: `1px solid var(--c-border)`, color: 'var(--c-text)', fontWeight: 600, fontSize: '0.8rem', borderRadius: '8px', textDecoration: 'none' }}>
                                        see process →
                                    </Link>
                                </div>
                            </div>
                            {/* Right */}
                            <div>
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '1.25rem' }}>included</p>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {s.features.map(f => (
                                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--c-text-body)' }}>
                                            <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid rgba(168,85,247,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: `1px solid var(--c-border-subtle)`, display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--c-text)' }}>{s.price}</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--c-text-faint)' }}>{s.priceNote}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        not sure which service?<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>let's figure it out.</span>
                    </h2>
                    <Link to="/book-a-call" style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem' }}>
                        book a free call →
                    </Link>
                </div>
            </section>

            <UserDetailsModal isOpen={!!buyService} onClose={() => setBuyService(null)} onSubmit={handleBuySubmit} serviceName={buyService?.title} />
        </div>
    );
}

export default Services;
