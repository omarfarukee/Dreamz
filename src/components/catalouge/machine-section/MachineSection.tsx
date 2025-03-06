"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

const MachineSection = ({ slug }: TProps) => {
  const [machines, setMachines] = useState<TMachine[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (!slug) return;

    const fetchMachines = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch("/machines.json"); // Adjust path if needed
        const data: TMachine[] = await response.json();

        // Filter machines by category_slug
        const filteredMachines = data.filter((machine) => machine?.category_slug === slug);
        setMachines(filteredMachines);
      } catch (error) {
        console.error("Error fetching machines:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMachines();
  }, [slug]);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoSources: any = {
    "gold-testing-machine": "/assets/videos/goldtest.mp4",
    "gold-hallmark-machine": "/assets/videos/hallmark.mp4",
    "gold-melting-machine": "/assets/videos/melting.mp4",
    "diamond-testing-machine": "/assets/videos/diamondTest.mp4",
    "gold-refining-machine": "/assets/videos/refining.mp4",
    "chain-making-machine": "/assets/videos/chianMaking.mp4",
    "gold-cleaning": "/assets/videos/goldBar.mp4",
  };
  // Get the video source or use a default fallback
  const videoSrc = videoSources[slug];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const titleById: any = {
    "gold-testing-machine": "gold testing machine",
    "gold-hallmark-machine": "gold hallmark machine",
    "gold-melting-machine": "gold melting machine",
    "diamond-testing-machine": "diamond testing machine",
    "gold-refining-machine": "gold refining machine",
    "chain-making-machine": "chain making machine",
    "gold-cleaning": "gold cleaning",
  };

  const heroTitle = titleById[slug]

  return (
    <main>

      <div className="relative w-full h-[50vh]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />

          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

        {/* Centered Content */}
        <div className="absolute z-30 inset-0 flex items-center justify-center  text-center">
          <h1 className="text-9xl p-2 uppercase rounded-xl bg-transparent  shadow-xl font-bold mt-[23.2%] bg-gradient-to-r  from-[#f4c522] to-[#ffd87e] bg-clip-text text-transparent ">
            {heroTitle}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-20 min-h-screen justify-center mt-40">
      <div className="absolute w-full">
                <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#f4c7221f" stroke-width="1">
                        <path d="M 0 300 C 300 250, 300 350, 300 100 S 500 250, 600 300 S 700 350, 1000 100"></path>
                        <path d="M 0 290 C 280 230, 300 330, 300 100 S 500 230, 600 280 S 700 330, 1000 100"></path>
                        <path d="M 0 280 C 260 210, 300 310, 300 100 S 500 210, 600 260 S 700 310, 1000 100"></path>
                        <path d="M 0 270 C 240 190, 300 290, 300 100 S 500 190, 600 240 S 700 290, 1000 100"></path>
                        <path d="M 0 260 C 220 170, 300 270, 300 100 S 500 170, 600 220 S 700 270, 1000 100"></path>
                        <path d="M 0 250 C 200 150, 300 250, 300 100 S 500 150, 600 200 S 700 250, 1000 100"></path>
                        <path d="M 0 240 C 180 130, 300 230, 300 100 S 500 130, 600 180 S 700 230, 1000 100"></path>
                        <path d="M 0 230 C 160 110, 300 210, 300 100 S 500 110, 600 160 S 700 210, 1000 100"></path>
                        <path d="M 0 220 C 140 90, 300 190, 300 100 S 500 90, 600 140 S 700 190, 1000 100"></path>
                        <path d="M 0 210 C 120 70, 300 170, 300 100 S 500 70, 600 120 S 700 170, 1000 100"></path>
                        <path d="M 0 200 C 100 50, 300 150, 300 100 S 500 50, 600 100 S 700 150, 1000 100"></path>
                    </g>
                </svg>
            </div>
        {loading ? (
          // 🌀 Loading Spinner
          <div className="flex items-center justify-center w-full h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>
          </div>
        ) : machines.length === 0 ? (
          // ❌ No Machines Found Message
          <div className="text-center text-gray-400 text-2xl">
            No machines found in this catalogue.
          </div>
        ) : (
          machines.map((machine) => (
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
    </main>

  );
};

export default MachineSection;
