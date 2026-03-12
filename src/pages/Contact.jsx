import { useState } from 'react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const contactInfo = [
    { label: 'email', value: 'harshustle@gmail.com', href: 'mailto:harshustle@gmail.com' },
    { label: 'twitter', value: '@harshustle', href: 'https://twitter.com/harshustle' },
    { label: 'linkedin', value: 'harshustle', href: 'https://linkedin.com/in/harshustle' },
    { label: 'instagram', value: '@harshustle', href: 'https://instagram.com/harshustle' },
];

function Contact() {
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
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>contact</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        let's talk.<br /><span style={{ color: 'var(--c-text-dim)' }}>seriously.</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: '420px', lineHeight: 1.7 }}>fill in the form or reach out directly. we'll reply within 24 hours.</p>
                </div>
            </section>

            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '4rem 1.5rem 6rem' }}>
                <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '5rem', alignItems: 'start' }}>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                            {[{ key: 'name', label: 'name', type: 'text', placeholder: 'your name' }, { key: 'email', label: 'email', type: 'email', placeholder: 'your@email.com' }].map(f => (
                                <div key={f.key}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{f.label}</label>
                                    <input required={f.key !== 'company'} type={f.type} style={inputStyle} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                                        onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>company</label>
                            <input style={inputStyle} placeholder="your company (optional)" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>budget range</label>
                            <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'}>
                                <option value="">select budget</option>
                                <option>under ₹25,000</option>
                                <option>₹25,000 – ₹75,000</option>
                                <option>₹75,000 – ₹2,00,000</option>
                                <option>₹2,00,000+</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--c-text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>message</label>
                            <textarea required rows={5} style={{ ...inputStyle, resize: 'none' }} placeholder="tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                        </div>
                        <button type="submit" disabled={status === 'sending' || status === 'sent'} style={{ padding: '0.85rem', background: status === 'sent' ? 'rgba(34,197,94,0.1)' : 'var(--c-btn-bg)', color: status === 'sent' ? '#22c55e' : 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', border: status === 'sent' ? '1px solid rgba(34,197,94,0.3)' : 'none', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit', transition: 'all 0.2s' }}>
                            {status === 'idle' && 'send message →'}{status === 'sending' && 'sending...'}{status === 'sent' && 'message sent ✓'}{status === 'error' && 'try again'}
                        </button>
                    </form>

                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '1.5rem' }}>reach out directly</p>
                        {contactInfo.map(c => (
                            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderTop: `1px solid var(--c-border-subtle)`, textDecoration: 'none' }}>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-faint)' }}>{c.label}</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--c-text-strong)', fontWeight: 500 }}>{c.value}</p>
                            </a>
                        ))}
                        <div style={{ marginTop: '3rem', padding: '2rem', border: `1px solid var(--c-border)`, borderRadius: '12px' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.75rem' }}>response time</p>
                            <p style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--c-text)', marginBottom: '0.5rem' }}>{'< 24 hrs'}</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--c-text-muted)' }}>we take every inquiry seriously. expect a real reply, not an autoresponder.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
