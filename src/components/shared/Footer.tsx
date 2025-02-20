import Image from "next/image";
import logo from "@/assets/logo/logo.png"
import {FaLocationDot, FaTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoCall, IoLogoYoutube } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
    return (
        <footer className="h-[600px] px-20 relative overflow-hidden">

            <div className="gradient-bg   lg:h-[800px] w-[1000px] -z-10 absolute  left-[-25%]"></div>
            <div className="gradient-bg   lg:h-[800px] w-[1000px]  -z-10  absolute bottom-[-40%] right-[-25%]"></div>


            <div className="flex p-20 border-b  border-red-600">
                <div className="w-[50%] h-full flex flex-col">
                    <Image src={logo} alt="logo" />
                    <p className="w-[400px] text-sm text-justify">Thewebmax ipsum dolor sit amet, interior adipiscing elit, sed diam nonummy nibh is euismod tincidunt ut laoreet dolore agna aliquam erat . wisi enim ad minim veniam, quis tation. sit amet, consec tetuer. ipsum dolor sit amet, consectetuer adipiscing. ipsum dolor sit .</p>
                </div>

                <div className="w-[25%]  h-full">
                    <p className="text-lg font-semibold text-[#e5010b]">Quick Links</p>
                    <ul className="mt-10">
                        <li className="mt-3">Home</li>
                        <li className="mt-3">About</li>
                        <li className="mt-3">Contact</li>
                        <li className="mt-3">Product</li>
                    </ul>
                </div>
                <div className="w-[25%]  h-full">
                    <p className="text-lg font-semibold text-[#e5010b]">Social Links</p>
                    <div className="mt-10 flex gap-3">
                        <a className="mt-3 h-12 w-12 hover:bg-[#e5010b] text-[#e5010b] duration-300 hover:text-white  flex justify-center text-2xl shadow-lg items-center rounded-full"><FaFacebookSquare/></a>
                        <a className="mt-3 h-12 w-12 hover:bg-[#e5010b] text-[#e5010b] duration-300 hover:text-white  flex justify-center text-2xl shadow-lg items-center rounded-full"><IoLogoYoutube/></a>
                        <a className="mt-3 h-12 w-12 hover:bg-[#e5010b] text-[#e5010b] duration-300 hover:text-white  flex justify-center text-2xl shadow-lg items-center rounded-full"><AiFillInstagram/></a>
                        <a className="mt-3 h-12 w-12 hover:bg-[#e5010b] text-[#e5010b] duration-300 hover:text-white  flex justify-center text-2xl shadow-lg items-center rounded-full"><FaTwitter /></a>
                       
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly py-5 border-b  border-red-600">
                <div className="w-[300px] shadow-lg p-5 flex flex-col justify-center rounded-lg hover:bg-[#e5010b] duration-300 hover:text-white group">
                    <p className="text-2xl text-[#e5010b] group-hover:text-white flex gap-2 items-center"><FaLocationDot /> Address</p>
                    <p>No.123 Chalingt Gates, Supper market New York</p>
                </div>
                <div className="w-[300px] shadow-lg p-5 flex flex-col justify-center rounded-lg hover:bg-[#e5010b] duration-300  hover:text-white group">
                    <p className="text-2xl text-[#e5010b] group-hover:text-white flex gap-2 items-center"><MdAttachEmail /> Email</p>
                    <p>dreams@.business.com</p>
                </div>
                <div className="w-[300px] shadow-lg p-5 flex flex-col justify-center rounded-lg hover:bg-[#e5010b] duration-300 hover:text-white group ">
                    <p className="text-2xl text-[#e5010b] group-hover:text-white flex gap-2 items-center"><IoCall /> Phone</p>
                    <p>+001 2520 53620</p>
                </div>
            </div>

            <div className="flex items-center justify-between h-16 text-[#e5010b]">
                <p className="text-sm">
                    © 2023 Your Company. All Rights Reserved. Designed By thewebmax.</p>
                <p className="text-sm underline cursor-pointer font-semibold">Privacy & policy</p>
            </div>
        </footer>
    )
}