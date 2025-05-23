// import React, { useRef, useState } from "react";
// import { FaRegPlayCircle } from "react-icons/fa";
// import { FaRegCirclePause } from "react-icons/fa6";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleToggleVideo = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <>
//       <section className="relative h-screen w-full grid lg:grid-cols-2 grid-cols-1 overflow-hidden p-6">
//         {/* Text Content */}
//         <div className="p-20">
//           {/* <h1 className="text-5xl font-bold mb-4 pt-20">
//             Wrap Yourself <br /> in Timeless Tradition
//           </h1> */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl font-bold mb-4 pt-20"
//           >
//             Wrap Yourself <br />
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-[#f79441]"
//             >
//               in Timeless Tradition
//             </motion.span>
//           </motion.h1>
//           {/* <p className="mb-4 text-sm">
//             Discover the Legacy Woven in Every Thread
//           </p> */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             // className="mb-4 text-sm"
//             className="mb-4 text-sm tracking-wide font-sans uppercase text-[var(--brand-secondary)]"
//           >
//             Discover the Legacy Woven in Every Thread
//             <br />
//           </motion.p>
//           <div className="flex space-x-4 items-center bg-white/10 backdrop-blur-lg p-4 rounded-full border border-white/20">
//             <a
//               href="#"
//               className="bg-[#f79441] text-white px-4 py-2 font-semibold rounded-lg hover:bg-[#de853b] transition-colors"
//             >
//               Explore
//             </a>
//             {!isPlaying ? (
//               <button
//                 onClick={handleToggleVideo}
//                 className="text-black px-6 py-3 rounded-md flex gap-1 items-center cursor-pointer"
//               >
//                 <FaRegPlayCircle />
//                 Play
//               </button>
//             ) : (
//               <button
//                 onClick={handleToggleVideo}
//                 className="text-black px-6 py-3 rounded-md flex gap-1 items-center cursor-pointer"
//               >
//                 <FaRegCirclePause />
//                 Pause
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Video Container with SVG Mask */}
//         {/* <div className="relative p-20 h-full"> */}
//         <div className="relative w-full h-full group">
//           <div
//             className="relative w-full h-full"
//             style={{
//               maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="477" height="484" fill="none" viewBox="0 0 477 484"><path fill="%23D9D9D9" fill-rule="evenodd" d="M296.655 20c0-11.046 8.954-20 20-20h140.097c11.046 0 20 8.954 20 20v140.649c0 11.045-8.954 20-20 20H443.93c-11.046 0-20 8.954-20 20v210.44c0 11.045-8.955 20-20 20H191.467c-11.045 0-20 8.954-20 20v11.922c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V335.543c0-11.046 8.954-20 20-20h17.406c11.045 0 20-8.954 20-20V82.587c0-11.046 8.954-20 20-20h199.249c11.046 0 20-8.954 20-20V20Z" clip-rule="evenodd"/></svg>')`,
//               WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="477" height="484" fill="none" viewBox="0 0 477 484"><path fill="%23D9D9D9" fill-rule="evenodd" d="M296.655 20c0-11.046 8.954-20 20-20h140.097c11.046 0 20 8.954 20 20v140.649c0 11.045-8.954 20-20 20H443.93c-11.046 0-20 8.954-20 20v210.44c0 11.045-8.955 20-20 20H191.467c-11.045 0-20 8.954-20 20v11.922c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V335.543c0-11.046 8.954-20 20-20h17.406c11.045 0 20-8.954 20-20V82.587c0-11.046 8.954-20 20-20h199.249c11.046 0 20-8.954 20-20V20Z" clip-rule="evenodd"/></svg>')`,
//               maskSize: "contain",
//               maskRepeat: "no-repeat",
//               maskPosition: "center",
//               aspectRatio: "477 / 484",
//             }}
//           >
//             <video
//               ref={videoRef}
//               className="w-full h-full object-cover"
//               loop
//               muted
//               playsInline
//               poster="./hero1.jpg"
//             >
//               <source src="./HeroVideo1.mp4" type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className="min-h-screen grid lg:grid-cols-2 bg-cream relative overflow-hidden">
        {/* Video Section */}
        <motion.video
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="h-[100vh] w-[120%] object-contain transform -skew-x-12 lg:skew-x-0 origin-right"
          style={{
            width: "auto",
            left: "50%",
            transform: "translateX(-50%)",
            scale: 1,
            objectPosition: "left center",
          }}
          muted
          loop
          autoPlay
          playsInline
        >
          <source src="/HeroVideo1.mp4" type="video/mp4" />
          <source src="/HeroVideo2.mp4" type="video/mp4" />
        </motion.video>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center p-8 lg:p-20 bg-cream"
        >
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-gray-800">
            Crafted with <span className="text-[#f79441]">Passion</span>
          </h2>
          <p className="mb-8 max-w-md text-gray-600 leading-relaxed">
            Experience luxury woven into every thread through generations of
            traditional craftsmanship
          </p>

          <div className="flex flex-col lg:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all"
            >
              View Lookbook
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gray-800 text-white hover:bg-[#f79441] transition-all"
            >
              Shop Now
            </motion.button>
          </div>

          {/* Texture Decor */}
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-[url('/silk-pattern.png')] opacity-10" />
        </motion.div>

        {/* Mobile Diagonal Line */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-12 bg-cream clip-diagonal-mobile" />
      </div>
    </>
  );
}
