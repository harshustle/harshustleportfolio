// src/pages/Careers.jsx
import Section from "../components/Section";

function Careers({ isSection = false }) {
    const openings = [
        {
            title: "Full Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            salary: "Competitive",
            description: "We're looking for an experienced full-stack developer to build scalable web applications.",
            requirements: ["React & Node.js", "Modern Tech Stack", "Database Design", "API Development"]
        },
        {
            title: "Senior Video Editor",
            department: "Content",
            location: "Remote",
            type: "Contract / Full-time",
            salary: "Competitive",
            description: "Create engaging, high-retention video content for our brand and clients.",
            requirements: ["Premiere Pro / After Effects", "Motion Graphics", "Short-form Content Mastery", "Storytelling"]
        },
        {
            title: "n8n Automation Expert",
            department: "Automation",
            location: "Remote",
            type: "Project-based",
            salary: "Competitive",
            description: "Design and implement complex automation workflows using n8n and AI agents.",
            requirements: ["n8n Mastery", "API Integration", "JavaScript/TypeScript", "Workflow Optimization"]
        }
    ];



    return (
        <div className="min-h-screen">
            {/* Hero */}
            {!isSection && (
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-pink-900/20 to-orange-900/20" />

                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
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
            )}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">


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
                                        <div className="flex flex-wrap gap-2 mb-3">
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
            </div>
        </div>
    );
}

export default Careers;
