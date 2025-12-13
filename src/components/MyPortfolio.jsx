import React from "react";
import { Link } from "react-router-dom";
import treeTopBnBImage from "../assets/treeTopBnB.jpg";
import birthdayPagesImage from "../assets/Birthday-Pages.jpg";
import cathyPortfolioImage from "../assets/Intro.jpg";

const MyPortfolio = () => {
  const projects = [
    {
      id: 1,
      name: "treeTopBnB",
      description: "AirBnB-inspired platform with full user authentication, booking system, and responsive design",
      image: treeTopBnBImage,
      path: "https://github.com/Cathy-45/treeTopBnB",
    },
    {
      id: 2,
      name: "Birthday-Pages",
      description: "Interactive birthday celebration site with confetti explosions, music, and personalized animations",
      image: birthdayPagesImage,
      path: "https://github.com/Cathy-45/Birthday-Pages",
    },
    {
      id: 3,
      name: "cathy-portfolio",
      description: "The very first version of this empire — my personal portfolio journey begins here",
      image: cathyPortfolioImage,
      path: "https://github.com/Cathy-45/cathy-portfolio-integrated",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* SUNRISE GLOW + FLOATING ORANGE BUBBLES — EXACT EMPIRE MATCH */}
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
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-24">
        <div className="text-center max-w-7xl mx-auto w-full">
          {/* EMOJI + TITLE */}
          <div className="text-6xl sm:text-8xl animate-wave mb-8 select-none">👨‍💻</div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x">
            Early Projects
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Where the empire began. These school projects were the first sparks of what became Namzeforge.
          </p>

          {/* 3D GLASS PROJECT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group block backdrop-blur-xl bg-white/10 rounded-3xl overflow-hidden border border-white/20
                           shadow-2xl shadow-black/60 hover:shadow-[#da6d20]/50
                           transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/1e293b/94a3b8?text=${project.name}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 text-right">
                    <span className="text-[#fdba74] font-bold group-hover:text-white transition">
                      View on GitHub →
                    </span>
                  </div>
                </div>
              </a>
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

export default MyPortfolio;