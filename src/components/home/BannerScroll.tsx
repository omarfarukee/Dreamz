/* eslint-disable @next/next/no-img-element */
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { BsArrowDown } from "react-icons/bs";


interface ArtData {
  id: number;
  image: string;
  alt?: string;
  story: string
}

// Dummy data instead of API
const dummyData: ArtData[] = [
  {
    id: 1,
    image: "/assets/art/art1.png",
    alt: "Art 1",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 2,
    image: "/assets/art/art3.png",
    alt: "Art 2",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 3,
    image: "/assets/art/art2.png",
    alt: "Art 3",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 4,
    image: "/assets/art/art4.png",
    alt: "Art 4",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 5,
    image: "/assets/art/art5.png",
    alt: "Art 5",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function BannerScroll() {
  const [data, setData] = useState<ArtData[]>([]);
  const ArtImgRefs = useRef<HTMLDivElement[]>([]);
  const ArtImgContainerRef = useRef<HTMLDivElement | null>(null);

  // Fetching dummy data instead of API
  useEffect(() => {
    setTimeout(() => {
      setData(dummyData); // Simulating API fetch delay
    }, 500);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (data.length > 0 && ArtImgContainerRef.current) {
      const isMobile = window.innerWidth <= 768;
      const xPercentValue = isMobile
        ? -120 * (ArtImgRefs.current.length - 1)
        : -106 * (ArtImgRefs.current.length - 1);

      const animation = gsap.to(ArtImgRefs.current, {
        xPercent: xPercentValue,
        ease: "none",
        scrollTrigger: {
          trigger: ArtImgContainerRef.current,
          scrub: 1,
          end: `+=${ArtImgContainerRef.current.offsetWidth}`,
          pin: true,
          anticipatePin: 1, // ✅ Prevents pinning issues
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill()); // ✅ Ensures proper cleanup
      };
    }
  }, [data]);

  // Callback ref to assign elements correctly
  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) ArtImgRefs.current[index] = el;
  }, []);

  return (
    <main className="w-full  mt-20 mb-20 relative">
      <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute top-[-3%] -z-10 left-[-20%]"></div>
      <div className="flex justify-center mt-20">
        <h1 className="text-5xl">Some Art Work</h1>
      </div>
      <section
        className="min-h-screen flex flex-nowrap items-center space-x-10 md:pl-[22%] pl-0"
        ref={ArtImgContainerRef}
      >

        <div className="absolute left-[5%] mt-[4%]">
          <div className="text-7xl font-bold absolute md:left-[85vw] left-[75vw] top-[84%] h-[80px]">
            <BsArrowDown className="animate-float" />
            <small className="text-sm absolute left-5 top-15">scroll</small>
          </div>
        </div>
        {/* <div className="absolute left-[5%] mt-[4%]">
          <div className="flex" data-aos="fade-right" data-aos-duration="3000">
          
            <div className="text-[#27685881] text-8xl mr-20 font-bold flex flex-col justify-center text-center mt-[110px]">
              <ul>G</ul>
              <ul>L</ul>
              <ul>O</ul>
              <ul>B</ul>
              <ul>A</ul>
              <ul>L</ul>
            </div>
            <div className="md:text-8xl text-4xl mt-[40%] md:mt-[85%] text-[#e5c96f1f] uppercase font-bold">
              <h1 className="">partners</h1>
            </div>
            
          </div>
        </div> */}

        {data.map((item, index) => (
          <div
            key={item.id}
            className="md:w-[100vh] w-[90%] md:mr-0 mr-20 shrink-0 rounded-3xl overflow-hidden relative group rotate-1"
            ref={(el) => setRef(el, index)}
          >
            <div>
              <img
                src={item.image}
                className="w-full"
                alt={item.alt || `Image ${index + 1}`}
              />
            </div>

            {/* The text overlay with story, shown on hover */}
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <div className="text-lg font-semibold max-w-[80%] text-center p-5 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 delay-200">
                {item?.story}
              </div>
            </div>
          </div>
        ))}



      </section>
    </main>
  );
}

