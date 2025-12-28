
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function UserDetailsModal({ isOpen, onClose, onSubmit, serviceName }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.phone) {
            setIsSubmitting(true);

            // Prepare data for Sheet 3
            const payload = {
                name: formData.name,
                phone: formData.phone,
                service: serviceName, // Changed from serviceName to service to match script key
                sheetName: "Sheet3"
            };

            try {
                // Fire and forget - or await if strict reliability is needed
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify(payload),
                });
                console.log("Data captured to Google Sheet 3");
            } catch (error) {
                console.error("Sheet submission failed", error);
                // Proceed anyway so payment isn't blocked by generic script failure
            }

            setIsSubmitting(false);
            onSubmit(formData.name, formData.phone);
        } else {
            alert("Please fill in all details");
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-gray-900 border border-purple-500/20 rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>

                    <div className="text-center mb-6">
                        <div className="h-12 w-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-500/30">
                            <span className="text-2xl">📝</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-1">Enter Your Details</h2>
                        <p className="text-sm text-gray-400">
                            To process your payment for <span className="text-purple-400">{serviceName}</span>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="Used for verification later"
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20 mt-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Processing...' : 'Proceed to Payment →'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default UserDetailsModal;
