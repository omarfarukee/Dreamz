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

  const videoSources : any = {
    1: "/assets/videos/goldtest.mp4",
    2: "/assets/videos/hallmark.mp4",
    3: "/assets/videos/melting.mp4",
    4: "/assets/videos/diamondTest.mp4",
    5: "/assets/videos/refining.mp4",
    6: "/assets/videos/chianMaking.mp4",
    7: "/assets/videos/goldBar.mp4",
  };
// Get the video source or use a default fallback
    const videoSrc  = videoSources[id];
  const titleById : any = {
    1: "gold testing machine",
    2: "gold hallmark machine",
    3: "gold melting machine",
    4: "diamond testing machine",
    5: "gold refining machine",
    6: "chain making machine",
    7: "gold cleaning",
  };
const heroTitle = titleById[id]


  console.log(machines);
  return (
    <div className=" mx-auto w-full">
       
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
        <h1 className="text-[10em] p-2 uppercase rounded-xl bg-transparent  shadow-xl font-bold mt-[23.2%] bg-gradient-to-r  from-[#c09128] to-[#ffd87e] bg-clip-text text-transparent ">
          {heroTitle}
        </h1>
      </div>
    </div>
      {machines.length === 0 ? (
       <div className="h-[70vh] flex justify-center items-center text-5xl"><p>No machines found in this category.</p></div> 
      ) : (
        <div className="flex flex-wrap gap-20 min-h-screen justify-center mt-40">
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
            
              <Link href={`/catalogue/${id}/${machine.id}`} className="title mb-5 text-center py-2 rounded-3xl bg-[#fcd3621e]  backdrop-blur-sm text-[#fcd362]">View details</Link>
              
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MachineCards;
