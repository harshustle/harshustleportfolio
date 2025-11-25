import React from "react";
import CurvedLoop from "./CurvedLoop";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white z-50">

      {/* Subtle radial glow in background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-[#22d3ee]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-40px] h-80 w-80 rounded-full bg-[#a855f7]/25 blur-3xl" />
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
  );
};

export default Hero;
