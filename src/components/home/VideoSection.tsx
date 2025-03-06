"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiPause1, CiPlay1 } from "react-icons/ci";

const slides = [
    {
        video: "/assets/videos/1.mp4",
    },
];

export default function VideoSection() {

    const videoRef = useRef<HTMLVideoElement | null>(null); // ✅ TypeScript fix
    const [isPlaying, setIsPlaying] = useState(true); // Initially playing

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate video appearance, growth, and position
        gsap.fromTo(
            ".video",
            {
                opacity: 0,
                y: "50%", // Start from bottom
                width: "30%",
            },
            {
                opacity: 1,
                y: "0%", // Move to normal position
                width: "90%", // Expand to 90% width
                scrollTrigger: {
                    trigger: ".video",
                    start: "top 80%", // Start animation when video reaches 80% of viewport
                    end: "center center", // Keep the animation locked in place
                    scrub: true,
                    markers: false, // Set to true for debugging
                },
            }
        );

        // Shrink video back only when scrolling back up
        gsap.fromTo(
            ".video",
            {
                width: "90%", // Keep it at 90% width
            },
            {
                width: "30%", // Shrink when scrolling up
                y: "40%", // Move back down
                opacity: 0, // Fade out smoothly
                scrollTrigger: {
                    trigger: ".video",
                    start: "top 10%", // When the video reaches the top, start shrinking
                    end: "top -50%", // Continue shrinking as it moves out of view
                    scrub: true,
                },
            }
        );
    }, []);

    // ✅ TypeScript-safe Play/Pause function
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause(); // ✅ No TypeScript error now
            } else {
                videoRef.current.play(); // ✅ No TypeScript error now
            }
            setIsPlaying(!isPlaying);
        }
    };


    return (
        <div className=" flex min-h-[100vh] justify-center items-center relative">
            {/* gradient bg  */}
            <div className="gradient-bg  lg:h-[800px] w-[1000px] -z-20 absolute top-[-20%] "></div>
            {/* gradient bg end */}

            <h1 className="text-[20em] font-bold uppercase absolute top-[5%] text-[#ff34340c]">Dreamz</h1>

            <video
                ref={videoRef}
                className="video transition-all duration-300 ease-out rounded-lg z-10"
                autoPlay
                loop
                muted
                src={slides[0].video}
            />


            <button
                onClick={togglePlayPause}
                className="absolute h-20 w-20 flex justify-center pt-7 z-20 top-1/2 backdrop-blur-sm left-1/2 transform -translate-x-1/2 border border-[#ffffff36] -translate-y-1/2 bg-[#00000036] text-white p-3 rounded-full hover:bg-black/90 transition"
            >
                {isPlaying ? <CiPause1 size={20} /> : <CiPlay1 size={20} />}
            </button>

        </div>
    );
}