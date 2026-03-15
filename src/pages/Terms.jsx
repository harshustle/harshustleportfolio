import { useLanguage } from '../context/LanguageContext';

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
                    <p style={{ fontSize: '0.8rem', color: 'var(--c-text-ghost)', marginBottom: '4rem' }}>{lastUpdated}</p>
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
    const { language } = useLanguage();
    const isHin = language === 'hin';

    return <LegalPage 
        eyebrow={isHin ? 'legal' : 'legal'} 
        title={isHin ? 'terms &' : 'terms &'} 
        sub={isHin ? 'conditions.' : 'conditions.'} 
        lastUpdated={isHin ? 'akhiri update: dec 2025' : 'last updated: december 2025'} 
        sections={isHin ? [
            mkSection('1. sharto ki manzoori', 'digibasti ki website aur services use karke, aap in terms and conditions se bandhe hue hain. agar aap kisi bhi hisse se sehmat nahi hain, toh service access na karein.'),
            mkSection('2. intellectual property', 'is website par maujood sabhi materials ke intellectual property rights digibasti ke paas hain. inko bina permission copy ya distribute karna mana hai.'),
            mkSection('3. services aur deliverables', 'project ka scope, time aur payment terms har project ke hisab se taya hote hain. digibasti ko kisi ko bhi service dene se inkar karne ka haq hai.'),
            mkSection('4. payment terms', 'projects me 50% advance aur 50% completion par liya jata hai (jab tak kuch aur taya na ho). kaam shuru hone ke baad payment refundable nahi hai.'),
            mkSection('5. pabandiyaan (restrictions)', 'aap is website ko nuksan nahi pahoncha sakte, na hi bina permission koi content publish kar sakte hain. koi unlawful kaam allowed nahi hai.'),
            mkSection('6. liability', 'is website ya service use karne ki wajah se hone wale kisi nuksan ke liye digibasti ki general liability sirf utni hogi jitna aapne us project ke liye pay kiya hai.'),
            mkSection('7. badlav (revisions)', 'digibasti kisi bhi waqt in terms ko badal sakta hai. website ka lagatar upyog aapki manjuri maani jayegi.'),
            mkSection('8. qanoon', 'ye terms bharat ke qanoon dwara shasit hain. koi bhi vivaad delhi ke courts ke jurisdiction me hoga.'),
        ] : [
            mkSection('1. agreement to terms', 'by accessing digibasti\'s website and services, you agree to be bound by these terms and conditions. if you disagree with any part, you may not access the service.'),
            mkSection('2. intellectual property', 'all intellectual property rights for materials on this website belong to digibasti. you may not reproduce, sell, or distribute any materials without explicit written consent.'),
            mkSection('3. services and deliverables', 'project scope, deliverables, timelines, and payment terms are defined per-project. digibasti reserves the right to refuse service to anyone.'),
            mkSection('4. payment terms', 'projects are billed 50% upfront and 50% on completion unless otherwise agreed. all payments are non-refundable once work has commenced.'),
            mkSection('5. restrictions', 'you may not use the website in any way that damages it, publish any material without permission, or transmit any automated, harmful, or unlawful content.'),
            mkSection('6. limitation of liability', 'digibasti shall not be held liable for any damages arising from your use of this website or services, beyond the total amount paid for the specific project.'),
            mkSection('7. revisions', 'digibasti may revise these terms at any time. continued use of the website following any changes constitutes your acceptance of the new terms.'),
            mkSection('8. governing law', 'these terms are governed by the laws of india. any disputes shall be subject to the exclusive jurisdiction of courts in delhi, india.'),
        ]} 
    />;
}

export function Privacy() {
    const { language } = useLanguage();
    const isHin = language === 'hin';

    return <LegalPage 
        eyebrow="legal" 
        title={isHin ? 'privacy' : 'privacy'} 
        sub={isHin ? 'policy.' : 'policy.'} 
        lastUpdated={isHin ? 'akhiri update: dec 2025' : 'last updated: december 2025'} 
        sections={isHin ? [
            mkSection('1. jo jankari hum ikhatta karte hain', 'hum wahi jankari lete hain jo aap khud dete hain — naam, email, phone number — forms bharte waqt aadi. bina aapke permission ke kuch fetch nahi hota.'),
            mkSection('2. iska upyog kaise hota hai', 'aapki jankari sirf project me contact karne, payment process karne aur service deliver karne ke liye use hoti hai. hum data sell nahi karte.'),
            mkSection('3. data storage', 'form submission google sheets me save hote hain. payments razorpay dwara safe tarike se process hoti hain. hum payments data store nahi karte.'),
            mkSection('4. cookies', 'hum analytics aur session management ke liye kam se kam cookies rakhte hain. aap cookies browser se band kar sakte hain.'),
            mkSection('5. third-party services', 'humaari site me google analytics, razorpay, cal.com aur gemini ai integrated hain. in sab ki apni alag privacy policies hain.'),
            mkSection('6. aapke adhikaar', 'kisi bhi waqt apna personal data dekhne, edit karne ya delete karne ka haq aapke paas hai. harshustle@gmail.com pe mail karein.'),
            mkSection('7. data kab tak rakha jata hai', 'sirf jab tak zarurat hoti hai. 12 mahine inactve rehne par project data archive hota hai.'),
            mkSection('8. contact karein', 'kisi bhi sawal ya data request ke liye: harshustle@gmail.com par likh bhejein. hum privacy ko seriously lete hain.'),
        ] : [
            mkSection('1. information we collect', 'we collect information you provide directly — name, email, phone number, company — when you fill out contact forms, book calls, or make payments. we do not collect information without your explicit action.'),
            mkSection('2. how we use it', 'your information is used to respond to inquiries, deliver agreed services, process payments, and communicate about projects. we do not sell your data to any third party.'),
            mkSection('3. data storage', 'form submissions are stored in google sheets. payment data is processed securely by razorpay (pci-dss compliant). we do not store card or payment details ourselves.'),
            mkSection('4. cookies', 'we use minimal cookies for analytics (if enabled) and session management. you can disable cookies in your browser without affecting core functionality.'),
            mkSection('5. third-party services', 'our site integrates: google analytics, razorpay, cal.com, and gemini ai. each has their own privacy policy governing their data handling.'),
            mkSection('6. your rights', 'you have the right to access, correct, or delete your personal data at any time. email us at harshustle@gmail.com and we\'ll respond within 48 hours.'),
            mkSection('7. data retention', 'we retain your data only as long as necessary. project data is archived after 12 months of inactivity.'),
            mkSection('8. contact', 'for any privacy questions or data requests, contact: harshustle@gmail.com. we take privacy seriously and will respond promptly.'),
        ]} 
    />;
}

export default Terms;
