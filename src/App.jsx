// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HighValueAddons from "./pages/HighValueAddons";
import CaseStudies from "./pages/CaseStudies";
import Process from "./pages/Process";
import Resources from "./pages/Resources";
import TechStack from "./pages/TechStack";
import Reviews from "./pages/Reviews";
import BookCall from "./pages/BookCall";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/high-value-addons" element={<HighValueAddons />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/process" element={<Process />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/book-a-call" element={<BookCall />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
