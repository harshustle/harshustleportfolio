// src/pages/Reviews.jsx
import Section from "../components/Section";

function Reviews() {
    const reviews = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechCorp",
            rating: 5,
            text: "Working with this team was an absolute game-changer for our business. They delivered beyond our expectations and the results speak for themselves. Our user engagement increased by 300%!",
            image: "https://i.pravatar.cc/150?img=1",
            company: "TechCorp",
            project: "E-Commerce Platform"
        },
        {
            name: "Michael Chen",
            role: "CTO, StartupXYZ",
            rating: 5,
            text: "Professional, efficient, and incredibly skilled. They transformed our vision into reality with exceptional attention to detail. The best development team we've ever worked with.",
            image: "https://i.pravatar.cc/150?img=13",
            company: "StartupXYZ",
            project: "SaaS Dashboard"
        },
        {
            name: "Emily Davis",
            role: "Product Manager, InnovateCo",
            rating: 5,
            text: "Outstanding work from start to finish. They understood our requirements perfectly and delivered a product that exceeded all our goals. Highly recommended!",
            image: "https://i.pravatar.cc/150?img=5",
            company: "InnovateCo",
            project: "Mobile App"
        },
        {
            name: "David Wilson",
            role: "Founder, GrowthLabs",
            rating: 5,
            text: "Incredible results in record time. Their expertise and professionalism made the entire process smooth and enjoyable. We saw immediate impact on our metrics.",
            image: "https://i.pravatar.cc/150?img=12",
            company: "GrowthLabs",
            project: "Marketing Platform"
        },
        {
            name: "Lisa Anderson",
            role: "Marketing Director, BrandCo",
            rating: 5,
            text: "They completely transformed our digital presence. The new design is stunning and has significantly improved our conversion rates. Couldn't be happier!",
            image: "https://i.pravatar.cc/150?img=9",
            company: "BrandCo",
            project: "Brand Redesign"
        },
        {
            name: "James Martinez",
            role: "VP Engineering, ScaleTech",
            rating: 5,
            text: "Top-notch quality and excellent communication throughout the project. They went above and beyond to ensure everything was perfect. True professionals!",
            image: "https://i.pravatar.cc/150?img=15",
            company: "ScaleTech",
            project: "Cloud Infrastructure"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-yellow-900/20 to-orange-900/20" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-sm font-semibold mb-6">
                        Client Reviews
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Trusted by
                        <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            Industry Leaders
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                {/* Overall Rating */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-1 p-8 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-2xl border border-amber-500/20 text-center">
                        <div className="text-7xl font-bold text-amber-400 mb-4">4.9</div>
                        <div className="flex justify-center gap-1 text-3xl mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                        </div>
                        <p className="text-gray-400 mb-2">Average Rating</p>
                        <p className="text-gray-500 text-sm">Based on 500+ reviews</p>
                    </div>

                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                        <div className="p-6 bg-gradient-to-br from-amber-900/10 to-yellow-900/10 rounded-xl border border-amber-500/20 text-center">
                            <div className="text-4xl font-bold text-white mb-2">500+</div>
                            <div className="text-gray-400 text-sm">Total Reviews</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-yellow-900/10 to-orange-900/10 rounded-xl border border-yellow-500/20 text-center">
                            <div className="text-4xl font-bold text-white mb-2">98%</div>
                            <div className="text-gray-400 text-sm">5-Star Ratings</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-orange-900/10 to-amber-900/10 rounded-xl border border-orange-500/20 text-center">
                            <div className="text-4xl font-bold text-white mb-2">100%</div>
                            <div className="text-gray-400 text-sm">Would Recommend</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-amber-900/10 to-orange-900/10 rounded-xl border border-amber-500/20 text-center">
                            <div className="text-4xl font-bold text-white mb-2">200+</div>
                            <div className="text-gray-400 text-sm">Happy Clients</div>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <Section title="What Our Clients Say" eyebrow="Testimonials">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-gradient-to-br from-amber-900/10 to-yellow-900/10 hover:from-amber-900/20 hover:to-yellow-900/20 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all"
                            >
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-300 mb-6 leading-relaxed italic">
                                    "{review.text}"
                                </p>

                                {/* Project Badge */}
                                <div className="mb-4">
                                    <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold rounded-full">
                                        {review.project}
                                    </span>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-amber-500/20">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full border-2 border-amber-500/30"
                                    />
                                    <div>
                                        <div className="text-white font-semibold">{review.name}</div>
                                        <div className="text-gray-400 text-sm">{review.role}</div>
                                        <div className="text-gray-500 text-xs">{review.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* CTA */}
                <section className="mt-20 p-12 bg-gradient-to-r from-amber-900/20 via-yellow-900/20 to-orange-900/20 rounded-3xl border border-amber-500/20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Join Our Success Stories?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's create something amazing together and add you to our list of happy clients.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                        Start Your Project
                    </button>
                </section>
            </main>
        </div>
    );
}

export default Reviews;
