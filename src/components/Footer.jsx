import { Link } from 'react-router-dom';

const Footer = () => (
    <footer style={{ borderTop: `1px solid var(--c-divider)`, padding: '4rem 1.5rem 2rem', background: 'var(--c-bg)', transition: 'background 0.3s ease' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {/* Top grid */}
            <div className="grid-footer" style={{ marginBottom: '3rem', gap: '2rem' }}>
                <div>
                    <p style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '0.75rem' }}>
                        digi<span style={{ color: '#A855F7' }}>basti</span>
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--c-text-muted)', lineHeight: 1.7, maxWidth: '220px' }}>
                        ai automation, web design, and content systems for ambitious founders.
                    </p>
                </div>

                {[
                    { heading: 'work', links: [{ label: 'services', href: '/services' }, { label: 'process', href: '/process/web-design' }, { label: 'add-ons', href: '/addons' }, { label: 'tech stack', href: '/tech-stack' }] },
                    { heading: 'company', links: [{ label: 'about', href: '/about' }, { label: 'reviews', href: '/reviews' }, { label: 'blog', href: '/blog' }, { label: 'careers', href: '/careers' }] },
                    { heading: 'connect', links: [{ label: 'book a call', href: '/book-a-call' }, { label: 'contact', href: '/contact' }, { label: 'twitter', href: 'https://twitter.com/harshustle' }, { label: 'linkedin', href: 'https://linkedin.com/in/harshustle' }] },
                    { heading: 'legal', links: [{ label: 'terms', href: '/terms' }, { label: 'privacy', href: '/privacy' }] },
                ].map(col => (
                    <div key={col.heading}>
                        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '1rem' }}>{col.heading}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {col.links.map(l => (
                                <Link key={l.label} to={l.href} style={{ fontSize: '0.82rem', color: 'var(--c-text-muted)', transition: 'color 0.15s' }}>
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: `1px solid var(--c-divider)`, paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--c-text-ghost)' }}>© 2026 digibasti. all rights reserved.</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--c-text-ghost)' }}>built with obsession.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
