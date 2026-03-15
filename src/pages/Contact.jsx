import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const contactInfo = [
    { label: 'email', value: 'harshustle@gmail.com', href: 'mailto:harshustle@gmail.com' },
    { label: 'twitter', value: '@harshustle', href: 'https://twitter.com/harshustle' },
    { label: 'linkedin', value: 'harshustle', href: 'https://linkedin.com/in/harshustle' },
    { label: 'instagram', value: '@harshustle', href: 'https://instagram.com/harshustle' },
];

function Contact() {
    const { t, language } = useLanguage();
    const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ ...form, sheetName: 'Sheet2' }) });
            setStatus('sent');
            setForm({ name: '', email: '', company: '', budget: '', message: '' });
        } catch { setStatus('error'); }
    };

    const inputStyle = {
        width: '100%', padding: '0.75rem 1rem',
        background: 'var(--c-bg-input)', border: `1px solid var(--c-border)`,
        borderRadius: '8px', color: 'var(--c-text)', fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit',
    };

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>

            <section style={{ padding: '6rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>{t('contact.intro')}</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        {t('contact.h1_1')}<br /><span style={{ color: 'var(--c-text-dim)' }}>{t('contact.h1_2')}</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: '420px', lineHeight: 1.7 }}>{t('contact.desc')}</p>
                </div>
            </section>

            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '4rem 1.5rem 6rem' }}>
                <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '5rem', alignItems: 'start' }}>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                            {[{ key: 'name', label: t('contact.labels.name'), type: 'text', placeholder: t('contact.placeholders.name') }, { key: 'email', label: t('contact.labels.email'), type: 'email', placeholder: t('contact.placeholders.email') }].map(f => (
                                <div key={f.key}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{f.label}</label>
                                    <input required={f.key !== 'company'} type={f.type} style={inputStyle} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                                        onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{t('contact.labels.company')}</label>
                            <input style={inputStyle} placeholder={t('contact.placeholders.company')} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{t('contact.labels.budget')}</label>
                            <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'}>
                                <option value="">{t('contact.placeholders.budget')}</option>
                                {(language === 'hin' ? t('contact.budgetOptions') : [
                                    'under ₹25,000', '₹25,000 – ₹75,000', '₹75,000 – ₹2,00,000', '₹2,00,000+'
                                ]).map((opt, i) => <option key={i}>{opt}</option>)}
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{t('contact.labels.message')}</label>
                            <textarea required rows={5} style={{ ...inputStyle, resize: 'none' }} placeholder={t('contact.placeholders.message')} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                        </div>
                        <button type="submit" disabled={status === 'sending' || status === 'sent'} style={{ padding: '0.85rem', background: status === 'sent' ? 'rgba(34,197,94,0.1)' : 'var(--c-btn-bg)', color: status === 'sent' ? '#22c55e' : 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', border: status === 'sent' ? '1px solid rgba(34,197,94,0.3)' : 'none', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit', transition: 'all 0.2s' }}>
                            {status === 'idle' && t('contact.btn.idle')}{status === 'sending' && t('contact.btn.sending')}{status === 'sent' && t('contact.btn.sent')}{status === 'error' && t('contact.btn.error')}
                        </button>
                    </form>

                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '1.5rem' }}>{t('contact.reachOut')}</p>
                        {contactInfo.map(c => (
                            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderTop: `1px solid var(--c-border-subtle)`, textDecoration: 'none' }}>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-faint)' }}>{c.label}</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--c-text-strong)', fontWeight: 500 }}>{c.value}</p>
                            </a>
                        ))}
                        <div style={{ marginTop: '3rem', padding: '2rem', border: `1px solid var(--c-border)`, borderRadius: '12px' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.75rem' }}>{t('contact.responseTime')}</p>
                            <p style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--c-text)', marginBottom: '0.5rem' }}>{'< 24 hrs'}</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--c-text-muted)' }}>{t('contact.responseSub')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
