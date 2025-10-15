import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const Home = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white bg-contain bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(26, 26, 26, 0.96)',
        opacity: 0.7,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm z-0" /> {/* Blurred overlay behind all content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4 sm:px-6 w-full max-w-4xl">
        <div className="text-4xl sm:text-6xl animate-wave drop-shadow-lg z-20" style={{ textShadow: '0 0 10px rgba(253, 186, 116, 0.5)' }}>👋</div>
        <img
          src={photo}
          alt="Catherine Sichone"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover z-10 mb-6 border-4 border-[#fdba74] shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#fdba74] drop-shadow-md z-10">
          Hi, I'm Cathy, a visionary Software Engineer
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-roboto font-bold text-[#fdba74] drop-shadow-sm z-10 max-w-2xl">
          With a passion for crafting elegant solutions and a knack for
          problem-solving, bringing ideas to life through code.
        </p>
        <Link
          to="/services"
          className="bg-[#3f3f46] text-[#fb923c] font-poppins text-sm sm:text-lg py-2 px-4 rounded shadow-lg hover:shadow-xl transition-shadow z-10"
        >
          See How I Can Help
        </Link>
      </div>
    </section>
  );
};

export default Home;