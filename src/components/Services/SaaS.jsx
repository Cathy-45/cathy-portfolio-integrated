import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";

const SaaS = () => {
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

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center max-w-5xl mx-auto w-full">
          {/* TITLE — EMPIRE GRADIENT */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-12
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x">
            SaaS Solutions & Agile DevOps
          </h1>

          {/* 3D GLASS CONTENT CARD */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 sm:p-12 md:p-16 border border-white/20
                          shadow-2xl shadow-black/70 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Our <strong className="text-[#fdba74]">SaaS solutions</strong> deliver scalable, cloud-based applications built for growth. Subscription platforms that are secure, user-friendly, and accessible anywhere.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              From customer management systems to powerful analytics tools — we help you scale efficiently with <strong className="text-[#fdba74]">Agile practices and modern DevOps</strong>.
            </p>

            <hr className="border-[#fdba74]/50 my-12 w-1/2 mx-auto" />

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Every solution features <strong className="text-[#fdba74]">multi-tenant architecture</strong>, automatic updates, seamless integrations, and <strong className="text-[#fdba74]">CI/CD pipelines</strong> — keeping you ahead in a fast-moving world.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              to="/services"
              className="text-[#fdba74] font-bold text-xl hover:text-white transition"
            >
              ← Back to Services
            </Link>

            <Link
              to="/consultation"
              className="bg-gradient-to-r from-[#da6d20] to-[#fd923c]
                         hover:from-[#c75a10] hover:to-[#e07b2a] text-white font-bold text-xl
                         py-6 px-12 rounded-2xl shadow-2xl transform hover:scale-105 
                         transition-all duration-300"
            >
              Book a $75 Consultation Now
            </Link>
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

export default SaaS;