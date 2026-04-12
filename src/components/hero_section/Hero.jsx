"use client";
import { useState } from "react";

export default function Hero() {
  const videos = ["/images/hero1.mp4", "/images/hero2.mp4"];
  const [current, setCurrent] = useState(0);

  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <>
      <div className="w-full h-fit uni">
        <div className="fix_w h-[400px] overflow-hidden">
          <video
            key={current} 
            className="w-full h-full object-cover"
            src={videos[current]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
        </div>
      </div>
    </>
  );
}
