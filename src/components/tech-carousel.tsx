import React, { useEffect, useRef } from "react";
import { technologies } from "../data/tech-data";

const TechCarousel: React.FC = () => {
  const slideTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateDuration = () => {
      if (!slideTrackRef.current) return;

      // Calculate animation duration based on content width
      const trackWidth = slideTrackRef.current.offsetWidth;
      const duration = trackWidth / 100; // Speed factor -> up for change

      document.documentElement.style.setProperty(
        "--marquee-duration",
        `${duration}s`
      );
    };

    calculateDuration();
    window.addEventListener("resize", calculateDuration);
    return () => window.removeEventListener("resize", calculateDuration);
  }, []);

  return (
    <div className="tech-carousel relative w-full overflow-hidden h-20 bg-opacity-10 my-8">
      <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .marquee-track {
            animation: marquee var(--marquee-duration, 30s) linear infinite;
          }
          
          /* Optional: Pause animation on hover */
          .tech-carousel:hover .marquee-track {
            animation-play-state: paused;
          }
          
          /* Gradient overlays to fade edges */
          .fade-overlay-left {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 50px;
            background: linear-gradient(to right, var(--bg-color, #ffffff) 0%, transparent 100%);
            z-index: 2;
          }
          
          .fade-overlay-right {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 50px;
            background: linear-gradient(to left, var(--bg-color, #ffffff) 0%, transparent 100%);
            z-index: 2;
          }
        `}</style>

      {/* Fade overlays */}
      <div className="fade-overlay-left"></div>
      <div className="fade-overlay-right"></div>

      {/* Technology logos */}
      <div
        ref={slideTrackRef}
        className="marquee-track flex justify-around items-center"
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="tech-item flex flex-col items-center justify-center px-6"
          >
            <div className="tech-logo w-10 h-10 flex items-center justify-center text-2xl">
              {tech.icon}
            </div>
            <span className="tech-name text-xs mt-1 font-medium">
              {tech.name}
            </span>
          </div>
        ))}

        {/* Duplicate for seamless loop ->recomended by ai */}
        {technologies.map((tech, index) => (
          <div
            key={`dup-${index}`}
            className="tech-item flex flex-col items-center justify-center px-6"
          >
            <div className="tech-logo w-10 h-10 flex items-center justify-center text-2xl">
              {tech.icon}
            </div>
            <span className="tech-name text-xs mt-1 font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
