"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdCategory } from "react-icons/md"; // Import an icon

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
    <div className="min-h-screen  items-center justify-center bg-gray-100 hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }} // Start hidden and below
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }} // Hover effect
            className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
          >
            <MdCategory className="text-4xl text-blue-500 mb-2" /> {/* Icon */}
            <h3 className="text-lg font-semibold">{category.category}</h3> {/* Category Name */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeProductCategory;
