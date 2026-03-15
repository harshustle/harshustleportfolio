import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserDetailsModal from '../components/UserDetailsModal';
import { openRazorpayCheckout } from '../utils/razorpay';
import { useLanguage } from '../context/LanguageContext';

const services = [
    {
        slug: 'web-design',
        tag: 'WEB DESIGN & DEV', title: 'sites that convert.', icon: '🎨',
        price: 'from ₹15,000', priceAmount: 15000, priceNote: 'one-time',
        desc: 'clean, fast, conversion-focused websites. choose your tier: static site at ₹15,000 or full-stack with notion database integration + ai chatbot at ₹30,000.',
        features: [
            '₹15,000 — static site (html/react, seo, responsive)',
            '₹30,000 — + notion database integration',
            '₹30,000 — + ai chatbot embedded',
            'custom ui/ux design',
            'vercel deployment + custom domain',
            '<14 day delivery',
        ],
    },
    {
        slug: 'video-editing',
        tag: 'AI VIDEO CREATION & EDITING', title: 'videos that retain.', icon: '🎬',
        price: 'from ₹8,000', priceAmount: 8000, priceNote: '/ 2 real shoot videos',
        priceSecondary: '₹30,000', priceSecondaryNote: '/ 8 ai videos',
        desc: 'two formats. same hook-first strategy. choose your tier: real on-site shoot at ₹8,000 for 2 videos, or ai-generated faceless content at ₹30,000 for 8 videos — reels, ugc ads, youtube shorts, engineered for maximum retention.',
        features: [
            '₹8,000 — 2 real on-site shoot videos',
            '₹30,000 — 8 ai-generated faceless videos',
            'reels / tiktok / youtube shorts',
            'hook-optimized editing + captions',
            'motion graphics & thumbnails',
            'delivered in 2 rounds',
        ],
    },
    {
        slug: 'automation',
        tag: 'AUTOMATION & AI SYSTEMS', title: 'systems, not chaos.', icon: '⚡',
        price: '₹45,000', priceAmount: 45000, priceNote: 'one-time',
        desc: 'crm integrations · lead follow-up · email & whatsapp automation · ai internal tools. we audit your workflows and automate everything that slows you down.',
        features: ['full workflow audit', 'n8n / zapier / make.com', 'crm & api integrations', 'email + whatsapp automation', 'ai-powered internal tools', '30-day support included'],
    },
    {
        slug: 'ai-chatbots',
        tag: 'AI CHATBOTS', title: 'support that never sleeps.', icon: '🤖',
        price: '₹30,000', priceAmount: 30000, priceNote: 'one-time',
        desc: 'custom ai chatbots trained on your business knowledge base. embedded on your site or whatsapp. qualify leads, answer faqs, and book calls — 24/7.',
        features: ['custom knowledge base', 'gemini / gpt-4 powered', 'whatsapp or website embedded', 'lead qualification flows', 'handoff to human agent', 'analytics dashboard'],
    },
    {
        slug: 'saas-mvp',
        tag: 'SAAS & MVP', title: 'build fast. learn faster.', icon: '🚀',
        price: '₹80,000', priceAmount: 80000, priceNote: 'one-time',
        desc: 'full-stack saas mvps with auth, payments, dashboards, and apis. designed to ship in days — not months. built for validation and scale.',
        features: ['next.js + node.js + postgres', 'auth (clerk / supabase)', 'razorpay / stripe payments', 'admin dashboard', 'api-ready backend', '2-4 week delivery'],
    },
];

function Services() {
    const { language, t } = useLanguage();
    const [buyService, setBuyService] = useState(null);

    const servicesData = language === 'hin' ? [
        {
            slug: 'web-design',
            tag: 'WEB DESIGN & DEV', title: 'sites jo convert karein.', icon: '🎨',
            price: '₹15,000 se', priceAmount: 15000, priceNote: 'one-time',
            desc: 'clean, fast, aur conversion-focused websites. apna tier chunein: ₹15,000 me static site ya ₹30,000 me full-stack jisme notion database aur ai chatbot ho.',
            features: [
                '₹15,000 — static site (html/react, seo, responsive)',
                '₹30,000 — + notion database integration',
                '₹30,000 — + ai chatbot embedded',
                'custom ui/ux design',
                'vercel deployment + custom domain',
                '<14 day delivery',
            ],
        },
        {
            slug: 'video-editing',
            tag: 'AI VIDEO CREATION & EDITING', title: 'videos jo rok ke rakhein.', icon: '🎬',
            price: '₹8,000 se', priceAmount: 8000, priceNote: '/ 2 real shoot videos',
            priceSecondary: '₹30,000', priceSecondaryNote: '/ 8 ai videos',
            desc: 'do formats. same hook-first strategy. tier chunein: ₹8,000 me 2 videos (real shoot), ya ₹30,000 me 8 videos (ai-generated faceless) — reels, ugc ads, youtube shorts.',
            features: [
                '₹8,000 — 2 real on-site shoot videos',
                '₹30,000 — 8 ai-generated faceless videos',
                'reels / tiktok / youtube shorts',
                'hook-optimized editing + captions',
                'motion graphics & thumbnails',
                'delivered in 2 rounds',
            ],
        },
        {
            slug: 'automation',
            tag: 'AUTOMATION & AI SYSTEMS', title: 'systems, chaos nahi.', icon: '⚡',
            price: '₹45,000', priceAmount: 45000, priceNote: 'one-time',
            desc: 'crm integrations · lead follow-up · email & whatsapp automation. hum aapke workflows audit karke sab kuch automate karte hain.',
            features: ['full workflow audit', 'n8n / zapier / make.com', 'crm & api integrations', 'email + whatsapp automation', 'ai-powered internal tools', '30-day support included'],
        },
        {
            slug: 'ai-chatbots',
            tag: 'AI CHATBOTS', title: 'support jo kabhi nahi sota.', icon: '🤖',
            price: '₹30,000', priceAmount: 30000, priceNote: 'one-time',
            desc: 'aapke business par trained custom ai chatbots. website ya whatsapp par. 24/7 leads qualify karein aur calls book karein.',
            features: ['custom knowledge base', 'gemini / gpt-4 powered', 'whatsapp ya website embedded', 'lead qualification flows', 'handoff to human agent', 'analytics dashboard'],
        },
        {
            slug: 'saas-mvp',
            tag: 'SAAS & MVP', title: 'jaldi banayein, jaldi seekhein.', icon: '🚀',
            price: '₹80,000', priceAmount: 80000, priceNote: 'one-time',
            desc: 'full-stack saas mvps with auth, payments, aur dashboards. mahino nahi, dino mein ship karne ke liye.',
            features: ['next.js + node.js + postgres', 'auth (clerk / supabase)', 'razorpay / stripe payments', 'admin dashboard', 'api-ready backend', '2-4 week delivery'],
        },
    ] : services;

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
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>{t('services.intro')}</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        {t('services.h1_1')}<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>{t('services.h1_2')}</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: '500px', lineHeight: 1.7 }}>
                        {t('services.desc')}
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section style={{ borderTop: `2px solid var(--c-border)` }}>
                {servicesData.map((s, idx) => (
                    <div key={s.tag} style={{ borderBottom: `2px solid var(--c-border)`, background: s.featured ? 'var(--accent-dim)' : idx % 2 === 0 ? 'var(--c-bg)' : 'var(--c-bg-subtle)' }}>
                        <div className="grid-2 service-row" style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.5rem', gap: '4rem', alignItems: 'start' }}>
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
                                    <button onClick={() => setBuyService(s)} style={{ padding: '0.65rem 1.25rem', background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '0.8rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 0 16px rgba(168,85,247,0.3)', transition: 'box-shadow 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(168,85,247,0.55)'}
                                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 16px rgba(168,85,247,0.3)'}>
                                        {t('services.getStarted')} {s.price}
                                    </button>
                                    <Link to={`/process/${s.slug}`} style={{ display: 'inline-block', padding: '0.65rem 1.25rem', border: `1px solid var(--c-border)`, color: 'var(--c-text)', fontWeight: 600, fontSize: '0.8rem', borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--c-border)'}>
                                        {t('services.seeProcess')}
                                    </Link>
                                </div>
                            </div>
                            {/* Right */}
                            <div>
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '1.25rem' }}>{t('services.included')}</p>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {s.features.map(f => (
                                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--c-text-body)' }}>
                                            <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid rgba(168,85,247,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: `1px solid var(--c-border-subtle)` }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                        <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--c-text)' }}>{s.price}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--c-text-faint)' }}>{s.priceNote}</span>
                                    </div>
                                    {s.priceSecondary && (
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.4rem' }}>
                                            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--c-text-dim)' }}>{s.priceSecondary}</span>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--c-text-faint)' }}>{s.priceSecondaryNote}</span>
                                        </div>
                                    )}
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
                        {t('services.notSureH2_1')}<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>{t('services.notSureH2_2')}</span>
                    </h2>
                    <Link to="/book-a-call" style={{ display: 'inline-block', padding: '0.9rem 2rem', background: 'var(--accent)', color: '#fff', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem', boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}>
                        {t('services.bookCall')}
                    </Link>
                    <p style={{ fontSize: '0.75rem', color: 'var(--c-text-faint)', marginTop: '1.25rem' }}>
                        {t('services.guarantee')}
                    </p>
                </div>
            </section>

            <UserDetailsModal isOpen={!!buyService} onClose={() => setBuyService(null)} onSubmit={handleBuySubmit} serviceName={buyService?.title} />
        </div>
    );
}

export default Services;
