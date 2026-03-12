import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VerifyPayment() {
    const [inputPhone, setInputPhone] = useState('');
    const [verifying, setVerifying] = useState(false);
    const [error, setError] = useState('');
    const [showFallback, setShowFallback] = useState(false);
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('confirmed_payment_user');
        if (stored) setPaymentData(JSON.parse(stored));
    }, []);

    const handleVerify = async () => {
        setError(''); setShowFallback(false);
        if (!inputPhone) { setError('please enter your phone number.'); return; }
        setVerifying(true);
        await new Promise(r => setTimeout(r, 1200));
        let current = paymentData;
        try {
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
            const res = await fetch(`${GOOGLE_SCRIPT_URL}?phone=${inputPhone}`);
            const data = await res.json();
            if (data.result === 'success') current = { name: data.name, serviceName: data.service, phone: inputPhone };
        } catch { }
        if (current) {
            const stored = (current.phone || '').toString().replace(/[\s-]/g, '');
            const entered = inputPhone.toString().replace(/[\s-]/g, '');
            if (stored.includes(entered) || entered.includes(stored)) {
                const msg = `Hello! I'm ${current.name || 'Customer'}. I've subscribed to ${current.serviceName} and am excited to get started!`;
                window.open(`https://wa.me/917839661372?text=${encodeURIComponent(msg)}`, '_blank');
                setVerifying(false); return;
            }
        }
        setError('phone number not found in our records.'); setShowFallback(true); setVerifying(false);
    };

    const inputStyle = {
        width: '100%', padding: '0.75rem 1rem',
        background: 'var(--c-bg-input)', border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : 'var(--c-border)'}`,
        borderRadius: '8px', color: 'var(--c-text)', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit',
    };

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }}>
            <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto', padding: '2rem 1.5rem' }}>
                <div style={{ border: `1px solid var(--c-border)`, borderRadius: '16px', padding: '2.5rem', background: 'var(--c-bg-subtle)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>🔐</div>
                    <h1 style={{ fontWeight: 900, color: 'var(--c-text)', fontSize: '1.5rem', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>verify payment</h1>
                    <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>enter your registered phone number to verify your recent payment and connect with us.</p>

                    <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-dim)', marginBottom: '0.5rem' }}>phone number</label>
                        <input type="text" value={inputPhone} onChange={e => setInputPhone(e.target.value)} placeholder="enter phone number" style={inputStyle} onKeyDown={e => e.key === 'Enter' && handleVerify()} />
                        {error && <p style={{ fontSize: '0.78rem', color: 'rgba(239,68,68,0.8)', marginTop: '0.5rem' }}>{error}</p>}
                    </div>

                    <button onClick={handleVerify} disabled={verifying} style={{ width: '100%', padding: '0.85rem', background: 'var(--accent)', border: 'none', color: '#fff', fontWeight: 700, borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit', opacity: verifying ? 0.7 : 1 }}>
                        {verifying ? 'verifying...' : 'verify & connect →'}
                    </button>

                    {showFallback && (
                        <div style={{ marginTop: '1.5rem', padding: '1.25rem', border: `1px solid var(--c-border)`, borderRadius: '10px' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--c-text-muted)', marginBottom: '0.75rem', lineHeight: 1.6 }}>still having issues? contact us directly on whatsapp.</p>
                            <button onClick={() => { const msg = `Hello Support, I made a payment using phone number ${inputPhone} but I can't verify it. Can you please check?`; window.open(`https://wa.me/917839661372?text=${encodeURIComponent(msg)}`, '_blank'); }}
                                style={{ width: '100%', padding: '0.65rem', background: 'transparent', border: '1px solid rgba(34,197,94,0.2)', color: 'rgba(34,197,94,0.8)', fontWeight: 600, borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'inherit' }}>
                                💬 chat with support on whatsapp
                            </button>
                        </div>
                    )}
                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <Link to="/" style={{ fontSize: '0.78rem', color: 'var(--c-text-ghost)' }}>return to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyPayment;
