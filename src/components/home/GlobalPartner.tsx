/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { FaGlobe, FaRocket, FaShieldAlt, FaBolt, FaBuilding } from "react-icons/fa";

const partners = [
  {
    id: 1,
    name: "TechVision Global",
    description: "Leading innovation in AI and machine learning solutions",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
    icon: FaGlobe,
  },
  {
    id: 2,
    name: "Future Dynamics",
    description: "Pioneering sustainable technology solutions for tomorrow",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&q=80",
    icon: FaRocket,
  },
  {
    id: 3,
    name: "Secure Systems",
    description: "Enterprise-grade security infrastructure solutions",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop&q=80",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    name: "Power Solutions",
    description: "Renewable energy and smart grid technologies",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop&q=80",
    icon: FaBolt,
  },
  {
    id: 5,
    name: "Corporate Nexus",
    description: "Strategic business consulting and digital transformation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
    icon: FaBuilding,
  },
];

export default function GlobalPartner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = partners[activeIndex].icon;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Global Partners
        </h1>
        <p className="text-gray-400 text-center mb-20 max-w-2xl mx-auto">
          Collaborating with industry leaders to drive innovation and create lasting impact across the globe
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 relative">
          {/* Circular Slider */}
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute w-full h-full">
              {/* Semi-circular path */}
              <div className="absolute left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-gray-800/20 rounded-l-full"></div>

              {partners.map((partner, index) => {
                const angle = (index * 36 - activeIndex * 36) - 90; // -90 to start from top
                const radius = 250; // Radius of the circle
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                const scale = index === activeIndex ? 1.2 : 0.8;
                const opacity = index === activeIndex ? 1 : 0.5;

                return (
                  <div
                    key={partner.id}
                    className="absolute transition-all duration-700 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${x + 300}px`,
                      top: `${y + 300}px`,
                      zIndex: index === activeIndex ? 10 : 0,
                    }}
                  >
                    <div
                      className="relative group cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                      style={{
                        transform: `scale(${scale})`,
                        opacity,
                        transition: "all 0.7s ease-in-out",
                      }}
                    >
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <partner.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:ml-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-700">
              <div className="mb-6">
                <ActiveIcon className="w-12 h-12 text-blue-400 mb-4" />
                <h2 className="text-3xl font-bold mb-2">{partners[activeIndex].name}</h2>
                <p className="text-gray-400 text-lg">{partners[activeIndex].description}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[1, 2, 3].map((stat) => (
                  <div key={stat} className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">
                      {stat * 25}+
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat === 1 ? "Projects" : stat === 2 ? "Countries" : "Awards"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
