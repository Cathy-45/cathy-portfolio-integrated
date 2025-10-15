
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const Contact = () => {
  return (
    <section
      className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(26, 26, 26, 0.96)",
        opacity: 0.7,
        backgroundPosition: "center top",
        backgroundSize: "contain",
      }}
    >
      <div className="text-4xl sm:text-6xl animate-wave mb-4 sm:mb-6">👋</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-poppins font-bold mb-4 sm:mb-6 text-white text-center">
        Thank you for visiting!
      </h2>
      <p className="text-base sm:text-lg md:text-xl font-roboto text-[#9ca3af] text-center mb-6">
        Have a project or question? Let’s discuss how I can help
      </p>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
        <p className="text-base sm:text-lg md:text-xl font-roboto text-white text-center">
          Email:{" "}
          <a href="mailto:cathy@namzeforge.com" className="text-white hover:underline">
            cathy@namzeforge.com
          </a>
        </p>
        <p className="text-base sm:text-lg md:text-xl font-roboto text-white text-center">
          Phone:{" "}
          <a href="tel:+14694634053" className="text-white hover:underline">
            +14694634053
          </a>
        </p>
      </div>
      <Link
        to="/services"
        className="bg-[#3f3f46] text-[#fb923c] font-poppins text-sm sm:text-lg py-2 px-4 rounded shadow-lg hover:shadow-xl transition-shadow"
      >
        See How I Can Help
      </Link>
    </section>
  );
};

export default Contact;