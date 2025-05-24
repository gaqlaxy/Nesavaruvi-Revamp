import React from "react";
import { FiMenu } from "react-icons/fi";

export default function SplitNavbar() {
  return (
    <nav className="absolute top-0 w-full z-50">
      {/* <div className="flex space-between justify-center items-center   h-24"> */}
      <div className="grid grid-cols-2 h-24">
        {/* Left Side (Image Section) */}
        <div className=" flex items-center justify-start pr-8 border-r border-white/20">
          <img
            src="/logo.png"
            alt="Boutique Logo"
            className="h-16 w-auto transform -translate-x-1/2"
          />
        </div>

        {/* Right Side (Content Section) */}
        <div className=" flex items-center justify-between pl-8 bg-cream/95 backdrop-blur-sm">
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#f79441] transition-colors">
              Collections
            </a>
            <a href="#" className="hover:text-[#f79441] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#f79441] transition-colors">
              Contact
            </a>
          </div>

          <button className="p-2 hover:text-[#f79441] lg:hidden">
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
