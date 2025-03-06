"use client";

import BannerScroll from "@/components/home/BannerScroll";
import Circle from "@/components/home/Circle";
import ClientPage from "@/components/home/ClientPage";
import Counter from "@/components/home/Counter";
import ExpertSolution from "@/components/home/ExpertSolution";
import GlobalPartnerTwo from "@/components/home/GlobalPartnerTwo";
import HeroSectionThree from "@/components/home/HeroSectionThree";
import HomeProductCategory from "@/components/home/HomeProductCategory";
import { Marquees } from "@/components/home/Marquee";
import PersonTwo from "@/components/home/PersonTwo";

import VideoSection from "@/components/home/VideoSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <HeroSectionThree/>
      <ExpertSolution />
      <PersonTwo/>
      <Counter/>
      <HomeProductCategory/>
      <VideoSection/>
      <Marquees/>
      <ClientPage/>
      <Circle/>
      <BannerScroll/>
      <GlobalPartnerTwo/>
      <WhyChooseUs/>
    </section>
  );
}
