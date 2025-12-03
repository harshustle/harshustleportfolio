// src/pages/FAQPage.jsx
import Section from "../components/Section";

function FAQPage() {
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions.",
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary depending on complexity and scope. A typical website project takes 4-8 weeks, while larger applications may take 3-6 months.",
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes, we provide ongoing maintenance and support packages to ensure your digital products continue to perform optimally.",
        },
        {
            question: "What is your pricing model?",
            answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. We'll work with you to find the best option.",
        },
        {
            question: "Can you work with our existing team?",
            answer: "Absolutely! We're experienced in collaborating with in-house teams and can seamlessly integrate into your workflow.",
        },
        {
            question: "What technologies do you specialize in?",
            answer: "We specialize in modern web technologies including React, Node.js, TypeScript, and cloud platforms like AWS. Check our Tech Stack page for more details.",
        },
    ];

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <Section title="Frequently Asked Questions" eyebrow="FAQ">
                <div className="text-gray-300 space-y-4">
                    <p className="mb-8">
                        Find answers to common questions about our services and processes.
                    </p>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
                            >
                                <summary className="cursor-pointer text-lg font-semibold text-white list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-blue-400 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <p className="mt-4 text-gray-400 leading-relaxed">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                    <div className="mt-12 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-500/20 text-center">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Still have questions?
                        </h3>
                        <p className="text-gray-400 mb-4">
                            We're here to help! Get in touch with our team.
                        </p>
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default FAQPage;
