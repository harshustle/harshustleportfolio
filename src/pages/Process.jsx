// src/pages/Process.jsx
import Section from "../components/Section";

function Process() {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            description: "We learn about your business, goals, and challenges.",
        },
        {
            number: "02",
            title: "Strategy",
            description: "We develop a customized plan tailored to your needs.",
        },
        {
            number: "03",
            title: "Design",
            description: "We create stunning designs that bring your vision to life.",
        },
        {
            number: "04",
            title: "Development",
            description: "We build robust solutions using cutting-edge technology.",
        },
        {
            number: "05",
            title: "Testing",
            description: "We ensure everything works flawlessly before launch.",
        },
        {
            number: "06",
            title: "Launch & Support",
            description: "We deploy your solution and provide ongoing support.",
        },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Section title="Our Process" eyebrow="How We Work">
                <div className="text-gray-300 space-y-4">
                    <p>
                        Our proven methodology ensures successful project delivery every time.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
                            >
                                <div className="text-5xl font-bold text-indigo-400/30 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default Process;
