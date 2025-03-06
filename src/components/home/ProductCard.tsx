/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


type TMachine = {
  id: number;
  category_slug: string;
  machine_name: string;
  title: string;
  png_img: string;
  img_1: string;
  img_2: string;
  img_3: string;
  description: string;
  features:string
  
};

type TProps = {
  slug: string;
};
const ProductCard = ({ slug }: TProps) => {
    const [machines, setMachines] = useState<TMachine[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchMachines = async () => {
        try {
          setLoading(true);
          const response = await fetch("/machines.json");
          const data: TMachine[] = await response.json();
          setMachines(data)
        } catch (error) {
          console.error("Error fetching machines:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMachines();
    },[]);
    console.log(machines);
    const displayedMachines = machines.slice(0, 6);
  return (
    <div className="relative min-h-[120vh] ">

          <div className="absolute left-[45%] top-[5%]" >
          <div className="flex justify-center mt-5 z-20 relative">
            <h1 className="text-5xl text-[#f4c522] mr-10" data-aos="fade-up"
                        data-aos-duration="3000">Our Machines</h1>
          </div>
      </div>
       <div className="cardContainer">
          <div className="absolute w-full">
          <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#f4c7222a" stroke-width="1">
                        <path d="M 0 200 C 200 250, 300 350, 300 200 S 500 250, 600 300 S 700 350, 1000 100" />
                        <path d="M 0 200 C 200 230, 300 330, 300 200 S 500 230, 600 280 S 700 330, 1000 100" />
                        <path d="M 0 200 C 200 210, 300 310, 300 200 S 500 210, 600 260 S 700 310, 1000 100" />
                        <path d="M 0 200 C 200 190, 300 290, 300 200 S 500 190, 600 240 S 700 290, 1000 100" />
                        <path d="M 0 200 C 200 170, 300 270, 300 200 S 500 170, 600 220 S 700 270, 1000 100" />
                        <path d="M 0 200 C 200 150, 300 250, 300 200 S 500 150, 600 200 S 700 250, 1000 100" />
                        <path d="M 0 200 C 200 130, 300 230, 300 200 S 500 130, 600 180 S 700 230, 1000 100" />
                        <path d="M 0 200 C 200 110, 300 210, 300 200 S 500 110, 600 160 S 700 210, 1000 100" />
                        <path d="M 0 200 C 200 90, 300 190, 300 200 S 500 90, 600 140 S 700 190, 1000 100" />
                        <path d="M 0 200 C 200 70, 300 170, 300 200 S 500 70, 600 120 S 700 170, 1000 100" />
                        <path d="M 0 200 C 200 50, 300 150, 300 200 S 500 50, 600 100 S 700 150, 1000 100" />
                    </g>
                </svg>
          </div>
       {/* gradient bg  */}
       <div className="gradient-bg   lg:h-[120vh]  w-[50%]  absolute top-[-40%] right-[-20%] -z-20" ></div>
       <div className="gradient-bg   lg:h-[100vh]  w-[50%]  absolute top-[10%] left-[-20%] -z-20" ></div>
            {/* gradient bg end */}

            <div className="flex flex-wrap gap-20 min-h-screen justify-center mt-40">
        {loading ? (
          // 🌀 Loading Spinner
          <div className="flex items-center justify-center w-full h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>
          </div>
        ) : displayedMachines.length === 0 ? (
          // ❌ No Machines Found Message
          <div className="text-center text-gray-400 text-2xl">
            No machines found in this catalogue.
          </div>
        ) : (
          displayedMachines.map((machine) => (
            <div key={machine.id} className="cardLink mt-20 z-20">
              <div className="card">
                <div className="wrapper">
                  <Image
                    src={machine.img_1}
                    alt={machine.title}
                    height={500}
                    width={500}
                    className="coverimg rounded-lg"
                  />
                </div>
                <Image
                  src={machine.png_img}
                  alt={`${machine.title} Character`}
                  height={500}
                  width={500}
                  className="character"
                />
                <p className="title text-2xl mb-5 text-[#fcd362]">
                  {machine.title}
                </p>

                <Link
                  href={`/${slug}/${machine?.id}`}
                  className="title mb-5 text-center py-2 rounded-3xl bg-[#fcd3621e] backdrop-blur-sm text-[#fcd362]"
                >
                  View details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
   
  );
};

export default ProductCard;
