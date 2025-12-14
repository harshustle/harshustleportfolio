// src/pages/BookCall.jsx
import Section from "../components/Section";

function BookCall() {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <Section title="Book a Call" eyebrow="Let's Talk">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg">
                            Schedule a free consultation to discuss your project and how we can help
                            you achieve your goals.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    ✓
                                </div>
                                <span className="text-gray-300">30-minute strategy session</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    ✓
                                </div>
                                <span className="text-gray-300">Custom solution recommendations</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    ✓
                                </div>
                                <span className="text-gray-300">No obligation, completely free</span>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl border border-emerald-500/20">
                            <h4 className="text-white font-semibold mb-2">What to expect:</h4>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>• Brief introduction and overview of your needs</li>
                                <li>• Discussion of potential solutions and approaches</li>
                                <li>• Q&A session for any questions you have</li>
                                <li>• Next steps and timeline recommendations</li>
                            </ul>
                        </div>
                    </div>
                    <div className="group relative w-full h-[460px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-[1px] shadow-2xl shadow-purple-900/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/100 to-purple-500/80 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative h-full w-full rounded-2xl bg-black/60 overflow-hidden backdrop-blur-xl">
                            <iframe
                                src="https://cal.com/harshustle"
                                style={{ width: "100%", height: "calc(100% + 200px)", marginTop: "-90px" }}
                                frameBorder="0"
                                title="Book a Call"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default BookCall;
