
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Section from "../components/Section";

function Success() {
    const navigate = useNavigate();
    const [paymentData, setPaymentData] = useState(null);
    const [inputPhone, setInputPhone] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // Load payment data from local storage
        const storedData = localStorage.getItem("confirmed_payment_user");
        if (storedData) {
            setPaymentData(JSON.parse(storedData));
        } else {
            // If no data, maybe redirect to home after a while or show generic message
        }
    }, []);

    const handleGo = () => {
        if (!paymentData) return;
        setError(""); // Clear previous errors

        if (!inputPhone) {
            setError("Please enter your phone number.");
            return;
        }

        setVerifying(true);

        // Simulate network delay for verification
        setTimeout(() => {
            // Normalize phone numbers for comparison (remove spaces, etc.)
            const storedPhone = paymentData.phone.replace(/\s+/g, '').replace(/-/g, '');
            const enteredPhone = inputPhone.replace(/\s+/g, '').replace(/-/g, '');

            if (storedPhone === enteredPhone) {
                setVerified(true);
                setVerifying(false);

                // Construct WhatsApp URL
                const message = `Hello! I'm ${paymentData.name || "Customer"}. I've officially subscribed to ${paymentData.serviceName} and am excited to get started. Let's create something amazing!`;

                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/917839661372?text=${encodedMessage}`;

                // Open in new tab
                window.open(whatsappUrl, "_blank");
            } else {
                setError("Phone number does not match the one used during payment.");
                setVerifying(false);
            }
        }, 1500);
    };

    if (!paymentData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Processing...</h1>
                    <p className="text-gray-400">Loading payment details.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Left Side: Success Message */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left space-y-6"
                    >
                        <div className="h-24 w-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto md:mx-0 border border-green-500/40">
                            <span className="text-5xl">🎉</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Payment Successful!</h1>
                        <p className="text-xl text-gray-300">
                            Thank you for your purchase. Your transaction has been completed successfully.
                        </p>
                        <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-left">
                            <p className="text-sm text-gray-400">Transaction ID</p>
                            <p className="text-white font-mono">{paymentData.paymentId}</p>
                            <p className="text-sm text-gray-400 mt-2">Amount Paid</p>
                            <p className="text-white font-mono">{paymentData.currency} {paymentData.amount}</p>
                        </div>
                        <p className="text-gray-400">
                            Please verify your details on the right to proceed to next steps.
                        </p>
                    </motion.div>

                    {/* Right Side: Verification Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Verify Information</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Service Subscribed</label>
                                <div className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-semibold">
                                    {paymentData.serviceName}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Enter Phone Number</label>
                                <input
                                    type="text"
                                    value={inputPhone}
                                    onChange={(e) => setInputPhone(e.target.value)}
                                    placeholder="Enter the number used for payment"
                                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${error ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-purple-500"
                                        }`}
                                />
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            </div>

                            <button
                                onClick={handleGo}
                                disabled={verifying || verified}
                                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${verified
                                    ? "bg-green-600 hover:bg-green-700 shadow-green-500/20"
                                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-purple-500/20"
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {verifying ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Verifying...
                                    </>
                                ) : verified ? (
                                    <>Verified & Redirected ✓</>
                                ) : (
                                    <>Verify & Connect on WhatsApp →</>
                                )}
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                            <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                                Return to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Success;
