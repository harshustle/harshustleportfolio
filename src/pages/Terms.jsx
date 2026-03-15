function mkSection(title, body) { return { title, body }; }

function LegalPage({ eyebrow, title, sub, lastUpdated, sections }) {
    return (
        <div style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '60px', transition: 'background 0.3s ease' }}>
            <section style={{ padding: '6rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-text-faint)', marginBottom: '1rem' }}>{eyebrow}</p>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--c-text)', marginBottom: '0.75rem' }}>
                        {title}<br /><span style={{ color: 'var(--c-text-dim)' }}>{sub}</span>
                    </h1>
                    <p style={{ fontSize: '0.8rem', color: 'var(--c-text-ghost)', marginBottom: '4rem' }}>last updated: {lastUpdated}</p>
                    <div>
                        {sections.map(s => (
                            <div key={s.title} style={{ paddingTop: '2rem', paddingBottom: '2rem', borderTop: `1px solid var(--c-border-subtle)` }}>
                                <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.75rem' }}>{s.title}</h2>
                                <p style={{ fontSize: '0.9rem', color: 'var(--c-text-muted)', lineHeight: 1.8 }}>{s.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export function Terms() {
    return <LegalPage eyebrow="legal" title="terms &" sub="conditions." lastUpdated="december 2025" sections={[
        mkSection('1. agreement to terms', 'by accessing digibasti\'s website and services, you agree to be bound by these terms and conditions. if you disagree with any part, you may not access the service.'),
        mkSection('2. intellectual property', 'all intellectual property rights for materials on this website belong to digibasti. you may not reproduce, sell, or distribute any materials without explicit written consent.'),
        mkSection('3. services and deliverables', 'project scope, deliverables, timelines, and payment terms are defined per-project. digibasti reserves the right to refuse service to anyone.'),
        mkSection('4. payment terms', 'projects are billed 50% upfront and 50% on completion unless otherwise agreed. all payments are non-refundable once work has commenced.'),
        mkSection('5. restrictions', 'you may not use the website in any way that damages it, publish any material without permission, or transmit any automated, harmful, or unlawful content.'),
        mkSection('6. limitation of liability', 'digibasti shall not be held liable for any damages arising from your use of this website or services, beyond the total amount paid for the specific project.'),
        mkSection('7. revisions', 'digibasti may revise these terms at any time. continued use of the website following any changes constitutes your acceptance of the new terms.'),
        mkSection('8. governing law', 'these terms are governed by the laws of india. any disputes shall be subject to the exclusive jurisdiction of courts in delhi, india.'),
    ]} />;
}

export function Privacy() {
    return <LegalPage eyebrow="legal" title="privacy" sub="policy." lastUpdated="december 2025" sections={[
        mkSection('1. information we collect', 'we collect information you provide directly — name, email, phone number, company — when you fill out contact forms, book calls, or make payments. we do not collect information without your explicit action.'),
        mkSection('2. how we use it', 'your information is used to respond to inquiries, deliver agreed services, process payments, and communicate about projects. we do not sell your data to any third party.'),
        mkSection('3. data storage', 'form submissions are stored in google sheets. payment data is processed securely by razorpay (pci-dss compliant). we do not store card or payment details ourselves.'),
        mkSection('4. cookies', 'we use minimal cookies for analytics (if enabled) and session management. you can disable cookies in your browser without affecting core functionality.'),
        mkSection('5. third-party services', 'our site integrates: google analytics, razorpay, cal.com, and gemini ai. each has their own privacy policy governing their data handling.'),
        mkSection('6. your rights', 'you have the right to access, correct, or delete your personal data at any time. email us at harshustle@gmail.com and we\'ll respond within 48 hours.'),
        mkSection('7. data retention', 'we retain your data only as long as necessary. project data is archived after 12 months of inactivity.'),
        mkSection('8. contact', 'for any privacy questions or data requests, contact: harshustle@gmail.com. we take privacy seriously and will respond promptly.'),
    ]} />;
}

export default Terms;
