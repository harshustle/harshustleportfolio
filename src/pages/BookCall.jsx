// src/pages/BookCall.jsx
import Section from "../components/Section";

function BookCall() {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <Section title="Book a Call" eyebrow="Let's Talk">
                <div className="grid md:grid-cols-2 gap-12">
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
                    <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl border border-emerald-500/20 p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Select a Time Slot
                        </h3>
                        <div className="space-y-3">
                            {[
                                "Monday, 10:00 AM - 10:30 AM",
                                "Tuesday, 2:00 PM - 2:30 PM",
                                "Wednesday, 11:00 AM - 11:30 AM",
                                "Thursday, 3:00 PM - 3:30 PM",
                                "Friday, 9:00 AM - 9:30 AM",
                            ].map((slot, index) => (
                                <button
                                    key={index}
                                    className="w-full p-4 bg-black/50 border border-gray-700 hover:border-emerald-500 rounded-lg text-left text-white transition-all hover:bg-emerald-900/20"
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                        <button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default BookCall;
