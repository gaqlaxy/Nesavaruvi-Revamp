// Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 text-white mx-10 backdrop-blur-md bg-black/30 rounded-full border border-white/10 mt-5">
      <img src="./logo.png" alt="Logo" className="w-32 z-30" />

      <div className="flex space-x-8 text-sm font-semibold">
        {["Home", "Collections", "About", "Contact Us"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative group px-3 py-2 transition-all duration-300"
          >
            <span className="z-20 relative">{item}</span>
            <span className="absolute inset-0 bg-[#f79441] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-20" />
          </a>
        ))}
      </div>

      <a
        href="#"
        className="bg-[#f79441] text-white px-6 py-2.5 font-semibold rounded-full hover:bg-[#de853b] transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Get Quote</span>
        <span className="absolute inset-0 bg-black/10 w-0 group-hover:w-full transition-all duration-300" />
      </a>
    </div>
  );
}
