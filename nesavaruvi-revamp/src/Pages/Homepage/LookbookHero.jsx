// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FiChevronLeft, FiChevronRight, FiMenu } from "react-icons/fi";

// export default function LookbookHero() {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const categories = [
//     "Spring Collection",
//     "Summer Essentials",
//     "Festive Specials",
//   ];

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="/hero1.jpg"
//         className="absolute inset-0 w-full h-full object-cover"
//         alt="Model collage"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Navigation Bar */}
//       <nav className="absolute top-0 w-full z-50 p-6 backdrop-blur-md bg-black/30">
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//           {/* Centered Logo */}
//           <img
//             src="/logo.png"
//             className="h-12 w-auto absolute left-1/2 -translate-x-1/2"
//             alt="Logo"
//           />

//           {/* Right-aligned Menu */}
//           <div className="ml-auto flex items-center space-x-8 text-white">
//             <div className="hidden lg:flex space-x-8">
//               <a href="#" className="hover:text-amber-200 transition-colors">
//                 Collections
//               </a>
//               <a href="#" className="hover:text-amber-200 transition-colors">
//                 About
//               </a>
//               <a href="#" className="hover:text-amber-200 transition-colors">
//                 Contact
//               </a>
//             </div>
//             <FiMenu className="text-2xl lg:hidden hover:text-amber-200" />
//           </div>
//         </div>
//       </nav>

//       {/* Lookbook Header */}
//       <div className="relative z-40 pt-32 px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center justify-between text-white max-w-7xl mx-auto"
//         >
//           <h1 className="text-4xl md:text-5xl font-light">Lookbook 24</h1>
//           <div className="flex gap-4">
//             <button className="p-3 hover:text-amber-200 hover:bg-white/10 rounded-full transition-all">
//               <FiChevronLeft className="text-2xl" />
//             </button>
//             <button className="p-3 hover:text-amber-200 hover:bg-white/10 rounded-full transition-all">
//               <FiChevronRight className="text-2xl" />
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Category Grid */}
//       <div className="absolute bottom-0 w-full z-40 p-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto text-white"
//         >
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="border-t border-white/30 pt-6 group cursor-pointer"
//               onMouseEnter={() => setActiveCategory(index)}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-medium group-hover:text-amber-200 transition-colors">
//                   {category}
//                 </h3>
//                 <span className="opacity-0 group-hover:opacity-100 transition-opacity">
//                   →
//                 </span>
//               </div>
//               <p className="mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
//                 View Collection
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Active Category Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
//         {categories.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full transition-colors ${
//               activeCategory === index ? "bg-amber-200" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight, FiMenu } from "react-icons/fi";

// const lookbookPages = [
//   {
//     image: "/hero1.jpg",
//     title: "Spring Florals",
//     description: "Fresh patterns for the new season",
//   },
//   {
//     image: "/hero2.jpg",
//     title: "Summer Vibes",
//     description: "Light fabrics for warm days",
//   },
//   {
//     image: "/hero3.jpg",
//     title: "Festive Glam",
//     description: "Evening wear for special occasions",
//   },
// ];

// export default function InteractiveLookbook() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentPage((prev) => (prev + 1) % lookbookPages.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentPage(
//       (prev) => (prev - 1 + lookbookPages.length) % lookbookPages.length
//     );
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Animated Pages */}
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentPage}
//           custom={direction}
//           initial={{ opacity: 0, x: direction * 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -direction * 100 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0"
//         >
//           <div className="absolute inset-0 flex items-center justify-center">
//             <img
//               src={lookbookPages[currentPage].image}
//               className="h-full w-auto min-w-full object-contain"
//               style={{
//                 objectPosition: "center 30%",
//                 background: "#f5f3f0",
//               }}
//               alt={lookbookPages[currentPage].title}
//             />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlay and Navigation */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Navigation Controls */}
//       <div className="absolute inset-0 flex items-center justify-between px-8 z-50">
//         <button
//           onClick={handlePrev}
//           className="p-4 text-white hover:text-amber-200 hover:bg-white/10 rounded-full transition-all"
//         >
//           <FiChevronLeft className="text-3xl" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="p-4 text-white hover:text-amber-200 hover:bg-white/10 rounded-full transition-all"
//         >
//           <FiChevronRight className="text-3xl" />
//         </button>
//       </div>

//       {/* Page Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
//         {lookbookPages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               currentPage === index
//                 ? "bg-amber-200 scale-125"
//                 : "bg-white/50 hover:bg-white/80"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Page Content */}
//       <div className="absolute bottom-20 left-8 z-50 text-white">
//         <motion.div
//           key={currentPage}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-4xl font-light mb-4">
//             {lookbookPages[currentPage].title}
//           </h2>
//           <p className="text-lg opacity-80">
//             {lookbookPages[currentPage].description}
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const lookbookPages = [
//   {
//     image: "/hero1.jpg",
//     focalPoint: "center 25%", // Custom focal point (x% y%)
//     title: "Spring Collection",
//     description: "Fresh patterns for the new season",
//   },
//   {
//     image: "/hero2.jpg",
//     focalPoint: "center 40%",
//     title: "Summer Essentials",
//     description: "Light fabrics for warm days",
//   },
//   {
//     image: "/hero3.png",
//     focalPoint: "center 30%",
//     title: "Festive Glam",
//     description: "Evening wear for special occasions",
//   },
// ];

// export default function InteractiveLookbook() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentPage((prev) => (prev + 1) % lookbookPages.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentPage(
//       (prev) => (prev - 1 + lookbookPages.length) % lookbookPages.length
//     );
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentPage}
//           custom={direction}
//           initial={{ opacity: 0, x: direction * 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -direction * 100 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0"
//         >
//           {/* Image Container with Dynamic Positioning */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.img
//               src={lookbookPages[currentPage].image}
//               className="h-full w-full object-cover"
//               style={{
//                 objectPosition: lookbookPages[currentPage].focalPoint,
//                 minWidth: "100%",
//                 minHeight: "100%",
//                 transform: "scale(1.1)", // Zoom out slightly
//               }}
//               alt={lookbookPages[currentPage].title}
//               initial={{ scale: 1.1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.8 }}
//             />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

//       {/* Navigation Controls */}
//       <div className="absolute inset-0 flex items-center justify-between px-8 z-50">
//         <NavButton onClick={handlePrev} icon={<FiChevronLeft />} />
//         <NavButton onClick={handleNext} icon={<FiChevronRight />} />
//       </div>

//       {/* Page Content */}
//       <div className="absolute bottom-20 left-8 z-50 text-white">
//         <motion.div
//           key={currentPage}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-4xl font-light mb-4">
//             {lookbookPages[currentPage].title}
//           </h2>
//           <p className="text-lg opacity-80">
//             {lookbookPages[currentPage].description}
//           </p>
//         </motion.div>
//       </div>

//       {/* Page Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
//         {lookbookPages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               currentPage === index
//                 ? "bg-amber-200 scale-125"
//                 : "bg-white/50 hover:bg-white/80"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function NavButton({ onClick, icon }) {
//   return (
//     <motion.button
//       onClick={onClick}
//       className="p-4 text-white hover:text-amber-200 hover:bg-white/10 rounded-full transition-all"
//       whileHover={{ scale: 1.2 }}
//       whileTap={{ scale: 0.9 }}
//     >
//       {icon}
//     </motion.button>
//   );
// }

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiMenu, FiX } from "react-icons/fi";

const lookbookPages = [
  {
    image: "/hero1.jpg",
    focalPoint: "center 30%",
    title: "Spring Florals",
    phrase: "Bloom in Elegance",
    description: "Fresh patterns for the new season",
  },
  {
    image: "/hero2.jpg",
    focalPoint: "center 40%",
    title: "Summer Vibes",
    phrase: "Embrace the Light",
    description: "Breezy fabrics for warm days",
  },
  {
    image: "/hero3.png",
    focalPoint: "center 35%",
    title: "Festive Glam",
    phrase: "Dazzle in Style",
    description: "Evening wear for special occasions",
  },
];

export default function InteractiveLookbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % lookbookPages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage(
      (prev) => (prev - 1 + lookbookPages.length) % lookbookPages.length
    );
  };

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 p-4 lg:p-6 backdrop-blur-md bg-black/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>

          {/* Centered Logo */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src="/logo.png"
              className="h-10 lg:h-12 w-auto"
              alt="Boutique Logo"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-white">
            <a href="#" className="hover:text-amber-200 transition-colors">
              Collections
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                <a
                  href="#"
                  className="text-white hover:text-amber-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Collections
                </a>
                <a
                  href="#"
                  className="text-white hover:text-amber-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white hover:text-amber-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Video Section */}
      <div className="relative h-full w-full overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="/hero1.jpg"
        >
          <source src="/HeroVideo1.mp4" type="video/mp4" />
        </video>

        {/* Video Control */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-8 right-8 z-50 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-all"
        >
          {isPlaying ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Catchy Phrase */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Crafting Timeless Elegance
        </h1>
        <p className="text-xl md:text-2xl text-amber-200 font-light">
          Where Tradition Meets Modern Design
        </p>
      </motion.div>

      {/* Lookbook Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-8 z-40">
        <NavButton onClick={handlePrev} icon={<FiChevronLeft />} />
        <NavButton onClick={handleNext} icon={<FiChevronRight />} />
      </div>

      {/* Page Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {lookbookPages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentPage === index
                ? "bg-amber-200 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function NavButton({ onClick, icon }) {
  return (
    <motion.button
      onClick={onClick}
      className="p-4 text-white hover:text-amber-200 hover:bg-white/10 rounded-full transition-all"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.button>
  );
}
