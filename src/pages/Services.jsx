
// src/pages/Services.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import ServiceProcessModal from "../components/ServiceProcessModal";

function Services({ isSection = false }) {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: "✨",
            title: "AI Content Creation",
            description: "Generate high-quality, engaging content instantly with our advanced AI tools tailored to your brand voice.",
            features: ["Blog Writing", "Social Media Posts", "SEO Optimization", "Multi-language Support"],
            price: "Starting at $299/mo",
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
            title: "Web Development",
            description: "Build fast, scalable, and responsive web applications using modern technologies.",
            features: ["React & Next.js", "Node.js Backend", "API Integration", "Performance Optimization"],
            price: "Starting at $99",
            processSteps: [
                { title: "Requirement Gathering", description: "Understanding your functional and non-functional requirements." },
                { title: "Architecture Design", description: "Planning the database schema, API structure, and frontend components." },
                { title: "Development Sprints", description: "Building the application in agile sprints with regular updates." },
                { title: "Testing & QA", description: "Rigorous testing for bugs, performance, and security vulnerabilities." },
                { title: "Deployment", description: "Launching your application to a live production environment." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        },
        {
            icon: "📱",
            title: "Mobile Apps",
            description: "Develop native-quality mobile applications for iOS and Android platforms.",
            features: ["React Native", "Cross-platform", "App Store Deployment", "Push Notifications"],
            price: "Starting at $149",
            processSteps: [
                { title: "Wireframing", description: "Mapping out the user journey and screen flows." },
                { title: "UI Design", description: "Creating high-fidelity mockups of the app interface." },
                { title: "App Development", description: "Coding the mobile application using React Native framework." },
                { title: "Beta Testing", description: "Distributing builds to testers via TestFlight or Play Console." },
                { title: "Store Submission", description: "Handling the app store review process for Apple and Google." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        },
        {
            icon: "📢",
            title: "Social Media Management",
            description: "Full-service management of your social profiles to build community and drive engagement.",
            features: ["Community Management", "Strategy Development", "Influencer Collaboration", "Paid Ad Campaigns"],
            price: "Starting at $199/mo",
            processSteps: [
                { title: "Audit", description: "Reviewing your current social media presence and performance." },
                { title: "Strategy Deck", description: "Creating a comprehensive plan for content pillars and frequency." },
                { title: "Content Calendar", description: "Planning posts a month in advance for your approval." },
                { title: "Engagement", description: "Actively replying to comments and engaging with your community." },
                { title: "Monthly Report", description: "Detailed analytics report on growth and engagement metrics." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        },
        {
            icon: "🤖",
            title: "Social Media Automation",
            description: "Automate your social growth with AI-driven content, scheduling, and analytics. Tools: Hootsuite AI, Buffer, Predis.ai.",
            features: ["Content ideas generation", "Post scheduling", "Hashtag & caption suggestions", "Analytics & performance prediction"],
            price: "Starting at $50/mo",
            processSteps: [
                { title: "Tool Setup", description: "Configuring automation tools (Zapier, Buffer, etc.) for your accounts." },
                { title: "Workflow Creation", description: "Building automated workflows for posting and cross-promotion." },
                { title: "Content Feeding", description: "Setting up data sources to feed your content pipeline." },
                { title: "Testing", description: "Verifying that triggers and actions fire correctly." },
                { title: "Monitoring", description: "Ongoing oversight to ensure the automation runs smoothly." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        },
        {
            icon: "🎬",
            title: "Video Editing",
            description: "Professional video editing for Reels, Shorts, and long-form content to capture attention.",
            features: ["Reels & Shorts", "Color Grading", "Motion Graphics", "Sound Design"],
            price: "Starting at $25/project",
            processSteps: [
                { title: "Raw Footage Ingest", description: "Organizing and reviewing your raw video files." },
                { title: "Rough Cut", description: " assembling the narrative structure and selecting the best takes." },
                { title: "Visuals & Audio", description: "Adding transitions, effects, color grade, and sound mixing." },
                { title: "Feedback Loop", description: "Sharing drafts for your review and implementing changes." },
                { title: "Final Render", description: "Exporting the video in high-quality formats optimized for platforms." }
            ],
            paymentLink: "#" // TODO: Add your Stripe/PhonePe link here
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Modal */}
            <ServiceProcessModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />

            {/* Hero Section - Only show if not embedded as a section */}
            {!isSection && (
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,0,255,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,0,128,0.1),transparent_50%)]" />

                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
                        <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-semibold mb-6">
                            Our Services
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Transform Your
                            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                Digital Presence
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            From concept to launch, we provide end-to-end digital solutions that help your business thrive in the modern world.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/book-a-call" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                                Get Started
                            </Link>
                            <a href="#services-grid" className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all">
                                View Pricing
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Services Grid */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="services-grid">
                <Section title="What We Offer" eyebrow="Services">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-gradient-to-br from-purple-900/10 to-pink-900/10 hover:from-purple-900/20 hover:to-pink-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                            >
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                                            <span className="mr-2 text-purple-400">✓</span>
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
                                            {service.price.replace("Starting at ", "")}
                                        </div>
                                    </div>
                                    {service.title === "Web Development" && (
                                        <p className="text-xs text-center text-gray-500 mt-2 italic">
                                            * Prices vary based on add-ons
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Why Choose Us */}
                <Section title="Why Choose Us" eyebrow="Our Advantage">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[
                            { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
                            { icon: "💎", title: "Premium Quality", desc: "Exceptional results that exceed expectations" },
                            { icon: "🎯", title: "Result-Driven", desc: "Focused on your business goals and ROI" },
                            { icon: "🤝", title: "24/7 Support", desc: "Always here when you need us" }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* CTA Section */}
                <section className="mt-20 p-12 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 rounded-3xl border border-purple-500/20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help you achieve your business goals with our expert services.
                    </p>
                    <Link to="/book-a-call" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                        Schedule a Free Consultation
                    </Link>
                </section>
            </main>
        </div>
    );
}

export default Services;
