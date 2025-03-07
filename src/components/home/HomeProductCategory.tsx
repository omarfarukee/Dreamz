"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdDiamond } from "react-icons/md"; // Import an icon
import Link from "next/link";
import { GiGemChain, GiGoldBar, GiGoldNuggets, GiGoldStack, GiMeltingMetal } from "react-icons/gi";
import { AiFillGold } from "react-icons/ai";

interface ICategory {
  id: number;
  category: string;
  slug: string;
}

const HomeProductCategory = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/category.json"); // Fetch JSON data
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-[100vh] items-center justify-center">

      <div className="absolute w-full -z-30">
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#f4c7221f" strokeWidth="1">
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

      <div className="flex justify-center flex-col mb-20 items-center" data-aos="fade-up"
        data-aos-duration="3000">
        <div>
          <span className="text-5xl text-[#f4c522]">Category</span>{" "}

        </div>
        <div className="flex items-center text-xl gap-2 mt-5">
          <p>Innovating industries Empowering Solution</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 w-[80%] justify-center">
          {categories.map((category, index) => (
            <Link href={`/${category?.slug}/${category?.id}`} key={category.id}>
              <motion.div

                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }} // Hover effect
                className="p-6 bg-[#f4c522] w-[310px]  shadow-2xl rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow "
              >
                <p>{category?.category === "gold melting machine" && <GiMeltingMetal className="text-6xl text-red-600" />}</p>
                <p></p>{category?.category === "diamond testing machine" && <MdDiamond className="text-6xl text-red-600" />}
                <p></p>{category?.category === "gold hallmark machine" && <GiGoldBar className="text-6xl text-red-600" />}
                <p></p>{category?.category === "gold testing machine" && <GiGoldStack className="text-6xl text-red-600" />}
                <p></p>{category?.category === "gold cleaning" && <AiFillGold className="text-6xl text-red-600" />}
                <p></p>{category?.category === "gold refining machine" && <GiGoldNuggets className="text-6xl text-red-600" />}
                <p></p>{category?.category === "chain making machine" && <GiGemChain className="text-6xl text-red-600" />}
                <h3 className="text-lg font-semibold uppercase">{category.category}</h3> {/* Category Name */}
              </motion.div>
            </Link>

          ))}
        </div>
      </div>


    </div>
  );
};

export default HomeProductCategory;
