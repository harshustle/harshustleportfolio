// src/pages/Resources.jsx
import Section from "../components/Section";

function Resources() {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Section title="Resources" eyebrow="Knowledge Base">
                <div className="text-gray-300 space-y-4">
                    <p>
                        Access our collection of guides, tutorials, and tools to help you succeed.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {[
                            { category: "Guides", count: 24, icon: "📚" },
                            { category: "Tutorials", count: 18, icon: "🎓" },
                            { category: "Templates", count: 12, icon: "📄" },
                            { category: "Videos", count: 30, icon: "🎥" },
                            { category: "Webinars", count: 8, icon: "💻" },
                            { category: "Tools", count: 15, icon: "🛠️" },
                        ].map((resource, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-br from-teal-900/20 to-cyan-900/20 rounded-xl border border-teal-500/20 hover:border-teal-500/40 transition-all cursor-pointer group"
                            >
                                <div className="text-4xl mb-4">{resource.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {resource.category}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {resource.count} {resource.category.toLowerCase()} available
                                </p>
                                <div className="text-teal-400 group-hover:text-teal-300 transition-colors">
                                    Explore →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default Resources;
