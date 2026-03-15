function BookCall() {
    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>
            <section style={{ padding: '4rem 1.5rem 6rem' }}>
                <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '4rem', alignItems: 'start', paddingTop: '2rem' }}>
                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>book a call</p>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                            let's talk<br /><span style={{ color: 'var(--c-text-dim)' }}>for free.</span>
                        </h1>
                        <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', lineHeight: 1.8, maxWidth: '420px', marginBottom: '2.5rem' }}>
                            schedule a free 30-minute strategy session. no sales pressure, no obligation — just a real conversation about your goals.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                            {['30-minute strategy session', 'custom solution recommendations', 'clear next steps and timeline', 'completely free, no obligation'].map(item => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid rgba(168,85,247,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '1.5rem', border: `1px solid var(--c-border)`, borderRadius: '12px', background: 'var(--c-bg-subtle)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                <img src="https://github.com/harshustle.png" alt="Harsh" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
                                <div>
                                    <p style={{ fontWeight: 700, color: 'var(--c-text)', fontSize: '0.9rem' }}>harsh srivastav</p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--c-text-dim)' }}>founder, digibasti</p>
                                </div>
                                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                                    <span style={{ fontSize: '0.7rem', color: 'var(--c-text-dim)' }}>available</span>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--c-text-muted)', lineHeight: 1.6 }}>
                                "i personally take every discovery call. let's find out if we're a good fit."
                            </p>
                        </div>
                    </div>

                    {/* Google Calendar Appointment Scheduling */}
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: '-2px', background: 'linear-gradient(135deg, rgba(168,85,247,0.2), transparent, rgba(168,85,247,0.1))', borderRadius: '18px', filter: 'blur(8px)', opacity: 0.5 }} />
                        <div style={{ position: 'relative', border: `1px solid var(--c-border)`, borderRadius: '16px', overflow: 'hidden', background: 'var(--c-bg)' }}>
                            {/* Google Calendar Appointment Scheduling begin */}
                            <iframe
                                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2YsbU2hG-oULooIrAMTyLuwp75lo1WGnRRLyKUth_zFvmVnPW6D-QqNAMmUjW-6xlBU56Fig7v?gv=true"
                                style={{ border: 0 }}
                                width="100%"
                                height="600"
                                frameBorder="0"
                                title="Book a Call with Harsh"
                            />
                            {/* end Google Calendar Appointment Scheduling */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BookCall;
