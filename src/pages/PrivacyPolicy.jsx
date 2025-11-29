// src/pages/PrivacyPolicy.jsx
import Section from "../components/Section";

function PrivacyPolicy() {
    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Section title="Privacy Policy" eyebrow="Legal">
                <div className="text-gray-300 space-y-6 leading-relaxed">
                    <p className="text-sm text-gray-500">Last updated: November 26, 2025</p>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
                        <p>
                            This Privacy Policy explains how we collect, use, disclose, and safeguard
                            your information when you visit our website.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            2. Information We Collect
                        </h3>
                        <p>We may collect personal data, derivative data, financial data, and mobile device data.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            3. Use of Your Information
                        </h3>
                        <p>We use information to create accounts, process transactions, and improve our services.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            4. Security
                        </h3>
                        <p>
                            We use administrative, technical, and physical security measures to protect your information.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">5. Contact Us</h3>
                        <p className="text-purple-400">privacy@example.com</p>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default PrivacyPolicy;
