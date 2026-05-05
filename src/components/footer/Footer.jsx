import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import {
  RiShieldStarLine,
  RiCustomerServiceFill,
  RiGlobalLine,
} from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

export default function Footer() {
  return (
    <>
      <div className="w-full uni px-5 bg-[#c6c0bc] relative overflow-hidden">
        <div className="fix_w h-fit uni_col gap-2 z-50">
          <div className="w-full py-5 flex flex-col sm:flex-col md:flex-row items-stretch justify-between gap-3">
            {/* Logo */}
            <div className="w-full flex flex-col justify-start items-center sm:items-center md:items-start">
              <Link
                href="/"
                className="flex flex-col items-center md:items-start gap-0 w-fit mb-2"
              >
                <img
                  src="/images/medical_martbd.png"
                  alt="A Plus Mart BD Logo"
                  className="w-[120px]"
                />
              </Link>
              <p className="text-lg font-medium text-center sm:text-center md:text-start">
                Your trusted partner for premium quality surgical and medical
                instruments.
              </p>
              <p className="text-lg font-medium text-center">
                Precision. Reliability. Care.
              </p>

              <div className="w-full flex flex-col items-center md:items-start gap-3 my-3">
                <div className="w-full max-w-[250px] flex items-center justify-start gap-5">
                  <div className="uni w-[45px] h-[45px] rounded-full bg-[#dedede]">
                    <RiShieldStarLine className="text-3xl text-[#472428]" />{" "}
                  </div>
                  <div className="flex flex-col gap-0">
                    <h2 className="text-xl text-[#472428] font-semibold">
                      Premium Quality
                    </h2>
                    <h3 className="text-base text-[#472428] font-medium">
                      Certified & Guaranteed
                    </h3>
                  </div>
                </div>

                <div className="w-full max-w-[250px] flex items-center justify-start gap-5">
                  <div className="uni w-[45px] h-[45px] rounded-full bg-[#dedede]">
                    <TbTruckDelivery className="text-3xl text-[#472428]" />{" "}
                  </div>
                  <div className="flex flex-col gap-0">
                    <h2 className="text-xl text-[#472428] font-semibold">
                      Fast Delivery
                    </h2>
                    <h3 className="text-base text-[#472428] font-medium">
                      Across Bangladesh
                    </h3>
                  </div>
                </div>

                <div className="w-full max-w-[250px] flex items-center justify-start gap-5">
                  <div className="uni w-[45px] h-[45px] rounded-full bg-[#dedede]">
                    <RiCustomerServiceFill className="text-3xl text-[#472428]" />{" "}
                  </div>
                  <div className="flex flex-col gap-0">
                    <h2 className="text-xl text-[#472428] font-semibold">
                      Customer Support
                    </h2>
                    <h3 className="text-base text-[#472428] font-medium">
                      Always Here to Help
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* quick Links */}
            <div className="w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-center md:text-start mb-2 text-[#A21410]">
                Quick Links
              </h3>
              {/* menu items */}
              <div className="w-full flex flex-col items-center sm:items-center md:items-start gap-3">
                <Link href="/category/Surgical" className="ftr_btn">
                  Surgical
                </Link>
                <Link href="/privacy-policy" className="ftr_btn">
                  Privacy Policy
                </Link>
                <Link href="/category/Medical" className="ftr_btn">
                  Medical
                </Link>
                <Link href="/about" className="ftr_btn">
                  About Us
                </Link>
                <Link href="/terms-and-conditions" className="ftr_btn">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full flex flex-col items-center sm:items-center md:items-start gap-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-center md:text-start text-[#A21410]">
                Contact Info
              </h3>

              <div className="w-fit flex items-center gap-2">
                <div className="w-[30px] h-[30px] uni rounded-full">
                  <FaLocationDot className="text-[#472428] text-xl" />
                </div>
                <p className="text-base text-[#472428] font-medium">
                  South Monipur, Dhaka.
                </p>
              </div>
              {/* phone number */}
              <div className="w-fit flex items-center gap-2">
                <div className="w-[30px] h-[30px] uni rounded-full">
                  <IoCall className="text-[#472428] text-xl" />
                </div>
                <a
                  href="tel:+8801635347489"
                  className="text-base text-[#472428] font-medium"
                >
                  +8801635347489
                </a>
              </div>
              {/* WhatsApp */}
              <div className="w-fit flex items-center gap-2">
                <div className="w-[30px] h-[30px] uni rounded-full">
                  <IoLogoWhatsapp className="text-[#472428] text-xl" />
                </div>
                <a
                  href="https://wa.me/8801853838891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#472428] font-medium"
                >
                  01853838891
                </a>
              </div>
              {/* email */}
              <div className="w-fit flex items-center gap-2">
                <div className="w-[30px] h-[30px] uni rounded-full">
                  <IoMdMail className="text-[#472428] text-xl" />
                </div>
                <a
                  href="mailto:info@aplusmartbd.com"
                  className="text-base text-[#472428] font-medium"
                >
                  info@aplusmartbd.com
                </a>
              </div>

              <div className="w-fit flex items-center gap-2">
                <div className="w-[30px] h-[30px] uni rounded-full">
                  <RiGlobalLine className="text-[#472428] text-xl" />
                </div>
                <a
                  href="https://aplusmartbd.com"
                  target="_blank"
                  className="text-base text-[#472428] font-medium"
                >
                  https://aplusmartbd.com
                </a>
              </div>

              <div className="flex items-center justify-center sm:justify-center md:justify-start gap-4 my-2">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/aplusmartbdmedicalsurgical"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm hover:scale-110"
                >
                  <FaFacebookF size={18} />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/aplusmartbd"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition duration-300 shadow-sm hover:scale-110"
                >
                  <FaInstagram size={18} />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801853838891"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-green-500 hover:text-white transition duration-300 shadow-sm hover:scale-110"
                >
                  <FaWhatsapp size={18} />
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@aplusmartbd"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition duration-300 shadow-sm hover:scale-110"
                >
                  <FaTiktok size={18} />
                </a>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center sm:text-center md:text-start text-[#A21410]">
                Pay with
              </h3>
              <div className="w-full flex flex-wrap items-center justify-center md:justify-start gap-5 mb-5">
                <img
                  src="/images/bkash.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
                <img
                  src="/images/nagad.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
                <img
                  src="/images/Rocket.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
                <img
                  src="/images/upay.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
                <img
                  src="/images/islami.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
                <img
                  src="/images/Agrani_Bank.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
                <img
                  src="/images/dbbl.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
                <img
                  src="/images/pathao_pay.png"
                  alt="pay with"
                  className="w-[80px] h-[40px] object-contain bg-white p-1 rounded border shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden absolute bottom-0 left-0 z-10">
          <svg
            viewBox="0 0 1440 140"
            className="w-full h-[150px] opacity-20"
            preserveAspectRatio="none"
          >
            {/* Main Maroon Shape */}
            <path
              d="M0,80 C300,20 600,20 900,70 C1200,120 1440,60 1440,60 L1440,140 L0,140 Z"
              fill="url(#grad)"
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5a1e1e" />
                <stop offset="100%" stopColor="#7a2e2e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Footer copy rights Content */}
      <div className="w-full h-[80px] uni_col text-xs font-normal text-[#ffffff] text-center gap-0 bg-[#472428]">
        <p>
          Trade licence No: <strong>2026-00831</strong>
        </p>
        <p>© 2025 A Plus Mart BD Medical Store. All rights reserved.</p>
        <p>Powered By: A Plus Advertising Limited</p>
      </div>
      <div className="w-full h-[60px] bg-[#472428] block md:hidden"></div>
    </>
  );
}
