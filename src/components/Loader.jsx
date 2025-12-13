import React from "react";

const Loader = () => {
  const text = "NAMZEFORGE";

  return (
    <>
      <style jsx>{`
        @keyframes draw {
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        @keyframes fill {
          to {
            color: #fdba74;
            text-shadow: 0 0 50px rgba(253, 186, 116, 0.9);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          60% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }

        .stroke-text {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          color: transparent;
          -webkit-text-stroke: 3px #fdba74;
        }

        .animate-draw-fill {
          animation: draw 2.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards,
                     fill 1s ease-out 2.3s forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 4.5s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }

        .animate-pulse {
          animation: pulse 5s ease-in-out infinite;
        }
      `}</style>

      {/* CLEAN DARK EMPIRE BACKGROUND — NO IMAGE */}
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0f172a] z-50 overflow-hidden">
        {/* DEEP SUBTLE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#da6d20]/10 via-transparent to-[#da6d20]/10" />

        {/* FLOATING PARTICLES — STILL MAGICAL */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-[#da6d20] rounded-full opacity-40 animate-float"
              style={{
                top: `${10 + i * 11}%`,
                left: `${5 + i * 11}%`,
                animationDelay: `${i * 0.9}s`,
              }}
            />
          ))}
        </div>

        {/* NAMZEFORGE REVEAL — NOW IMPOSSIBLE TO MISS */}
        <div className="relative z-10 text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight leading-none">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block stroke-text"
                style={{
                  animationDelay: `${index * 0.25}s`,  
                }}
              >
                <span className="animate-draw-fill inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              </span>
            ))}
          </h1>

          {/* DIGITAL SOLUTIONS — APPEARS ONLY AFTER FULL NAME */}
          <p className="mt-16 text-gray-500 text-2xl sm:text-3xl font-light tracking-widest animate-fade-in-up">
            Digital Solutions
          </p>
        </div>

        {/* HYPNOTIC ORB */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-36 h-36 sm:w-44 sm:h-44">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#da6d20]/40 to-[#fd923c]/20 backdrop-blur-md border-2 border-[#da6d20]/50 shadow-2xl shadow-[#da6d20]/70 animate-spin-slow">
            <div className="absolute inset-8 rounded-full bg-[#da6d20]/40 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;