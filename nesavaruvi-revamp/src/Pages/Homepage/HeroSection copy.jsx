import React, { useRef, useState } from "react";

const HeroSection = () => {
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
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        poster="./hero1.jpg"
        // No autoplay so it's paused by default
      >
        <source src="./HeroVideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">
        Wrap Yourself <br /> in Timeless Tradition

        </h1>
        <p className="mb-4">
        Discover the Legacy Woven in Every Thread
        </p>
        <button>Discover</button>
        {/* Conditionally render "Play Video" if not playing */}
        {!isPlaying && (
          <button
            onClick={handleToggleVideo}
            className="bg-white text-black px-6 py-3 rounded-md shadow-md"
          >
            Play Video
          </button>
        )}
        {/* Conditionally render "Pause Video" if playing */}
        {isPlaying && (
          <button
            onClick={handleToggleVideo}
            className="bg-white text-black px-6 py-3 rounded-md shadow-md"
          >
            Pause Video
          </button>
        )}
      </div>

      {/* Optional dark overlay if needed */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
    </section>
  );
};

export default HeroSection;


