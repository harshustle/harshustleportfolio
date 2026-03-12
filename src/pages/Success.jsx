import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Success() {
    const [paymentData, setPaymentData] = useState(null);
    const [inputPhone, setInputPhone] = useState('');
    const [verifying, setVerifying] = useState(false);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem('confirmed_payment_user');
        if (stored) setPaymentData(JSON.parse(stored));
    }, []);

    const handleGo = () => {
        setError('');
        if (!inputPhone) { setError('please enter your phone number.'); return; }
        setVerifying(true);
        setTimeout(() => {
            if (paymentData) {
                const stored = paymentData.phone?.toString().replace(/[\s-]/g, '');
                const entered = inputPhone.toString().replace(/[\s-]/g, '');
                if (stored === entered) {
                    setVerified(true); setVerifying(false);
                    const msg = `Hello! I'm ${paymentData.name || 'Customer'}. I've subscribed to ${paymentData.serviceName} and am excited to get started!`;
                    window.open(`https://wa.me/917839661372?text=${encodeURIComponent(msg)}`, '_blank');
                    return;
                }
            }
            setError('phone number does not match our records.');
            setVerifying(false);
        }, 1500);
    };

    const inputStyle = (hasError) => ({
        width: '100%', padding: '0.75rem 1rem',
        background: 'var(--c-bg-input)', border: `1px solid ${hasError ? 'rgba(239,68,68,0.5)' : 'var(--c-border)'}`,
        borderRadius: '8px', color: 'var(--c-text)', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit',
    });

    if (!paymentData) return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '60px' }}>
            <p style={{ color: 'var(--c-text-dim)' }}>loading payment details...</p>
        </div>
    );

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', display: 'flex', alignItems: 'center', transition: 'background 0.3s ease' }}>
            <div className="grid-2" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 1.5rem', width: '100%', gap: '4rem', alignItems: 'center' }}>

                <div>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>🎉</div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--c-text)', marginBottom: '1rem' }}>
                        payment<br /><span style={{ color: 'rgba(34,197,94,0.8)' }}>successful.</span>
                    </h1>
                    <p style={{ color: 'var(--c-text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        thank you for your purchase. verify your phone to connect with us on whatsapp.
                    </p>
                    <div style={{ padding: '1.25rem', border: `1px solid var(--c-border)`, borderRadius: '10px', background: 'var(--c-bg-subtle)' }}>
                        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.5rem' }}>transaction id</p>
                        <p style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--c-text)', marginBottom: '0.75rem', wordBreak: 'break-all' }}>{paymentData.paymentId}</p>
                        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-ghost)', marginBottom: '0.5rem' }}>amount paid</p>
                        <p style={{ fontWeight: 700, color: 'var(--c-text)' }}>{paymentData.currency} {paymentData.amount}</p>
                    </div>
                </div>

                <div style={{ border: `1px solid var(--c-border)`, borderRadius: '16px', padding: '2.5rem', background: 'var(--c-bg-subtle)' }}>
                    <h2 style={{ fontWeight: 800, color: 'var(--c-text)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>verify your details</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--c-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>enter the phone number you used during payment to connect with us.</p>

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-dim)', marginBottom: '0.5rem' }}>service</label>
                        <div style={{ padding: '0.75rem 1rem', background: 'var(--c-bg-input)', border: `1px solid var(--c-border-subtle)`, borderRadius: '8px', color: 'var(--c-text)', fontWeight: 600, fontSize: '0.875rem' }}>{paymentData.serviceName}</div>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-dim)', marginBottom: '0.5rem' }}>phone number</label>
                        <input type="text" value={inputPhone} onChange={e => setInputPhone(e.target.value)} placeholder="enter the number used for payment" style={inputStyle(!!error)} />
                        {error && <p style={{ fontSize: '0.78rem', color: 'rgba(239,68,68,0.8)', marginTop: '0.5rem' }}>{error}</p>}
                    </div>

                    <button onClick={handleGo} disabled={verifying || verified} style={{ width: '100%', padding: '0.85rem', background: verified ? 'rgba(34,197,94,0.15)' : 'var(--accent)', border: verified ? '1px solid rgba(34,197,94,0.3)' : 'none', color: verified ? '#22c55e' : '#fff', fontWeight: 700, borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit', opacity: verifying ? 0.7 : 1 }}>
                        {verifying ? 'verifying...' : verified ? 'verified ✓ opening whatsapp' : 'verify & connect on whatsapp →'}
                    </button>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <Link to="/" style={{ fontSize: '0.8rem', color: 'var(--c-text-ghost)' }}>return to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
