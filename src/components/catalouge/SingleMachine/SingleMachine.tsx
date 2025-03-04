/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type TMachine = {
    id: number;
    category_id: number;
    machine_name: string;
    title: string;
    png_img: string;
    img_1: string;
    img_2: string;
    img_3: string;
    description: string;
};


const SingleMachine = (id: TMachine) => {
    const [singleMachine, setMachines] = useState<TMachine[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const singleId = id.id
    useEffect(() => {
        if (!singleId) return;

        const fetchMachines = async () => {
            const response = await fetch("/machines.json"); // Adjust path if needed
            const data: TMachine[] = await response.json();
            const filteredMachines = data.filter(
                (machine) => machine.id === Number(singleId)
            );
            setMachines(filteredMachines);
        };

        fetchMachines();
    }, [singleId]);

    // Extract images
    const images = singleMachine.length
        ? [singleMachine[0].img_1, singleMachine[0].img_2, singleMachine[0].img_3]
        : [];

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, images]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,20,60,0.1),transparent_70%)]" />
            <div className="relative w-[60%] flex items-center justify-center">
                {/* Previous Button */}
                {/* <button
          className="absolute left-0 p-3 bg-black/50 text-white rounded-full z-10"
          onClick={prevImage}
        >
          <AiOutlineLeft size={30} />
        </button> */}
                <NavigationButton direction="prev" onClick={prevImage} />

                {/* Image Slider */}
                <div className="relative flex w-full h-[400px] items-center justify-center">
                    <AnimatePresence mode="wait">
                        {images.map((src, index) => {
                            let position = "hidden";
                            let zIndex = 0;
                            let scale = 1;
                            let opacity = 1;
                            let translateX = 0;

                            if (index === currentIndex) {
                                position = "center";
                                zIndex = 20;
                                scale = 1.2;
                                opacity = 1;
                                translateX = 0;
                            } else if (
                                index === (currentIndex - 1 + images.length) % images.length
                            ) {
                                position = "left";
                                zIndex = 10;
                                scale = 0.9;
                                opacity = 0.5;
                                translateX = -200; // Increase negative value for more gap
                            } else if (
                                index === (currentIndex + 1) % images.length
                            ) {
                                position = "right";
                                zIndex = 10;
                                scale = 0.9;
                                opacity = 0.5;
                                translateX = 200; // Increase positive value for more gap
                            }


                            return (
                                <motion.img
                                    key={`${src}-${index}`}
                                    src={src}
                                    alt="Machine"
                                    className="absolute w-[400px] object-cover rounded-lg transition-all duration-500"
                                    style={{
                                        zIndex,
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity,
                                        scale,
                                        x: translateX,
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Next Button */}
                {/* <button
          className="absolute right-0 p-3 bg-black/50 text-white rounded-full z-10"
          onClick={nextImage}
        >
          <AiOutlineRight size={30} />
        </button> */}

                <NavigationButton direction="next" onClick={nextImage} />
            </div>
        </div>
    );
};

export default SingleMachine;



import { ChevronLeft, ChevronRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavigationButton = ({ direction, onClick }: any) => {
    return (
        <motion.button
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 z-30 ${direction === "prev" ? "left-5" : "right-5"
                }`}
            whileHover={{ scale: 1.3, rotate: direction === "prev" ? -10 : 10 }}
            whileTap={{ scale: 0.9 }}
        >
            {direction === "prev" ? (
                <ChevronLeft className="w-12 h-12 text-white bg-black/50 p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-black" />
            ) : (
                <ChevronRight className="w-12 h-12 text-white bg-black/50 p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-black" />
            )}
        </motion.button>
    );
};