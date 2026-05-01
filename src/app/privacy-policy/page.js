"use client";
import { useState } from "react";
import { FaFacebookMessenger, FaLock, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

export default function PrivacyPolicy() {
  const videos = ["/images/hero1.mp4", "/images/hero2.mp4"];
  const [current, setCurrent] = useState(0);

  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <>
      <div className="w-full h-fit uni_col z-10 my-5 gap-5">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#63202D]">
                Privacy Policy
              </h1>
              <p className="text-xl text-[#161616] w-full sm:w-[70%] md:w-[50%] mt-2">
                At <strong>A Plus Mart BD Medical</strong> , we are committed to
                protecting your privacy and ensuring a secure experience while
                purchasing medical and surgical equipment from our platform.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information.
              </p>

              <div className="w-full flex items-center gap-3 font-semibold text-[#63202D] text-xl mt-5">
                <MdDateRange />
                <p>Last Updated: 4/23/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit uni_col z-10 my-5 gap-5">
        <div className="fix_w p-5 bg-[#eeeeee] border-2 rounded-md flex flex-col gap-5">
          {/* 1 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg hidden sm:flex items-center justify-center">
              1
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Information We Collect
              </h1>
              <p className="text-[#161616]">
                We may collect the following types of information:
              </p>
              <div className="w-full flex flex-col md:flex-row items-stretch gap-3 mt-3">
                <div className="w-full bg-[#C6C0BC] rounded-md p-5">
                  <h1 className="text-xl font-semibold">
                    Personal Information
                  </h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Billing & Shipping Address</li>
                    <li>Business/Organization Name (for wholesale clients)</li>
                  </ul>
                </div>
                <div className="w-full bg-[#C6C0BC] rounded-md p-5">
                  <h1 className="text-xl font-semibold">
                    Transaction Information
                  </h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>Order details</li>
                    <li>Payment methods</li>
                    <li>Purchase history</li>
                  </ul>
                </div>
                <div className="w-full bg-[#C6C0BC] rounded-md p-5">
                  <h1 className="text-xl font-semibold">Technical Data</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Cookies & usage data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 2 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              2
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                How We Use Your Information
              </h1>
              <p className="text-[#161616]">We use your data to:</p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Process and deliver orders</li>
                  <li>Communicate order updates and customer support</li>
                  <li>Improve our website and services</li>
                  <li>
                    Provide wholesale pricing and business-related services
                  </li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              3
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Wholesale & Business Clients
              </h1>
              <p className="text-[#161616]">
                Since we operate as a *wholesale supplier of medical and
                surgical equipment*, we may collect and use business-related
                information (such as company name, trade license details) to:
              </p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Verify business authenticity</li>
                  <li>Offer bulk pricing and B2B services</li>
                  <li>Maintain transaction records</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              4
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Payment Security
              </h1>
              <p className="text-[#161616]">
                We do{" "}
                <strong>not store your sensitive payment information</strong>.
                All transactions are processed through secure and trusted
                payment gateways such as:
              </p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>bKash</li>
                  <li>Nagad</li>
                  <li>Upay</li>
                  <li>Rocket</li>
                  <li>Bank Cards</li>
                  <li>Bank Accounts</li>
                </ul>
              </div>
              <p className="text-[#161616]">
                These platforms follow industry-level security standards.
              </p>
            </div>
          </div>

          {/* 5 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              5
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Cookies & Tracking Technologies
              </h1>
              <p className="text-[#161616]">We use cookies to:</p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Enhance user experience</li>
                  <li>Remember preferences</li>
                  <li>Analyze website traffic</li>
                </ul>
              </div>
              <p className="text-[#161616]">
                You can disable cookies from your browser settings, though some
                features may not function properly.
              </p>
            </div>
          </div>

          {/* 6 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              6
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Data Sharing & Disclosure
              </h1>
              <p className="text-[#161616]">
                We do <strong>not sell or rent your personal data</strong>. We
                may share information with:
              </p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Delivery partners (for order fulfillment)</li>
                  <li>Payment providers</li>
                  <li>Legal authorities (if required by law)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              7
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Data Security
              </h1>
              <p className="text-[#161616]">
                We implement appropriate technical and organizational measures
                to protect your data, including:
              </p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Secure servers</li>
                  <li>Encrypted connections (SSL)</li>
                  <li>Access control</li>
                </ul>
              </div>
              <p className="text-[#161616]">
                However, no system is 100% secure, and we encourage users to
                take precautions as well.
              </p>
            </div>
          </div>

          {/* 8 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              8
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Your Rights
              </h1>
              <p className="text-[#161616]">You have the right to:</p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
              </div>
              <p className="text-[#161616]">
                To exercise these rights, contact us directly.
              </p>
            </div>
          </div>

          {/* 9 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              9
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Third-Party Links
              </h1>
              <p className="text-[#161616]">
                Our website may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </p>
            </div>
          </div>

          {/* 10 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              10
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Updates to This Policy
              </h1>
              <p className="text-[#161616]">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated date.
              </p>
            </div>
          </div>

          {/* 11 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              11
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Contact Us
              </h1>
              <p className="text-[#161616]">
                If you have any questions regarding this Privacy Policy, you can
                contact us:
              </p>
              <p className="text-[#161616]">
                <strong>Email:</strong> support@aplusmartbd.com
              </p>
              <p className="text-[#161616]">
                <strong>Phone:</strong> 01853838891
              </p>
              <p className="text-[#161616]">
                <strong>Website:</strong>{" "}
                <a
                  href="https://aplusmartbd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aplusmartbd.com
                </a>
              </p>
            </div>
          </div>

          {/* 12 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              <FaLock />
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Your Trust, Our Responsibility
              </h1>
              <p className="text-[#161616]">
                We are dedicated to maintaining the highest standards of privacy
                and security for healthcare professionals and businesses who
                rely on us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
