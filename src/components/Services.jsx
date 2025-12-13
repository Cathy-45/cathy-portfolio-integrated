  // src/pages/Services.jsx — SUNRISE GLOW + 3D ORANGE BUBBLES (perfect match with Home)
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Full-Stack Development",
    description: "React • Node.js • Python • Cloud • Mobile • Web3",
  },
  {
    name: "Technology Consulting",
    description: "Strategy • Architecture • DevOps • Scaling • AI Integration",
  },
  {
    name: "System Integration",
    description: "APIs • CRMs • ERPs • Payment Gateways • Legacy Systems",
  },
  {
    name: "SaaS & Agile DevOps",
    description: "Cloud-native • CI/CD • Microservices • Auto-scaling",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* SUNRISE GLOW BACKGROUND — EXACT SAME AS HOME */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, #da6d20 0%, #0f172a 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

      {/* FLOATING ORANGE BUBBLES — SAME AS HOME */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#da6d20]/20 blur-3xl animate-float"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 10}%`,
              animationDelay: `float ${8 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* TITLE — SUNRISE GRADIENT */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x">
            Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-16">
            We don’t just build software. We build futures.
          </p>

          {/* 3D GLASS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/12 rounded-3xl p-10 border border-white/20
                           shadow-2xl shadow-black/50 hover:shadow-[#da6d20]/50
                           transform hover:scale-100 transition-all duration-500"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 text-right">
                  <span className="text-[#fdba74] font-semibold hover:text-white transition">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24">
            <a
              href="mailto:cathy@namzeforge.com"
              className="inline-block bg-gradient-to-r from-[#da6d20] to-[#fd923c] hover:from-[#c75a10] hover:to-[#e07b2a]
                         text-white font-bold text-xl py-5 px-12 rounded-2xl 
                         shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Let's Build Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;