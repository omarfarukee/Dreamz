/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLogo from "@/assets/logo/logo2.png";
import { GoChevronDown } from "react-icons/go";
import { GiGemChain, GiGoldBar, GiGoldNuggets, GiGoldStack, GiMeltingMetal } from "react-icons/gi";
import { MdDiamond } from "react-icons/md";
import { AiFillGold } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
interface ICategory {
    id: number;
    category: string;
    slug: string
}

const NavbarTwo = () => {
    const pathname = usePathname();
    const isActive = pathname === "/";
    const [categories, setCategories] = useState<ICategory[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/category.json"); // Fetch from /public/data.json
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchData();
    }, []);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div
            className={`fixed  w-full z-50 transition-all duration-500   rounded-br-2xl rounded-bl-xl ${isScrolled ? "bg-gradient-to-r  from-[#edce67] to-[#f8787e] shadow-md h-[110px] px-20 py-2" : "h-[90px] px-16"
                }`}
        >
            <div className="flex justify-between">
                <div className="relative overflow-hidden text-2xl leading-6 text-white uppercase cursor-pointer group">
                    <Link href="/">
                        <img
                            src={navLogo.src}
                            className="w-40 group-hover:-translate-y-[120%] inline-block p-1 transition duration-500 ease-out"
                            alt=""
                        />
                    </Link>
                    <Link href="/">
                        <img
                            src={navLogo.src}
                            className="w-40 absolute left-0 rotate-12 inline-block translate-y-[120%] p-1 transition duration-500 ease-out group-hover:-translate-y-0 group-hover:rotate-0"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="flex gap-10 items-center mt-4">
                    <div
                        className="relative h-10 overflow-hidden text-xl leading-6  uppercase cursor-pointer group">
                        <Link className={`${isActive ? "text-red-600" : "text-white"}`} href="/">
                            <span className="group-hover:-translate-y-[120%] inline-block p-1 transition duration-500 ease-out">
                                <p className="flex items-center gap-1">HOME</p>
                            </span>
                        </Link>
                        <Link className={`${isActive ? "text-red-600" : "text-white"}`} href="/">
                            <span className="absolute left-0 rotate-12 inline-block translate-y-[120%] p-1 transition duration-500 ease-out group-hover:-translate-y-0 group-hover:rotate-0">
                                <p className="flex items-center gap-1">HOME</p>
                            </span>
                        </Link>
                    </div>

                    <div className="relative group">
                        <div className="relative h-10 overflow-hidden text-xl leading-6 text-white uppercase cursor-pointer">

                            <Link href="/" className="relative block">
                                <span className="group-hover:-translate-y-[120%] inline-block p-1 transition duration-500 ease-out">
                                    <p className="flex items-center gap-1">products <GoChevronDown /></p>
                                </span>
                                <span className="absolute left-0 rotate-12 inline-block translate-y-[140%] p-1 transition duration-500 ease-out group-hover:-translate-y-0 group-hover:rotate-0">
                                    <p className="flex items-center gap-1">products <GoChevronDown /></p>
                                </span>
                            </Link>


                        </div>

                        <div className="submenu absolute rounded-lg ">
                            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_70%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,20,60,0.1),transparent_70%)]" /> */}
                            <div className=" left-0  opacity-0 invisible transform  pl-10 justify-center flex translate-y-4  transition-all duration-300 text-black  rounded-lg  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                                <ul className="flex w-[65%] ml-[3%] mt-[2%] justify-center flex-wrap gap-5">
                                    {categories.map((item) => (
                                        <Link key={item.id} href={`/${item?.slug}`} className="submenu-item text-xl flex gap-1 px-4 py-2 hover:text-red-500 w-[300px] items-center ">
                                            <p>{item?.category === "gold melting machine" && <GiMeltingMetal className="text-6xl text-red-600" />}</p>
                                            <p></p>{item?.category === "diamond testing machine" && <MdDiamond className="text-6xl text-red-600" />}
                                            <p></p>{item?.category === "gold hallmark machine" && <GiGoldBar className="text-6xl text-red-600" />}
                                            <p></p>{item?.category === "gold testing machine" && <GiGoldStack className="text-6xl text-red-600" />}
                                            <p></p>{item?.category === "gold cleaning" && <AiFillGold className="text-6xl text-red-600" />}
                                            <p></p>{item?.category === "gold refining machine" && <GiGoldNuggets className="text-6xl text-red-600" />}
                                            <p></p>{item?.category === "chain making machine" && <GiGemChain className="text-6xl text-red-600" />}

                                            {item.category}</Link>


                                    ))}
                                </ul>

                            </div>
                        </div>

                    </div>

                    <div
                        className="relative h-10 overflow-hidden text-xl leading-6 text-white uppercase cursor-pointer group">
                        <Link className={`${isActive ? "" : ""}`} href="/">
                            <span className="group-hover:-translate-y-[120%] inline-block p-1 transition duration-500 ease-out">
                                <p className="flex items-center gap-1">About us </p>
                            </span>
                        </Link>
                        <Link className={`${isActive ? "" : ""}`} href="/">
                            <span className="absolute left-0 rotate-12 inline-block translate-y-[130%] p-1 transition duration-500 ease-out group-hover:-translate-y-0 group-hover:rotate-0">
                                <p className="flex items-center gap-1">About us</p>
                            </span>
                        </Link>
                    </div>
                </div>


                <a href="#_" className="relative inline-flex items-center px-12 mt-5 h-16 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <BiSolidPhoneCall size={20} />

                    </span>
                    <span className="relative">Contact</span>
                </a>
            </div>
        </div>
    );
};

export default NavbarTwo;