/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
const slides = [
  {
    id: 1,
    image: "/assets/machine/44.png",
    title: "Demo Title lorem ipsum",
    video: "/assets/videos/slider1.mp4",
    subtitle: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    image: "/assets/machine/Neww-03.png",
    title: "Demo Title lorem ipsum",
    video: "/assets/videos/slider2.mp4",
    subtitle: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 3,
    image: "/assets/machine/333.png",
    title: "Demo Title lorem ipsum",
    video: "/assets/videos/slider3.mp4",
    subtitle: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden z-20 bg-gradient-to-r  from-black to-[#ffc8473f]">
      <img src='/assets/wave/wave4.png' data-aos="fade-down" data-aos-duration="3000" data-aos-delay="2000" className='absolute top-[-35%] z-[500]' alt='bg'/>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            duration: 0.5,
            ease: easeInOut
          }}
        >
          {/* Main Image */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            {/* <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5,
                ease: easeInOut
              }}
            /> */}

            <motion.video
              src={slides[currentSlide].video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: easeInOut }}
            />

            {/* Text Overlay */}
            <motion.div
              className="absolute  w-[45%] left-[5%] text-justify top-[40%] transform -translate-y-1/2  z-20 px-4 sm:px-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: easeInOut
              }}
            >
              <h2 className="text-3xl sm:text-4xl  lg:text-6xl text-[#fcd462] font-bold mb-2 sm:mb-4">
                {slides[currentSlide].title}
              </h2>
              {/* <h2 className="text-3xl absolute sm:text-4xl md:text-5xl lg:text-[20em] top-[-130%]  font-serif text-[#ffffff09] font-bold mb-2 sm:mb-4">
                {slides[currentSlide].title}
              </h2> */}
              <p className="text-md  text-white">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>

            {/* Small Preview Image - Hidden on mobile */}
            <motion.div
              className="hidden md:block absolute z-20  lg:right-[6%] top-[22%]  w-20 sm:w-24 md:w-28 lg:w-[500px]  overflow-hidden rounded object-cover"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: easeInOut
              }}
            >
              <img
                src={slides[currentSlide].image}
                alt="preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="hidden absolute z-10  lg:right-[2%] top-[60%]   w-20 sm:w-24 md:w-28 lg:w-[200px] h-20 sm:h-24 md:h-28 lg:h-[200px] overflow-hidden rounded object-cover"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: easeInOut
              }}
              style={{
                clipPath: "polygon(0% 0%, 0% 100%, 14% 100%, 15% 15%, 86% 15%, 86% 85%, 12% 85%, 13% 100%, 100% 100%, 100% 0%)"
              }}
            >
              <img
                src={slides[currentSlide].image}
                alt="preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-[50%] z-30 right-10 flex flex-col  items-end gap-2 sm:gap-4">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`rounded-full cursor-pointer duration-300 transition-all ${currentSlide === index
                ? "w-10 h-[2px] bg-gray-400"
                : "w-3 h-[2px] bg-white/50"
              }`}
            onClick={() => handleSlideChange(index)}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 z-30 left-[5%]   flex justify-center sm:justify-end px-4 sm:px-0 gap-5">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`flex-1 sm:flex-none sm:w-[120px] h-16 py-2  text-white  justify-center text-sm sm:text-base font-medium  rounded-xl ${currentSlide === index
                ? "bg-[#e5010c07] backdrop-blur-sm"
                : "bg-[#fffaf40e] backdrop-blur-sm"
              }`}
            onClick={() => handleSlideChange(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >

            {index + 1 === 1 && <p className='text-center justify-center flex text-3xl text-[#ffffff56]'><SlArrowLeft />
            </p>}
            {index + 1 === 2 && <p className='text-center justify-center flex text-3xl text-[#ffffff56]'>-
            </p>}
            {index + 1 === 3 && <p className='text-center justify-center flex text-3xl text-[#ffffff56]'><SlArrowRight />
            </p>}
          </motion.button>
        ))}
      </div>
    </div>
  );
}