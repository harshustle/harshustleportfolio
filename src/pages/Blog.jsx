// src/pages/Blog.jsx
import { useState } from "react";
import Section from "../components/Section";

function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = ["all", "development", "design", "business", "tutorials", "news"];

    const posts = [
        {
            id: 1,
            title: "Building Scalable React Applications in 2025",
            excerpt: "Learn the best practices and patterns for building large-scale React applications that can grow with your business.",
            author: "Sarah Johnson",
            authorImage: "https://i.pravatar.cc/150?img=1",
            date: "Jan 15, 2025",
            readTime: "8 min read",
            category: "development",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format",
            tags: ["React", "JavaScript", "Architecture"]
        },
        {
            id: 2,
            title: "The Future of UI/UX Design: Trends to Watch",
            excerpt: "Explore the emerging design trends that will shape the digital landscape in the coming years.",
            author: "Michael Chen",
            authorImage: "https://i.pravatar.cc/150?img=13",
            date: "Jan 12, 2025",
            readTime: "6 min read",
            category: "design",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format",
            tags: ["UI/UX", "Design Trends", "Innovation"]
        },
        {
            id: 3,
            title: "How to Scale Your Startup: A Complete Guide",
            excerpt: "Practical strategies and insights from founders who successfully scaled their startups from zero to millions.",
            author: "Emily Davis",
            authorImage: "https://i.pravatar.cc/150?img=5",
            date: "Jan 10, 2025",
            readTime: "12 min read",
            category: "business",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
            tags: ["Startup", "Growth", "Strategy"]
        },
        {
            id: 4,
            title: "Mastering TypeScript: Advanced Patterns",
            excerpt: "Deep dive into advanced TypeScript patterns that will make your code more robust and maintainable.",
            author: "David Wilson",
            authorImage: "https://i.pravatar.cc/150?img=12",
            date: "Jan 8, 2025",
            readTime: "10 min read",
            category: "tutorials",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format",
            tags: ["TypeScript", "Programming", "Best Practices"]
        },
        {
            id: 5,
            title: "AI in Web Development: What's Changing?",
            excerpt: "How artificial intelligence is transforming the way we build websites and applications.",
            author: "Lisa Anderson",
            authorImage: "https://i.pravatar.cc/150?img=9",
            date: "Jan 5, 2025",
            readTime: "7 min read",
            category: "news",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
            tags: ["AI", "Technology", "Web Development"]
        },
        {
            id: 6,
            title: "CSS Grid vs Flexbox: When to Use Each",
            excerpt: "A comprehensive comparison of CSS Grid and Flexbox with real-world examples and use cases.",
            author: "James Martinez",
            authorImage: "https://i.pravatar.cc/150?img=15",
            date: "Jan 3, 2025",
            readTime: "9 min read",
            category: "tutorials",
            image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format",
            tags: ["CSS", "Layout", "Frontend"]
        }
    ];

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-semibold mb-6">
                        Our Blog
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Insights &
                        <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Innovation
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Stay updated with the latest trends, tutorials, and insights from our team of experts.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 pl-14 bg-white/5 border border-white/10 hover:border-violet-500/50 focus:border-violet-500 focus:outline-none rounded-full text-white placeholder-gray-400 transition-colors"
                            />
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${selectedCategory === cat
                                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white"
                                    : "bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                {filteredPosts.length > 0 && (
                    <div className="mb-16">
                        <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 hover:border-violet-500/40 transition-all">
                            <div className="grid md:grid-cols-2 gap-8 p-8">
                                <div className="relative aspect-video md:aspect-auto overflow-hidden rounded-2xl">
                                    <img
                                        src={filteredPosts[0].image}
                                        alt={filteredPosts[0].title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-semibold mb-4 w-fit">
                                        Featured Post
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                        {filteredPosts[0].title}
                                    </h2>
                                    <p className="text-gray-400 mb-6">{filteredPosts[0].excerpt}</p>
                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={filteredPosts[0].authorImage}
                                            alt={filteredPosts[0].author}
                                            className="w-12 h-12 rounded-full border-2 border-violet-500/30"
                                        />
                                        <div>
                                            <div className="text-white font-semibold">{filteredPosts[0].author}</div>
                                            <div className="text-gray-500 text-sm">{filteredPosts[0].date} · {filteredPosts[0].readTime}</div>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all w-fit">
                                        Read Article →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                        <article
                            key={post.id}
                            className="group bg-gradient-to-br from-violet-900/10 to-purple-900/10 hover:from-violet-900/20 hover:to-purple-900/20 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-violet-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full capitalize">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 2).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-violet-500/10 text-violet-300 text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-violet-500/20">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={post.authorImage}
                                            alt={post.author}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div className="text-xs">
                                            <div className="text-gray-400">{post.author}</div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">{post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📝</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter</p>
                    </div>
                )}

                {/* Newsletter CTA */}
                <section className="mt-16 p-12 bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-fuchsia-900/20 rounded-3xl border border-violet-500/20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Never Miss an Update
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-6 py-3 bg-black/50 border border-gray-700 focus:border-violet-500 focus:outline-none rounded-lg text-white"
                        />
                        <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Blog;
