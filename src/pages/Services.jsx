// src/pages/Services.jsx
import Section from "../components/Section";

function Services({ isSection = false }) {
    const services = [
        {
            icon: "🎨",
            title: "UI/UX Design",
            description: "Create stunning, user-friendly interfaces that delight your customers and drive conversions.",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
            price: "Starting at $5,000"
        },
        {
            icon: "💻",
            title: "Web Development",
            description: "Build fast, scalable, and responsive web applications using modern technologies.",
            features: ["React & Next.js", "Node.js Backend", "API Integration", "Performance Optimization"],
            price: "Starting at $8,000"
        },
        {
            icon: "📱",
            title: "Mobile Apps",
            description: "Develop native-quality mobile applications for iOS and Android platforms.",
            features: ["React Native", "Cross-platform", "App Store Deployment", "Push Notifications"],
            price: "Starting at $12,000"
        },
        {
            icon: "🚀",
            title: "DevOps & Cloud",
            description: "Set up robust infrastructure and automated deployment pipelines for your applications.",
            features: ["AWS/Azure Setup", "CI/CD Pipelines", "Docker & Kubernetes", "Monitoring & Logging"],
            price: "Starting at $6,000"
        },
        {
            icon: "📊",
            title: "Digital Marketing",
            description: "Grow your online presence with data-driven marketing strategies and campaigns.",
            features: ["SEO Optimization", "Social Media", "Email Marketing", "Analytics & Reporting"],
            price: "Starting at $3,000/mo"
        },
        {
            icon: "🔒",
            title: "Security Audit",
            description: "Comprehensive security assessment and penetration testing for your applications.",
            features: ["Vulnerability Scanning", "Code Review", "Security Reports", "Compliance Consulting"],
            price: "Starting at $4,000"
        }
    ];

    return (
        <div className="min-h-screen">
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
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                                Get Started
                            </button>
                            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all">
                                View Pricing
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* Services Grid */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Section title="What We Offer" eyebrow="Services">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-gradient-to-br from-purple-900/10 to-pink-900/10 hover:from-purple-900/20 hover:to-pink-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
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
                                <div className="pt-6 border-t border-purple-500/20">
                                    <p className="text-purple-300 font-semibold mb-4">{service.price}</p>
                                    <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-500/30 hover:border-purple-500/50 text-white font-semibold rounded-lg transition-all">
                                        Learn More →
                                    </button>
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
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                        Schedule a Free Consultation
                    </button>
                </section>
            </main>
        </div>
    );
}

export default Services;
