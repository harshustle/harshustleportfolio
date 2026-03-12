import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();

    const cols = [
        {
            heading: 'work',
            links: [
                { label: 'services', to: '/services' },
                { label: 'high-value add-ons', to: '/high-value-addons' },
                { label: 'tech stack', to: '/tech-stack' },
            ],
        },
        {
            heading: 'company',
            links: [
                { label: 'about', to: '/about' },
                { label: 'reviews', to: '/reviews' },
                { label: 'careers', to: '/careers' },
                { label: 'blog', to: '/blog' },
            ],
        },
        {
            heading: 'connect',
            links: [
                { label: 'book a call', to: '/book-a-call' },
                { label: 'contact', to: '/contact' },
                { label: 'verify payment', to: '/verify-payment' },
            ],
        },
        {
            heading: 'legal',
            links: [
                { label: 'terms', to: '/terms' },
                { label: 'privacy', to: '/privacy' },
            ],
        },
    ];

    const social = [
        { label: 'twitter', href: 'https://twitter.com/harshustle' },
        { label: 'linkedin', href: 'https://linkedin.com/in/harshustle' },
        { label: 'instagram', href: 'https://instagram.com/harshustle' },
        { label: 'github', href: 'https://github.com/harshustle' },
    ];

    return (
        <footer style={{ borderTop: `1px solid var(--c-divider)`, background: 'var(--c-bg)', paddingTop: '4rem', paddingBottom: '2rem', transition: 'background 0.3s ease' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

                {/* Top Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                    {/* Brand */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <Link to="/" style={{ display: 'block', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', marginBottom: '1rem', color: 'var(--c-text)' }}>
                            harsh<span style={{ color: 'var(--accent)' }}>ustle</span>
                        </Link>
                        <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7, maxWidth: '280px', marginBottom: '1.5rem' }}>
                            building digital experiences that transform businesses. ai, automation, and web design — done right.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {social.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    style={{ fontSize: '0.75rem', color: 'var(--c-text-dim)', transition: 'color 0.2s' }}>
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {cols.map(col => (
                        <div key={col.heading}>
                            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>
                                {col.heading}
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {col.links.map(l => (
                                    <li key={l.to}>
                                        <Link to={l.to} style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', transition: 'color 0.2s' }}>
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: `1px solid var(--c-border-subtle)`, paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--c-text-ghost)' }}>
                        © {year} harshustle. all rights reserved.
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--c-text-ghost)' }}>
                        made with obsession.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
