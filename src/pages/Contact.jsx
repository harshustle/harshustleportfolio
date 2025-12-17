// src/pages/Contact.jsx
import { useState } from "react";
import Section from "../components/Section";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reuse the Google Script URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3ehsXZDXLZOZpXXe2LegrlDBmqdowtiahl9cyCdbd9JvcDFnkMUdaWrIYmZMTcIOMjQ/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Send data to "Sheet2" in the Google Spreadsheet
        const payload = {
            ...formData,
            sheetName: "Sheet2"
        };

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(payload),
            });
            console.log("Form submitted to Google Sheets");
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                company: "",
                budget: "",
                message: ""
            });
        } catch (error) {
            console.error("Error submitting to Google Sheets:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: "📧", label: "Email", value: "harshustle@gmail.com", link: "mailto:harshustle@gmail.com" },
        { icon: "📞", label: "Phone", value: "+91 78396 61372", link: "tel:+917839661372" },
        { icon: "📍", label: "Office", value: "Delhi, India", link: "#" },
        {
            icon: "💬",
            label: "Live Chat",
            value: "Available 24/7",
            link: "#",
            onClick: (e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-chat'));
            }
        }
    ];

    const socialLinks = [
        { name: "Twitter", icon: "🐦", link: "#" },
        { name: "LinkedIn", icon: "💼", link: "#" },
        { name: "GitHub", icon: "⚡", link: "#" },
        { name: "Dribbble", icon: "🎨", link: "#" }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
                    <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-sm font-semibold mb-6">
                        Get In Touch
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Let's Build
                        <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            Something Great
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have a project in mind? We'd love to hear about it. Get in touch and let's make it happen.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <div className="bg-gradient-to-br from-emerald-900/10 to-teal-900/10 rounded-2xl border border-emerald-500/20 p-8">
                            <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500 focus:outline-none rounded-lg text-white transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500 focus:outline-none rounded-lg text-white transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500 focus:outline-none rounded-lg text-white transition-colors"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500 focus:outline-none rounded-lg text-white transition-colors"
                                        >
                                            <option value="">Select budget</option>
                                            <option value="5k-10k">$5,000 - $10,000</option>
                                            <option value="10k-25k">$10,000 - $25,000</option>
                                            <option value="25k-50k">$25,000 - $50,000</option>
                                            <option value="50k+">$50,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        required
                                        rows="6"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500 focus:outline-none rounded-lg text-white transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                            <p className="text-gray-400 mb-8">
                                Reach out to us through any of these channels. We typically respond within 24 hours.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    onClick={item.onClick}
                                    className="flex items-start gap-4 p-4 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 hover:from-emerald-900/20 hover:to-teal-900/20 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                                        <p className="text-gray-400 text-sm">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        className="w-12 h-12 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 flex items-center justify-center text-2xl transition-all hover:scale-110"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="p-6 bg-gradient-to-br from-teal-900/20 to-cyan-900/20 rounded-xl border border-teal-500/20">
                            <h3 className="text-lg font-semibold text-white mb-4">Office Hours</h3>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="text-emerald-400">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="text-emerald-400">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="text-gray-500">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section (Placeholder) */}
                <section className="mt-16">
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-emerald-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🗺️</div>
                                <p className="text-gray-400">Map integration placeholder</p>
                                <p className="text-sm text-gray-500 mt-2">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Contact;
