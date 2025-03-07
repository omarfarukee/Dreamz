"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { 
//   Rocket, 
//   Shield, 
//   Users, 
//   Clock, 
//   Target, 
//   Award 
// } from "lucide-react";

const features = [
  {
    // icon: Rocket,
    title: "Lightning Fast Performance",
    description: "Experience blazing-fast load times and smooth interactions that keep your users engaged.",
    color: "bg-gradient-to-br from-white to-red-50",
    iconColor: "text-red-500",
    delay: 0.1
  },
  {
    // icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with state-of-the-art security measures and continuous monitoring.",
    color: "bg-gradient-to-bl from-white to-red-50",
    iconColor: "text-red-600",
    delay: 0.2
  },
  {
    // icon: Users,
    title: "24/7 Expert Support",
    description: "Our dedicated team is always ready to help you succeed, any time of day or night.",
    color: "bg-gradient-to-tr from-white to-red-50",
    iconColor: "text-red-500",
    delay: 0.3
  },
  {
    // icon: Clock,
    title: "Time-Saving Solutions",
    description: "Streamline your workflow with our intuitive tools and automated processes.",
    color: "bg-gradient-to-tl from-white to-red-50",
    iconColor: "text-red-600",
    delay: 0.4
  },
  {
    // icon: Target,
    title: "Precision & Accuracy",
    description: "Deliver consistent, high-quality results that meet your exact specifications.",
    color: "bg-gradient-to-r from-white to-red-50",
    iconColor: "text-red-500",
    delay: 0.5
  },
  {
    // icon: Award,
    title: "Industry Leading Innovation",
    description: "Stay ahead of the curve with our cutting-edge technology and forward-thinking approach.",
    color: "bg-gradient-to-l from-white to-red-50",
    iconColor: "text-red-600",
    delay: 0.6
  }
];

const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
//   const iconVariants = {
//     initial: { scale: 1 },
//     hover: { 
//       scale: 1.2,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//         repeat: Infinity,
//         repeatType: "reverse"
//       }
//     }
//   };
  
  export default function WhyChooseUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div className="min-h-screen py-24 ">
        <div className="absolute w-full">
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
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-[#f4c522] mb-4 relative inline-block">
              Why Choose Us
             
            </h2>
            <p className="text-xl max-w-3xl mx-auto mt-6">
              Discover the unique advantages that set us apart and make us the perfect choice for your success.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ 
                  scale: 1.02,
                  transition: {
                    duration: 0.2
                  }
                }}
                className="group relative rounded-2xl p-8   overflow-hidden shadow-2xl transition-all duration-300"
              >
                {/* Background gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#f4c522] to-[#d8b450] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Animated circles */}
                <motion.div 
                  className="absolute -right-4 -top-4 w-24 h-24 bg-red-600 rounded-full opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 4, transition: { duration: 0.5 } }}
                />
                <motion.div 
                  className="absolute -left-4 -bottom-4 w-24 h-24 bg-red-600 rounded-full opacity-0 group-hover:opacity-5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 3, transition: { duration: 0.5, delay: 0.1 } }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-red-500 group-hover:text-white mb-6 inline-block transition-colors duration-300"
                    // variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {/* <feature.icon size={40} strokeWidth={1.5} /> */}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-semibold text-[#f4c522] group-hover:text-red-600 mb-4 transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className=" group-hover:text-red-500 transition-colors duration-300"
                  >
                    {feature.description}
                  </motion.p>
                </div>
  
                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-t-transparent border-r-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }