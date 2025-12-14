import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const Contact = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center 20%",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      {/* LIGHTER, WARMER OVERLAY — MATCHES HOME */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/60 md:via-black/40 md:to-black/80" />

      {/* FLOATING PARTICLES — SAME AS HOME */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-[#da6d20] rounded-full opacity-30 animate-float"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="text-center max-w-4xl mx-auto w-full">
          <div
            className="text-6xl sm:text-8xl animate-wave mb-16 select-none" // Increased margin
            style={{ marginTop: "-10rem" }} // Adjust vertically to avoid eye
          >
            👋
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                       bg-[length:200%_200%] animate-gradient-x"
            style={{ lineHeight: "1.2", wordBreak: "break-word" }}
          >
            Thank You for Visiting
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed"
            style={{ lineHeight: "1.6", wordBreak: "break-word" }}
          >
            Have a project, challenge, or vision? Let’s build the future
            together.
          </p>

          {/* CONTACT INFO — NOW WITH PROPER SPACING */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl shadow-black/70 max-w-2xl mx-auto mb-12 text-center">
            <div className="space-y-12">
              <div>
                <p className="text-gray-400 text-lg mb-4">Email me directly</p>
                <a
                  href="mailto:cathy@namzeforge.com"
                  className="text-2xl sm:text-3xl font-bold text-[#fdba74] hover:text-white transition" // Reduced font
                  style={{ whiteSpace: "nowrap", wordBreak: "break-word" }} // Prevent wrapping
                >
                  cathy@namzeforge.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-lg mb-4">Call or WhatsApp</p>
                <a
                  href="tel:+14694634053"
                  className="text-2xl sm:text-3xl font-bold text-[#fdba74] hover:text-white transition"
                  style={{ wordBreak: "break-word" }}
                >
                  +1 (469) 463-4053
                </a>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-8 text-center">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-[#da6d20] to-[#fd923c]
                         hover:from-[#c75a10] hover:to-[#e07b2a] text-white font-bold text-xl sm:text-2xl
                         py-6 px-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore My Services
            </Link>

            <div>
              <Link
                to="/consultation"
                className="inline-block text-[#fdba74] font-bold text-lg hover:text-white transition"
              >
                Or Book a $75 Consultation →
              </Link>
            </div>
          </div>

          <p className="mt-32 text-gray-400 text-lg">
            AgriConnect. Powered by Namzeforge. Made in Zambia, scaling Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;