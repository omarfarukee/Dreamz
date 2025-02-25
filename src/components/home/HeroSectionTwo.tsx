"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import slider1 from "@/assets/slider/slider1.jpg"
import slider2 from "@/assets/slider/slider2.jpg"
import slider3 from "@/assets/slider/slider3.jpg"
import slider4 from "@/assets/slider/slider4.jpg"


const slides = [
  {
    id: 1, image: slider1.src,
    title: "Demo title",
    video: "/assets/videos/slider1.mp4",
    subtitle: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2, image: slider2.src,
    title: "Demo title",
    video: "/assets/videos/slider2.mp4",
    subtitle: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 3, image: slider3.src, 
    title: "Demo title",
    video: "/assets/videos/slider3.mp4",
    subtitle: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 4, image: slider4.src,
    title: "Demo title",
    video: "/assets/videos/slider3.mp4",
    subtitle: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
];

const HeroSectionTwo = () => {
  const [curPage, setCurPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlide = (dir: "left" | "right" | number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir === "left" ? -1 : dir === "right" ? 1 : dir);

    setCurPage((prev) => {
      if (dir === "left") return prev === 0 ? slides.length - 1 : prev - 1;
      if (dir === "right") return (prev + 1) % slides.length;
      return dir; // for direct dot navigation
    });

    setTimeout(() => setIsAnimating(false), 800); // Prevent spam clicking
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide("right");
    }, 10000); // Auto-slide every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden z-20 bg-gradient-to-r  from-black to-[#ffc8473f]">
      {/* Left Button */}
      <button
        onClick={() => handleSlide("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#ffffff1c] text-white px-4 py-4 rounded-full"
      >
        <SlArrowLeft className="text-3xl" />
      </button>

      {/* Slider Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === curPage ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 flex-col bg-black/70 flex justify-center items-center">
                  <div className="w-[800px] items-center text-center">
                    <h1 className="text-[#fcd462] text-7xl font-bold">{slide.title}</h1>
                    <p className="text-white mt-5 text-lg">{slide?.subtitle}</p>

                    <div className="mt-10">
                      <a href="#_" className="relative px-10 py-3 font-bold text-white rounded-lg group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#fcd36293] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-red-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span className="relative">Explore more</span>
                      </a>
                    </div>


                  </div>

                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Right Button */}
      <button
        onClick={() => handleSlide("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#ffffff1c] text-white px-4 py-4 rounded-full"
      >
        <SlArrowRight className="text-3xl" />

      </button>

      {/* Bottom Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlide(index)}
            className={`w-10 h-1 rounded-full ${index === curPage ? "bg-white w-20 duration-700 transition-all" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSectionTwo;
