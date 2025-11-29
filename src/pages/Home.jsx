// src/pages/Home.jsx
import Hero from "../components/Hero";
import BentoLayout from "../components/BentoLayout";
import Stack from "../components/Stack";
import Cards from "../components/Cards";
import Section from "../components/Section";
import FeaturesGrid from "../components/FeaturesGrid";
import MetricsStrip from "../components/MetricsStrip";
import UseCases from "../components/UseCases";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

function Home() {
    return (
        <>
            {/* HERO */}
            <Hero />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                {/* METRICS / SOCIAL PROOF STRIP */}
                <Section>
                    <MetricsStrip />
                </Section>

                {/* FEATURE GRID */}
                <Section id="features" title="Powerful building blocks" eyebrow="Features">
                    <FeaturesGrid />
                </Section>

                {/* BENTO + STACK (your existing visual components) */}
                <Section>
                    <div className="grid gap-8 lg:grid-cols-">
                        <BentoLayout />
                    </div>
                </Section>

                {/* USE CASES + CARDS */}
                <Section
                    id="use-cases"
                    title="Plug these components into real products"
                    eyebrow="Use cases"
                >
                    <div className="grid gap-12 lg:gap-x-16 lg:grid-cols-[2fr,3fr]">
                        <UseCases />
                        <Cards />
                    </div>
                </Section>

                {/* TESTIMONIALS */}
                <Section id="testimonials" title="Designers & devs who tried it, stayed">
                    <Testimonials />
                </Section>

                {/* PRICING */}
                <Section id="pricing" title="Simple pricing for serious projects">
                    <Pricing />
                </Section>

                {/* FAQ */}
                <Section id="faq" title="Questions? We've got answers.">
                    <FAQ />
                </Section>

                {/* EXPLORE ALL PAGES */}
                <Section id="explore" title="Explore All Pages" eyebrow="Site Navigation">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <a href="/services" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Services</h3>
                            <p className="text-gray-400 text-sm">Explore our comprehensive range of professional services</p>
                        </a>

                        <a href="/portfolio" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Portfolio</h3>
                            <p className="text-gray-400 text-sm">View our featured projects and success stories</p>
                        </a>

                        <a href="/about" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">About Us</h3>
                            <p className="text-gray-400 text-sm">Meet our team and learn about our mission</p>
                        </a>

                        <a href="/contact" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📧</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Contact</h3>
                            <p className="text-gray-400 text-sm">Get in touch with our team today</p>
                        </a>

                        <a href="/high-value-addons" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">High-Value Add-ons</h3>
                            <p className="text-gray-400 text-sm">Premium features to enhance your experience</p>
                        </a>

                        <a href="/case-studies" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Case Studies</h3>
                            <p className="text-gray-400 text-sm">Detailed client success stories and results</p>
                        </a>

                        <a href="/process" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Our Process</h3>
                            <p className="text-gray-400 text-sm">Learn about our proven methodology</p>
                        </a>

                        <a href="/resources" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Resources</h3>
                            <p className="text-gray-400 text-sm">Access our knowledge base and tools</p>
                        </a>

                        <a href="/tech-stack" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-800/10 hover:from-purple-900/20 hover:to-purple-800/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Tech Stack</h3>
                            <p className="text-gray-400 text-sm">Technologies we use to build amazing products</p>
                        </a>

                        <a href="/reviews" className="group p-6 bg-gradient-to-br from-purple-900/10 to-purple-700/10 hover:from-purple-900/20 hover:to-purple-700/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Reviews</h3>
                            <p className="text-gray-400 text-sm">Read what our clients say about us</p>
                        </a>

                        <a href="/book-a-call" className="group p-6 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 hover:from-emerald-900/20 hover:to-teal-900/20 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Book a Call</h3>
                            <p className="text-gray-400 text-sm">Schedule a consultation with our team</p>
                        </a>

                        <a href="/careers" className="group p-6 bg-gradient-to-br from-rose-900/10 to-pink-900/10 hover:from-rose-900/20 hover:to-pink-900/20 rounded-xl border border-rose-500/20 hover:border-rose-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">Careers</h3>
                            <p className="text-gray-400 text-sm">Join our growing team of innovators</p>
                        </a>

                        <a href="/blog" className="group p-6 bg-gradient-to-br from-violet-900/10 to-purple-900/10 hover:from-violet-900/20 hover:to-purple-900/20 rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">Blog</h3>
                            <p className="text-gray-400 text-sm">Latest insights and articles from our team</p>
                        </a>

                        <a href="/faq" className="group p-6 bg-gradient-to-br from-blue-900/10 to-indigo-900/10 hover:from-blue-900/20 hover:to-indigo-900/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">❓</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">FAQ</h3>
                            <p className="text-gray-400 text-sm">Frequently asked questions answered</p>
                        </a>

                        <a href="/privacy-policy" className="group p-6 bg-gradient-to-br from-gray-900/10 to-slate-900/10 hover:from-gray-900/20 hover:to-slate-900/20 rounded-xl border border-gray-500/20 hover:border-gray-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">Privacy Policy</h3>
                            <p className="text-gray-400 text-sm">How we protect your information</p>
                        </a>

                        <a href="/terms-conditions" className="group p-6 bg-gradient-to-br from-slate-900/10 to-zinc-900/10 hover:from-slate-900/20 hover:to-zinc-900/20 rounded-xl border border-slate-500/20 hover:border-slate-500/40 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-300 transition-colors">Terms & Conditions</h3>
                            <p className="text-gray-400 text-sm">Our terms of service and usage</p>
                        </a>
                    </div>
                </Section>
            </main>
        </>
    );
}

export default Home;
