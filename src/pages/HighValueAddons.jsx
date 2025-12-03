// src/pages/HighValueAddons.jsx
import Section from "../components/Section";

function HighValueAddons() {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <Section title="High-Value Add-ons" eyebrow="Premium Features">
                <div className="text-gray-300 space-y-4">
                    <p>
                        Enhance your experience with our premium add-ons designed to maximize value
                        and accelerate your success.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {[
                            { name: "Premium Support", icon: "🚀" },
                            { name: "Advanced Analytics", icon: "📊" },
                            { name: "Custom Integration", icon: "🔗" },
                            { name: "Priority Access", icon: "⭐" },
                        ].map((addon, index) => (
                            <div
                                key={index}
                                className="p-8 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                            >
                                <div className="text-4xl mb-4">{addon.icon}</div>
                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    {addon.name}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Get exclusive access to {addon.name.toLowerCase()} and take your
                                    business to the next level.
                                </p>
                                <button className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default HighValueAddons;
