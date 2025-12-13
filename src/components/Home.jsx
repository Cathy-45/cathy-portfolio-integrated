// src/components/Home.jsx — FINAL & PERFECT (mobile fixed + cache killed)
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

          {/* FLAGSHIP PRODUCT CARD */}
          <div className="my-16">
            <div
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 sm:p-12 border border-white/20
                            shadow-2xl shadow-black/60 hover:shadow-[#da6d20]/40 transition-all duration-700
                            max-w-4xl mx-auto"
            >
              <p className="text-gray-400 uppercase tracking-widest text-sm mb-6">
                Flagship Product
              </p>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                AgriConnect
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
                Connecting farmers directly to buyers.
                <br />
                Same-day offers. Same-day payments. Real profit.
              </p>

              {/* 2026 LAUNCH BADGE — MOBILE-FRIENDLY & CENTERED */}
              <div className="my-10">
                <div
                  className="inline-flex items-center gap-3 px-6 py-4 sm:px-10 sm:py-5 
                  bg-gradient-to-r from-[#da6d20] to-[#fd923c] 
                  rounded-full shadow-2xl shadow-orange-900/60
                  border border-white/40 max-w-full mx-auto"
                >
                  <span className="text-white font-black text-lg sm:text-2xl tracking-wider">
                    LAUNCHING 2026
                  </span>
                  <span
                    className="text-4xl sm:text-5xl animate-bounce"
                    role="img"
                    aria-label="rocket"
                  >
                    Launch 🚀🚀
                  </span>
                </div>
                <p className="text-gray-300 text-center mt-6 text-base sm:text-lg">
                  Currently in closed beta with <strong>2,000+</strong> Zambian
                  farmers
                </p>
              </div>

              {/* JOIN WAITLIST — ONLY ONE */}
              <div className="mt-16">
                <p className="text-gray-300 text-center mb-6 text-lg">
                  Be the first to know when we launch
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
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
                <p className="text-gray-400 text-sm sm:text-base text-center mt-6 italic">
                  We respect your privacy • No spam, ever
                </p>
              </div>

              {/* EXPLORE BUTTON */}
              <div className="mt-16">
                <Link
                  to="/agriconnect"
                  className="inline-block bg-gradient-to-r from-[#da6d20] to-[#fd923c] hover:from-[#c75a10] hover:to-[#e07b2a]
                             text-white font-bold text-xl py-5 px-12 rounded-2xl 
                             shadow-2xl transform hover:-translate-y-1 transition-all"
                >
                  Explore AgriConnect
                </Link>
              </div>
            </div>
          </div>

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
              © 2025 Namzeforge Digital Solutions LLC
            </p>
            <p className="text-gray-400 text-xs mt-2">
              AgriConnect. Powered by Namzeforge. Made in Zambia, scaling
              Africa.
            </p>
            <div className="flex justify-center gap-8 mt-6">
              <a
                href="https://twitter.com/namzeforge"
                className="text-gray-400 hover:text-white transition"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/catherine-namonje-4ab353203/"
                className="text-gray-400 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:cathy@namzeforge.com"
                className="text-gray-400 hover:text-white transition"
              >
                Email
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Home;
