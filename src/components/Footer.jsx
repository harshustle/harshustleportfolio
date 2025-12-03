// src/components/parts/Footer.jsx
function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#features" className="hover:text-slate-100">
                        Features
                    </a>
                    <a href="#pricing" className="hover:text-slate-100">
                        Pricing
                    </a>
                    <a href="#faq" className="hover:text-slate-100">
                        FAQ
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
