import React from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const BookCallPreview = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements to blend with the dark theme */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 mb-12">
                    <p className="text-purple-400 font-semibold tracking-wider text-sm uppercase">LET'S TALK</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Book a Call</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                            Schedule a free consultation to discuss your project and how we can help you achieve your goals.
                        </p>

                        <div className="space-y-4">
                            {[
                                "30-minute strategy session",
                                "Custom solution recommendations",
                                "No obligation, completely free"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500/30 transition-colors">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors">
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                What to expect:
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500" />
                                    Brief introduction and overview of your needs
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500" />
                                    Discussion of potential solutions and approaches
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500" />
                                    Q&A session for any questions you have
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500" />
                                    Next steps and timeline recommendations
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Profile Card */}
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 transform blur-xl rounded-3xl" />

                        <div className="relative bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                            {/* Header with Avatar */}
                            <div className="flex flex-col md:flex-row gap-6 mb-8">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                                        <img src="https://github.com/harshustle.png" alt="Harsh Srivastav" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#111111] rounded-full" title="Available"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Harsh Srivastav</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                                        Hey there! 👋 I'm Harsh Srivastav<br />
                                        harshustle — AI Automation Expert | Full-Stack Developer | SaaS | Content Creator
                                    </p>
                                </div>
                            </div>

                            {/* Meeting Options */}
                            <div className="space-y-3">
                                <a
                                    href="/book-a-call?utm_source=home&utm_medium=preview_card&utm_content=15min_meeting"
                                    className="block group"
                                >
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer">
                                        <div>
                                            <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">15 Min Meeting</h4>
                                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                                                <Clock size={12} />
                                                <span>15m</span>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="/book-a-call?utm_source=home&utm_medium=preview_card&utm_content=30min_meeting"
                                    className="block group"
                                >
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer">
                                        <div>
                                            <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">30 Min Meeting</h4>
                                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                                                <Clock size={12} />
                                                <span>30m</span>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookCallPreview;
