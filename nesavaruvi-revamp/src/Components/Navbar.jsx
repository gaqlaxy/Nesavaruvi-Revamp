import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='flex justify-between items-center p-5  text-gray-800 mx-10'>
        <img src="./logo.png" alt="" className='w-32' />
        <div className='flex space-x-5 text-sm font-semibold'>
            <a href="">Home</a>
            <a href="">Collections</a>
            <a href="">About</a>
            <a href="">Contact Us</a>
        </div>
        <a href="">Get Quote</a>
    </nav>
    
    </>
  )
}
