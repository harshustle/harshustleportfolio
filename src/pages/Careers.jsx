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


                {/* Open Positions - Currently Empty */}
                <Section title="Open Positions" eyebrow="We're Hiring">
                    <div className="text-center py-16 bg-white/5 border border-white/10 rounded-2xl mt-12">
                        <div className="text-6xl mb-6">🔔</div>
                        <h3 className="text-2xl font-bold text-white mb-4">No Open Positions</h3>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            We currently have no open positions. We will post updates here when new opportunities arise.
                        </p>
                    </div>
                </Section>


            </div>
        </div>
    );
}

export default Careers;
