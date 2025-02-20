/* eslint-disable @next/next/no-img-element */
"use client";
import partner1 from "@/assets/globalPartner/300px_01.jpg"
import partner2 from "@/assets/globalPartner/300px_02.jpg"
import partner3 from "@/assets/globalPartner/300px_05.jpg"
import partner4 from "@/assets/globalPartner/300px_04.jpg"
import partner5 from "@/assets/globalPartner/300px_08.jpg"

import { useEffect, useState } from "react";
import { FaGlobe, FaRocket, FaShieldAlt, FaBolt, FaBuilding } from "react-icons/fa";

const partners = [
  {
    id: 1,
    name: "Sisma",
    description: "Leading innovation in AI and machine learning solutions",
    image: partner1.src,
    icon: FaGlobe,
  },
  {
    id: 2,
    name: "kayrays",
    description: "Pioneering sustainable technology solutions for tomorrow",
    image: partner2.src,
    icon: FaRocket,
  },
  {
    id: 3,
    name: "superbmelt",
    description: "Enterprise-grade security infrastructure solutions",
    image: partner3.src,
    icon: FaShieldAlt,
  },
  {
    id: 4,
    name: "youbaow",
    description: "Renewable energy and smart grid technologies",
    image: partner4.src,
    icon: FaBolt,
  },
  {
    id: 5,
    name: "altialimfita orfi",
    description: "Strategic business consulting and digital transformation",
    image: partner5.src,
    icon: FaBuilding,
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = partners[activeIndex].icon;

  return (
    <main className="min-h-screen bg-gradient-to-b  text-white overflow-hidden relative">
        <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute top-[1%] -z-10 left-[20%]"></div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-[#fcd462]" data-aos="fade-up"
                        data-aos-duration="3000">Global Partners</h1>
        <p className="text-red-500 text-center mb-20 max-w-2xl mx-auto">
          Collaborating with industry leaders to drive innovation and create lasting impact across the globe
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 relative mt-28">
          <div className="relative w-[700px] h-[700px]" data-aos="fade-right"
                        data-aos-duration="3000">
            <div className="absolute w-[600px] h-[600px] top-[50px] left-[50px] rounded-full border-2 border-yellow-300">
              <div className="absolute w-full h-full rounded-full border-2 border-[#fcd462]"></div>
              <div className="absolute w-[620px] h-[620px] -top-[10px] -left-[10px] rounded-full border-2 border-yellow-200"></div>
            </div>

            <div className="absolute w-full h-full">
              {partners.map((partner, index) => {
                const angle = (index * 72 - activeIndex * 72) - 90;
                const radius = 300;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                const isActive = index === activeIndex;

                return (
                  <div
                    key={partner.id}
                    className="absolute transition-all duration-1000 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x + 350}px`, top: `${y + 350}px`, zIndex: isActive ? 10 : 0 }}
                  >
                    <div
                      className={`relative group cursor-pointer rounded-xl border-4 ${isActive ? 'border-[#fcd462] scale-150' : 'border-transparent scale-90'}`}
                      onClick={() => setActiveIndex(index)}
                      style={{
                        transition: "all 1s ease-in-out",
                      }}
                    >
                      <div className="relative w-48 h-36 rounded-lg overflow-hidden   transition-colors duration-300 shadow-lg">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 lg:ml-8" data-aos="fade-left"
                        data-aos-duration="3000">
            <div 
              className="bg-[#fcd3623a] backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-1000"
            >
              <div className="mb-6 transition-opacity duration-1000">
                <ActiveIcon className="w-12 h-12 text-[#fcd462] mb-4 transition-all duration-500" />
                <h2 className="text-3xl font-bold mb-2 transition-all duration-500">{partners[activeIndex].name}</h2>
                <p className="text-gray-400 text-lg transition-all duration-500">{partners[activeIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
