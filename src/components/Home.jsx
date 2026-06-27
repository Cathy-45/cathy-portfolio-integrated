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

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-16 pb-10">
        <div className="w-full max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]">
            NAMZEFORGE
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-2">
            Digital Solutions
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 px-4 leading-relaxed">
            We build beautiful, scalable technology that solves real African
            problems.
          </p>

          {/* ==================== FARM LINK SECTION ==================== */}
          <div className="my-6">
            <div className="backdrop-blur-2xl bg-white/10 rounded-3xl p-6 border border-white/30 shadow-2xl shadow-black/60 hover:shadow-[#da6d20]/40 transition-all duration-700 max-w-4xl mx-auto">
              <p className="text-gray-400 uppercase tracking-widest text-sm mb-3 text-center">
                Flagship Product
              </p>

              <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-3">
                FarmLink
              </h2>

              <p className="text-base text-gray-300 mb-4 leading-relaxed text-center">
                Bridging Fields and Markets — Connecting Zambian Farmers
                directly to serious buyers for livestock, fresh produce, and dry
                Produce.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <span className="text-3xl mb-2 block">📱</span>
                  <p className="text-[#fdba74] font-bold">Easy Listing</p>
                  <p className="text-gray-300 text-sm mt-1">Under 60 seconds</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <span className="text-3xl mb-2 block">💰</span>
                  <p className="text-[#fdba74] font-bold">Instant Payments</p>
                  <p className="text-gray-300 text-sm mt-1">(Airtel & MTN)</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <span className="text-3xl mb-2 block">📊</span>
                  <p className="text-[#fdba74] font-bold">Smart Tools</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Tax calculator + AI insights
                  </p>
                </div>
              </div>

              <div className="my-4 text-center">
                <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#da6d20] to-[#fd923c] rounded-full shadow-2xl shadow-orange-900/60 border border-white/40 mx-auto">
                  <span className="text-white font-black text-xl">
                    LAUNCHING 2026
                  </span>
                  <span className="text-4xl animate-bounce">🚀</span>
                </div>
              </div>

              {/* Beta Signup Form */}
              <div className="my-6">
                <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
                  <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 text-center">
                    Closed Beta Testing
                  </p>
                  <h3 className="text-2xl font-bold text-white text-center mb-6">
                    Join FarmLink Beta
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
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
          {/* ==================== END FARMLINK SECTION ==================== */}

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

          {/* FOUNDER */}
          <div className="mt-10">
            <p className="text-gray-400 text-base">Founded & led by</p>
            <p className="text-3xl sm:text-4xl font-bold text-[#fdba74] mt-2">
              Catherine Sichone
            </p>
            <p className="text-gray-400 mt-2 text-lg">
              Software Engineer • Builder • Visionary
            </p>
          </div>

          {/* ORIGINAL FOOTER WITH SOCIAL LINKS */}
          <footer className="w-full py-6 text-center mt-8">
            <p className="text-gray-500 text-sm">
              © 2026 Namzeforge Digital Solutions Limited
            </p>
            <p className="text-gray-400 text-xs mt-2">
              FarmLink. Powered by Namzeforge. Scaling Africa.
            </p>

            <div className="flex justify-center items-center gap-10 mt-8">
              <a
                href="https://x.com/NamzeforgeHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow Namzeforge on X"
                title="X (Twitter)"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/catherine-namonje-4ab353203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Catherine Namonje on LinkedIn"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
              </a>

              <a
                href="mailto:cathy@namzeforge.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email Namzeforge"
                title="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Home;
