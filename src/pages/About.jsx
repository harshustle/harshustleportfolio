// src/pages/About.jsx
import Section from "../components/Section";

function About() {
    const team = [
        { name: "Sarah Johnson", role: "CEO & Founder", image: "https://i.pravatar.cc/300?img=1" },
        { name: "Michael Chen", role: "CTO", image: "https://i.pravatar.cc/300?img=13" },
        { name: "Emily Davis", role: "Head of Design", image: "https://i.pravatar.cc/300?img=5" },
        { name: "David Wilson", role: "Lead Developer", image: "https://i.pravatar.cc/300?img=12" },
    ];

    const values = [
        { icon: "🎯", title: "Innovation", description: "We push boundaries and embrace cutting-edge technologies" },
        { icon: "🤝", title: "Collaboration", description: "Together we achieve more than we ever could alone" },
        { icon: "⚡", title: "Excellence", description: "We're committed to delivering exceptional quality" },
        { icon: "💚", title: "Integrity", description: "Honesty and transparency guide everything we do" },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-semibold mb-6">
                                About Us
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                We Build
                                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Digital Dreams
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                A passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all">
                                    Join Our Team
                                </button>
                                <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg transition-all">
                                    Our Story
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="p-6 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl border border-indigo-500/20">
                                        <div className="text-4xl font-bold text-white mb-2">10+</div>
                                        <div className="text-gray-400">Years Experience</div>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20">
                                        <div className="text-4xl font-bold text-white mb-2">500+</div>
                                        <div className="text-gray-400">Projects</div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="p-6 bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-2xl border border-pink-500/20">
                                        <div className="text-4xl font-bold text-white mb-2">50+</div>
                                        <div className="text-gray-400">Team Members</div>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl border border-blue-500/20">
                                        <div className="text-4xl font-bold text-white mb-2">98%</div>
                                        <div className="text-gray-400">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Our Mission */}
                <Section title="Our Mission" eyebrow="What Drives Us">
                    <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                We're on a mission to empower businesses with cutting-edge digital solutions that drive growth and innovation. Our team combines technical expertise with creative vision to deliver products that make a real impact.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Since 2014, we've helped hundreds of companies transform their digital presence, from startups to Fortune 500 enterprises. We believe in building long-term partnerships and creating value that lasts.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Our Values */}
                <Section title="Our Values" eyebrow="What We Stand For">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="p-6 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 hover:from-indigo-900/20 hover:to-purple-900/20 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all group"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Team */}
                <Section title="Meet Our Team" eyebrow="The People Behind the Magic">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="group text-center"
                            >
                                <div className="relative mb-4 overflow-hidden rounded-2xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                    {member.name}
                                </h4>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/40 hover:to-purple-600/40 border border-indigo-500/30 text-white font-semibold rounded-lg transition-all">
                            View Full Team →
                        </button>
                    </div>
                </Section>

                {/* CTA */}
                <section className="mt-20 p-12 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl border border-indigo-500/20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Want to Join Our Journey?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented individuals who share our passion for innovation.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all">
                            View Open Positions
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg transition-all">
                            Get In Touch
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default About;
