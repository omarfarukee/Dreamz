"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbCirclesRelation } from "react-icons/tb";
import Image from "next/image";
import CountUp from "react-countup";
import wave from "@/assets/wave/wave.png";
import golden from "@/assets/wave/golden.png";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterOn(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="h-[70vh] z-20 relative mb-[400px] mt-40" ref={counterRef}>
                          <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute -z-30 top-[-20%] left-[-20%]"></div>
      <div className="flex justify-center flex-col items-center" data-aos="fade-up"
                        data-aos-duration="3000">
        <div>
          <span className="text-5xl text-[#fcd462]">Dreamz</span>{" "}
          <span className="text-2xl">at a glance</span>
        </div>
        <div className="flex items-center text-xl gap-2 mt-5">
          <TbCirclesRelation size={20} className="text-red-500" />
          <p>Innovating industries Empowering Solution</p>
        </div>
      </div>

      <div className=" absolute" data-aos="fade-up"
                        data-aos-duration="3000">
        <Image src={wave} alt="wave" />
      </div>

      {counterOn && (
        <div className="flex gap-5 mt-5 md:mt-16  w-[1200px] ml-[3%] overflow-hidden relative">
          <div className="w-[32%]  h-56 rounded-2xl bg-[#fcd36233] p-3" data-aos="fade-up"
                        data-aos-duration="1000">
            <p className="mt-2 text-9xl font-semibold text-[#fcd362]">
              <CountUp start={0} end={17} duration={4} delay={0} />+
            </p>
            <p className="text-xl font-semibold mt-2 ml-2 text-red-600">Years of Experience</p>
          </div>
          <div className="w-[40%]  h-56  rounded-2xl border border-[#fcd36233] p-3" data-aos="fade-up"
                        data-aos-duration="1000"  data-aos-delay="500">
            <p className="mt-2 text-9xl font-semibold text-[#fcd362]">
              <CountUp start={0} end={40000} duration={2} delay={0.5} />+
            </p>
            <p className="text-xl font-semibold mt-2 ml-2 text-red-600">Machine Sold</p>
          </div>
          <div className="w-[32%]  h-56 rounded-2xl bg-[#fcd36233] p-3" data-aos="fade-up"
                        data-aos-duration="1000"  data-aos-delay="1000">
            <p className="mt-2 text-9xl font-semibold text-[#fcd362]">
              <CountUp start={0} end={20} duration={3} delay={1} />+
            </p>
            <p className="text-xl font-semibold mt-2 ml-2 text-red-600">Monthly Services</p>
          </div>
        </div>
        
      )}
        <div className=" absolute ml-[3%] mt-20 animate-float" data-aos="fade-up"
                        data-aos-duration="3000">
        <Image src={golden} className="w-64" alt="wave" />
      </div>
    </div>
  );
};

export default Counter;
