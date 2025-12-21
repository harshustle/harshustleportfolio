// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: "About Us", path: "/about" },
            { label: "Careers", path: "/careers" },
            { label: "Contact", path: "/contact" },
            { label: "Book a Call", path: "/book-a-call" },
            { label: "Reviews", path: "/reviews" }
        ],
        work: [
            { label: "Services", path: "/services" },
            { label: "High-Value Add-ons", path: "/high-value-addons" }
        ],
        resources: [
            { label: "Blog", path: "/blog" },
            { label: "Tech Stack", path: "/tech-stack" }
        ],
        legal: []
    };

    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link to="/" className="text-2xl font-bold text-white mb-4 block">
                            HARSH<span className="text-purple-500">UGC</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Building digital experiences that transform businesses. Innovation, quality, and speed delivered.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com/harshustle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all border border-white/10 hover:border-purple-500/30">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/harshustle/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all border border-white/10 hover:border-purple-500/30">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.instagram.com/harshustler/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all border border-white/10 hover:border-purple-500/30">
                                <Instagram size={18} />
                            </a>
                            <a href="https://github.com/harshustle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all border border-white/10 hover:border-purple-500/30">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Work</h3>
                        <ul className="space-y-3">
                            {footerLinks.work.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {currentYear} HarshUGC. All rights reserved.</p>
                    <p>Designed with ❤️ for builders.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
