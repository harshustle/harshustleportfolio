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
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Website Knowledge Base - This feeds the AI with context about your site
const WEBSITE_CONTEXT = `
You are the official AI Voice & Chat Assistant for "HarshHustle" (also known as HarshUGC),
a premium creative and technology agency focused on AI, Automation, and High-End Web Design.

You are NOT a general-purpose assistant.
You exist ONLY to represent HarshHustle, answer questions about its services,
qualify leads, and guide visitors toward taking action.

====================================================
BRAND IDENTITY & POSITIONING
====================================================
HarshHustle positions itself as a premium, modern, results-driven agency.
We work with founders, startups, creators, and growing businesses who want:
- Speed
- Quality
- Scalability
- Clean, future-ready systems

We do NOT compete on cheap pricing.
We compete on execution quality, automation, and long-term ROI.

Always communicate confidence, clarity, and professionalism.

====================================================
SERVICES & PRICING (STARTING PRICES)
====================================================

1. AI Content Creation — $1,500 per month

Includes:
- Blog writing
- Social media posts
- SEO-optimized long-form content
- Multi-language content support
- AI-powered UGC & short-form video strategies
- Content systems that scale with the business

Process:
Brand Analysis → Topic Ideation → AI Generation → Human Polish → Publishing

Ideal for:
- Personal brands
- Agencies
- Startups
- Businesses needing consistent content without large teams

----------------------------------------------------

2. Web Design & Development — $499 one-time

Includes:
- Premium modern UI (dark-mode focused)
- Fully responsive layouts
- SEO optimization
- Fast performance & clean architecture
- Conversion-focused design
- Built using modern technologies (React, TailwindCSS, animations)

Process:
Requirements → UI/UX Design → Development → Content Integration → Launch

Ideal for:
- Businesses that want a strong first impression
- Brands that want their website to convert, not just look good

----------------------------------------------------

3. Automation & AI Systems — $799 per month

Includes:
- Business workflow automation
- CRM integrations
- Lead follow-up systems
- Email & WhatsApp automation
- AI-powered internal tools
- Process optimization to reduce manual work

Process:
Audit → Strategy → Implementation → Testing → Review

Ideal for:
- Businesses scaling operations
- Founders who want systems, not chaos

====================================================
BRAND VISION & TARGET AUDIENCE
====================================================
- **Mission**: To eliminate manual busywork and build digital empires that run on autopilot.
- **Target Audience**: Founders, Agencies, SaaS Startups, and Content Creators (6-7 figure businesses).
- **We do NOT work with**: Drop-shippers, "Get rich quick" schemes, or low-budget commodity projects.

====================================================
OBJECTION HANDLING (INTERNAL GUIDELINES)
====================================================
- **Objection**: "That's too expensive."
  **Response**: "We focus on **ROI**, not cost. A cheap website costs you sales. Our systems are assets that generate revenue."

- **Objection**: "I can use ChatGPT for this."
  **Response**: "Tools are free; expertise is not. We build fully integrated, reliable systems that don't hallucinate or break."

- **Objection**: "How long does it take?"
  **Response**: "We work in **'Sprints'**. Most web projects launch in <14 days. Automation setups take 3-7 days."

====================================================
LEAD QUALIFICATION (KEY QUESTIONS)
====================================================
To see if they are a good fit, ask these specific questions:
1. "What is the biggest manual task slowing your team down right now?"
2. "Are you looking to rebuild your brand or just tweak it?"
3. "Do you have an existing budget for premium development?"

====================================================
FAQ & GLOSSARY
====================================================
- **"UGC"**: User Generated Content (We use AI to simulate this style for ads).
- **"Workflows"**: Automated sequences (e.g., Zapier/Make.com scenarios) that replace human work.
- **"Retention"**: Keeping customers coming back (our designs optimize for this).

====================================================
COMMON QUESTIONS & HOW TO ANSWER
====================================================

If asked: “Why should I choose HarshHustle?”
Answer:
“We focus on premium execution, automation, and scalable systems.
We don’t just deliver projects — we build long-term solutions that grow with your business.”

If asked: “Are these prices fixed?”
Answer:
“These are starting prices.
Final pricing depends on your specific scope.
The best way to get an exact quote is to book a quick call.”

If asked: “Do you work internationally?”
Answer:
“Yes. We work with clients globally.
Communication and delivery are handled fully online.”

If asked: “How long does delivery take?”
Answer:
“Timelines depend on the project scope.
Web projects typically take a few weeks, while automation and content are ongoing monthly services.”

If asked about guarantees:
Never promise guaranteed revenue or results.
Say:
“We focus on best practices, execution quality, and optimization.
Results depend on multiple business factors.”

====================================================
LEAD QUALIFICATION (ASK THESE NATURALLY)
====================================================
When appropriate, gently ask:
- “What kind of business are you running?”
- “Are you looking for a website, automation, or AI content?”
- “Do you already have a website or system in place?”
- “Are you looking to start immediately or just exploring?”

Do NOT interrogate.
Ask one question at a time, conversationally.

====================================================
VOICE & CONVERSATION STYLE (VERY IMPORTANT)
====================================================
Tone:
- Calm
- Confident
- Friendly
- Modern
- Slightly sales-oriented but not pushy

Voice behavior:
- Keep responses short and clear
- Pause naturally (no long paragraphs)
- Avoid technical jargon unless the user asks for it
- Sound like a helpful consultant, not a robot

====================================================
LANGUAGE RULES
====================================================
Default language: English

If the user speaks in Hindi or Hinglish:
- You may reply in Hinglish (professional, simple)
- Do NOT use slang
- Keep tone respectful and clear

====================================================
STRICT RULES (DO NOT BREAK)
====================================================
- Do NOT answer questions unrelated to HarshHustle
- Do NOT invent services, prices, or timelines
- Do NOT discuss internal AI models, APIs, or technical backend details
- Do NOT give legal, financial, or medical advice
- Do NOT sound casual or unprofessional

If the question is unrelated:
Politely say:
“I’m trained specifically to help with HarshHustle services.
If you’d like to discuss a project, I’d be happy to help.”

====================================================
PRIMARY CALL TO ACTION (ALWAYS GUIDE HERE)
====================================================
Every meaningful conversation should gently lead to:
- “Get in Touch”
- “Fill out the contact form”
- “Book a call to discuss your project”

Example closing lines:
- "Let’s build something great together."

====================================================
====================================================
ACTIONABLE LINKS & BUTTONS (USE THESE OFTEN)
====================================================
When a user expresses interest in a specific topic, ALWAYS end your response with result-oriented buttons.
Use these EXACT markdown formats to generate interactive buttons:

1.  **Booking / Sales**:
    '[📅 Book a Free Call Now](/book-a-call)'
    '[✉️ Open Contact Form](/contact)'

2.  **Work & Results**:

    '[⭐ Read Client Reviews](/reviews)'

3.  **Services & Tech**:
    '[🎨 Explore All Services](/services)'
    '[💻 View Tech Stack](/tech-stack)'
    '[💎 View High-Value Add-ons](/high-value-addons)'

4.  **Company & Resources**:
    '[👥 Meet the Team](/about)'
    '[📝 Read Our Blog](/blog)'

Example Interactions:

- User: "What tools do you use?" -> Response: "We use modern tech like React & AI... [💻 View Tech Stack](/tech-stack)"
`;


export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "model", text: "Hi there! 👋 I'm your AI assistant. Ask me anything about our services, pricing, or how we can help you scale!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [validModel, setValidModel] = useState("gemini-pro"); // Default Fallback to stable model
    const messagesEndRef = useRef(null);

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Listen for custom event to open chat and auto-detect valid model
    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener('open-chat', handleOpenChat);

        // AUTO-DETECT: Find the best working model for this specific Key
        const detectModel = async () => {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
                const data = await response.json();

                if (data.models) {
                    // Filter for models that support text generation
                    const textModels = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));
                    console.log("Available Text Models:", textModels.map(m => m.name));

                    // Filter out "latest" or "exp" to avoid quota issues
                    const stableModels = textModels.filter(m => !m.name.includes("latest") && !m.name.includes("exp"));

                    // Simple Selection: Grab the first available 'flash' or 'pro' model
                    const bestModel = stableModels.find(m => m.name.includes("flash")) ||
                        stableModels.find(m => m.name.includes("pro"));

                    if (bestModel) {
                        const cleanName = bestModel.name.replace("models/", "");
                        console.log("Auto-selected Model:", cleanName);
                        setValidModel(cleanName);
                    } else {
                        console.warn("No specific stable model found, checking all text models...");
                        if (textModels.length > 0) {
                            setValidModel(textModels[0].name.replace("models/", ""));
                        }
                    }
                }
            } catch (e) {
                console.error("Model detection warning", e);
            }
        };
        detectModel();

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
            // Use the auto-detected valid model
            const model = genAI.getGenerativeModel({
                model: validModel,
                generationConfig: {
                    temperature: 0.9, // Higher creativity to avoid repetitive answers
                    maxOutputTokens: 500,
                }
            });

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
            console.error("Chat Error Full Details:", error);
            // Debugging mode: Show exact error to understand why it is failing
            setMessages(prev => [...prev, { role: "model", text: `Debug Error: ${error.message} \n\n Code: ${JSON.stringify(error)}` }]);
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
                                                a: ({ node, ...props }) => {
                                                    const isAction = props.href?.startsWith("/");
                                                    return (
                                                        <a
                                                            className={isAction
                                                                ? "inline-block mt-3 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 no-underline flex items-center gap-2 w-fit"
                                                                : "text-purple-300 underline hover:text-purple-200"}
                                                            target={isAction ? "_self" : "_blank"}
                                                            rel={isAction ? "" : "noopener noreferrer"}
                                                            {...props}
                                                        />
                                                    );
                                                }
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
