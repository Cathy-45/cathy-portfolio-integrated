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
        backgroundSize: "cover",
      }}
    >
      {/* LIGHTER OVERLAY — PERFECT ON MOBILE & DESKTOP */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/60 md:via-black/40 md:to-black/80" />

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

              {/* JOIN WAITLIST — LIVE WITH YOUR REAL EMAIL */}
              <div className="mt-16 max-w-md mx-auto px-6">
                <p className="text-gray-300 text-center mb-6 text-lg">
                  Be the first to know when we launch in 2026
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-4"
                  action="https://formsubmit.co/cathy@namzeforge.com"
                  method="POST"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#da6d20] transition"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New AgriConnect Waitlist Signup!"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://namzeforge.com/thanks"
                  />

                  <button
                    type="submit"
                    className="bg-[#da6d20] hover:bg-[#c75a10] text-white font-bold py-4 px-10 rounded-2xl transition transform hover:scale-105 shadow-xl"
                  >
                    Join Waitlist
                  </button>
                </form>
                <p className="text-gray-500 text-xs text-center mt-4">
                  We respect your privacy • No spam, ever
                </p>
              </div>

              {/* SINGLE, POWERFUL CTA — NO DUPLICATES */}
              <div className="mt-20 px-6">
                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-300 text-center text-xl mb-8">
                    Ready to be part of the future of Zambian agriculture?
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      to="/agriconnect"
                      className="bg-gradient-to-r from-[#da6d20] to-[#fd923c] hover:from-[#c75a10] hover:to-[#e07b2a]
                                 text-white font-bold text-xl py-5 px-12 rounded-2xl 
                                 shadow-2xl transform hover:-translate-y-1 transition-all text-center"
                    >
                      Explore AgriConnect
                    </Link>

                    <button
                      onClick={() =>
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: "smooth",
                        })
                      }
                      className="border-2 border-white/60 hover:bg-white/10 text-white font-bold text-xl py-5 px-12 rounded-2xl backdrop-blur-md transition-all"
                    >
                      Join Waitlist Below
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
