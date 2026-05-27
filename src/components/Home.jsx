// src/components/Home.jsx — FINAL & PERFECT (mobile fixed + cache killed)
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
      {/* LIGHTER, WARMER OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/60 md:via-black/40 md:to-black/80" />

      {/* MAIN CONTENT — PERFECT CENTERING ON ALL DEVICES */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-6xl text-center">
          {/* COMPANY NAME */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20] 
                         bg-[length:200%_200%] animate-gradient-x"
          >
            NAMZEFORGE
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Digital Solutions
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 px-4 leading-relaxed">
            We build beautiful, scalable technology that
            <br className="sm:hidden" /> solves real African problems.
          </p>

          {/* =============== UPDATED AGRICONNECT FLAGSHIP CARD =============== */}
          <div className="my-16">
            <div
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 sm:p-12 border border-white/20
                            shadow-2xl shadow-black/60 hover:shadow-[#da6d20]/40 transition-all duration-700
                            max-w-4xl mx-auto"
            >
              <p className="text-gray-400 uppercase tracking-widest text-sm mb-6 text-center">
                Flagship Product
              </p>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                AgriConnect
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed text-center">
                Connecting Zambian farmers directly to buyers for livestock, fresh & dry produce.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-[#fdba74] font-bold text-xl">📱 Easy Listing</p>
                  <p className="text-gray-300 mt-2">In under 60 seconds</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-[#fdba74] font-bold text-xl">💰 Instant Payments</p>
                  <p className="text-gray-300 mt-2">Via PawaPay (Airtel & MTN)</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-[#fdba74] font-bold text-xl">📊 Smart Tools</p>
                  <p className="text-gray-300 mt-2">Tax calculator + AI insights</p>
                </div>
              </div>

              {/* Launch Badge */}
              <div className="my-10 text-center">
                <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#da6d20] to-[#fd923c] 
                                rounded-full shadow-2xl shadow-orange-900/60 border border-white/40 mx-auto">
                  <span className="text-white font-black text-2xl tracking-wider">LAUNCHING 2026</span>
                  <span className="text-4xl animate-bounce">🚀</span>
                </div>
                <p className="text-gray-300 mt-6 text-lg">
                  Currently in closed beta with 2,000+ Zambian farmers
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  to="/agriconnect"
                  className="bg-white text-[#0b3d2e] font-bold text-xl py-5 px-12 rounded-2xl hover:bg-gray-100 transition"
                >
                  Explore AgriConnect
                </Link>

                <a
                  href="#join-beta"
                  className="bg-[#da6d20] hover:bg-[#c75a10] text-white font-bold text-xl py-5 px-12 rounded-2xl transition"
                >
                  Join Beta Now
                </a>
              </div>
            </div>
          </div>
          {/* =============== END UPDATED AGRICONNECT CARD =============== */}

          {/* FLOATING ORANGE PARTICLES — IDENTICAL TO HOME */}
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
          <div className="mt-24">
            <p className="text-gray-400 text-lg">Founded & led by</p>
            <p className="text-4xl sm:text-5xl font-bold text-[#fdba74] mt-3">
              Catherine Sichone
            </p>
            <p className="text-gray-400 mt-2 text-lg">
              Software Engineer • Builder • Visionary
            </p>
          </div>

          {/* FOOTER */}
          <footer className="w-full py-12 text-center mt-24">
            <p className="text-gray-500 text-sm">
              © 2025 Namzeforge Digital Solutions Limited
            </p>
            <p className="text-gray-400 text-xs mt-2">
              AgriConnect. Powered by Namzeforge. Scaling Africa.
            </p>

            {/* Social Icons */}
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