// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoLayout from "./components/BentoLayout";
import Stack from "./components/Stack";
import Cards from "./components/Cards";

import Section from "./components/Section";
import FeaturesGrid from "./components/FeaturesGrid";
import MetricsStrip from "./components/MetricsStrip";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />


      {/* HERO */}
      
      <Hero />

      <main className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* METRICS / SOCIAL PROOF STRIP */}
        <Section>
          <MetricsStrip />
        </Section>

        {/* FEATURE GRID */}
        <Section id="features" title="Powerful building blocks" eyebrow="Features">
          <FeaturesGrid />
        </Section>

        {/* BENTO + STACK (your existing visual components) */}
        <Section >
          <div className="grid gap-8 lg:grid-cols-">
            <BentoLayout />
          </div>
        </Section>

        {/* USE CASES + CARDS */}
        <Section
          id="use-cases"
          title="Plug these components into real products"
          eyebrow="Use cases"
        >
          <div className="grid  gap-12 lg:gap-x-16 lg:grid-cols-[2fr,3fr]">
            <UseCases />
            <Cards />
          </div>
        </Section>


       

        {/* TESTIMONIALS */}
        <Section id="testimonials" title="Designers & devs who tried it, stayed">
          <Testimonials />
        </Section>

        {/* PRICING */}
        <Section id="pricing" title="Simple pricing for serious projects">
          <Pricing />
        </Section>

        {/* FAQ */}
        <Section id="faq" title="Questions? We’ve got answers.">
          <FAQ />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
