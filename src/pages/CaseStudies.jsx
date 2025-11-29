// src/pages/CaseStudies.jsx
import Section from "../components/Section";

function CaseStudies() {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Section title="Case Studies" eyebrow="Success Stories">
                <div className="text-gray-300 space-y-4">
                    <p>
                        See how we've helped businesses transform their operations and achieve
                        remarkable results.
                    </p>
                    <div className="space-y-8 mt-8">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="text-sm text-green-400 font-semibold mb-2">
                                            CASE STUDY {item}
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white mb-3">
                                            How Company {item} Increased Revenue by 300%
                                        </h3>
                                        <p className="text-gray-400 mb-4">
                                            Discover how our innovative solutions helped Company {item}{" "}
                                            overcome challenges and achieve unprecedented growth in just 6
                                            months.
                                        </p>
                                        <div className="flex gap-4">
                                            <div>
                                                <div className="text-2xl font-bold text-green-400">300%</div>
                                                <div className="text-sm text-gray-500">Revenue Growth</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-blue-400">50%</div>
                                                <div className="text-sm text-gray-500">Cost Reduction</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-purple-400">10x</div>
                                                <div className="text-sm text-gray-500">User Growth</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-48 h-48 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-lg flex items-center justify-center">
                                        <span className="text-3xl">📈</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default CaseStudies;
