// src/pages/Blog.jsx
import { useState, useEffect } from "react";
import Section from "../components/Section";

function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = ["all", "development", "design", "business", "tutorials", "news"];

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://dev.to/api/articles?tag=webdev&top=30");
                const data = await response.json();

                const formattedPosts = data.map(article => ({
                    id: article.id,
                    title: article.title,
                    excerpt: article.description,
                    author: article.user.name,
                    authorImage: article.user.profile_image,
                    date: new Date(article.published_at).toLocaleDateString(),
                    readTime: `${article.reading_time_minutes} min read`,
                    category: article.tag_list[0] || "tech", // Use first tag as category
                    image: article.cover_image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format", // Fallback image
                    tags: article.tag_list,
                    url: article.url // Link to actual article
                }));

                setPosts(formattedPosts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === "all" || post.tags.includes(selectedCategory);
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
                                    <a
                                        href={filteredPosts[0].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all w-fit block text-center"
                                    >
                                        Read Article →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={post.id}
                            className="group bg-gradient-to-br from-violet-900/10 to-purple-900/10 hover:from-violet-900/20 hover:to-purple-900/20 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 block"
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
                        </a>
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


            </main>
        </div>
    );
}

export default Blog;
