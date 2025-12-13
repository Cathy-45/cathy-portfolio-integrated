import React from "react";

const Loader = () => {
  const text = "NAMZEFORGE";

  return (
    <div className="loader-container">
      {/* GLOBAL STYLES — THIS FIXES THE HIBERNATION */}
      <style global jsx>{`
        @keyframes draw {
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        @keyframes fill {
          to {
            color: #fdba74;
            text-shadow: 0 0 40px rgba(253, 186, 116, 0.8);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        .loader-container {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          z-index: 50;
          overflow: hidden;
        }

        .loader-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(218, 109, 32, 0.1), transparent, rgba(218, 109, 32, 0.1));
        }

        .particle {
          position: absolute;
          width: 16px;
          height: 16px;
          background: #da6d20;
          border-radius: 50%;
          opacity: 0.4;
          animation: float 6s ease-in-out infinite;
        }

        .namzeforge-letter {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          color: transparent;
          -webkit-text-stroke: 2px #fdba74;
          animation: draw 1.5s ease-out forwards, fill 0.8s ease-out 1.3s forwards;
        }

        .digital-solutions {
          margin-top: 3rem;
          color: #94a3b8;
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.5em;
          opacity: 0;
          animation: fadeInUp 1s ease-out 2.8s forwards;
        }

        .orb {
          position: absolute;
          bottom: 6rem;
          left: 50%;
          transform: translateX(-50%);
          width: 9rem;
          height: 9rem;
          background: radial-gradient(circle, rgba(218, 109, 32, 0.4), rgba(253, 146, 60, 0.2));
          border: 2px solid rgba(218, 109, 32, 0.5);
          border-radius: 50%;
          box-shadow: 0 0 60px rgba(218, 109, 32, 0.7);
          animation: spinSlow 20s linear infinite;
        }

        .orb-inner {
          position: absolute;
          inset: 2rem;
          background: rgba(218, 109, 32, 0.4);
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* GLOW */}
      <div className="loader-glow" />

      {/* PARTICLES */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: `${10 + i * 11}%`,
            left: `${5 + i * 11}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* NAMZEFORGE */}
      <div className="text-center">
        <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight leading-none">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block namzeforge-letter"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <p className="digital-solutions">
          Digital Solutions
        </p>
      </div>

      {/* ORB */}
      <div className="orb">
        <div className="orb-inner" />
      </div>
    </div>
  );
};

export default Loader;