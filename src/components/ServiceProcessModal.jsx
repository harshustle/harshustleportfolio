import { useRef, useEffect } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function ServiceProcessModal({ isOpen, onClose, service }) {
    const modalRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !service) return null;

    // Default process steps if not provided (fallback)
    const defaultSteps = [
        { title: "Discovery", description: "We analyze your needs and set clear goals." },
        { title: "Strategy", description: "Developing a tailored roadmap for your project." },
        { title: "Execution", description: "Creating and implementing the solution." },
        { title: "Review", description: "Quality assurance and feedback iterations." },
        { title: "Delivery", description: "Final handover and implementation." }
    ];

    const steps = service.processSteps || defaultSteps;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    ref={modalRef}
                    className="relative w-full max-w-5xl bg-[#0f0a15] border border-purple-500/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5 sticky top-0 z-10">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">{service.icon}</span>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white">{service.title}</h2>
                                <p className="text-purple-300 text-xs md:text-sm">Service Workflow</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-4 md:p-8 flex-1 overflow-y-auto custom-scrollbar">
                        <div className="text-gray-300 mb-6 md:mb-8 max-w-2xl">
                            <p className="text-xs md:text-sm font-medium">
                                <span className="text-purple-400 font-bold inline mr-2">How we work:</span>
                                From initial concept to final delivery, here is exactly how we'll bring your project to life.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Horizontal Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500 to-purple-500/20" />

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 relative z-10 pb-4">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center text-center group"
                                    >
                                        {/* Number Circle */}
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0f0a15] border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold shadow-lg shadow-purple-500/20 mb-2 md:mb-4 group-hover:scale-110 transition-transform z-10 shrink-0">
                                            {index + 1}
                                        </div>

                                        {/* Content Card */}
                                        <div className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 hover:bg-white/10 hover:border-purple-500/30 transition-colors h-full flex flex-col justify-start min-h-[90px] md:min-h-[140px]">
                                            <h3 className="text-xs md:text-sm font-bold text-white mb-2 leading-tight">{step.title}</h3>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer - Fixed at bottom */}
                    <div className="p-4 md:p-6 border-t border-white/10 bg-[#0f0a15] z-10 flex flex-row items-center justify-between md:justify-end gap-3 shrink-0">
                        <button
                            onClick={onClose}
                            className="px-4 md:px-6 py-2.5 text-gray-300 hover:text-white font-medium transition-colors text-sm md:text-base"
                        >
                            Close
                        </button>
                        <button
                            onClick={() => {
                                if (service.paymentLink) {
                                    window.open(service.paymentLink, '_blank', 'noopener,noreferrer');
                                } else {
                                    window.location.href = '/book-a-call';
                                }
                            }}
                            className="flex-1 md:flex-none px-4 md:px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all text-sm md:text-base whitespace-nowrap"
                        >
                            Start This Process
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default ServiceProcessModal;
