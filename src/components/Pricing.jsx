// src/components/Pricing.jsx
import React from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$99",
      tagline: "Perfect for quick prototypes.",
      features: [
        "Core layout components",
        "Basic sections (hero, features, FAQ)",
        "Use in unlimited personal projects",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$199",
      tagline: "For serious indie projects & agencies.",
      features: [
        "All components & sections",
        "Commercial usage included",
        "Priority updates & improvements",
      ],
      highlight: true,
    },
    {
      name: "Team",
      price: "$249",
      tagline: "For product teams that ship weekly.",
      features: [
        "Seat-based licensing",
        "Shared presets & theme tokens",
        "Email support for your team",
      ],
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple pricing for <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">serious projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 items-center"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl border p-8 flex flex-col h-full transition-colors duration-300 ${tier.highlight
                ? "bg-white/10 border-purple-500/50 shadow-2xl shadow-purple-500/20 z-10 backdrop-blur-md"
                : "bg-white/5 border-white/10 hover:border-purple-500/30 backdrop-blur-sm"
                }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${tier.highlight ? "text-white" : "text-gray-200"}`}>
                  {tier.name}
                </h3>
                <p className="text-sm text-gray-400 mt-2">{tier.tagline}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-sm text-gray-400 ml-2">/ one-time</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 items-start">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? "text-purple-400" : "text-gray-500"}`} />
                    <span className="text-sm text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className={`w-full rounded-xl text-sm font-semibold py-3 transition-all duration-300 ${tier.highlight
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-purple-500/25"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
              >
                Get {tier.name}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Pricing;
