'use client';

import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';
import navLogo from "@/assets/logo/logo2.png";
import Image from 'next/image';
export function FooterTwo() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className="relative min-h-[80vh]">

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
                            fill: "#ffffdf",
                            stroke: "#fcd462",  // Red stroke color
                            strokeWidth: "0",   // Adjust stroke thickness
                        }}
                    />
                </svg>


            </div>

            {/* Animated background effects */}
            <div className="absolute inset-0 overflow-hidden bg-[#f4c522]">
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,20,60,0.1),transparent_70%)]" /> */}
                {/* Floating particles */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-gold/30 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${i * 2}s`,
                                animationDuration: `${8 + i * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto h-full px-10 pt-[10%]">
                {/* Main footer content */}
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Brand section */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src={navLogo} alt='logo' className='w-40'/>
                        </div>
                        <p className=" leading-relaxed text-lg ">
                            Where innovation meets elegance. Creating digital experiences that leave a lasting impression.
                        </p>
                        <div className="pt-4">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r duration-300 transition-all from-yellow-400 to-red-600/20 border border-yellow-100 hover:bg-yellow-200">
                                <Flame className="w-5 h-5 text-gold mr-2 animate-flicker" />
                                <span className="text-gold">Subscribe</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 space-y-8">
                        <h3 className="text-red-600 font-semibold text-xl">Navigation</h3>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="group relative  hover:text-gold transition-colors duration-300 flex items-center"
                                    >
                                        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-red-600 group-hover:w-full transition-all duration-300" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect section */}
                    <div className="md:col-span-4 space-y-8">
                        <h3 className="text-red-600 font-semibold text-xl">Connect With Us</h3>

                        {/* Social Media Icons with enhanced hover effects */}
                        <div className="flex justify-start gap-6">
                            {[
                                { Icon: Facebook, label: 'Facebook', href: '#', color: '#1877f2' },
                                { Icon: Twitter, label: 'Twitter', href: '#', color: '#1da1f2' },
                                { Icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0a66c2' },
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            ].map(({ Icon, label, href, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="group relative"
                                    aria-label={label}
                                >
                                    {/* Outer circle with rotating border */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-red-600 to-gold rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 group-hover:animate-spin"></div>

                                    {/* Main circle */}
                                    <div className="relative w-12 h-12 rounded-full bg-[#c0912833] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Icon */}
                                        <Icon className="w-5 h-5  group-hover:text-gold transition-all duration-500 relative z-10 group-hover:animate-bounce" />

                                        {/* Ripple effect */}
                                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                                            <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping"></div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-[#c0912833] flex items-center justify-center group-hover:bg-gradient-to-br from-gold/20 to-red-600/20 transition-colors duration-300">
                                    <Mail className="w-4 h-4  group-hover:text-gold transition-colors duration-300" />
                                </div>
                                <a href="mailto:contact@yourbrand.com" className=" group-hover:text-gold transition-colors duration-300">
                                    contact@yourbrand.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-[#c0912833] flex items-center justify-center group-hover:bg-gradient-to-br from-gold/20 to-red-600/20 transition-colors duration-300">
                                    <Phone className="w-4 h-4  group-hover:text-gold transition-colors duration-300" />
                                </div>
                                <a href="tel:+1234567890" className=" group-hover:text-gold transition-colors duration-300">
                                    +1 (234) 567-890
                                </a>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-[#c0912833] flex items-center justify-center group-hover:bg-gradient-to-br from-gold/20 to-red-600/20 transition-colors duration-300">
                                    <MapPin className="w-4 h-4  group-hover:text-gold transition-colors duration-300" />
                                </div>
                                <span className=" group-hover:text-gold transition-colors duration-300">
                                    123 Business Avenue, Suite 100<br />
                                    New York, NY 10001
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={`mt-16 pt-8 border-t border-gray-800 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500">
                            © {new Date().getFullYear()} Your Brand. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-gray-500">
                            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy</a>
                            <a href="#" className="hover:text-gold transition-colors duration-300">Terms</a>
                            <a href="#" className="hover:text-gold transition-colors duration-300">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}