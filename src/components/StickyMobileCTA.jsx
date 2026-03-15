import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* Shows a sticky bottom CTA bar on mobile after 3 seconds of scroll */
function StickyMobileCTA() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!dismissed) setVisible(true);
        }, 3000);
        const onScroll = () => {
            if (window.scrollY > 300 && !dismissed) setVisible(true);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
    }, [dismissed]);

    if (!visible || dismissed) return null;

    return (
        <div style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999,
            background: 'var(--c-bg)', borderTop: '1px solid var(--c-border)',
            padding: '0.875rem 1.25rem', display: 'none',
            alignItems: 'center', gap: '0.75rem',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
        }} className="sticky-mobile-cta">
            <Link to="/book-a-call" style={{
                flex: 1, textAlign: 'center', padding: '0.8rem 1rem',
                background: 'var(--accent)', color: '#fff',
                fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem',
                textDecoration: 'none', display: 'block',
            }}>
                book a free call →
            </Link>
            <button onClick={() => setDismissed(true)} style={{
                background: 'none', border: '1px solid var(--c-border)',
                borderRadius: '8px', color: 'var(--c-text-dim)',
                padding: '0.8rem', fontSize: '0.8rem', cursor: 'pointer',
                flexShrink: 0,
            }}>✕</button>
        </div>
    );
}

export default StickyMobileCTA;
