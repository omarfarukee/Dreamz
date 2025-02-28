/* eslint-disable @next/next/no-img-element */
"use client";
import machine1 from "@/assets/machine/machine1.jpg";
import machine2 from "@/assets/machine/machine.png";
import machine3 from "@/assets/machine/machine22.png";
import machine4 from "@/assets/machine/machine2.png";
import machine5 from "@/assets/machine/machine3.png";
import machine6 from "@/assets/machine/machine333.png";
import machine7 from "@/assets/machine/machine4.png";
import machine8 from "@/assets/machine/machine44.png";

const products = [
 
  {
    id: 1,
    title: "Machine 1",
    coverImg: machine3.src,
    characterImg: machine4.src,
    link: "#",
  },
  {
    id: 2,
    title: "Machine 2",
    coverImg: machine5.src,
    characterImg: machine6.src,
    link: "#",
  },
  {
    id: 3,
    title: "machine 3",
    coverImg: machine7.src,
    characterImg: machine8.src,
    link: "#",
  },
  {
    id: 4,
    title: "Machine 4",
    coverImg: machine1.src,
    characterImg: machine2.src,
    link: "#",
  },
];

const ProductCard = () => {
  return (
    <div className="relative min-h-[120vh]">
          <div className="absolute left-[45%] top-[5%]" >
          <div className="flex justify-center mt-5 z-20 relative">
            <h1 className="text-5xl text-[#fcd462] mr-10" data-aos="fade-up"
                        data-aos-duration="3000">Our Machines</h1>
          </div>
      </div>
       <div className="cardContainer">

       {/* gradient bg  */}
       <div className="gradient-bg   lg:h-[120vh]  w-[50%]  absolute top-[-40%] right-[-20%] -z-20" ></div>
       <div className="gradient-bg   lg:h-[100vh]  w-[50%]  absolute top-[10%] left-[-20%] -z-20" ></div>
            {/* gradient bg end */}

      {products.map((product) => (
        <a
          key={product.id}
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cardLink mt-20 z-20"
        >
          <div className="card">
            <div className="wrapper">
              <img src={product.coverImg} alt={product.title} className="coverimg rounded-lg" />
            </div>
            <p className="title text-5xl">{product.title}</p>
            <img src={product.characterImg} alt={`${product.title} Character`} className="character" />
          </div>
        </a>
      ))}
    </div>
    </div>
   
  );
};

export default ProductCard;
