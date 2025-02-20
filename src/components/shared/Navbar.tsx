"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import navLogo from "@/assets/logo/logo.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to("#menu-overlay", {
      top: "0%",
      duration: 0.8,
      ease: "power2.inOut",
    });

    tl.current.to(
      ".menu-item",
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    if (menuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed lg:h-[100px]  w-full z-50 transition-all duration-300 h-20 ${isScrolled ? "bg-[#01010f] shadow-2xl shadow-[#e5010c23]" : "bg-transparent"}`}
    >
      <div className="mx-auto sm:px-6 lg:px-28 mt-5">
        <div className="flex items-center justify-between h-16 my-2">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/home" className="flex items-center space-x-2">
              <Image src={navLogo} className="w-40" alt="nav-logo" />
            </Link>
          </div>
          <div onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "active flex items-center gap-3" : " flex items-center gap-3"}>
            <p className={`uppercase text-2xl cursor-pointer ${isScrolled?"":"text-white"}`}>menu</p>
              <button id="menu-toggle" >
            <div className="line rounded-2xl lg:w-16 w-8"></div>
            <div className="line rounded-2xl hidden"></div>
            <div className="line rounded-2xl lg:w-16 w-8"></div>
          </button>
          </div>
        
        </div>
      </div>
      <div id="menu-overlay" className="fixed uppercase top-[-100%] left-0 w-full h-full bg-black z-0 flex flex-col justify-center items-center border-b rounded-b-[20%]">
        <Link onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "active flex items-center group menu-item text-white mb-4" : " flex menu-item text-white mb-4 items-center"} href="/"><div className="text-5xl font-thin">Home <p className="h-[2px] w-4 bg-primary group-hover:w-full transition-all duration-700"></p></div></Link>
        <Link onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "active flex items-center group menu-item text-white mb-4" : " flex menu-item text-white mb-4 items-center"} href="/Gallery"><div className="text-5xl font-thin">Gallery<p className="h-[2px] w-4 bg-primary group-hover:w-full transition-all duration-700"></p></div></Link>
        <Link href="/about" className="menu-item text-white text-2xl mb-4 group"><div className="text-5xl font-thin">About us<p className="h-[2px] w-4 bg-primary group-hover:w-full transition-all duration-700"></p></div></Link>
        <Link href="/about" className="menu-item text-white text-2xl mb-4 group"><div className="text-5xl font-thin">contact<p className="h-[2px] w-4 bg-primary group-hover:w-full transition-all duration-700"></p></div></Link>
        <Link onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "active flex items-center group menu-item text-white mb-4" : " flex menu-item text-white mb-4 items-center"} href="/Secondary"><div className="text-5xl font-thin">Secondary Slider <p className="h-[2px] w-4 bg-primary group-hover:w-full transition-all duration-700"></p></div></Link>
      </div>
    </nav>
  );
};

export default Navbar;
