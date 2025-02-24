import React, { useRef, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <section className="relative h-screen w-full grid grid-cols-2 overflow-hidden p-6 gap-6 ">
        <div className="ml-12">
          <h1 className="text-5xl font-bold mb-4 pt-20">
            Wrap Yourself <br /> in Timeless Tradition
          </h1>
          
          <p className="mb-4 text-sm">
            Discover the Legacy Woven in Every Thread
          </p>
          <div className="flex space-x-4 items-center">
          <a>Explore</a>
        
          {/* Conditionally render "Play Video" if not playing */}
          {!isPlaying && (
            <a
              onClick={handleToggleVideo}
              className=" text-black px-6 py-3 rounded-md flex gap-1 items-center cursor-pointer"
            >
              <FaRegPlayCircle />
              Play
            </a>
          )}
          {isPlaying && (
            <a
              onClick={handleToggleVideo}
              className="text-black px-6 py-3 rounded-md flex gap-1 items-center cursor-pointer"
            >
              <FaRegCirclePause />
              Pause
            </a>
          )}
          </div>
        </div>

        <div className="overflow-hidden">
          <video
            ref={videoRef}
            className=" w-[60%] h-[80%] rounded-lg object-cover overflow-hidden"
            loop
            muted
            playsInline
            poster="./hero1.jpg"
          >
            <source
              src="./HeroVideo1.mp4"
              type="video/mp4"
              className="rounded-lg object-cover overflow-hidden"
            />
          </video>
        </div>
      </section>
    </>
  );
}
