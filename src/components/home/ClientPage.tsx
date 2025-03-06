/* eslint-disable @next/next/no-img-element */
"use client";
import pic1 from "@/assets/client/1.jpg"
import pic2 from "@/assets/client/2.jpg"
import pic3 from "@/assets/client/3.jpg"
import pic4 from "@/assets/client/4.jpg"
import pic5 from "@/assets/client/5.jpg"
import pic6 from "@/assets/client/6.jpg"

import pic7 from "@/assets/client/7.jpg"
import pic8 from "@/assets/client/8.jpg"
import pic9 from "@/assets/client/9.jpg"
import pic10 from "@/assets/client/10.jpg"
import pic11 from "@/assets/client/11.jpg"

import pic12 from "@/assets/client/12.jpg"
import pic13 from "@/assets/client/13.jpg"
import pic14 from "@/assets/client/14.jpg"
import pic15 from "@/assets/client/15.jpg"
import pic16 from "@/assets/client/16.jpg"

import pic17 from "@/assets/client/17.jpg"
import pic18 from "@/assets/client/18.jpg"
import pic19 from "@/assets/client/19.jpg"
import pic20 from "@/assets/client/20.jpg"
import pic21 from "@/assets/client/21.jpg"


import { useEffect, useState } from "react";

const clientsFirst = [
  {
    name: "Client 1",
    image: pic1.src
  },
  {
    name: "Client 2",
    image: pic2.src
  },
  {
    name: "Client 3",
    image: pic3.src
  },
  {
    name: "Client 4",
    image: pic4.src
  },
  {
    name: "Client 5",
    image: pic5.src
  },
  {
    name: "Client 6",
    image: pic6.src
  }
];

const clientsSecond = [
  {
    name: "Client 1",
    image: pic7.src
  },
  {
    name: "Client 2",
    image: pic8.src
  },
  {
    name: "Client 3",
    image: pic9.src
  },
  {
    name: "Client 4",
    image: pic10.src
  },
  {
    name: "Client 5",
    image: pic11.src
  },
  {
    name: "Client 6",
    image: pic12.src
  }
];


const clientsThird = [
  {
    name: "Client 1",
    image: pic13.src
  },
  {
    name: "Client 2",
    image: pic14.src
  },
  {
    name: "Client 3",
    image: pic15.src
  },
  {
    name: "Client 4",
    image: pic16.src
  },
  {
    name: "Client 5",
    image: pic17.src
  },
  {
    name: "Client 6",
    image: pic18.src
  }
];

const clientsFour = [
  {
    name: "Client 1",
    image: pic17.src
  },
  {
    name: "Client 2",
    image: pic18.src
  },
  {
    name: "Client 3",
    image: pic19.src
  },
  {
    name: "Client 4",
    image: pic20.src
  },
  {
    name: "Client 5",
    image: pic21.src
  },
];


export default function ClientPage() {
  const [duplicatedClients, setDuplicatedClients] = useState(clientsFirst);
  const [duplicatedClientsSecond, setDuplicatedClientsSecond] = useState(clientsSecond);  
  const [duplicatedClientsThird, setDuplicatedClientsThird] = useState(clientsThird);
  const [duplicatedClientsFour, setDuplicatedClientsFour] = useState(clientsFour);


  useEffect(() => {
    setDuplicatedClients([...clientsFirst, ...clientsFirst, ...clientsFirst]);
  }, []);



  useEffect(() => {
    setDuplicatedClientsSecond([...clientsSecond, ...clientsSecond, ...clientsSecond]);
  }, []);


  useEffect(() => {
    setDuplicatedClientsThird([...clientsThird, ...clientsThird, ...clientsThird]);
  }, []);

  useEffect(() => {
    setDuplicatedClientsThird([...clientsThird, ...clientsThird, ...clientsThird]);
  }, []);


  useEffect(() => {
    setDuplicatedClientsFour([...clientsFour, ...clientsFour, ...clientsFour]);
  }, []);

  return (
    <main className="min-h-screen  text-white overflow-hidden relative">
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
      <div>
          <div className="flex justify-center mt-5 mb-20">
            <h1 className="text-5xl text-[#fcd462]">Our Honorable Clients</h1>
          </div>
      </div>

       <div className="gradient-bg   lg:h-[800px] w-[1000px]  absolute -z-20  top-[5%] left-[80%] "></div>
      <div className="flex justify-center">
      <div className=" w-[85%] flex justify-center">
        
        <div className="flex gap-8">
          {/* Left Marquee (Upward) 01 */}
          <div className="relative   w-[300px]">
            <div className="h-[800px] overflow-hidden relative w-[300px]">
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ffffdf] to-transparent z-10"></div>
              
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffdf] to-transparent z-10"></div>
              
              <div className="marquee-content hover:pause">
                {duplicatedClients.map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="w-full p-4"
                  >
                    <div className="relative group">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-48 object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                          {client.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Marquee (Downward) 02 */}
          <div className="relative ">
            <div className="h-[800px] overflow-hidden relative w-[300px]">
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ffffdf] to-transparent z-10"></div>
              
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffdf] to-transparent z-10"></div>
              
              <div className="marquee-content-down hover:pause">
                {duplicatedClientsSecond.map((client, idx) => (
                  <div
                    key={`${client.name}-down-${idx}`}
                    className="w-full p-4"
                  >
                    <div className="relative group">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-48 object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                          {client.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Left Marquee (Upward) 03*/}
          <div className="relative  w-[300px]">
            <div className="h-[800px] overflow-hidden relative w-[300px]">
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ffffdf] to-transparent z-10"></div>
              
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffdf] to-transparent z-10"></div>
              
              <div className="marquee-content hover:pause">
                {duplicatedClientsThird.map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="w-full p-4"
                  >
                    <div className="relative group">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-48 object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                          {client.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

              {/* Right Marquee (Downward) */}
          <div className="relative ">
            <div className="h-[800px] overflow-hidden relative w-[300px]">
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ffffdf] to-transparent z-10"></div>
              
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffdf] to-transparent z-10"></div>
              
              <div className="marquee-content-down hover:pause">
                {duplicatedClientsFour.map((client, idx) => (
                  <div
                    key={`${client.name}-down-${idx}`}
                    className="w-full p-4"
                  >
                    <div className="relative group">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-48 object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                          {client.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </main>
  );
}