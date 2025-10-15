
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const Home = () => {
  return (
    <section
      className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(26, 26, 26, 0.96)",
        opacity: 0.7,
        backgroundPosition: "center top",
        backgroundSize: "contain",
      }}
    >
      <div className="text-4xl sm:text-6xl animate-wave mt-4 text-[#fdba74] drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(253, 186, 116, 0.5)' }}>👋</div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 sm:mb-6 text-[#fdba74] text-center">
        Hi, I'm Cathy, a visionary Software Engineer
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl font-roboto text-white text-center mb-6 leading-relaxed">
        With a passion for crafting elegant solutions and a knack for problem-solving, bringing ideas to life through code.<br className="hidden sm:block" />
        Let's create something amazing together!
      </p>
      <Link
        to="/services"
        className="bg-[#3f3f46] text-[#fb923c] font-poppins text-sm sm:text-lg py-2 px-4 rounded shadow-lg hover:shadow-xl transition-shadow"
      >
        See How I Can Help
      </Link>
    </section>
  );
};

export default Home;