import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function UserDetailsModal({ isOpen, onClose, onSubmit, serviceName }) {
    const [formData, setFormData] = useState({ name: "", phone: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) { alert("Please fill in all details"); return; }
        setIsSubmitting(true);
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" },
                body: JSON.stringify({ name: formData.name, phone: formData.phone, service: serviceName, sheetName: "Sheet3" }),
            });
        } catch { }
        setIsSubmitting(false);
        onSubmit(formData.name, formData.phone);
    };

    const inputStyle = {
        width: '100%', padding: '0.75rem 1rem',
        background: 'var(--c-bg-input)', border: `1px solid var(--c-border)`,
        borderRadius: '8px', color: 'var(--c-text)', fontSize: '0.875rem',
        outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s',
    };

    return (
        <AnimatePresence>
            <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
                onClick={onClose}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{ background: 'var(--c-bg)', border: `1px solid var(--c-border)`, borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '400px', position: 'relative' }}
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--c-text-dim)', fontSize: '1.1rem', cursor: 'pointer' }}>✕</button>

                    <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1rem' }}>📝</div>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--c-text)', marginBottom: '0.35rem' }}>enter your details</h2>
                        <p style={{ fontSize: '0.8rem', color: 'var(--c-text-muted)' }}>to process payment for <span style={{ color: 'var(--accent)' }}>{serviceName}</span></p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-dim)', marginBottom: '0.5rem' }}>full name</label>
                            <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="your name" style={inputStyle}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-dim)', marginBottom: '0.5rem' }}>phone number</label>
                            <input type="tel" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="used for verification later" style={inputStyle}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--c-border)'} />
                        </div>
                        <button type="submit" disabled={isSubmitting} style={{ padding: '0.85rem', background: 'var(--accent)', border: 'none', color: '#fff', fontWeight: 700, borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit', opacity: isSubmitting ? 0.7 : 1, marginTop: '0.5rem' }}>
                            {isSubmitting ? 'processing...' : 'proceed to payment →'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default UserDetailsModal;
