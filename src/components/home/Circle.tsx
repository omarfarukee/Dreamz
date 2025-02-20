"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import circle from "@/assets/person/circle.png";
import poster from "@/assets/person/Untitled-1-06.png";

const Circle = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full mt-10">
             <div className="gradient-bg-circle  lg:h-[1200px] w-[1600px] z-10 absolute top-[15%]"></div>
            {/* Spinning Circle */}
            <div className=" z-20" data-aos="fade-down"
                        data-aos-duration="3000">
                 <Image  src={circle} className="animate-spin-slow" alt="circle" />
            </div>
           

            {/* Poster Image with Smooth Rounded Animation */}
            <motion.div
                initial={{ borderRadius: "0%" }} // Starts with normal shape
                whileInView={{ borderRadius: "50%" }} // Turns into rounded-full when visible
                transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
                className="absolute overflow-hidden z-20"
            >
                <Image src={poster} alt="poster" className="w-[800px]" />
            </motion.div>
        </div>
    );
};

export default Circle;
