import React from "react";
import { Link } from "react-router-dom";

const FullStackDevelopment = () => {
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
        <div className="text-center max-w-5xl mx-auto w-full">
          {/* TITLE — EMPIRE GRADIENT */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-12
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x">
            Full-Stack Development
          </h1>

          {/* 3D GLASS CONTENT CARD */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 sm:p-12 md:p-16 border border-white/20
                          shadow-2xl shadow-black/70 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Our Full-Stack Development service delivers <strong className="text-[#fdba74]">end-to-end web applications</strong> tailored to your business needs.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              We master modern technologies: <span className="text-[#fdba74]">React/Redux</span> for dynamic, responsive frontends • <span className="text-[#fdba74]">Node.js</span> for scalable backends • JavaScript • HTML • Python • and more.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              From e-commerce platforms to custom business dashboards, we guarantee <strong className="text-[#fdba74]">high performance, ironclad security, and exceptional user experiences</strong>.
            </p>

            <hr className="border-[#fdba74]/50 my-12 w-1/2 mx-auto" />

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Every solution includes responsive design • seamless database integration (MongoDB, PostgreSQL) • RESTful or GraphQL APIs • and <strong className="text-[#fdba74]">ongoing support</strong> to keep you ahead.
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

export default FullStackDevelopment;