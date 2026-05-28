import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
import treeTopBnBImage from "../assets/treeTopBnB.jpg";
import birthdayPagesImage from "../assets/Birthday-Pages.jpg";
import cathyPortfolioImage from "../assets/Intro.jpg";

const MyPortfolio = () => {
  const projects = [
    {
      id: 1,
      name: "AgriConnect Zambia",
      description:
        "Farmer-to-buyer marketplace connecting smallholder farmers directly to buyers across Zambia. Features easy listing, instant PawaPay payments, ZRA tax calculator, AI market insights, and real-time challenges. Currently in closed beta with 2,000+ active farmers.",
      image:
        "https://raw.githubusercontent.com/Cathy-45/AgriConnect-Zambia-Frontend/main/assets/screenshots/home.png",
      path: "https://github.com/Cathy-45/AgriConnect-Zambia-Frontend",
      highlight: true,
    },
    {
      id: 2,
      name: "treeTopBnB",
      description:
        "AirBnB-inspired platform with full user authentication, booking system, and responsive design",
      image: treeTopBnBImage,
      path: "https://github.com/Cathy-45/treeTopBnB",
    },
    {
      id: 3,
      name: "Birthday-Pages",
      description:
        "Interactive birthday celebration site with confetti explosions, music, and personalized animations",
      image: birthdayPagesImage,
      path: "https://github.com/Cathy-45/Birthday-Pages",
    },
    {
      id: 4,
      name: "cathy-portfolio",
      description:
        "The very first version of this empire — my personal portfolio journey begins here",
      image: cathyPortfolioImage,
      path: "https://github.com/Cathy-45/cathy-portfolio-integrated",
    },
  ];

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
      {/* Matching Home Page Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-24">
        <div className="text-center max-w-7xl mx-auto w-full">
          <div className="text-6xl sm:text-8xl animate-wave mb-8 select-none">
            👨‍💻
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x"
          >
            Early Projects
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Where the empire began. These projects laid the foundation for
            Namzeforge.
          </p>

          {/* Glassmorphism Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block backdrop-blur-2xl bg-white/10 rounded-3xl overflow-hidden border border-white/30
                           shadow-2xl shadow-black/60 hover:shadow-[#da6d20]/40 hover:-translate-y-2 
                           transition-all duration-500 ${project.highlight ? "ring-2 ring-[#fdba74] scale-105" : ""}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                      View Project →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-24 text-gray-400 text-lg text-center">
            AgriConnect. Powered by Namzeforge. Scaling Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
