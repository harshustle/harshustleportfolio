import { useLanguage } from '../context/LanguageContext';

const technologiesEn = [
    { name: 'react', category: 'frontend', desc: 'ui library for building component-based interfaces.' },
    { name: 'next.js', category: 'framework', desc: 'full-stack react framework with ssr and static generation.' },
    { name: 'typescript', category: 'language', desc: 'typed superset of js for safer, scalable codebases.' },
    { name: 'tailwindcss', category: 'styling', desc: 'utility-first css framework for rapid ui development.' },
    { name: 'node.js', category: 'backend', desc: 'javascript runtime for server-side logic and apis.' },
    { name: 'postgresql', category: 'database', desc: 'relational database for structured data at scale.' },
    { name: 'mongodb', category: 'database', desc: 'document database for flexible, json-like storage.' },
    { name: 'aws', category: 'cloud', desc: 'cloud platform for hosting, functions, and storage.' },
    { name: 'docker', category: 'devops', desc: 'containerization for consistent deployment environments.' },
    { name: 'n8n', category: 'automation', desc: 'open-source workflow automation — our primary automation tool.' },
    { name: 'zapier', category: 'automation', desc: 'no-code integrations between 5000+ apps.' },
    { name: 'openai api', category: 'ai', desc: 'gpt-4 and embeddings for ai-powered features.' },
    { name: 'anthropic claude', category: 'ai', desc: 'claude models for reasoning-heavy ai workflows.' },
    { name: 'google gemini', category: 'ai', desc: 'multimodal ai for content and chat interfaces.' },
    { name: 'figma', category: 'design', desc: 'collaborative design tool for ui/ux prototyping.' },
    { name: 'vercel', category: 'deployment', desc: 'platform for frontend deployment with edge functions.' },
];

const technologiesHin = [
    { name: 'react', category: 'frontend', desc: 'component-based interfaces banane ke liye ui library.' },
    { name: 'next.js', category: 'framework', desc: 'ssr aur static generation ke sath full-stack react framework.' },
    { name: 'typescript', category: 'language', desc: 'safe aur scalable codebases ke liye js ka typed superset.' },
    { name: 'tailwindcss', category: 'styling', desc: 'tezi se ui develop karne ke liye utility-first css framework.' },
    { name: 'node.js', category: 'backend', desc: 'server-side logic aur apis ke liye javascript runtime.' },
    { name: 'postgresql', category: 'database', desc: 'bade paimane par structured data ke liye relational database.' },
    { name: 'mongodb', category: 'database', desc: 'flexible, json-jaise storage ke liye document database.' },
    { name: 'aws', category: 'cloud', desc: 'hosting, functions aur storage ke liye cloud platform.' },
    { name: 'docker', category: 'devops', desc: 'consistent deployment environments ke liye containerization.' },
    { name: 'n8n', category: 'automation', desc: 'open-source workflow automation — humara primary automation tool.' },
    { name: 'zapier', category: 'automation', desc: '5000+ apps ke beech no-code integrations.' },
    { name: 'openai api', category: 'ai', desc: 'ai-powered features ke liye gpt-4 aur embeddings.' },
    { name: 'anthropic claude', category: 'ai', desc: 'reasoning-heavy ai workflows ke liye claude models.' },
    { name: 'google gemini', category: 'ai', desc: 'content aur chat interfaces ke liye multimodal ai.' },
    { name: 'figma', category: 'design', desc: 'ui/ux prototyping ke liye collaborative design tool.' },
    { name: 'vercel', category: 'deployment', desc: 'edge functions ke sath frontend deployment platform.' },
];

const categoryColors = { frontend: '#A855F7', framework: '#6366f1', language: '#3b82f6', styling: '#06b6d4', backend: '#10b981', database: '#f59e0b', cloud: '#f97316', devops: '#ef4444', automation: '#8b5cf6', ai: '#ec4899', design: '#14b8a6', deployment: '#84cc16' };
const categories = [...new Set(technologiesEn.map(t => t.category))];

function TechStack() {
    const { language } = useLanguage();
    const technologies = language === 'hin' ? technologiesHin : technologiesEn;

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>
            <section style={{ padding: '6rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>tech stack</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        {language === 'hin' ? 'tools jinpar hum' : 'tools we trust.'}<br /><span style={{ color: 'var(--c-text-dim)' }}>{language === 'hin' ? 'bharosa karte hain.' : 'every day.'}</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: '480px', lineHeight: 1.7 }}>
                        {language === 'hin' ? 'battle-tested, modern, aur performance aur scalability ke liye chune gaye.' : 'battle-tested, modern, and chosen for performance and scalability.'}
                    </p>
                </div>
            </section>

            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {categories.map(cat => (
                        <div key={cat} style={{ marginBottom: '3rem' }}>
                            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: categoryColors[cat] || 'var(--c-text-faint)', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: `1px solid var(--c-border-subtle)` }}>{cat}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                                {technologies.filter(t => t.category === cat).map(tech => (
                                    <div key={tech.name} style={{ background: 'var(--c-bg-card)', padding: '1.25rem 1.5rem' }}>
                                        <p style={{ fontWeight: 700, color: 'var(--c-text)', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{tech.name}</p>
                                        <p style={{ fontSize: '0.78rem', color: 'var(--c-text-dim)', lineHeight: 1.6 }}>{tech.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '5rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '3rem' }}>
                        {language === 'hin' ? 'hamara stack kyu' : 'why our stack'}<br /><span style={{ color: 'var(--c-text-dim)' }}>{language === 'hin' ? 'behtar hai.' : 'works.'}</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                        {(language === 'hin' ? [
                            { title: 'battle-tested', desc: 'har tool production me millions dwara use kiya jata hai. koi experimental tech nahi.' },
                            { title: 'vendor-neutral', desc: 'hum har kaam ke liye sahi tool chunte hain — na ki sirf fashionable tool.' },
                            { title: 'scalable by default', desc: 'humari banayi har cheez day one se current traffic ka 10x handle kar sakti hai.' },
                            { title: 'ai-native', desc: 'ai ko infrastructure level par integrate kiya gaya hai — baad me chipkaya nahi gaya.' },
                        ] : [
                            { title: 'battle-tested', desc: 'every tool is used in production by millions. no experimental tech.' },
                            { title: 'vendor-neutral', desc: 'we pick the right tool for each job — not the fashionable one.' },
                            { title: 'scalable by default', desc: 'everything we build handles 10x your current traffic from day one.' },
                            { title: 'ai-native', desc: 'ai is integrated at the infrastructure level — not bolted on as an afterthought.' },
                        ]).map(w => (
                            <div key={w.title} style={{ background: 'var(--c-bg-card)', padding: '2rem' }}>
                                <h3 style={{ fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.75rem', fontSize: '1rem' }}>{w.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TechStack;
