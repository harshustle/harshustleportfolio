// src/pages/TechStack.jsx
import Section from "../components/Section";

function TechStack() {
    const technologies = [
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "TypeScript", category: "Language" },
        { name: "PostgreSQL", category: "Database" },
        { name: "AWS", category: "Cloud" },
        { name: "Docker", category: "DevOps" },
        { name: "Kubernetes", category: "DevOps" },
        { name: "GraphQL", category: "API" },
        { name: "React Native", category: "Mobile" },
        { name: "TailwindCSS", category: "Styling" },
        { name: "Next.js", category: "Framework" },
        { name: "MongoDB", category: "Database" },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <Section title="Tech Stack" eyebrow="Technologies We Use">
                <div className="text-gray-300 space-y-4">
                    <p>
                        We leverage cutting-edge technologies to build scalable, performant, and
                        modern applications.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all text-center group"
                            >
                                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                                    {tech.name}
                                </h3>
                                <p className="text-sm text-gray-500">{tech.category}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 p-8 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 rounded-xl border border-violet-500/20">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Why Our Tech Stack?
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>✓ Modern and battle-tested technologies</li>
                            <li>✓ Excellent performance and scalability</li>
                            <li>✓ Strong community support</li>
                            <li>✓ Future-proof solutions</li>
                        </ul>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default TechStack;
