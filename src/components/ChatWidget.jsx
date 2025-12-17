import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send, Loader2, Minimize2, Maximize2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
// IMPORTANT: In a production app, you should NEVER expose your API key on the client side.
// You should use a backend proxy. For this demo (client-side only), we will use an env var.
// Ensure you have VITE_GEMINI_API_KEY in your .env file
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyDUYxqBpZpxEBoBh-biDLYWwQ1f2mYQljY";

// Website Knowledge Base - This feeds the AI with context about your site
const WEBSITE_CONTEXT = `
You are the AI Assistant for "HarshHustle" (also known as HarshUGC), a premium creative agency specializing in AI, Automation, and Web Design.
Your goal is to answer visitor questions helpfully, professionally, and concisely using the information below.

Services We Offer:
1. AI Content Creation: High-quality, AI-driven content libraries, UGC (User Generated Content) strategies, and viral video editing.
2. Web Design: Modern, responsive, and high-performance websites using React, TailwindCSS, and framer-motion (like the one the user is on). We focus on "Dark Mode" premium aesthetics.
3. Automation: Business process automation, CRM integrations, and custom AI workflows to save time and scale operations.

Contact Information:
- Email: harshustle@gmail.com
- Phone: +91 78396 61372
- Location: Delhi, India
- Office Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM.

Our Process:
1. Discovery: We audit the client's current state.
2. Strategy: We build a custom roadmap.
3. Execution: We implement the solution (content, code, or automation).
4. Optimization: We refine based on data.

Tone of Voice:
- Professional yet modern and energetic.
- Helpful and encouraging (e.g., "Let's build something great!").
- Concise (do not write long essays, keep answers short and sweet).

Rules:
- If asked about pricing, say: "Pricing depends on the specific project scope. Please fill out the contact form or book a call so we can give you a tailored quote."
- If asked about something unrelated to the agency (e.g., "What is the capital of France?"), politely steer the conversation back to our services or say you are only trained to answer questions about HarshHustle services.
- Always encourage them to "Get in Touch" via the contact form.
`;

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "model", text: "Hi there! 👋 I'm your AI assistant. Ask me anything about our services, pricing, or how we can help you scale!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Listen for custom event to open chat from other components
    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener('open-chat', handleOpenChat);
        return () => window.removeEventListener('open-chat', handleOpenChat);
    }, []);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", text: userMessage }]);
        setIsLoading(true);

        try {
            if (API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
                throw new Error("API Key not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
            }

            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: "System Instruction: " + WEBSITE_CONTEXT }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am ready to assist visitors of HarshHustle." }],
                    },
                    // Convert existing history to Gemini format (excluding the very first greeting if it was local only, but here we just append local history)
                    ...messages.slice(1).map(msg => ({
                        role: msg.role === 'user' ? 'user' : 'model',
                        parts: [{ text: msg.text }]
                    }))
                ],
            });

            const result = await chat.sendMessage(userMessage);
            const response = result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: "model", text }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: "model", text: "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly via email." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            {isOpen && (
                <div className="pointer-events-auto mb-4 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">AI</span>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">HarshHustle Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs text-gray-400">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Minimize2 size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/50">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-purple-600 text-white rounded-tr-sm'
                                        : 'bg-white/10 text-gray-200 rounded-tl-sm border border-white/5'
                                        }`}
                                >
                                    {msg.role === 'model' ? (
                                        <ReactMarkdown
                                            components={{
                                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                                ul: ({ node, ...props }) => <ul className="list-disc ml-4 mb-2" {...props} />,
                                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                                a: ({ node, ...props }) => <a className="text-purple-300 underline" target="_blank" {...props} />
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 rounded-2xl px-4 py-3 rounded-tl-sm flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-[#0a0a0a] border-t border-white/10">
                        <div className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Ask about our services..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
            >
                {isOpen ? (
                    <X size={24} className="transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                    <MessageCircle size={24} className="transition-transform duration-300 group-hover:scale-110" />
                )}
            </button>
        </div>
    );
}
