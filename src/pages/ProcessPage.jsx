import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const allServicesEn = [
    {
        slug: 'web-design',
        tag: 'WEB DESIGN & DEV',
        title: 'sites that convert.',
        icon: '🎨',
        price: 'from ₹15,000',
        priceNote: 'static / ₹30,000 with add-ons',
        tagline: 'static at ₹15k. full-stack with notion + chatbot at ₹30k.',
        desc: 'clean, fast, conversion-focused sites. choose your tier: a polished static site at ₹15,000, or go full-stack with notion database integration + embedded ai chatbot at ₹30,000. both delivered in under 14 days.',
        steps: [
            { n: '01', title: 'requirements & discovery', duration: 'day 1', desc: 'we map your brand identity, target audience, competitor landscape, and conversion goals. a detailed scope document is shared and signed off before any work begins.' },
            { n: '02', title: 'ui/ux design', duration: 'days 2–4', desc: 'high-fidelity figma mockups of every page. we go back and forth until you\'re 100% happy — no dev starts until design is approved.' },
            { n: '03', title: 'development', duration: 'days 5–10', desc: 'pixel-perfect react build. tailwindcss for styling, vite for speed, fully responsive across all viewports. seo tags, meta, open graph — all configured.' },
            { n: '04', title: 'testing & qa', duration: 'day 11', desc: 'cross-browser testing (chrome, safari, firefox, edge). lighthouse score > 90. form testing, link checks, mobile testing on real devices.' },
            { n: '05', title: 'launch & handover', duration: 'days 12–14', desc: 'deployed to vercel with custom domain, ssl, and analytics. full source code handover. 30-day free bug support window starts from launch day.' },
        ],
    },
    {
        slug: 'automation',
        tag: 'AUTOMATION & AI SYSTEMS',
        title: 'systems, not chaos.',
        icon: '⚡',
        price: '₹45,000',
        priceNote: 'one-time',
        tagline: 'audit, automate, eliminate manual busywork. forever.',
        desc: 'crm integrations, lead follow-ups, email & whatsapp automation, ai internal tools — designed to run your ops without you. one-time build, runs indefinitely.',
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
        tag: 'AI VIDEO CREATION & EDITING',
        title: 'videos that retain.',
        icon: '🎬',
        price: '₹30,000',
        priceNote: '/ 8 videos',
        tagline: 'ai-generated + human-edited. 8 videos per month.',
        desc: 'faceless ai videos + hook-first human editing for reels, ugc ads, and youtube shorts. ai handles the heavy lifting, humans make it scroll-stopping.',
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
        price: '₹30,000',
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
        price: '₹80,000',
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

const allServicesHin = [
    {
        slug: 'web-design',
        tag: 'WEB DESIGN & DEV',
        title: 'sites jo convert karein.',
        icon: '🎨',
        price: '₹15,000 se',
        priceNote: 'static / ₹30,000 with add-ons',
        tagline: 'static site ₹15k me. full-stack with notion + chatbot ₹30k me.',
        desc: 'saaf, tez, conversion-focused sites. apni tier chunein: ek static site ₹15,000 mein, ya notion database + embedded ai chatbot ke sath full-stack ₹30,000 mein. dono 14 din ke andar deliver hongi.',
        steps: [
            { n: '01', title: 'requirements & discovery', duration: 'day 1', desc: 'hum aapki brand identity, target audience, competitors aur conversion goals ko samajhte hain. kaam shuru hone se pehle ek scope document sign kiya jata hai.' },
            { n: '02', title: 'ui/ux design', duration: 'days 2–4', desc: 'har page ke figma mockups. jab tak aap 100% khush nahi hote, dev shuru nahi hoga.' },
            { n: '03', title: 'development', duration: 'days 5–10', desc: 'pixel-perfect react build. tailwindcss styling ke liye, vite speed ke liye, aur sabhi devices par chalne wala design. seo tags aur meta bhi configure kiye jate hain.' },
            { n: '04', title: 'testing & qa', duration: 'day 11', desc: 'har browser par testing (chrome, safari, firefox, edge). lighthouse score > 90. form testing, link checks, aur mobile testing.' },
            { n: '05', title: 'launch & handover', duration: 'days 12–14', desc: 'vercel par custom domain, ssl, aur analytics ke sath deploy. source code ka proper handover. launch ke baad 30-din free bug support.' },
        ],
    },
    {
        slug: 'automation',
        tag: 'AUTOMATION & AI SYSTEMS',
        title: 'systems, chaos nahi.',
        icon: '⚡',
        price: '₹45,000',
        priceNote: 'one-time',
        tagline: 'audit karein, automate karein, manual kaam khatam karein. hamesha ke liye.',
        desc: 'crm integrations, lead follow-ups, email & whatsapp automation, ai internal tools — ye sab bina aapke ops sambhalne ke liye design kiye gaye hain. ek baar setup, aur ye hamesha chalenge.',
        steps: [
            { n: '01', title: 'workflow audit', duration: 'day 1–2', desc: 'hum ek questionnaire aur 60-min walkthrough call ke through aapke har manual process ko samajhte hain.' },
            { n: '02', title: 'automation strategy', duration: 'day 3', desc: 'roi impact ke hisab se workflows prioritize kiye jate hain. aapko clearly pata chalega ki kya automate hoga aur isse kitna waqt bachega.' },
            { n: '03', title: 'implementation', duration: 'days 4–14', desc: 'hum n8n, zapier ya make.com ka use karke workflows banate hain. custom api integrations aur crm sync zaroorat ke anusaar kiye jate hain.' },
            { n: '04', title: 'testing & edge cases', duration: 'days 14–17', desc: 'har automation stress-test hota hai. hum errors simulate karke ensure karte hain ki live production me kuch fail na ho.' },
            { n: '05', title: 'handover & monthly review', duration: 'ongoing', desc: 'har workflow ka documentation diya jata hai. monthly review call karte hain taaki process aage bhi improve ho sake.' },
        ],
    },
    {
        slug: 'video-editing',
        tag: 'AI VIDEO CREATION & EDITING',
        title: 'videos jo hook karein.',
        icon: '🎬',
        price: '₹30,000',
        priceNote: '/ 8 videos',
        tagline: 'ai-generated + human-edited. mahine me 8 videos.',
        desc: 'reels, ugc ads aur shorts ke liye faceless ai videos + hook-first ad editing. ai bhaari kaam karta hai, humans use zabardast banate hain.',
        steps: [
            { n: '01', title: 'style brief', duration: 'day 1', desc: 'hum aapke brand ki baki content aur competitor styles ko padhte hain aur ek style guide banate hain editor ke liye.' },
            { n: '02', title: 'raw footage / sourcing', duration: 'day 1–2', desc: 'aap hume raw footage bhejte hain. agar chahiye, toh hum licensed stock footage, sound effects aur music bhi dhoondhte hain.' },
            { n: '03', title: 'editing', duration: 'days 2–4', desc: 'shuruaat ke 3 sec sabse important hote hain, isliye hook-first structure follow kiya jata hai. auto-captions, music mix aur motion graphics add kiye jate hain.' },
            { n: '04', title: 'review rounds', duration: 'days 4–5', desc: 'aap har video per 2 revision rounds kar sakte hain, loom ya timestamp comments ke zaraiye. corrections 24 ghante me deliver hote hain.' },
            { n: '05', title: 'delivery', duration: 'day 5–6', desc: 'saare clips high resolution me deliver kiye jate hain (9:16 reels ke liye, 16:9 youtube ke liye, aadi). thumbnail design bhi iska hissa hai.' },
        ],
    },
    {
        slug: 'ai-chatbots',
        tag: 'AI CHATBOTS',
        title: 'support jo sota nahi.',
        icon: '🤖',
        price: '₹30,000',
        priceNote: 'one-time',
        tagline: '24/7 ai chatbot, jo aapke business ke baare me sab kuch jaanta ho.',
        desc: 'aapki website aur whatsapp ke liye ai chatbots. jo leads laaye, sawalon ka jawab de aur calls khud-ba-khud book kare.',
        steps: [
            { n: '01', title: 'knowledge base creation', duration: 'days 1–3', desc: 'hum aapki services, pricing, aur faqs ki jankari system me feed karte hain, jo bot ka ek knowledge base ya "brain" (dimag) ban jata hai.' },
            { n: '02', title: 'prompt engineering', duration: 'days 3–4', desc: 'hum chatbot ki ek personality aur set parameters banate hain taaki ye bot sirf answers na de, balki ek asli customer rep lage.' },
            { n: '03', title: 'development & integration', duration: 'days 4–8', desc: 'openai/gemini api ke saath banaya gaya. chat widget setup ke through website aur twilio / green api ke through whatsapp me joda jayega.' },
            { n: '04', title: 'red-team testing', duration: 'days 8–10', desc: 'hum poori testing karte hain—edge cases aur ajeeb sawaal poochte hain, taaki pata chale ki ye har condition handle kar sakta hai.' },
            { n: '05', title: 'launch & monitoring', duration: 'ongoing', desc: 'live jane ke baad conversation logs test hote hain aur lagatar system retrain (sudhara) jata hai 30 din ki free support window mein.' },
        ],
    },
    {
        slug: 'saas-mvp',
        tag: 'SAAS & MVP',
        title: 'jaldi banayein. tez seekhein.',
        icon: '🚀',
        price: '₹80,000',
        priceNote: 'one-time',
        tagline: 'full-stack mvp, sirf 2–4 hafte me.',
        desc: 'next.js + node.js + postgres se bana. auth, payments, dashboards, apis — banaya hi validation aur aage ke operations ke liye gaya hai.',
        steps: [
            { n: '01', title: 'scope & mvp definition', duration: 'day 1–2', desc: 'hum features ki cutting karte hain, aur sirf important functionalities final karte hain validation ke liye.' },
            { n: '02', title: 'ui/ux design', duration: 'days 3–5', desc: 'wireframes se shuruaat karke figma screens banaye jate hain, jab tak ui pass na ho dev work start nahi hoga.' },
            { n: '03', title: 'full-stack development', duration: 'days 6–20', desc: 'next.js, node.js, aur postgres setup kiya jata hai. isme secure auth, razorpay / stripe payment gateway aur dashboard functionality shamil hai.' },
            { n: '04', title: 'testing & security', duration: 'days 20–24', desc: 'security pe test kiya gaya system (basic sql injection, auth verification). zaroori features verify honge.' },
            { n: '05', title: 'launch & handover', duration: 'days 24–28', desc: 'deployed locally or using cloud services me vercel use kar sakte hain. poora code di jayega aage update test kiye ja sake.' },
        ],
    },
];

function ProcessPage() {
    const { language } = useLanguage();
    const allServices = language === 'hin' ? allServicesHin : allServicesEn;
    const { serviceName } = useParams();
    const service = allServices.find(s => s.slug === serviceName);

    if (!service) {
        return (
            <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '3rem' }}>🔍</p>
                <h1 style={{ color: 'var(--c-text)', fontWeight: 800 }}>{language === 'hin' ? 'service nahi mili.' : 'service not found.'}</h1>
                <Link to="/services" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>{language === 'hin' ? '← services par wapas jayein' : '← back to services'}</Link>
            </div>
        );
    }

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>

            {/* Hero */}
            <section style={{ padding: '5rem 1.5rem 4rem', borderBottom: `1px solid var(--c-divider)` }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--c-text-faint)', marginBottom: '2rem', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}>
                        {language === 'hin' ? '← services par wapas jayein' : '← back to services'}
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
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.25rem' }}>{language === 'hin' ? 'shuruati daam' : 'starting at'}</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--c-text)', letterSpacing: '-0.02em' }}>{service.price} <span style={{ fontSize: '0.85rem', color: 'var(--c-text-dim)', fontWeight: 500 }}>{service.priceNote}</span></p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.25rem' }}>{language === 'hin' ? 'steps' : 'steps'}</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--c-text)', letterSpacing: '-0.02em' }}>{service.steps.length}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section style={{ padding: '4rem 1.5rem 6rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '3rem' }}>
                        {language === 'hin' ? 'kaise kaam karte hain' : 'how it works'}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {service.steps.map((step, i) => (
                            <div key={step.n}
                                className="grid-step"
                                style={{
                                    display: 'grid',
                                    gap: '1.5rem',
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
                                <div className="step-duration" style={{
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
                        {language === 'hin' ? 'shuru karne ke liye' : 'ready to get'}<br />
                        <span style={{ color: 'var(--c-text-dim)' }}>{language === 'hin' ? 'taiyaar hain?' : 'started?'}</span>
                    </h2>
                    <p style={{ color: 'var(--c-text-muted)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        {language === 'hin' ? 'apne project ke baare mein baat karne ke liye free 30-min call book karein.' : 'book a free 30-minute call to discuss your project and get a custom quote.'}
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/book-a-call" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem', textDecoration: 'none' }}>
                            {language === 'hin' ? 'free call book karein →' : 'book a free call →'}
                        </Link>
                        <Link to="/services" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', border: `1px solid var(--c-border)`, color: 'var(--c-text)', fontWeight: 600, borderRadius: '8px', fontSize: '0.875rem', textDecoration: 'none' }}>
                            {language === 'hin' ? 'saari services dekhein' : 'view all services'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProcessPage;
