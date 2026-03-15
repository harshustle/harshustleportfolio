import { useLanguage } from '../context/LanguageContext';

function Careers() {
    const { language } = useLanguage();
    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>
            <section style={{ padding: '6rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>{language === 'hin' ? 'careers' : 'careers'}</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        {language === 'hin' ? 'junoon ke sath' : 'build with'}<br /><span style={{ color: 'var(--c-text-dim)' }}>{language === 'hin' ? 'banayein.' : 'obsession.'}</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: '480px', lineHeight: 1.7 }}>
                        {language === 'hin' ? 'hum ek choti, high-output team hain. hum craft, speed, aur intellectual curiosity ke liye hire karte hain — credentials ke liye nahi.' : 'we\'re a small, high-output team. we hire for craft, speed, and intellectual curiosity — not credentials.'}
                    </p>
                </div>
            </section>

            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '5rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '0.75rem' }}>{language === 'hin' ? 'humara kaam karne ka tareeqa' : 'how we work'}</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '3rem' }}>
                        {language === 'hin' ? 'culture jo humne' : 'the culture'}<br /><span style={{ color: 'var(--c-text-dim)' }}>{language === 'hin' ? 'banaya hai.' : 'we\'ve built.'}</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                        {(language === 'hin' ? [
                            { icon: '🌍', title: '100% remote', desc: 'duniya me kahin se bhi kaam karein. results matter karte hain, location nahi.' },
                            { icon: '⚡', title: 'async-first', desc: 'koi bekamatlab ki meetings nahi. communication thoughtful aur written hoti hai.' },
                            { icon: '🚀', title: 'tezi se launch', desc: 'hum sprints me kaam karte hain. build, learn, iterate. har hafta zaruri hai.' },
                            { icon: '🤖', title: 'ai tools use karein', desc: 'hum ai tools actively use karte hain — ye cheating nahi, smart work hai.' },
                        ] : [
                            { icon: '🌍', title: '100% remote', desc: 'work from anywhere on earth. results matter, location doesn\'t.' },
                            { icon: '⚡', title: 'async-first', desc: 'no pointless meetings. communication is thoughtful and written.' },
                            { icon: '🚀', title: 'ship fast', desc: 'we move in sprints. build, learn, iterate. every week counts.' },
                            { icon: '🤖', title: 'ai tools encouraged', desc: 'we use ai tools actively — it\'s not cheating, it\'s smart.' },
                        ]).map(c => (
                            <div key={c.title} style={{ background: 'var(--c-bg-card)', padding: '2rem' }}>
                                <p style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{c.icon}</p>
                                <h3 style={{ fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.75rem', fontSize: '1rem' }}>{c.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '5rem 1.5rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1.5rem' }}>{language === 'hin' ? 'khali positions' : 'open positions'}</p>
                    <div style={{ border: `1px solid var(--c-border)`, borderRadius: '12px', padding: '4rem 2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🔔</p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--c-text)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                            {language === 'hin' ? 'abhi koi open positions nahi hain.' : 'no open positions right now.'}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                            {language === 'hin' ? 'jab hum hire karte hain, toh aaram se aur soch samajh ke karte hain. apna portfolio bhejein — jab koi fit hoga tab hum contact karenge.' : 'when we hire, we hire slow and with intention. send us your portfolio — we\'ll reach out when there\'s a fit.'}
                        </p>
                        <a href="mailto:harshustle@gmail.com?subject=Speculative Application" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', border: `1px solid var(--c-border)`, borderRadius: '8px', color: 'var(--c-text)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                            {language === 'hin' ? 'apna portfolio bhejein →' : 'send your portfolio →'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;
