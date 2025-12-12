// src/pages/Home.tsx — NAMZEFORGE DIGITAL SOLUTIONS (2026 LAUNCH EDITION)
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const Home = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center 20%",
        backgroundSize: "contain",
      }}
    >
      {/* LIGHTER OVERLAY — PERFECT ON MOBILE */}
      {/* BRIGHTER, WARMER OVERLAY — PERFECT FOR MOBILE & DESKTOP */}
<div className="absolute inset-0 bg-gradient-to-b 
                from-black/50 
                via-black/30 
                to-black/70 
                md:from-black/60 
                md:via-black/40 
                md:to-black/80" />
      {/* rest of your code stays exactly the same */}

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* COMPANY NAME — 3D NEON GRADIENT */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20] 
                       bg-[length:200%_200%] animate-gradient-x"
          >
            NAMZEFORGE
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-4">
            Digital Solutions
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 px-8 sm:px-12 max-w-4xl mx-auto leading-relaxed">
            We build beautiful, scalable technology that
            <br className="sm:hidden" />
              solves real African problems.
          </p>

          {/* FLAGSHIP PRODUCT — FLOATING GLASS CARD */}
          <div className="my-20 mx-auto max-w-4xl">
            <div
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20
                         shadow-2xl shadow-black/60 transform hover:scale-105 transition-all duration-700
                         hover:shadow-[#da6d20]/40"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(0,0,0,0.6), inset 0 0 60px rgba(218,109,32,0.15)",
              }}
            >
              <p className="text-gray-400 uppercase tracking-widest text-sm mb-6">
                Flagship Product
              </p>

              <h2 className="text-5xl font-black text-white mb-4">
                AgriConnect
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connecting farmers directly to buyers.
                <br />
                Same-day offers. Same-day payments. Real profit.
              </p>

              {/* 2026 LAUNCH BADGE */}
              <div className="my-12">
                <div
                  className="inline-flex items-center gap-3 px-8 py-4 sm:gap-4 sm:px-10 sm:py-5 
                bg-gradient-to-r from-[#da6d20] to-[#fd923c] 
                rounded-full shadow-2xl shadow-orange-900/60
                border border-white/40"
                >
                  <span className="text-white font-black text-xl sm:text-2xl tracking-wider">
                    LAUNCHING 2026
                  </span>
                  <span
                    className="text-3xl sm:text-4xl animate-bounce"
                    role="img"
                    aria-label="rocket"
                  >
                    Launch 🚀🚀
                  </span>
                </div>
                <p className="text-gray-300 text-lg mt-5">
                  Currently in closed beta with <strong>2,000+</strong> Zambian
                  farmers
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 px-8">
                <Link
                  to="/agriconnect"
                  className="bg-gradient-to-r from-[#da6d20] to-[#fd923c] hover:from-[#c75a10] hover:to-[#e07b2a]
               text-white font-bold text-lg sm:text-xl py-4 px-10 rounded-2xl 
               shadow-2xl transform hover:-translate-y-1 transition-all"
                >
                  Explore AgriConnect
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.agriconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/60 hover:bg-white/10 text-white font-bold text-lg sm:text-xl py-4 px-10 rounded-2xl backdrop-blur-md transition-all"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>

          {/* FOUNDER */}
          <p className="mt-20 text-gray-300 text-lg px-6">Founded & led by</p>
          <p className="text-3xl sm:text-4xl font-bold text-[#fdba74] mt-2 px-6">
            Catherine Sichone
          </p>
          <p className="text-gray-400 mt-2 px-6 text-lg sm:text-xl">
            Software Engineer • Builder • Visionary
          </p>

          <p className="mt-16 text-gray-600 text-sm italic">
            One company. Many solutions. Africa first.
          </p>
        </div>
      </div>

      {/* FLOATING PARTICLES */}
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
    </section>
  );
};

export default Home;
