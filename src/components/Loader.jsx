import React from "react";
import backgroundImage from "../assets/background.jpg";  // Adjust path if needed

const Loader = () => {
  const text = "NAMZEFORGE";

  return (
    <>
      {/* Inline styles — everything self-contained */}
      <style jsx>{`
        @keyframes draw {
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        @keyframes fill {
          to {
            color: #fdba74;
            text-shadow: 0 0 30px rgba(253, 186, 116, 0.7);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          70% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .stroke-text {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          color: transparent;
          -webkit-text-stroke: 1.5px #fdba74;
        }

        .animate-draw-fill {
          animation: draw 1.4s ease-out forwards, fill 0.6s ease-out 1.4s forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 3.5s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>

      <div
        className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center 20%",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        {/* SAME OVERLAY AS HOME */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/60 md:via-black/40 md:to-black/80" />

        {/* FLOATING PARTICLES */}
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

        {/* CONTENT */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block stroke-text"
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
              >
                <span className="animate-draw-fill inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-8 text-gray-400 text-xl sm:text-2xl font-light tracking-widest animate-fade-in-up">
            Digital Solutions
          </p>
        </div>

        {/* PULSING ORB */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-36 sm:h-36">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#da6d20]/30 to-[#fd923c]/10 backdrop-blur-md border border-[#da6d20]/40 shadow-2xl shadow-[#da6d20]/60 animate-spin-slow">
            <div className="absolute inset-6 rounded-full bg-[#da6d20]/30 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;