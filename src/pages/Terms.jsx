
import Section from "../components/Section";

function Terms() {
    return (
        <div className="min-h-screen">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-blue-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
                    <p className="text-xl text-gray-300">Last updated: December 2025</p>
                </div>
            </section>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                    <p>
                        By accessing our website and using our services at HarshUGC, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                    <p>
                        Other than the content you own, under these Terms, HarshUGC and/or its licensors own all the intellectual property rights and materials contained in this Website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Restrictions</h2>
                    <p>
                        You are specifically restricted from all of the following:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Publishing any Website material in any other media;</li>
                        <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                        <li>Publicly performing and/or showing any Website material;</li>
                        <li>Using this Website in any way that is or may be damaging to this Website;</li>
                        <li>Using this Website in any way that impacts user access to this Website;</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                    <p>
                        In no event shall HarshUGC, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website or our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Revisions</h2>
                    <p>
                        HarshUGC is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default Terms;
