/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";



import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const images = [
    {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        title: "Nature Valley",
    },
    {
        url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        title: "Forest Path",
    },
    {
        url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
        title: "Waterfall",
    },
    {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        title: "Mountain Range",
    },
    {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        title: "Deep Woods",
    },
    {
        url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
        title: "Sunset Lake",
    },
    {
        url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e",
        title: "Desert",
    },
    {
        url: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6",
        title: "Ocean View",
    },
    {
        url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
        title: "Mountain Peak",
    },
    {
        url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0",
        title: "Alpine Lake",
    },
    {
        url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0",
        title: "Alpine Lake",
    },
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [scale, setScale] = useState(1);

    const handlePrevious = () => {
        if (selectedIndex === null) return;
        setScale(1);
        setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    };

    const handleNext = () => {
        if (selectedIndex === null) return;
        setScale(1);
        setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    };

    const handleZoomIn = () => {
        setScale(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = () => {
        setScale(prev => Math.max(prev - 0.5, 1));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any) => {
        if (selectedIndex === null) return;
        if (e.key === "ArrowLeft") handlePrevious();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") {
            setSelectedIndex(null);
            setScale(1);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-background to-accent">
                <div className="relative h-[70vh] w-full  mb-20 overflow-hidden">
                    {/* Video Background */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/videos/gallery.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold uppercase tracking-wider">Gallery</h1>
                    </div>
                </div>
                <div className="absolute z-30  top-[30%] w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#01010f" fill-opacity="1" d="M0,160L11.4,154.7C22.9,149,46,139,69,144C91.4,149,114,171,137,186.7C160,203,183,213,206,224C228.6,235,251,245,274,224C297.1,203,320,149,343,149.3C365.7,149,389,203,411,202.7C434.3,203,457,149,480,160C502.9,171,526,245,549,240C571.4,235,594,149,617,138.7C640,128,663,192,686,218.7C708.6,245,731,235,754,245.3C777.1,256,800,288,823,277.3C845.7,267,869,213,891,202.7C914.3,192,937,224,960,208C982.9,192,1006,128,1029,112C1051.4,96,1074,128,1097,160C1120,192,1143,224,1166,218.7C1188.6,213,1211,171,1234,170.7C1257.1,171,1280,213,1303,229.3C1325.7,245,1349,235,1371,213.3C1394.3,192,1417,160,1429,144L1440,128L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path></svg>
                </div>

                <div className="max-w-[90%] mx-auto">

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((image, index) => (
                            <ImageCard
                                key={index}
                                image={image}
                                index={index}
                                onClick={() => {
                                    setSelectedIndex(index);
                                    setScale(1);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        onClick={() => {
                            setSelectedIndex(null);
                            setScale(1);
                        }}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => {
                                    setSelectedIndex(null);
                                    setScale(1);
                                }}
                                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-50"
                            >
                                <IoClose />

                            </button>

                            {/* Navigation Controls */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                            >
                                <HiChevronLeft />

                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                            >
                                <HiChevronRight />

                            </button>

                            {/* Zoom Controls */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <button
                                    onClick={handleZoomIn}
                                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                                >
                                    <CiZoomIn />

                                </button>
                                <button
                                    onClick={handleZoomOut}
                                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                                >
                                    <CiZoomOut />

                                </button>
                            </div>

                            <motion.div
                                initial={false}
                                animate={{ scale }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                style={{ cursor: scale > 1 ? "grab" : "auto" }}
                                className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
                            >
                                <img
                                    src={images[selectedIndex].url}
                                    alt={images[selectedIndex].title}
                                    className="w-full h-full object-contain rounded-lg"
                                    style={{
                                        transformOrigin: "center",
                                        pointerEvents: "none",
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                                    <h2 className="text-xl font-semibold">{images[selectedIndex].title}</h2>
                                    <p className="text-sm text-gray-300">
                                        Image {selectedIndex + 1} of {images.length}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const ImageCard = ({
    image,
    index,
    onClick
}: {
    image: { url: string; title: string };
    index: number;
    onClick: () => void;
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block w-full cursor-pointer"
            onClick={onClick}
        >
            <div className="relative">
                <img
                    src={image.url}
                    alt={image.title}
                    className="w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                        <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Gallery;