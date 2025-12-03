// src/pages/TermsConditions.jsx
import Section from "../components/Section";

function TermsConditions() {
    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <Section title="Terms & Conditions" eyebrow="Legal">
                <div className="text-gray-300 space-y-6 leading-relaxed">
                    <p className="text-sm text-gray-500">Last updated: November 26, 2025</p>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h3>
                        <p>
                            By accessing our website, you agree to be bound by these Terms and Conditions
                            and our Privacy Policy.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">2. Use License</h3>
                        <p>
                            Permission is granted to temporarily access the materials on our website for
                            personal, non-commercial use only.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">3. Disclaimer</h3>
                        <p>
                            The materials on our website are provided on an 'as is' basis. We make no
                            warranties, expressed or implied.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">4. Limitations</h3>
                        <p>
                            In no event shall our company be liable for any damages arising out of the
                            use or inability to use our services.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">5. Modifications</h3>
                        <p>
                            We may revise these terms at any time without notice. By using this website,
                            you agree to be bound by the current version.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">6. Contact Us</h3>
                        <p className="text-purple-400">legal@example.com</p>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default TermsConditions;
