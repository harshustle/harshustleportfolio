import { useLanguage } from '../context/LanguageContext';

/* A slim social-proof trust bar that sits below the hero CTA */
const TrustBar = () => {
    const { t } = useLanguage();

    return (
    <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '1.25rem', flexWrap: 'wrap', marginTop: '2rem',
    }}>
        {/* Avatars */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {['RD', 'SJ', 'MC'].map((init, i) => (
                <div key={init} style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: `hsl(${270 + i * 20}, 60%, 55%)`,
                    border: '2px solid var(--c-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', fontWeight: 700, color: '#fff',
                    marginLeft: i > 0 ? '-8px' : 0,
                    zIndex: 3 - i, position: 'relative',
                }}>
                    {init}
                </div>
            ))}
        </div>
        <div style={{ display: 'flex', gap: '1px' }}>
            {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#facc15', fontSize: '0.75rem' }}>★</span>
            ))}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)' }}>
            <strong style={{ color: 'var(--c-text)' }}>{t('trust.clients')}</strong> · {t('trust.satisfaction')}
        </p>
        <div style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            fontSize: '0.72rem', color: 'var(--c-text-muted)',
            paddingLeft: '1.25rem', borderLeft: '1px solid var(--c-border)',
        }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0 }} />
            {t('trust.available')}
        </div>
    </div>
    );
};

export default TrustBar;
