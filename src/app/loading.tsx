// "use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// // Custom Loading Component
// export default function Loading({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(true);
//   const [animateOut, setAnimateOut] = useState(false);
//   const [contentVisible, setContentVisible] = useState(false);
//   const [isClient, setIsClient] = useState(false); // Track if we're on the client
//   const pathname = usePathname();
//   const loadingText = "Loading...";

//   useEffect(() => {
//     setIsClient(true); // Make sure we only run client-side logic after hydration
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       // Reset states properly without overriding the animation
//       setLoading(true);
//       setAnimateOut(false);
//       setContentVisible(false);

//       const loaderTimeout = setTimeout(() => {
//         setAnimateOut(true); // Start fade-out animation

//         setTimeout(() => {
//           setLoading(false); // Fully remove loader
//           setContentVisible(true); // Show content
//         }, 1000); // Exit animation duration (matches the transition time)
//       }, 100); // Default loading duration

//       return () => clearTimeout(loaderTimeout);
//     }
//   }, [pathname, isClient]); // Runs every time the path changes (after hydration)

//   if (!isClient) {
//     return null; // Return null during SSR to avoid hydration mismatch
//   }

//   return (
//     <div className="relative  w-full overflow-auto "> {/* Ensure scroll is possible here */}
  
//       {/* Loader */}
//       {loading && (
//         <div
//           className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000] text-white z-[1000] transition-all duration-1000 ${
//             animateOut ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
//           }`}
//         >
//           <div className="text-5xl font-thin uppercase tracking-[20px] flex text-white">
//             {loadingText.split("").map((char, index) => (
//               <span
//                 key={index}
//                 className="opacity-0 loading-animation"
//                 style={{
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Page Content */}
//       <div
//         className={`transition-opacity duration-1000 ${
//           contentVisible ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Custom Loading Component
export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if we're on the client
  const pathname = usePathname();

  // Function to format pathname into a readable title
  const formatPathname = (path: string) => {
    if (path === "/") return "Home Page";
    return path
      .replace("/", "")
      .replace(/-/g, " ") // Replace dashes with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letters
  };

  const loadingText = formatPathname(pathname); // Set loading text dynamically

  useEffect(() => {
    setIsClient(true); // Ensure client-side logic runs after hydration
  }, []);

  useEffect(() => {
    if (isClient) {
      // Reset states properly without overriding the animation
      setLoading(true);
      setAnimateOut(false);
      setContentVisible(false);

      const loaderTimeout = setTimeout(() => {
        setAnimateOut(true); // Start fade-out animation

        setTimeout(() => {
          setLoading(false); // Fully remove loader
          setContentVisible(true); // Show content
        }, 1000); // Exit animation duration (matches the transition time)
      }, 2000); // Default loading duration

      return () => clearTimeout(loaderTimeout);
    }
  }, [pathname, isClient]); // Runs every time the path changes (after hydration)

  if (!isClient) {
    return null; // Return null during SSR to avoid hydration mismatch
  }

  return (
    <div className="relative w-full overflow-auto"> {/* Ensure scroll is possible here */}
  
      {/* Loader */}
      {loading && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#ffe68a] text-white z-[1000] transition-all duration-1000 ${
            animateOut ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <div className="text-5xl font-thin uppercase tracking-[20px] flex text-red-600">
            {loadingText.split("").map((char, index) => (
              <span
                key={index}
                className="opacity-0 loading-animation"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Page Content */}
      <div
        className={`transition-opacity duration-1000 ${
          contentVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
