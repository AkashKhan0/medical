"use client";
import { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const videos = ["/images/hero1.mp4", "/images/hero2.mp4"];
  const [current, setCurrent] = useState(0);

  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <>
      <div className="w-full h-fit uni z-10">
        <div className="fix_w h-[400px] overflow-hidden relative">
          <video
            key={current}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            src={videos[current]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
          <div className="absolute top-0 left-0 w-full h-full uni_col z-10 inset-0 bg-gradient-to-r from-[#f2f2f2] to-transparent">
            <div className="w-full sm:w-full md:w-[80%] px-5">
              <div className="w-fit flex items-center gap-2 mb-2">
                <h3 className="text-xs sm:text-lg md:text-2xl font-semibold text-[#766540] uppercase">
                  Medical
                </h3>
                <div className="w-[40px] h-[2.5px] bg-[#766540]"></div>
              </div>
              <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold text-[#161616]">
                Empowering Healthcare with
              </h1>
              <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold text-[#63202D]">
                Precision & Trust.
              </h1>
              <p className="text-base sm:text-lg text-[#161616] w-full sm:w-[70%] md:w-[50%] mt-2">
                Delivering high-quality medical and surgical equipment at
                wholesale prices across Bangladesh.
              </p>
            </div>
            <div className="w-full sm:w-full md:w-[80%] mt-5 flex items-center gap-5 px-5 ">
              <div className="w-fit uni gap-1 sm:gap-2 md:gap-5 mt-2">
                <Link
                  href="https://wa.me/8801635347489"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#25D366] text-white text-base sm:text-lg hover:bg-[#1ebe5d] font-semibold py-1.5 px-4 rounded-lg transition duration-300"
                >
                  <FaWhatsapp className="text-base sm:text-xl" />
                  WhatsApp
                </Link>

                <Link
                  href="https://m.me/aplusmartbdmedicalsurgical"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#0084FF] text-white text-base sm:text-lg hover:bg-[#006fd6] font-semibold py-1.5 px-4 rounded-lg transition duration-300"
                >
                  <FaFacebookMessenger className="text-base sm:text-xl" />
                  Messenger
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
