import React from "react";
import backgroundImage from "../assets/background.jpg";

const ExploreFarmLink = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center 20%",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-[#da6d20] rounded-full opacity-30 animate-float"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-[#fdba74] mb-8">
          Explore FarmLink
        </h1>
        
        <p className="text-2xl sm:text-3xl text-gray-300 mb-12 max-w-2xl">
          Coming soon: Zambia’s Smart Farming Platform.<br />
          Bridging Fields and Markets — connecting farmers directly to buyers.
        </p>

        <a
          href="/consultation"
          className="bg-[#da6d20] hover:bg-[#c75a10] text-white font-bold py-4 px-10 rounded-2xl transition transform hover:scale-105 shadow-xl"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default ExploreFarmLink;