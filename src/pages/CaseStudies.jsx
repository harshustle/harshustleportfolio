
// src/pages/CaseStudies.jsx
import Section from "../components/Section";
import { ArrowRight, BarChart, Users, Zap, Trophy, Target } from "lucide-react";

function CaseStudies() {
    const studies = [
        {
            id: 1,
            client: "TechFlow Dynamics",
            sector: "SaaS / Enterprise",
            title: "Scaling Cloud Infrastructure for 500% User Growth",
            description: "TechFlow faced a critical bottleneck as their user base exploded. We re-engineered their entire backend architecture, implementing microservices and auto-scaling protocols that reduced latency by 60% while handling 5x the traffic.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
            color: "blue",
            stats: [
                { label: "Uptime", value: "99.99%", icon: Zap },
                { label: "Cost Savings", value: "40%", icon: BarChart },
                { label: "User Capacity", value: "5M+", icon: Users }
            ]
        },
        {
            id: 2,
            client: "EcoMarket",
            sector: "E-Commerce",
            title: "Revolutionizing the Sustainable Shopping Experience",
            description: "EcoMarket needed a platform that reflected their values. We designed a carbon-neutral hosted PWA with AI-driven sustainability scores for products, resulting in a massive increase in user engagement and recurring purchases.",
            image: "https://images.unsplash.com/photo-1472851294608-415522415d94?w=800&auto=format",
            color: "emerald",
            stats: [
                { label: "Conv. Rate", value: "+85%", icon: Target },
                { label: "Mobile Traffic", value: "70%", icon: Zap },
                { label: "Retention", value: "65%", icon: Trophy }
            ]
        },
        {
            id: 3,
            client: "FinVault",
            sector: "FinTech",
            title: "Next-Gen Security for Digital Banking",
            description: "Security shouldn't compromise experience. For FinVault, we built a biometric authentication system integrated with a sleek, intuitive dashboard, setting a new standard for trust and usability in digital finance.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format",
            color: "violet",
            stats: [
                { label: "Fraud Reduct.", value: "95%", icon: Zap },
                { label: "Login Speed", value: "<1s", icon: Zap },
                { label: "Trust Score", value: "4.9/5", icon: Trophy }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-blue-300 text-sm font-semibold mb-8 animate-fadeIn">
                        <Trophy className="w-4 h-4" />
                        <span>Proven Excellence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Real Results, <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                            Measurable Impact
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Dive deep into how we solve complex challenges and deliver transformative value for our partners across industries.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">
                {studies.map((study, index) => (
                    <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 group relative">
                            <div className={`absolute -inset-4 bg-${study.color}-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={study.image}
                                    alt={study.client}
                                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <span className={`px-3 py-1 bg-${study.color}-500/20 border border-${study.color}-500/30 text-${study.color}-300 text-xs font-bold uppercase tracking-wider rounded-full mb-3 inline-block`}>
                                        {study.sector}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">{study.client}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                    {study.title}
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {study.description}
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                                {study.stats.map((stat, i) => (
                                    <div key={i} className="relative group/stat">
                                        <div className="flex items-center gap-2 mb-2 text-gray-500 group-hover/stat:text-white transition-colors">
                                            <stat.icon className="w-4 h-4" />
                                            <span className="text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                        <div className={`text-2xl font-bold text-${study.color}-400`}>
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className={`flex items-center gap-2 text-${study.color}-400 font-semibold hover:text-${study.color}-300 transition-colors group`}>
                                Read Full Case Study
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </main>

            {/* CTA */}
            <Section>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 p-12 text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-emerald-900/20" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
                        <div className="flex justify-center gap-4">
                            <a href="/book-a-call" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}


export default CaseStudies;
