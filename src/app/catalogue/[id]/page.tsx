/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
//      
import { useEffect, useState } from "react";

type TMachine = {
  id: number;
  category_id: number;
  machine_name: string;
  title: string;
  png_img:string;
  img_1:string;
  img_2:string;
  img_3:string;
  description: string;
};
type TParams = {
    params: Record<string, any>
}
const MachineCards = ({params}: TParams) => {
    const {id} = params
    console.log(id);
//   const router = useRouter();
//   const { id } = router.query; // Get category ID from URL
  const [machines, setMachines] = useState<TMachine[]>([]);

  useEffect(() => {
    if (!id) return; // Avoid fetching when ID is undefined

    const fetchMachines = async () => {
      const response = await fetch("/machines.json"); // Replace with actual path or API
      const data: TMachine[] = await response.json();

      // Filter machines by category_id
      const filteredMachines = data.filter((machine) => machine.category_id === Number(id));
      setMachines(filteredMachines);
    };

    fetchMachines();
  }, [id]);

  console.log(machines);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Machines in Category {id}</h1>
      {machines.length === 0 ? (
        <p>No machines found in this category.</p>
      ) : (
        <div className="flex flex-wrap gap-20  justify-center">
          {machines.map((machine) => (
            <div
            key={machine.id}
            rel="noopener noreferrer"
            className="cardLink mt-20 z-20"
          >
            <div className="card">
              <div className="wrapper">
                <img src={machine.img_1} alt={machine.title} className="coverimg rounded-lg" />
              </div>  
                 <img src={machine.png_img} alt={`${machine.title} Character`} className="character" />
              <p className="title text-2xl mb-5 text-[#fcd362]">{machine.title}</p>
            
              <Link href="#" className="title mb-5 text-center py-2 rounded-3xl bg-[#fcd3621e]  backdrop-blur-sm text-[#fcd362]">View details</Link>
              
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MachineCards;
