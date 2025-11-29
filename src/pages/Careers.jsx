// src/pages/Careers.jsx
import Section from "../components/Section";

function Careers() {
    const openings = [
        {
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            salary: "$120k - $180k",
            description: "We're looking for an experienced full-stack developer to join our growing engineering team.",
            requirements: ["5+ years experience", "React & Node.js", "Database design", "API development"]
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$90k - $130k",
            description: "Join our design team to create beautiful and intuitive user experiences.",
            requirements: ["3+ years experience", "Figma & Adobe Suite", "User research", "Prototyping"]
        },
        {
            title: "Product Manager",
            department: "Product",
            location: "New York, NY",
            type: "Full-time",
            salary: "$110k - $160k",
            description: "Lead product strategy and execution for our flagship products.",
            requirements: ["4+ years PM experience", "Agile/Scrum", "Data-driven", "Cross-functional leadership"]
        },
        {
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            salary: "$100k - $150k",
            description: "Build and maintain our cloud infrastructure and deployment pipelines.",
            requirements: ["AWS/Azure", "Docker & Kubernetes", "CI/CD", "Infrastructure as Code"]
        },
        {
            title: "Marketing Specialist",
            department: "Marketing",
            location: "Austin, TX",
            type: "Full-time",
            salary: "$70k - $100k",
            description: "Drive our marketing campaigns and grow our brand presence.",
            requirements: ["2+ years experience", "SEO/SEM", "Content creation", "Analytics"]
        },
        {
            title: "Customer Success Manager",
            department: "Customer Success",
            location: "Remote",
            type: "Full-time",
            salary: "$80k - $110k",
            description: "Ensure our customers achieve their goals and maximize value from our platform.",
            requirements: ["3+ years experience", "SaaS background", "Excellent communication", "Problem-solving"]
        }
    ];

    const benefits = [
        { icon: "💰", title: "Competitive Salary", desc: "Top market rates + equity" },
        { icon: "🏥", title: "Health & Wellness", desc: "Comprehensive medical coverage" },
        { icon: "🏖️", title: "Unlimited PTO", desc: "Take time when you need it" },
        { icon: "🏠", title: "Remote Work", desc: "Work from anywhere" },
        { icon: "📚", title: "Learning Budget", desc: "$2,000/year for courses" },
        { icon: "💻", title: "Latest Equipment", desc: "MacBook Pro + accessories" },
        { icon: "🎯", title: "Career Growth", desc: "Clear advancement paths" },
        { icon: "🍕", title: "Team Events", desc: "Regular team outings & retreats" }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-pink-900/20 to-orange-900/20" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-300 text-sm font-semibold mb-6">
                        Join Our Team
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Build Your Career
                        <span className="block bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            With Amazing People
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        We're always looking for talented individuals who share our passion for innovation and excellence.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                        View Open Positions ↓
                    </button>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Why Join Us */}
                <Section title="Why Join Us" eyebrow="Perks & Benefits">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="p-6 bg-gradient-to-br from-rose-900/10 to-pink-900/10 hover:from-rose-900/20 hover:to-pink-900/20 rounded-xl border border-rose-500/20 hover:border-rose-500/40 transition-all text-center group"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Our Culture */}
                <section className="my-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gradient-to-br from-rose-900/20 to-pink-900/20 rounded-2xl border border-rose-500/20">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Innovation First</h3>
                            <p className="text-gray-400">
                                We push boundaries and embrace cutting-edge technologies to solve complex problems.
                            </p>
                        </div>
                        <div className="p-8 bg-gradient-to-br from-pink-900/20 to-orange-900/20 rounded-2xl border border-pink-500/20">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Collaborative</h3>
                            <p className="text-gray-400">
                                Work with talented individuals in a supportive environment where everyone's voice matters.
                            </p>
                        </div>
                        <div className="p-8 bg-gradient-to-br from-orange-900/20 to-rose-900/20 rounded-2xl border border-orange-500/20">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Growth-Focused</h3>
                            <p className="text-gray-400">
                                Continuous learning opportunities and clear paths for professional development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <Section title="Open Positions" eyebrow="We're Hiring">
                    <div className="space-y-4 mt-12">
                        {openings.map((job, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-gradient-to-br from-rose-900/10 to-pink-900/10 hover:from-rose-900/20 hover:to-pink-900/20 rounded-xl border border-rose-500/20 hover:border-rose-500/40 transition-all"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2mb-3">
                                            <span className="px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold rounded-full">
                                                {job.department}
                                            </span>
                                            <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-semibold rounded-full">
                                                {job.type}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                                            {job.title}
                                        </h4>
                                        <p className="text-gray-400 mb-4">{job.description}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                                            <span className="flex items-center gap-1">
                                                <span className="text-rose-400">📍</span> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="text-rose-400">💰</span> {job.salary}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {job.requirements.map((req, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
                                                >
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <button className="px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all whitespace-nowrap transform hover:scale-105">
                                            Apply Now →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* CTA */}
                <section className="mt-20 p-12 bg-gradient-to-r from-rose-900/20 via-pink-900/20 to-orange-900/20 rounded-3xl border border-rose-500/20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Don't See a Perfect Fit?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        We're always interested in hearing from talented people. Send us your resume and tell us about yourself.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                        Submit General Application
                    </button>
                </section>
            </main>
        </div>
    );
}

export default Careers;
