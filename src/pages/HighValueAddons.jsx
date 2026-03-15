import { useLanguage } from '../context/LanguageContext';

const addonsEn = [
    { icon: '🚀', name: 'priority support', desc: 'direct whatsapp access. guaranteed < 4 hour response time. dedicated to your project daily.', price: '₹16,600/mo', priceAmount: 16600 },
    { icon: '📊', name: 'advanced analytics', desc: 'monthly growth reports, seo dashboards, conversion tracking, and competitor audits.', price: '₹8,300/mo', priceAmount: 8300 },
    { icon: '🔗', name: 'custom integrations', desc: 'connect any tool to any tool. custom api integrations, webhooks, and data pipelines.', price: 'from ₹33,200', priceAmount: 33200 },
    { icon: '⭐', name: 'priority delivery', desc: 'jump the queue. your project gets delivered first — guaranteed within 72 hours.', price: '₹12,450 flat', priceAmount: 12450 },
    { icon: '🎨', name: 'brand identity pack', desc: 'logo, color palette, typography system, social media templates — everything for a cohesive brand.', price: '₹24,900 one-time', priceAmount: 24900 },
    { icon: '🤖', name: 'ai strategy session', desc: '2-hour deep dive into how ai can automate and scale your specific business. custom roadmap included.', price: '₹8,300 one-time', priceAmount: 8300 },
];

const addonsHin = [
    { icon: '🚀', name: 'priority support', desc: 'direct whatsapp access. 4 ghante se kam me response ki guarantee. roz aapke project ke liye dedicated time.', price: '₹16,600/mahinah', priceAmount: 16600 },
    { icon: '📊', name: 'advanced analytics', desc: 'monthly growth reports, seo dashboards, conversion tracking, aur competitor audits.', price: '₹8,300/mahine', priceAmount: 8300 },
    { icon: '🔗', name: 'custom integrations', desc: 'kisi bhi tool ko kisi se bhi connect karein. custom api integrations, webhooks, aur data pipelines.', price: '₹33,200 se', priceAmount: 33200 },
    { icon: '⭐', name: 'priority delivery', desc: 'queue jump karein. aapka project sabse pehle deliver hoga — 72 ghante me guarantee.', price: '₹12,450 fixed', priceAmount: 12450 },
    { icon: '🎨', name: 'brand identity pack', desc: 'logo, color palette, typography system, social media templates — ek cohesive brand ke liye sab kuch.', price: '₹24,900 one-time', priceAmount: 24900 },
    { icon: '🤖', name: 'ai strategy session', desc: '2 ghante ka deep dive ki ai kaise aapke business ko automate aur scale kar sakta hai. custom roadmap shamil hai.', price: '₹8,300 one-time', priceAmount: 8300 },
];

function HighValueAddons() {
    const { language } = useLanguage();
    const addons = language === 'hin' ? addonsHin : addonsEn;
    const [buyAddon, setBuyAddon] = useState(null);
    const handleSubmit = (name, phone) => {
        if (buyAddon) { openRazorpayCheckout(buyAddon.priceAmount, 'INR', buyAddon.name, 'Add-on', { name, contact: phone }); setBuyAddon(null); }
    };

    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>
            <section style={{ padding: '6rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>{language === 'hin' ? 'add-ons' : 'add-ons'}</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '1.5rem' }}>
                        {language === 'hin' ? 'high-value' : 'high-value'}<br /><span style={{ color: 'var(--c-text-dim)' }}>{language === 'hin' ? 'add-ons.' : 'add-ons.'}</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: '420px', lineHeight: 1.7 }}>
                        {language === 'hin' ? 'kisi bhi service ke sath jodein taaki kaam aur badhiya aur tezi se ho. har add-on maximum roi dene ke liye banaya gaya hai.' : 'pair with any service to go further, faster. every add-on is designed to deliver maximum roi.'}
                    </p>
                </div>
            </section>

            <section style={{ borderTop: `1px solid var(--c-divider)`, padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
                    {addons.map(a => (
                        <div key={a.name} style={{ background: 'var(--c-bg-card)', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ fontSize: '2rem' }}>{a.icon}</span>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.01em' }}>{a.name}</h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{a.desc}</p>
                            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: `1px solid var(--c-border-subtle)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 800, color: 'var(--c-text)', fontSize: '1rem' }}>{a.price}</p>
                                <button onClick={() => setBuyAddon(a)} style={{ padding: '0.55rem 1.1rem', background: 'var(--c-bg-subtle)', border: `1px solid var(--c-border)`, color: 'var(--c-text)', fontWeight: 600, fontSize: '0.78rem', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit' }}>
                                    {language === 'hin' ? 'ise jodein →' : 'add this →'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', borderTop: `1px solid var(--c-divider)`, textAlign: 'center' }}>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '1.5rem' }}>{language === 'hin' ? 'kuch samajh nahi aa raha hai?' : 'unsure what you need?'}</h2>
                    <p style={{ color: 'var(--c-text-muted)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: 1.7 }}>{language === 'hin' ? 'ek call book karein aur hum aapko sahi add-ons recommend karenge jo sach mein fayda de.' : 'book a call and we\'ll recommend exactly which add-ons will move the needle.'}</p>
                    <Link to="/book-a-call" style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--c-btn-bg)', color: 'var(--c-btn-text)', fontWeight: 700, borderRadius: '8px', fontSize: '0.875rem' }}>{language === 'hin' ? 'free call book karein →' : 'book a free call →'}</Link>
                </div>
            </section>

            <UserDetailsModal isOpen={!!buyAddon} onClose={() => setBuyAddon(null)} onSubmit={handleSubmit} serviceName={buyAddon?.name} />
        </div>
    );
}

export default HighValueAddons;
