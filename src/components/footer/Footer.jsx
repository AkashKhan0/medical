import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full uni px-5 bg-slate-200 relative">
        <div className="fix_w h-fit uni_col gap-2 z-50">
          <div className="w-full py-5 flex flex-col sm:flex-col md:flex-row items-stretch justify-between gap-3">
            {/* Logo */}
            <div className="w-full flex items-start justify-center sm:justify-center md:justify-start">
              <Link href="/" className="uni_col items-start gap-0 w-fit">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold inline-block">
                  A Plus Mart BD
                </h1>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold inline-block">
                  Medical
                </h3>
              </Link>
            </div>

            {/* quick Links */}
            <div className="w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-center md:text-start mb-2">
                Quick Links
              </h3>
              {/* menu items */}
                <div className="w-full flex flex-col items-center sm:items-center md:items-start gap-3">
                  <Link href="/category/Surgical" className="ftr_btn">
                    Surgical
                  </Link>
                  <Link href="/" className="ftr_btn">
                    Privacy Policy
                  </Link>
                  <Link href="/category/Medical" className="ftr_btn">
                    Medical
                  </Link>
                  <Link href="/" className="ftr_btn">
                    About Us
                  </Link>
                </div>
            </div>

            {/* Contact Information */}
            <div className="w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-center md:text-start">
                Contact Info
              </h3>

              <div className="flex items-center justify-center sm:justify-center md:justify-start gap-4 my-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm hover:scale-110"
                >
                  <FaFacebookF size={18} />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/"
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
                  href="https://tiktok.com/"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition duration-300 shadow-sm hover:scale-110"
                >
                  <FaTiktok size={18} />
                </a>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center sm:text-center md:text-start">
                Pay with
              </h3>
              <div className="w-full">
                <img src="/images/pay.png" alt="pay with" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Footer copy rights Content */}
          <div className="w-full py-3 uni_col text-xs font-normal text-gray-600 text-center gap-2">
            <p>© 2025 A Plus Mart BD Medical Store. All rights reserved.</p>
            <p>Powered By: A Plus Advertising Limited</p>
          </div>
        </div>

        <div className="w-full absolute h-full bottom-0 left-0 z-10">
            <img src="/images/bg1.jpg" alt="bg footer" className="w-full h-full object-fill opacity-10" />
        </div>
      </div>
    </>
  );
}
