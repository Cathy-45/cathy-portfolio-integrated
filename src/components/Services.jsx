import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const services = [
  {
    id: 1,
    name: "Full-Stack Development",
    description: "Build robust applications using React, Node.js, JavaScript, Html, Python, and more. Let’s create something amazing together!",
    path: "/services/full-stack-development",
  },
  {
    id: 2,
    name: "Technology Consulting",
    description: "Align software solutions with your business objectives for growth and efficiency.",
    path: "/services/technology-consulting",
  },
  {
    id: 3,
    name: "System Integration",
    description: "Connect CRMs, ERPs, and APIs for seamless data flows.",
    path: "/services/system-integration",
  },
  {
    id: 4,
    name: "SaaS/Agile DevOps",
    description: "Scalable software-as-a-service solutions.",
    path: "/services/saas",
  },
];

const Services = () => {
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
      {/* Clean Overlay - Same as Home Page */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-24">
        <div className="text-center max-w-7xl mx-auto w-full">
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-16
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x">
            My Services
          </h2>

          {/* Glassmorphism Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="group block backdrop-blur-2xl bg-white/10 border border-white/30 
                           rounded-3xl p-10 shadow-2xl shadow-black/60 
                           hover:bg-white/15 hover:border-[#da6d20]/60 hover:shadow-[#da6d20]/30
                           transition-all duration-500 min-h-[22rem] flex flex-col justify-between"
              >
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

          {/* Signature */}
          <p className="mt-24 text-gray-400 text-lg tracking-wide">
            AgriConnect. Powered by Namzeforge. Scaling Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;