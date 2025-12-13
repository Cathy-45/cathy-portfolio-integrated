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
      {/* SUNRISE GLOW + FLOATING BUBBLES — EXACTLY LIKE HOME */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, #da6d20 0%, #0f172a 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

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
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-24">
        <div className="text-center max-w-7xl mx-auto w-full">
          {/* TITLE — SAME SIZES AS YOUR ORIGINAL */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-20 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                       bg-[length:200%_200%] animate-gradient-x"
          >
            My Services
          </h2>

          {/* 3D GLASS CARDS GRID — FULLY CLICKABLE WITH YOUR ORIGINAL PATHS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="group block backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20
                           shadow-2xl shadow-black/60 hover:shadow-[#da6d20]/50
                           transform hover:scale-105 hover:border-[#da6d20]/50
                           transition-all duration-500 min-h-[20rem] sm:min-h-[22rem] flex-col justify-center"
              >
                {/* Gradient accent bar on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                              bg-gradient-to-br ${service.bgColor} transition-opacity duration-500 -z-10`}
                />

                <h3 className="text-lg sm:text-xl font-semibold text-[#fdba74] mb-6 text-center">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                  {service.description}
                </p>

                <div className="mt-8 text-center">
                  <span className="text-[#fdba74] font-bold group-hover:text-white transition">
                    Explore this service →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* EMPIRE SIGNATURE */}
          <p className="mt-32 text-gray-400 text-lg text-center">
            AgriConnect. Powered by Namzeforge. Made in Zambia, scaling Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;