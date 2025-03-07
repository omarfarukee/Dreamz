/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { saveAs } from "file-saver";
import AOS from "aos";
import "aos/dist/aos.css";
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
    features: [],
    pdf: string
};


const SingleMachine = (id: TMachine) => {
    
    const [singleMachine, setMachines] = useState<TMachine[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const singleId = id.id
      useEffect(() => {
        AOS.init();
      }, []);
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


    const handleDownload = (pdfUrl: string) => {
        if (!pdfUrl) {
            console.error("No PDF file available.");
            return;
        }
        saveAs(pdfUrl, `${singleMachine[0].title}`); // Save file with correct URL
    };
    return (
        <main>
            <div className="min-h-screen flex items-center justify-center flex-col bg-[#f4c522] pt-56">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,20,60,0.1),transparent_70%)]" />
                <div className="relative w-[60%] flex items-center justify-center">
                    {/* Previous Button */}
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
                                    translateX = -200;
                                } else if (
                                    index === (currentIndex + 1) % images.length
                                ) {
                                    position = "right";
                                    zIndex = 10;
                                    scale = 0.9;
                                    opacity = 0.5;
                                    translateX = 200;
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

                    <h1 className="text-[50em] absolute text-[#ff27271f] right-[-20%] transition-all duration-700">   <motion.div
                        key={currentIndex} // Ensure animation happens on every change
                        initial={{ opacity: 0 }} // Initial opacity
                        animate={{ opacity: 1 }} // Animate to full opacity
                        exit={{ opacity: 0 }} // Fade out
                        transition={{ duration: 1 }} // Transition duration for smooth change
                    >
                       0{currentIndex + 1}
                    </motion.div></h1>

                    {/* Dots Navigation */}
                    <div className="absolute right-[115%] top-1/2 transform -translate-y-1/2 flex flex-col gap-8" data-aos="fade-right" data-aos-duration="2000">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-[3px] rounded-full transition-all duration-700 ${currentIndex === index ? "bg-red-600 w-28" : "bg-white w-8 "
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <NavigationButton direction="next" onClick={nextImage} />
                </div>


                <div className="mt-20 border-t border-b h-[200px] flex items-center justify-between w-[90%]" >
                    <h1 className="text-7xl text-red-600 uppercase" data-aos="fade-up" data-aos-duration="3000">{singleMachine[0]?.machine_name}</h1>
                    <div className="flex gap-10" data-aos="fade-up" data-aos-duration="3000">
                        <div className="flex items-center gap-2">
                            <SiRelianceindustrieslimited className="text-6xl text-red-600" />
                            <p className="text-3xl text-white">Industry</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosSpeedometer className="text-6xl text-red-600" />
                            <p className="text-3xl text-white">speed</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiLaserSparks className="text-6xl text-red-600" />
                            <p className="text-3xl text-white">Industry</p>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee gradient={false} speed={100} pauseOnHover={false} className="bg-red-600">
                <h1 className="text-9xl uppercase font-bold text-[#fcd462] bg-red-600 p-2">* DREAMZ Instrument technology * </h1>
            </Marquee>
            <div className="-rotate-2 absolute left-0 mt-2">
                <Marquee gradient={false} speed={200} pauseOnHover={false} className="bg-red-600 p-2">
                    <h1 className="text-9xl uppercase font-bold text-[#fcd462] bg-red-600 p-2">* DREAMZ Instrument technology * </h1>
                </Marquee>
            </div>

            <div className="min-h-[120vh] relative pt-[300px]">

                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,20,60,0.1),transparent_70%)]" /> */}


                <div className="flex flex-col mx-auto w-[80%] justify-center">
                    <h1 className="text-5xl border-b pb-3">Description</h1>
                    <p className="mt-5 text-justify">{singleMachine[0]?.description}</p>
                </div>
                <div className="flex flex-col mt-10 mx-auto w-[80%] justify-center">
                    <h1 className="text-5xl border-b pb-3">Main Features</h1>
                    <ul className="">
                        {singleMachine[0]?.features?.map((feature, index) => (
                            <li key={index} className="py-3 px-3 mb-2 border-[#d6595952] border-b">
                                <span className="text-xl flex items-center gap-5"><IoArrowRedoOutline className="text-reds" />
                                    {feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button onClick={() => handleDownload(singleMachine[0]?.pdf)} className="relative ml-[10%]  inline-flex mt-5 items-center px-12 py-3 overflow-hidden text-lg font-medium text-red-600 border-2 border-red-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-red-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <FaFilePdf />
                    </span>
                    <span className="relative">Download Details </span>
                </button>

                <a href="http://en.skyray-instrument.com/product/detail/81/5909" target="_blank" className="relative ml-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">Product Origin</span>
                    <span className="relative invisible">Product Origin</span>
                </a>

            </div>
        </main>
    );
};

export default SingleMachine;



import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdOutlineTempleHindu } from "react-icons/md";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { IoIosSpeedometer } from "react-icons/io";
import { GiLaserSparks } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

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
                <ChevronLeft className="w-12 h-12 text-white bg-red-500/20 p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-red-600" />
            ) : (
                <ChevronRight className="w-12 h-12 text-white bg-red-500/20 p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-red-600" />
            )}
        </motion.button>
    );
};