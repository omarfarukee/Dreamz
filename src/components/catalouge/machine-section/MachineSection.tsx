"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type TMachine = {
    id: number;
    category_slug: string;
    machine_name: string;
    title: string;
    png_img:string;
    img_1:string;
    img_2:string;
    img_3:string;
    description: string;
  };

  type TProps = {
    slug : string
  }

const MachineSection = ({ slug} : TProps) => {
    const [machines, setMachines] = useState<TMachine[]>([]);
    
      useEffect(() => {
        if (!slug) return; // Avoid fetching when ID is undefined
    
        const fetchMachines = async () => {
          const response = await fetch("/machines.json"); // Replace with actual path or API
          const data: TMachine[] = await response.json();
    
          // Filter machines by category_id
          const filteredMachines = data.filter((machine) => machine?.category_slug === slug);
          setMachines(filteredMachines);
        };
    
        fetchMachines();
      }, [slug]);
    return (
        <div className="flex flex-wrap gap-20 min-h-screen justify-center mt-40">
        {machines?.map((machine) => (
            <div
                key={machine.id}
                rel="noopener noreferrer"
                className="cardLink mt-20 z-20"
            >
                <div className="card">
                    <div className="wrapper">
                        <Image src={machine.img_1} alt={machine.title} height={500} width={500} className="coverimg rounded-lg" />
                    </div>
                    <Image src={machine.png_img} alt={`${machine.title} Character`} height={500} width={500} className="character" />
                    <p className="title text-2xl mb-5 text-[#fcd362]">{machine.title}</p>

                    <Link href={`/${slug}/${machine?.id}`} className="title mb-5 text-center py-2 rounded-3xl bg-[#fcd3621e]  backdrop-blur-sm text-[#fcd362]">View details</Link>

                </div>
            </div>
        ))}
    </div>
    );
};

export default MachineSection;