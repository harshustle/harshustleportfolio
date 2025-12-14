// src/pages/About.jsx
import Section from "../components/Section";
import MetricsStrip from "../components/MetricsStrip";
import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

function About() {
    // Single founder profile
    const team = [
        {
            name: "Harsh Srivastav",
            role: "Founder & Lead Developer",
            image: "https://github.com/harshustle.png",
            bio: "I'm a Full-Stack Developer and AI Automation Expert obsessed with building scalable SaaS products. As a solopreneur, I bridge the gap between complex technology and intuitive user experiences.",
            socials: [
                { icon: Twitter, link: "https://twitter.com/harshustle", label: "Twitter" },
                { icon: Github, link: "https://github.com/harshustle", label: "GitHub" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/harshustle/", label: "LinkedIn" }
            ]
        },
    ];

    const values = [
        { icon: "🚀", title: "Speed", description: "I ship fast without breaking things. Rapid iteration is key." },
        { icon: "💎", title: "Quality", description: "Pixel-perfect design meets robust, scalable architecture." },
        { icon: "🔍", title: "Transparency", description: "No hidden fees or complexities. Just honest work." },
        { icon: "💡", title: "Innovation", description: "Always exploring the bleeding edge of AI and tech." },
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-semibold mb-6">
                        The Solo Hustle
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Building the Future, <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            One Commit at a Time
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I'm Harsh Srivastav, known online as <strong>@harshustle</strong>. I turn ambitious ideas into reality using the MERN stack, Next.js, and cutting-edge AI automation.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">

                {/* Stats / Impact */}
                {/* Stats / Impact */}
                <MetricsStrip />

                {/* About the Founder */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                        <img
                            src={team[0].image}
                            alt={team[0].name}
                            className="relative w-full aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Meet the Maker</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                My journey started with a curiosity for code and has evolved into a full-blown obsession with building useful, beautiful software. I specialize in the <strong>MERN stack</strong>, <strong>Next.js</strong>, and <strong>cutting-edge AI automation</strong>.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Currently, I'm focused on launching my own AI SaaS product by 2025 while helping clients automate their workflows and scale their digital presence.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-3">Connect with me</h3>
                            <div className="flex gap-4">
                                {team[0].socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:scale-110"
                                        title={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <Section title="My Philosophy" eyebrow="Core Values" className="text-center">
                    <div className="grid md:grid-cols-4 gap-6 mt-12">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="p-6 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-indigo-500/50 rounded-2xl transition-all group hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{value.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* CTA */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 p-12 text-center bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Have an Idea? Let's Build It.</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            I'm currently open for select freelance projects and collaborations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/book-a-call" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                                Book a 15-min Call
                            </a>
                            <a href="https://wa.me/917839661372" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                                Send a Message
                            </a>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default About;
