// src/pages/Portfolio.jsx
import { useState } from "react";
import Section from "../components/Section";

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("all");

    const categories = ["all", "web", "mobile", "design", "branding"];

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "web",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format",
            description: "Modern e-commerce solution with AI-powered recommendations",
            tags: ["React", "Node.js", "AI"],
            metrics: { users: "50K+", growth: "+180%", rating: "4.9" }
        },
        {
            id: 2,
            title: "Fitness Tracking App",
            category: "mobile",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format",
            description: "Cross-platform fitness app with real-time tracking",
            tags: ["React Native", "Firebase", "Health API"],
            metrics: { users: "25K+", growth: "+200%", rating: "4.8" }
        },
        {
            id: 3,
            title: "Brand Identity Design",
            category: "branding",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format",
            description: "Complete brand redesign for tech startup",
            tags: ["Branding", "Logo Design", "Guidelines"],
            metrics: { clients: "100+", satisfaction: "98%", awards: "5" }
        },
        {
            id: 4,
            title: "SaaS Dashboard",
            category: "design",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
            description: "Analytics dashboard with real-time data visualization",
            tags: ["UI/UX", "Figma", "Data Viz"],
            metrics: { screens: "120+", components: "200+", variants: "50+" }
        },
        {
            id: 5,
            title: "Banking Portal",
            category: "web",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format",
            description: "Secure online banking platform with modern UX",
            tags: ["Next.js", "Security", "Fintech"],
            metrics: { transactions: "1M+", uptime: "99.9%", users: "100K+" }
        },
        {
            id: 6,
            title: "Social Media App",
            category: "mobile",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format",
            description: "Next-gen social platform for content creators",
            tags: ["React Native", "GraphQL", "AWS"],
            metrics: { downloads: "500K+", retention: "70%", rating: "4.7" }
        }
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,100,255,0.1),transparent_50%)]" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-semibold mb-6">
                        Our Work
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Projects That
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Inspire Excellence
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our portfolio of successful projects across web, mobile, and design.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${activeFilter === cat
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                    : "bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Project →
                                    </button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Metrics */}
                                <div className="flex gap-6 pt-4 border-t border-gray-700/50">
                                    {Object.entries(project.metrics).map(([key, value]) => (
                                        <div key={key}>
                                            <div className="text-lg font-bold text-white">{value}</div>
                                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center p-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl border border-blue-500/20">
                    <h2 className="text-3xl font-bold text-white mb-4">Like What You See?</h2>
                    <p className="text-gray-300 mb-6">Let's create something amazing together.</p>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                        Start Your Project
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Portfolio;
