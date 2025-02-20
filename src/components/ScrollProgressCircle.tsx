"use client";

import { useState, useEffect } from "react";

export default function ScrollProgressCircle (){
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Circle size and progress calculation
  const radius = 40; // Circle size
  const circumference = 2 * Math.PI * radius; // Full circumference
  const offset = circumference - (scrollProgress / 100) * circumference; // Offset for progress

  return (
    <div className="fixed bottom-5 right-10 z-50">
      <svg width="70" height="70" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
        />
        
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#c01111" // Green progress color
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)" // Rotate for proper progress direction
          className="transition-all duration-1000 ease-out"
        />
        
        {/* Percentage Text */}
        <text className="font-thin" x="50" y="55" textAnchor="middle" fontSize="24" fill="#9ca3af">
          {Math.round(scrollProgress)}%
        </text>
      </svg>
    </div>
  );
};

