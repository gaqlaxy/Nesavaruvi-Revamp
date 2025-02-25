import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-5  text-gray-800 mx-10">
        <img src="./logo.png" alt="" className="w-32" />
        <div className="flex space-x-5 text-sm font-semibold ">
          <a href="" className="hover:text-[#f79441] transition-colors">
            Home
          </a>
          <a href="" className="hover:text-[#f79441] transition-colors">
            Collections
          </a>
          <a href="" className="hover:text-[#f79441] transition-colors">
            About
          </a>
          <a href="" className="hover:text-[#f79441] transition-colors">
            Contact Us
          </a>
        </div>
        <a
          href=""
          className="bg-[#f79441] text-white px-4 py-2 font-semibold rounded-lg hover:bg-[#de853b] transition-colors"
        >
          Get Quote
        </a>
      </nav>
    </>
  );
}
