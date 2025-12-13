  // src/pages/Services.jsx — NAMZEFORGE 3D GLASS MASTERPIECE
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Full-Stack Development",
    description: "Build robust applications using React, Node.js, JavaScript, Python, and more. Let’s create something amazing together!",
    bgGradient: "from-[#da6d20] to-[#fd923c]",
  },
  {
    id: 2,
    name: "Technology Consulting",
    description: "Align software solutions with your business objectives for growth and efficiency.",
    bgGradient: "from-[#50C878] to-[#2e8b57]",
  },
  {
    id: 3,
    name: "System Integration",
    description: "Connect CRMs, ERPs, and APIs for seamless data flows.",
    bgGradient: "from-[#1E90FF] to-[#00BFFF]",
  },
  {
    id: 4,
    name: "SaaS & Agile DevOps",
    description: "Scalable software-as-a-service solutions with cloud-native architecture.",
    bgGradient: "from-[#FFD700] to-[#FFA500]",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* BACKGROUND + GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full" style={{ background: "radial-gradient(circle at 50% 50%, #da6d20 0%, transparent 70%)" }} />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20] 
                         bg-[length:200%_200%] animate-gradient-x">
            Services
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            We don’t just write code. We build digital empires.
          </p>

          {/* 3D GLASS SERVICE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path || "#"}
                className="group"
              >
                <div
                  className={`backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20
                              shadow-2xl shadow-black/60 transform hover:scale-105 hover:shadow-[#da6d20]/40
                              transition-all duration-500 h-full flex flex-col justify-center text-center
                              bg-gradient-to-br ${service.bgGradient} bg-opacity-20`}
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 60px rgba(218,109,32,0.1)",
                  }}
                >
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-8 inline-block text-white/70 group-hover:text-white transition">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="mt-24">
            <p className="text-2xl text-gray-300 mb-8">
              Ready to build something legendary?
            </p>
            <a
              href="mailto:cathy@namzeforge.com"
              className="inline-block bg-gradient-to-r from-[#da6d20] to-[#fd923c] hover:from-[#c75a10] hover:to-[#e07b2a]
                         text-white font-bold text-xl py-5 px-12 rounded-2xl 
                         shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;