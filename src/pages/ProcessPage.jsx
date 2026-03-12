import { useParams, Link } from 'react-router-dom';

const allServices = [
    {
        slug: 'web-design',
        tag: 'WEB DESIGN & DEV',
        title: 'sites that convert.',
        icon: '🎨',
        price: '₹41,500',
        priceNote: 'one-time',
        tagline: 'premium ui, shipped in under 14 days.',
        desc: 'clean, fast, conversion-focused websites built with react + tailwindcss. designed to impress, engineered to perform.',
        steps: [
            { n: '01', title: 'requirements & discovery', duration: 'day 1', desc: 'we map your brand identity, target audience, competitor landscape, and conversion goals. a detailed scope document is shared and signed off before any work begins.' },
            { n: '02', title: 'ui/ux design', duration: 'days 2–4', desc: 'high-fidelity figma mockups of every page. we go back and forth until you\'re 100% happy — no dev starts until design is approved.' },
            { n: '03', title: 'development', duration: 'days 5–10', desc: 'pixel-perfect react build. tailwindcss for styling, vite for speed, fully responsive across all viewports. seo tags, meta, open graph — all configured.' },
            { n: '04', title: 'testing & qa', duration: 'day 11', desc: 'cross-browser testing (chrome, safari, firefox, edge). lighthouse score > 90. form testing, link checks, mobile testing on real devices.' },
            { n: '05', title: 'launch & handover', duration: 'days 12–14', desc: 'deployed to vercel with custom domain, ssl, and analytics. full source code handover. 30-day free bug support window starts from launch day.' },
        ],
    },
    {
        slug: 'ai-content',
        tag: 'AI CONTENT CREATION',
        title: 'content on autopilot.',
        icon: '✍️',
        price: '₹1,25,000',
        priceNote: '/month',
        tagline: 'ai + human polish. published on schedule. every month.',
        desc: 'blog posts, social media, ugc scripts, seo long-form — ai-generated and human-polished content delivered consistently.',
        steps: [
            { n: '01', title: 'brand & audience analysis', duration: 'week 1', desc: 'we study your tone of voice, past content, target icp, and top competitors. this becomes the foundation for every piece of content we create.' },
            { n: '02', title: 'seo topic ideation', duration: 'week 1', desc: 'keyword research using semrush/ahrefs to identify high-opportunity topics. a 30-day content calendar is built and approved by you.' },
            { n: '03', title: 'ai generation', duration: 'ongoing', desc: 'first drafts created using gpt-4 + claude with custom system prompts tuned to your brand. up to 10+ pieces per month.' },
            { n: '04', title: 'human polish & review', duration: 'ongoing', desc: 'every piece reviewed, fact-checked, and edited by a human before it goes live. this is what separates us from raw ai output.' },
            { n: '05', title: 'publishing & reporting', duration: 'end of month', desc: 'content published to your platforms (wordpress, notion, socials). monthly performance report — traffic, impressions, and top-performing posts.' },
        ],
    },
    {
        slug: 'automation',
        tag: 'AUTOMATION & AI SYSTEMS',
        title: 'systems, not chaos.',
        icon: '⚡',
        price: '₹66,400',
        priceNote: '/month',
        tagline: 'audit, automate, eliminate manual busywork.',
        desc: 'crm integrations, lead follow-ups, email & whatsapp automation, ai internal tools — designed to run your ops without you.',
        steps: [
            { n: '01', title: 'workflow audit', duration: 'day 1–2', desc: 'we map every manual process in your business using a structured questionnaire + a live 60-minute walkthrough call. nothing is assumed.' },
            { n: '02', title: 'automation strategy', duration: 'day 3', desc: 'we prioritize workflows by roi impact. you get a clear roadmap — what gets automated, what tool handles it, and the expected time saved per week.' },
            { n: '03', title: 'implementation', duration: 'days 4–14', desc: 'we build workflows using n8n, zapier, or make.com (depending on complexity). custom api integrations, webhook handlers, and crm sync where needed.' },
            { n: '04', title: 'testing & edge cases', duration: 'days 14–17', desc: 'every automation is stress-tested. we simulate error states, retries, duplicate data, and edge cases to ensure nothing breaks in production.' },
            { n: '05', title: 'handover & monthly review', duration: 'ongoing', desc: 'documentation shared for every workflow. monthly review call to expand automations and catch new bottlenecks.' },
        ],
    },
    {
        slug: 'video-editing',
        tag: 'VIDEO EDITING',
        title: 'videos that retain.',
        icon: '🎬',
        price: '₹25,000',
        priceNote: '/month',
        tagline: 'hook-first editing for reels, tiktok, and youtube.',
        desc: 'high-retention short-form editing. motion graphics, captions, and ugc-style ads. designed for algorithms and audiences.',
        steps: [
            { n: '01', title: 'style brief', duration: 'day 1', desc: 'we study your brand\'s existing content, competitor styles, and reference videos you like. a concise style guide is created for the editor.' },
            { n: '02', title: 'raw footage / sourcing', duration: 'day 1–2', desc: 'you send raw clips, talking heads, or b-roll. we can also source stock footage, sound fx, and music from licensed libraries.' },
            { n: '03', title: 'editing', duration: 'days 2–4', desc: 'hook-first editing structure — first 3 seconds matter most. auto-captions applied, music mixed, motion graphics added. paced for maximum retention.' },
            { n: '04', title: 'review rounds', duration: 'days 4–5', desc: 'you get 2 revision rounds per video. feedback via loom or timestamp comments. quick turnaround — changes delivered within 24 hours.' },
            { n: '05', title: 'delivery', duration: 'day 5–6', desc: 'exported in platform-optimal dimensions (9:16 for reels, 16:9 for youtube, etc.) and delivered via google drive. thumbnail design included.' },
        ],
    },
    {
        slug: 'ai-chatbots',
        tag: 'AI CHATBOTS',
        title: 'support that never sleeps.',
        icon: '🤖',
        price: '₹33,200',
        priceNote: 'one-time',
        tagline: '24/7 ai chatbot trained on your business.',
        desc: 'custom ai chatbots for your website or whatsapp. qualify leads, answer faqs, and book calls — automatically.',
        steps: [
            { n: '01', title: 'knowledge base creation', duration: 'days 1–3', desc: 'we document your services, pricing, faqs, policies, and any other information the bot needs to handle. this becomes the chatbot\'s "brain".' },
            { n: '02', title: 'prompt engineering', duration: 'days 3–4', desc: 'we craft a system personality, tone of voice, and guardrails for the bot. it should feel like a knowledgeable team member, not a robot.' },
            { n: '03', title: 'development & integration', duration: 'days 4–8', desc: 'built using openai / gemini api. embedded on your website via chat widget or integrated into whatsapp using twilio / green api.' },
            { n: '04', title: 'red-team testing', duration: 'days 8–10', desc: 'we systematically try to break the bot — edge cases, off-topic questions, adversarial prompts. we keep refining until it handles everything gracefully.' },
            { n: '05', title: 'launch & monitoring', duration: 'ongoing', desc: 'go live with real-time conversation logs and a 30-day support window. we monitor and retrain based on real user interactions.' },
        ],
    },
    {
        slug: 'saas-mvp',
        tag: 'SAAS & MVP',
        title: 'build fast. learn faster.',
        icon: '🚀',
        price: '₹83,000',
        priceNote: 'one-time',
        tagline: 'full-stack mvp in 2–4 weeks.',
        desc: 'next.js + node.js + postgres. auth, payments, dashboards, and apis — built for validation and scale.',
        steps: [
            { n: '01', title: 'scope & mvp definition', duration: 'day 1–2', desc: 'we ruthlessly cut scope to only what\'s needed to validate the idea. a detailed feature list with user stories is agreed before any line of code.' },
            { n: '02', title: 'ui/ux design', duration: 'days 3–5', desc: 'lo-fi wireframes → hi-fi figma screens. every user flow mapped out. approved before development begins.' },
            { n: '03', title: 'full-stack development', duration: 'days 6–20', desc: 'next.js frontend, node.js api, postgresql database. auth (clerk/supabase), payments (razorpay/stripe), and admin dashboard included.' },
            { n: '04', title: 'testing & security', duration: 'days 20–24', desc: 'unit tests for critical flows, uat testing with you, basic security audit — sql injection, rate limiting, auth edge cases.' },
            { n: '05', title: 'launch & handover', duration: 'days 24–28', desc: 'deployed on vercel + supabase/planetscale. full code handover with documentation. cicd pipeline configured. 30-day post-launch support.' },
        ],
    },
];

function ProcessPage() {
    const { serviceName } = useParams();
    const service = allServices.find(s => s.slug === serviceName);

    if (!service) {
        return (
            <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '3rem' }}>🔍</p>
                <h1 style={{ color: 'var(--c-text)', fontWeight: 800 }}>service not found.</h1>
                <Link to="/services" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>← back to services</Link>
            </div>
        );
    }

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>

            {/* Hero */}
            <section style={{ padding: '5rem 1.5rem 4rem', borderBottom: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--c-text-faint)', marginBottom: '2rem', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}>
                        ← back to services
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{service.icon}</span>
                        <div>
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.5rem' }}>
                                {service.tag} · process
                            </p>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)' }}>
                                {service.title}
                            </h1>
                        </div>
                    </div>

                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2.5rem' }}>{service.desc}</p>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.25rem' }}>starting at</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--c-text)', letterSpacing: '-0.02em' }}>{service.price} <span style={{ fontSize: '0.85rem', color: 'var(--c-text-dim)', fontWeight: 500 }}>{service.priceNote}</span></p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.25rem' }}>steps</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--c-text)', letterSpacing: '-0.02em' }}>{service.steps.length}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section style={{ padding: '4rem 1.5rem 6rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '3rem' }}>
                        how it works
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {service.steps.map((step, i) => (
                            <div key={step.n} style={{
                                display: 'grid',
                                gridTemplateColumns: '60px 1fr auto',
                                gap: '2rem',
                                alignItems: 'start',
                                padding: '2.5rem 0',
                                borderTop: `1px solid var(--c-border-subtle)`,
                                position: 'relative',
                            }}>
                                {/* Step number */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        border: `1px solid rgba(168,85,247,0.35)`,
                                        background: i === 0 ? 'rgba(168,85,247,0.12)' : 'var(--c-bg-subtle)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.75rem', fontWeight: 800, color: i === 0 ? 'var(--accent)' : 'var(--c-text-faint)',
                                    }}>
                                        {step.n}
                                    </div>
                                    {i < service.steps.length - 1 && (
                                        <div style={{ width: '1px', height: '100%', minHeight: '24px', background: 'var(--c-divider)', flex: 1 }} />
                                    )}
                                </div>

                                {/* Content */}
                                <div>
                                    <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.01em', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                                        {step.title}
                                    </h2>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)', lineHeight: 1.8 }}>
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Duration badge */}
                                <div style={{
                                    padding: '0.3rem 0.8rem', background: 'var(--c-bg-subtle)',
                                    border: `1px solid var(--c-border)`, borderRadius: '999px',
                                    fontSize: '0.7rem', color: 'var(--c-text-dim)', fontWeight: 600,
                                    whiteSpace: 'nowrap', flexShrink: 0,
                                }}>
                                    {step.duration}
                                </div>
                            </div>
                        ))}

                        {/* Final divider */}
                        <div style={{ borderTop: `1px solid var(--c-border-subtle)` }} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '6rem 1.5rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '1rem', lineHeight: 1.1 }}>
                        ready to get<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>started?</span>
                    </h2>
                    <p style={{ color: 'var(--c-text-muted)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        book a free 30-minute call to discuss your project and get a custom quote.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/book-a-call" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem', textDecoration: 'none' }}>
                            book a free call →
                        </Link>
                        <Link to="/services" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', border: `1px solid var(--c-border)`, color: 'var(--c-text)', fontWeight: 600, borderRadius: '8px', fontSize: '0.875rem', textDecoration: 'none' }}>
                            view all services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProcessPage;
