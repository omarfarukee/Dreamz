"use client";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { TiArrowRight } from "react-icons/ti";
import { CiGlobe } from "react-icons/ci";
import { LuMessageSquareShare } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useEffect, useState } from "react";

const FooterIcons = [
    { icon: <LuMessageSquareShare />, title: "Chat With Us", desc: "Live chat support available" },
    { icon: <CiGlobe />, title: "Visit Us", desc: "Schedule an office visit" },
    { icon: <FaRegClock />, title: "24/7 Support", desc: "Always here to help" },
];

export default function FooterTwo() {

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <footer className="relative bg-[#353530] mt-28">
            {/* Wave Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                <svg
                    className="absolute w-[100vw] -top-1 left-0"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        style={{
                            fill: "#01010f",
                            stroke: "#fcd462",  // Red stroke color
                            strokeWidth: "0",   // Adjust stroke thickness
                        }}
                    />
                </svg>


            </div>

            {/* Main Content */}
            <div className="relative container mx-auto px-4 pt-32 pb-16">
                {/* Floating Contact Cards */}
                <div className=" grid-cols-1 md:grid-cols-3 gap-6 -mt-48 mb-20 hidden">
                    {FooterIcons.map(({ icon, title, desc }, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-white">{desc}</p>
                                <TiArrowRight className="w-5 h-5 text-primary absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Footer Grid */} 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <HiOutlineSparkles className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Company</h2>
                        </div>
                        <p className="text-white">
                            Creating digital experiences that inspire and innovate.
                        </p>
                        <div className="flex flex-col gap-4">
                            {[{ icon: MdOutlineMarkEmailRead, text: "hello@company.com" }, { icon: SlPhone, text: "+1 (555) 123-4567" }, { icon: CiLocationOn, text: "123 Innovation Drive" }].map(({ icon: Icon, text }, index) => (
                                <div key={index} className="group flex items-center gap-3 text-white">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="group-hover:text-primary transition-colors duration-300">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-8">
                        {[{ title: "Company", links: ["About", "Careers", "Partners", "News"] }, { title: "Resources", links: ["Blog", "Newsletter", "Events", "Help center"] }].map((section, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-white hover:text-primary flex items-center group">
                                                <span className="relative">
                                                    {link}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2 bg-[#ffffff0e] rounded-2xl p-8">
                        <h3 className="text-xl font-semibold mb-2 text-yellow-500">Stay in the Loop</h3>
                        <p className=" mb-6">Subscribe to our newsletter for exclusive updates and insights.</p>
                        <form className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-primary focus:outline-none transition-colors duration-300"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white">
                        <p>© {new Date().getFullYear()} Company. All rights reserved.</p>
                        <div className="flex gap-8 text-sm">
                            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms</a>
                            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
