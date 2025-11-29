import React from "react";
import CurvedLoop from "./CurvedLoop";

const Hero = () => {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
        {/* Enhanced background gradients - purple only */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-[-120px] right-[-40px] h-96 w-96 rounded-full bg-purple-400/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-300/10 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Build{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Amazing
            </span>
            <br />
            Digital Experiences
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            AI • AUTOMATION • HARSHUSTLE - Transforming visions into reality with cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row mb-16 gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a
              href="#features"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              Explore Features
            </a>
            <a
              href="#explore"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 text-white font-semibold rounded-lg transition-all backdrop-blur-sm"
            >
              View All Pages
            </a>
          </div>
        </div>

        {/* CURVEDLOOP LOCKED AT BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none">
          <CurvedLoop
            marqueeText="AI • AUTOMATION • HARSHUSTLE •"
            speed={2}
            curveAmount={490}
            interactive={true}
            className="custom-text-style text-gray-300"
          />
        </div>


      </section>

      {/* Stats - Now appears after the hero section and marquee */}
      {/* <section className="relative bg-black text-white py-12">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto px-4 animate-fadeIn">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">
              97%
            </div>
            <div className="text-gray-400 text-sm">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">
              4
            </div>
            <div className="text-gray-400 text-sm">Team</div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
