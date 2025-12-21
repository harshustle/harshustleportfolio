
import Section from "../components/Section";

function Privacy() {
    return (
        <div className="min-h-screen">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-blue-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
                    <p className="text-xl text-gray-300">Last updated: December 2025</p>
                </div>
            </section>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Provide, maintain, and improve our services;</li>
                        <li>Respond to your comments, questions, and requests;</li>
                        <li>Communicate with you about services, offers, and events;</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                    <p>
                        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default Privacy;
