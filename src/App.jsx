// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

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


import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/high-value-addons" element={<HighValueAddons />} />



        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/book-a-call" element={<BookCall />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

      </Routes>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
