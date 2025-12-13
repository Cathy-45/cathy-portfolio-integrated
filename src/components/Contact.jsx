
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* SUNRISE GLOW + FLOATING ORANGE BUBBLES — EMPIRE STANDARD */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, #da6d20 0%, #0f172a 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#da6d20]/20 blur-3xl animate-float"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              top: `${5 + i * 11}%`,
              left: `${5 + i * 11}%`,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* REAL WAVING HAND */}
          <div className="text-6xl sm:text-8xl animate-wave mb-10 select-none">Waving Hand</div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x">
            Thank You for Visiting
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
            Have a project, challenge, or vision? Let’s build the future together.
          </p>

          {/* CONTACT INFO — GLASS CARD STYLE */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20
                          shadow-2xl shadow-black/70 max-w-2xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
              <div>
                <p className="text-gray-400 text-lg mb-2">Email me directly</p>
                <a
                  href="mailto:cathy@namzeforge.com"
                  className="text-2xl sm:text-3xl font-bold text-[#fdba74] hover:text-white transition"
                >
                  cathy@namzeforge.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-lg mb-2">Call or WhatsApp</p>
                <a
                  href="tel:+14694634053"
                  className="text-2xl sm:text-3xl font-bold text-[#fdba74] hover:text-white transition"
                >
                  +1 (469) 463-4053
                </a>
              </div>
            </div>
          </div>

          {/* POWERFUL CTA */}
          <div className="space-y-6">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-[#da6d20] to-[#fd923c]
                         hover:from-[#c75a10] hover:to-[#e07b2a] text-white font-bold text-xl sm:text-2xl
                         py-6 px-12 rounded-2xl shadow-2xl transform hover:scale-105 
                         transition-all duration-300"
            >
              Explore My Services
            </Link>

            <div className="mt-8">
              <Link
                to="/consultation"
                className="inline-block text-[#fdba74] font-bold text-lg hover:text-white transition"
              >
                Or Book a $75 Consultation →
              </Link>
            </div>
          </div>

          {/* EMPIRE SIGNATURE */}
          <p className="mt-32 text-gray-400 text-lg">
            AgriConnect. Powered by Namzeforge. Made in Zambia, scaling Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;