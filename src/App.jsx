// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import Services from "./pages/Services";

import About from "./pages/About";
import Contact from "./pages/Contact";
import HighValueAddons from "./pages/HighValueAddons";


import TechStack from "./pages/TechStack";
import Reviews from "./pages/Reviews";
import BookCall from "./pages/BookCall";

import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import ProcessPage from "./pages/ProcessPage";


import Terms, { Privacy } from "./pages/Terms";
import Success from "./pages/Success";
import VerifyPayment from "./pages/VerifyPayment";


const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black" style={{ overflowX: 'hidden' }}>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />

          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/high-value-addons" element={<PageWrapper><HighValueAddons /></PageWrapper>} />

          <Route path="/tech-stack" element={<PageWrapper><TechStack /></PageWrapper>} />
          <Route path="/reviews" element={<PageWrapper><Reviews /></PageWrapper>} />
          <Route path="/book-a-call" element={<PageWrapper><BookCall /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/process/:serviceName" element={<PageWrapper><ProcessPage /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
          <Route path="/success" element={<PageWrapper><Success /></PageWrapper>} />
          <Route path="/verify-payment" element={<PageWrapper><VerifyPayment /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
