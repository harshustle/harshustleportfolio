import { useState } from 'react';
import Hero from "../components/Hero";

import Stack from "../components/Stack";
import Stepper, { Step } from '../components/parts/Stepper';
import Section from "../components/Section";
import FeaturesGrid from "../components/FeaturesGrid";
import MetricsStrip from "../components/MetricsStrip";
import ServiceProcessModal from "../components/ServiceProcessModal";
import BookCallPreview from "../components/BookCallPreview";


import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

function Home() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        service: '',
        businessInfo: ''
    });
    const [selectedService, setSelectedService] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceSelect = (service) => {
        setFormData(prev => ({ ...prev, service }));
    };

    // Replace with your Web App URL from Google Apps Script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwWzWkspcQeP8FzfSEnXXShZYOjANlp9CzX-Y_6KzOI0zjvm9bm809Mw_59GFkDWgZRzA/exec";

    const submitToGoogleSheets = async () => {
        if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_SCRIPT_URL_HERE")) {
            console.warn("Google Script URL not set. Please follow instructions in GOOGLE_SHEETS_SETUP.md");
            return;
        }

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(formData),
            });
            console.log("Form submitted to Google Sheets");
        } catch (error) {
            console.error("Error submitting to Google Sheets:", error);
        }
    };

    const homeServices = [
        {
            icon: "✨",
            title: "AI Content Creation",
            description: "Generate high-quality, engaging content instantly with our advanced AI tools tailored to your brand voice.",
            features: ["Blog Writing", "Social Media Posts", "SEO Optimization", "Multi-language Support"],
            price: "$1,500/mo",
            processSteps: [
                { title: "Brand Analysis", description: "We analyze your brand voice, target audience, and content goals to train our AI models." },
                { title: "Topic ideation", description: "Generating relevant, high-impact topics based on market trends and SEO data." },
                { title: "AI Generation", description: "Creating initial drafts using advanced language models tailored to your tone." },
                { title: "Human Polish", description: "Expert editors review and refine the content for nuance, accuracy, and flow." },
                { title: "Publishing", description: "Formatting and scheduling the content across your chosen platforms." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        },
        {
            icon: "💻",
            title: "Web Design",
            description: "Build beautiful, responsive, and high-converting websites tailored to your brand.",
            features: ["Modern UI", "Responsive Layouts", "SEO Optimized", "Fast Performance"],
            price: "$8,000",
            processSteps: [
                { title: "Requirement Gathering", description: "Understanding your functional and non-functional requirements." },
                { title: "UI/UX Design", description: "Creating high-fidelity mockups of the website interface." },
                { title: "Development", description: "Building the website using modern frameworks and best practices." },
                { title: "Content Integration", description: "Populating the site with your content and optimizing for SEO." },
                { title: "Launch", description: "Deploying your site to a live server and ensuring everything runs smoothly." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        },
        {
            icon: "🤖",
            title: "Automation",
            description: "Streamline your business processes with intelligent workflows and integrations.",
            features: ["Workflow Automation", "CRM Integration", "Email Sequences", "Task Management"],
            price: "$3,000/mo",
            processSteps: [
                { title: "Audit", description: "Reviewing your current processes to identify automation opportunities." },
                { title: "Strategy", description: "Designing a custom automation workflow tailored to your needs." },
                { title: "Implementation", description: "Setting up and configuring the automation tools." },
                { title: "Testing", description: "Rigorous testing to ensure all workflows trigger correctly." },
                { title: "Review", description: "Monitoring performance and making necessary adjustments." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        }
    ];

    return (
        <>
            {/* Modal */}
            <ServiceProcessModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />
            {/* HERO */}
            <Hero />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                {/* METRICS / SOCIAL PROOF STRIP */}
                <Section>
                    <MetricsStrip />
                </Section>

                {/* SERVICES PREVIEW */}
                <Section title="Our Core Services" eyebrow="What We Do">
                    <div className="grid md:grid-cols-3 gap-8 mt-12 relative">
                        {/* Background glow for the grid */}
                        <div className="absolute inset-0 bg-purple-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />

                        {homeServices.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/10 backdrop-blur-sm flex flex-col"
                            >
                                <div className="h-14 w-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-500/20">
                                    <span className="text-3xl">{service.icon}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                                            <span className="mr-3 text-purple-400 bg-purple-500/10 rounded-full p-1 h-5 w-5 flex items-center justify-center text-xs border border-purple-500/20">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6 border-t border-purple-500/20 mt-auto">
                                    <div className="flex w-full rounded-lg overflow-hidden shadow-lg shadow-purple-500/5 group-hover:shadow-purple-500/10 transition-all">
                                        <button
                                            onClick={() => setSelectedService(service)}
                                            className="w-[70%] px-4 py-3 bg-[#A855F7] hover:bg-[#9333ea] text-white font-semibold transition-all flex items-center justify-center gap-2 rounded-l-lg"
                                        >
                                            Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                                        </button>
                                        <div className="w-[30%] px-2 py-3 bg-white/5 border border-purple-500/30 text-purple-300 font-bold flex items-center justify-center text-xs text-center leading-tight rounded-r-lg border-l-0">
                                            {service.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <a href="/services" className="w-full flex justify-center items-center gap-2 px-8 py-3 bg-white/5 border border-purple-500/30 text-white font-semibold rounded-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all group hover:shadow-lg hover:shadow-purple-500/10">
                            View All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </Section>

                {/* Automation Tools Preview */}
                <Section title="Built with Modern Tech" eyebrow="Powering Innovation">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[
                            { name: "n8n", category: "Automation" },
                            { name: "OpenAI API", category: "AI Intelligence" },
                            { name: "Zapier", category: "Integration" },
                            { name: "Claude", category: "AI Model" },
                            { name: "React", category: "Framework" },
                            { name: "Tailwind CSS", category: "Styling" },
                            { name: "Framer Motion", category: "Animation" },
                            { name: "Node.js", category: "Runtime" }
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-br from-purple-900/10 to-fuchsia-900/10 hover:from-purple-600/20 hover:to-fuchsia-600/20 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all text-center group hover:-translate-y-1"
                            >
                                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                    {tech.name}
                                </h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">{tech.category}</p>
                            </div>
                        ))}
                    </div>
                </Section>




                <Section title="Start Your Journey" eyebrow="Get in Touch">
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => {
                            if (step === 4) submitToGoogleSheets();
                        }}
                        onFinalStepCompleted={() => console.log("Form process completed")}
                        backButtonText="Back"
                        nextButtonText="Next"
                        hideFooterOnLastStep={true}
                    >
                        <Step>
                            <div className="space-y-4 w-full max-w-md mx-auto">
                                <h2 className="text-2xl font-bold text-white">Contact Details</h2>
                                <p className="text-gray-400">Please provide your contact information so we can reach you.</p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors placeholder-gray-500"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors placeholder-gray-500"
                                    />
                                </div>
                            </div>
                        </Step>
                        <Step>
                            <div className="space-y-4 w-full max-w-md mx-auto">
                                <h2 className="text-2xl font-bold text-white">Choose a Service</h2>
                                <p className="text-gray-400">Select the service you are interested in.</p>
                                <div className="grid gap-3">
                                    {['AI Content Creation', 'Web Design', 'Automation'].map((service) => (
                                        <div
                                            key={service}
                                            onClick={() => handleServiceSelect(service)}
                                            className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${formData.service === service
                                                ? 'bg-purple-500/20 border-purple-500 text-white'
                                                : 'bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/50'
                                                }`}
                                        >
                                            <span>{service}</span>
                                            {formData.service === service && <span className="text-purple-400">✓</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Step>
                        <Step>
                            <div className="space-y-4 w-full max-w-md mx-auto">
                                <h2 className="text-2xl font-bold text-white">Business Info</h2>
                                <p className="text-gray-400">Tell us a bit about your business and goals.</p>
                                <textarea
                                    name="businessInfo"
                                    value={formData.businessInfo}
                                    onChange={handleInputChange}
                                    placeholder="Business Name, Industry, and Project Goals..."
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none placeholder-gray-500"
                                />
                            </div>
                        </Step>
                        <Step>
                            <div className="text-center space-y-4 py-8 w-full max-w-md mx-auto">
                                <div className="h-20 w-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl">✓</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white">Thank You!</h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    We have received your details. Our team will review your request and respond shortly with a thank you message and next steps.
                                </p>
                                <div className="inline-flex items-center gap-2 text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20 animate-pulse">
                                    <span>⚡</span>
                                    <span className="font-medium">Expect a reply shortly!</span>
                                </div>
                            </div>
                        </Step>
                    </Stepper>
                </Section>



                {/* EXPLORE ALL PAGES */}
                <Section id="explore" title="Explore All Pages" eyebrow="Site Navigation">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <a href="/services?utm_source=home&utm_medium=internal&utm_content=explore_services" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Services</h3>
                            <p className="text-gray-400 text-sm">Explore our comprehensive range of professional services</p>
                        </a>

                        <a href="/portfolio?utm_source=home&utm_medium=internal&utm_content=explore_portfolio" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Portfolio</h3>
                            <p className="text-gray-400 text-sm">View our featured projects and success stories</p>
                        </a>

                        <a href="/about?utm_source=home&utm_medium=internal&utm_content=explore_about" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">About Us</h3>
                            <p className="text-gray-400 text-sm">Meet our team and learn about our mission</p>
                        </a>

                        <a href="/contact?utm_source=home&utm_medium=internal&utm_content=explore_contact" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📧</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Contact</h3>
                            <p className="text-gray-400 text-sm">Get in touch with our team today</p>
                        </a>

                        <a href="/high-value-addons?utm_source=home&utm_medium=internal&utm_content=explore_addons" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">High-Value Add-ons</h3>
                            <p className="text-gray-400 text-sm">Premium features to enhance your experience</p>
                        </a>

                        <a href="/case-studies?utm_source=home&utm_medium=internal&utm_content=explore_casestudies" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Case Studies</h3>
                            <p className="text-gray-400 text-sm">Detailed client success stories and results</p>
                        </a>

                        <a href="/tech-stack?utm_source=home&utm_medium=internal&utm_content=explore_techstack" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Tech Stack</h3>
                            <p className="text-gray-400 text-sm">Technologies we use to build amazing products</p>
                        </a>

                        <a href="/reviews?utm_source=home&utm_medium=internal&utm_content=explore_reviews" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Reviews</h3>
                            <p className="text-gray-400 text-sm">Read what our clients say about us</p>
                        </a>

                        <a href="/book-a-call?utm_source=home&utm_medium=internal&utm_content=explore_bookcall" className="group p-6 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 hover:from-emerald-900/20 hover:to-teal-900/20 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Book a Call</h3>
                            <p className="text-gray-400 text-sm">Schedule a consultation with our team</p>
                        </a>

                        <a href="/careers?utm_source=home&utm_medium=internal&utm_content=explore_careers" className="group p-6 bg-gradient-to-br from-rose-900/10 to-pink-900/10 hover:from-rose-900/20 hover:to-pink-900/20 rounded-xl border border-rose-500/20 hover:border-rose-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">Careers</h3>
                            <p className="text-gray-400 text-sm">Join our growing team of innovators</p>
                        </a>

                        <a href="/blog?utm_source=home&utm_medium=internal&utm_content=explore_blog" className="group p-6 bg-gradient-to-br from-violet-900/10 to-purple-900/10 hover:from-violet-900/20 hover:to-purple-900/20 rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">Blog</h3>
                            <p className="text-gray-400 text-sm">Latest insights and articles from our team</p>
                        </a>

                        <a href="/faq?utm_source=home&utm_medium=internal&utm_content=explore_faq" className="group p-6 bg-gradient-to-br from-blue-900/10 to-indigo-900/10 hover:from-blue-900/20 hover:to-indigo-900/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">❓</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">FAQ</h3>
                            <p className="text-gray-400 text-sm">Frequently asked questions answered</p>
                        </a>

                        <a href="/privacy-policy?utm_source=home&utm_medium=internal&utm_content=explore_privacypolicy" className="group p-6 bg-gradient-to-br from-gray-900/10 to-slate-900/10 hover:from-gray-900/20 hover:to-slate-900/20 rounded-xl border border-gray-500/20 hover:border-gray-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">Privacy Policy</h3>
                            <p className="text-gray-400 text-sm">How we protect your information</p>
                        </a>

                        <a href="/terms-conditions?utm_source=home&utm_medium=internal&utm_content=explore_terms" className="group p-6 bg-gradient-to-br from-slate-900/10 to-zinc-900/10 hover:from-slate-900/20 hover:to-zinc-900/20 rounded-xl border border-slate-500/20 hover:border-slate-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-300 transition-colors">Terms & Conditions</h3>
                            <p className="text-gray-400 text-sm">Our terms of service and usage</p>
                        </a>
                    </div>
                </Section>

                {/* Book Call Preview */}
                <BookCallPreview />

                {/* Testimonials */}
                <Section title="What Clients Say" eyebrow="Reviews">
                    <Testimonials />
                </Section>

                {/* FAQ */}
                <Section id="faq" title="Questions? We've got answers.">
                    <FAQ />
                </Section>
            </main>
        </>
    );
}

export default Home;
