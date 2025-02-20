"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Partner logos (replace with your actual logo URLs)
const partnerLogos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
];

// Marquee animation settings
const marqueeVariants = (direction: "up" | "down") => ({
  animate: {
    y: direction === "up" ? ["100%", "-100%"] : ["-100%", "100%"],
    transition: {
      duration: 6, // Adjust speed
      ease: "linear",
      repeat: Infinity,
    },
  },
});

const MarqueeGlobalPartner = () => {
  return (
    <div className="relative flex gap-10 overflow-hidden h-screen">
      {/* Marquee going DOWN */}
      <motion.div
        variants={marqueeVariants("down")}
        animate="animate"
        className="absolute left-0 w-40 flex flex-col items-center"
      >
        {partnerLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            width={80}
            height={80}
            className="mb-5"
          />
        ))}
      </motion.div>

      {/* Marquee going UP */}
      <motion.div
        variants={marqueeVariants("up")}
        animate="animate"
        className="absolute right-0 w-40 flex flex-col items-center"
      >
        {partnerLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            width={80}
            height={80}
            className="mb-5"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeGlobalPartner;
