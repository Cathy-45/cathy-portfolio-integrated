import React from "react";
import backgroundImage from "../assets/background.jpg"; // Same as other pages

const ExploreAgriConnect = () => {
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#fdba74] mb-8">
          Explore AgriConnect
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl">
          Coming soon: Discover how AgriConnect will connect Zambian farmers to buyers with same-day offers and payments. Launching 2026. Stay tuned!
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

export default ExploreAgriConnect;