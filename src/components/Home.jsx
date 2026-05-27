// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12">
        <div className="w-full max-w-6xl text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]">
            NAMZEFORGE
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            Digital Solutions
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 px-4 leading-relaxed">
            We build beautiful, scalable technology that solves real African
            problems.
          </p>

          {/* ==================== AGRICONNECT SECTION ==================== */}
          <div className="my-16">
            <div className="backdrop-blur-2xl bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/30 shadow-2xl shadow-black/60 hover:shadow-[#da6d20]/40 transition-all duration-700 max-w-4xl mx-auto">
              <p className="text-gray-400 uppercase tracking-widest text-sm mb-6 text-center">
                Flagship Product
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-4">
                AgriConnect
              </h2>

              <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed text-center">
                Connecting Zambian farmers directly to buyers for livestock,
                fresh & dry produce.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <span className="text-5xl mb-3 block">📱</span>
                  <p className="text-[#fdba74] font-bold">Easy Listing</p>
                  <p className="text-gray-300 text-sm mt-1">Under 60 seconds</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <span className="text-5xl mb-3 block">💰</span>
                  <p className="text-[#fdba74] font-bold">Instant Payments</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Via PawaPay (Airtel & MTN)
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <span className="text-5xl mb-3 block">📊</span>
                  <p className="text-[#fdba74] font-bold">Smart Tools</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Tax calculator + AI insights
                  </p>
                </div>
              </div>

              <div className="my-10 text-center">
                <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#da6d20] to-[#fd923c] rounded-full shadow-2xl shadow-orange-900/60 border border-white/40 mx-auto">
                  <span className="text-white font-black text-xl">
                    LAUNCHING 2026
                  </span>
                  <span className="text-4xl animate-bounce">🚀</span>
                </div>
                <p className="text-gray-300 mt-6 text-base">
                  Currently in closed beta with 2,000+ Zambian farmers
                </p>
              </div>

              {/* Beta Signup */}
              <div className="my-12">
                <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
                  <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 text-center">
                    Closed Beta Testing
                  </p>
                  <h3 className="text-2xl font-bold text-white text-center mb-6">
                    Join AgriConnect Beta
                  </h3>

                  <form
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                    action="https://formsubmit.co/hello@namzeforge.com"
                    method="POST"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#da6d20]"
                    />
                    <button
                      type="submit"
                      className="bg-[#da6d20] hover:bg-[#c75a10] text-white font-bold py-4 px-10 rounded-2xl transition"
                    >
                      Join Beta
                    </button>
                  </form>

                  <p className="text-xs text-gray-400 text-center mt-6">
                    We respect your privacy • No spam, ever
                  </p>
                </div>
              </div>

              {/* Role Designated Checklists */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.google.com/document/d/1fQfkS53WPzJAI13gi0TmDZJEHlHJRqftBgQoGKMa30Y/edit?tab=t.0"
                  target="_blank"
                  className="text-center text-white hover:text-[#fdba74] transition text-lg"
                >
                  📋 Buyer Testing Checklist
                </a>
                <a
                  href="https://docs.google.com/document/d/1lf2X4NZlMWc71Ij4hC8F6Z4Rjsl6OJn3M-5hTFqrvr4/edit?tab=t.0"
                  target="_blank"
                  className="text-center text-white hover:text-[#fdba74] transition text-lg"
                >
                  📋 Farmer Testing Checklist
                </a>
              </div>
            </div>
          </div>
          {/* ==================== END AGRICONNECT SECTION ==================== */}

          {/* Founder */}
          <div className="mt-20">
            <p className="text-gray-400">Founded & led by</p>
            <p className="text-3xl font-bold text-[#fdba74] mt-2">
              Catherine Sichone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
