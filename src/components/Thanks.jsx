import React from "react";
import backgroundImage from "../assets/background.jpg";  

const Thanks = () => {
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
      {/* EXACT SAME OVERLAY AS HOME */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/60 md:via-black/40 md:to-black/80" />

      {/* FLOATING ORANGE PARTICLES */}
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

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                       bg-[length:200%_200%] animate-gradient-x">
          Thank You!
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl">
          You're officially on the <strong className="text-[#fdba74]">AgriConnect waitlist</strong>.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
          We'll notify you first when we launch in 2026 — connecting Zambian farmers directly to buyers with same-day offers and same-day payments. Real profit, real change.
        </p>

        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl max-w-2xl">
          <p className="text-gray-400 mb-6">In the meantime, follow the journey:</p>
          <div className="flex justify-center gap-8">
            <a href="https://x.com/NamzeforgeHQ" className="text-[#fdba74] hover:text-white text-2xl transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/namzeforge" className="text-[#fdba74] hover:text-white text-2xl transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:hello@namzeforge.com" className="text-[#fdba74] hover:text-white text-2xl transition">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <p className="mt-20 text-gray-400 text-lg">
          AgriConnect. Powered by Namzeforge. Made in Zambia, scaling Africa.
        </p>
      </div>
    </section>
  );
};

export default Thanks;