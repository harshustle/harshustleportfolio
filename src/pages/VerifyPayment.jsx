
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Section from "../components/Section";

function VerifyPayment() {
    const [inputPhone, setInputPhone] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [paymentData, setPaymentData] = useState(null);
    const [error, setError] = useState("");
    const [showFallback, setShowFallback] = useState(false);

    // Attempt to load payment data
    useEffect(() => {
        const storedData = localStorage.getItem("confirmed_payment_user");
        if (storedData) {
            setPaymentData(JSON.parse(storedData));
        }
    }, []);

    const handleVerify = async () => {
        setError("");
        setShowFallback(false);

        if (!inputPhone) {
            setError("Please enter your phone number.");
            return;
        }

        setVerifying(true);

        // Simulate network delay for UX (minimum 1.2s)
        await new Promise(resolve => setTimeout(resolve, 1200));

        // 1. Check local storage first (Optimization)
        let currentPaymentData = paymentData;

        // 2. Fetch from Google Sheet if not found locally or if verifying manually
        try {
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
            const response = await fetch(`${GOOGLE_SCRIPT_URL}?phone=${inputPhone}`);
            const data = await response.json();

            if (data.result === 'success') {
                currentPaymentData = {
                    name: data.name,
                    serviceName: data.service,
                    phone: inputPhone // Confirming the input phone matches
                };
            }
        } catch (err) {
            console.warn("Could not fetch from Google Sheet", err);
        }

        // 3. Verify Logic
        if (currentPaymentData) {
            const storedPhone = (currentPaymentData.phone || "").toString().replace(/\s+/g, '').replace(/-/g, '');
            const enteredPhone = inputPhone.toString().replace(/\s+/g, '').replace(/-/g, '');

            if (storedPhone.includes(enteredPhone) || enteredPhone.includes(storedPhone)) {
                // Success - Redirect to WhatsApp
                const message = `Hello! I'm ${currentPaymentData.name || "Customer"}. I've officially subscribed to ${currentPaymentData.serviceName} and am excited to get started. Let's create something amazing!`;

                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/917839661372?text=${encodedMessage}`;

                window.open(whatsappUrl, "_blank");
                setVerifying(false);
                return;
            }
        }

        // Failure
        setError("Phone number not found in our records.");
        setShowFallback(true);
        setVerifying(false);
    };

    const handleManualSupport = () => {
        const message = `Hello Support, I made a payment using phone number ${inputPhone} but I can't verify it on the website. Can you please check?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/917839661372?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center">
            <Section title="Verify Payment" eyebrow="Status">
                <div className="max-w-md mx-auto w-full bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-sm mt-8">
                    <div className="h-16 w-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                        <span className="text-3xl">🔐</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white text-center mb-2">Verification</h2>
                    <p className="text-center text-gray-400 mb-8">
                        Enter your registered phone number to verify your recent payment.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                            <input
                                type="text"
                                value={inputPhone}
                                onChange={(e) => setInputPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${error ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-purple-500"
                                    }`}
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>

                        <button
                            onClick={handleVerify}
                            disabled={verifying}
                            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            {verifying ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                </>
                            ) : (
                                "Verify & Connect"
                            )}
                        </button>

                        {/* Fallback Manual Support Button */}
                        {showFallback && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="pt-4 border-t border-white/10"
                            >
                                <p className="text-sm text-gray-400 text-center mb-3">
                                    Still facing issues? Contact our support team directly.
                                </p>
                                <button
                                    onClick={handleManualSupport}
                                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-green-400 font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <span>💬</span> Chat with Support on WhatsApp
                                </button>
                            </motion.div>
                        )}
                    </div>

                    <div className="mt-6 text-center">
                        <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                            Return to Home
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}

export default VerifyPayment;
