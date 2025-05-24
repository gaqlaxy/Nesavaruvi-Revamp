import React from "react";
import { motion } from "framer-motion";
import SplitNavbar from "../../Components/SplitNavbar";
import Navbar from "../../Components/Navbar";

export default function DynamicSplitHero() {
  return (
    <>
      <div className="h-screen relative">
        <img
          src="/hero1.jpg"
          className="w-full h-full object-cover"
          alt="Model collage"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-0 left-0 right-0 p-12 flex justify-between items-center">
          <h1 className="text-4xl font-light text-white">Lookbook '24</h1>
          <div className="flex gap-4">
            <button className="text-white hover:text-amber-200">←</button>
            <button className="text-white hover:text-amber-200">→</button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-12 grid grid-cols-3 gap-8">
          {["Daywear", "Evening", "Accessories"].map((item) => (
            <div key={item} className="border-t border-white/30 pt-4">
              <h3 className="text-white text-xl mb-2">{item}</h3>
              <p className="text-white/70">View Collection →</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
