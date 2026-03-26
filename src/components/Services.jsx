import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Full-Stack Development",
    description:
      "Build robust applications using React, Node.js, JavaScript, Html, Python, and more. Let’s create something amazing together!",
    bgColor: "from-[#ff6f61] to-[#ff8780]",
    path: "/services/full-stack-development",
  },
  {
    id: 2,
    name: "Technology Consulting",
    description:
      "Align software solutions with your business objectives for growth and efficiency.",
    bgColor: "from-[#4CAF50] to-[#66bb6a]",
    path: "/services/technology-consulting",
  },
  {
    id: 3,
    name: "System Integration",
    description: "Connect CRMs, ERPs, and APIs for seamless data flows.",
    bgColor: "from-[#1E90FF] to-[#4da6ff]",
    path: "/services/system-integration",
  },
  {
    id: 4,
    name: "SaaS/Agile DevOps",
    description: "Scalable software-as-a-service solutions.",
    bgColor: "from-[#FFD700] to-[#ffed4e]",
    path: "/services/saas",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* BACKGROUND - EXACT MATCH TO HOME PAGE */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, #da6d20 0%, #0f172a 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      {/* FLOATING BUBBLES - SAME AS HOME */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#da6d20]/20 blur-3xl animate-float"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDuration: `${10 + i * 2}s`,
              animationDelay: `-${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-24">
        <div className="text-center max-w-7xl mx-auto w-full">
          {/* TITLE - SAME GRADIENT & ANIMATION AS HOME */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-16
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                       bg-[length:200%_200%] animate-gradient-x"
          >
            My Services
          </h2>

          {/* GLASS CARDS - MATCHING HOME PAGE STYLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="group block backdrop-blur-2xl bg-white/10 border border-white/30 
                           rounded-3xl p-10 shadow-2xl shadow-black/60 
                           hover:bg-white/15 hover:border-[#da6d20]/60 hover:shadow-[0_0_40px_rgba(218,109,32,0.4)]
                           transition-all duration-500 min-h-[22rem] flex flex-col justify-between relative overflow-hidden"
              >
                {/* HOVER GRADIENT OVERLAY */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 
                              group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                />

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 text-center">
                  <span className="inline-flex items-center gap-2 text-[#fdba74] font-semibold group-hover:text-white transition-colors">
                    Explore this service 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* SIGNATURE - MATCHING HOME FOOTER STYLE */}
          <p className="mt-24 text-gray-400 text-lg tracking-wide">
            AgriConnect. Powered by Namzeforge. Made in Zambia, scaling Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;