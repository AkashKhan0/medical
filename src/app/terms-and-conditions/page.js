"use client";
import { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MdDateRange, MdPushPin } from "react-icons/md";

export default function TermsAndConditions() {
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
                Terms & Conditions
              </h1>
              <p className="text-xl text-[#161616] w-full sm:w-[70%] md:w-[50%] mt-2">
                Welcome to <strong>A Plus Mart BD Medical</strong>. By accessing
                and using our website, you agree to comply with and be bound by
                the following Terms & Conditions. Please read them carefully
                before using our services.
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
                General Overview
              </h1>
              <p className="text-[#161616]">
                A Plus Mart BD Medical is a wholesale and retail supplier of{" "}
                <strong>medical and surgical equipment</strong> in Bangladesh.
                These terms govern your use of our website and services.
              </p>
            </div>
          </div>

          {/* 2 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              2
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Eligibility
              </h1>
              <p className="text-[#161616]">
                By using this website, you confirm that:
              </p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>You are at least 18 years old</li>
                  <li>
                    You are legally capable of entering into binding contracts
                  </li>
                  <li>
                    Business customers provide accurate and valid information
                  </li>
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
                Products & Services
              </h1>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>
                    We sell medical, surgical, and healthcare-related equipment
                  </li>
                  <li>Product availability is subject to stock</li>
                  <li>
                    We reserve the right to modify or discontinue products
                    without notice
                  </li>
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
                Wholesale (B2B) Policy
              </h1>
              <p className="text-[#161616]">
                As a <strong>wholesale supplier</strong>, we may:
              </p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Require business verification (e.g., trade license)</li>
                  <li>Offer special pricing for bulk orders</li>
                  <li>
                    Set minimum order quantities (MOQ) for certain products
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              5
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Pricing & Payment
              </h1>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>All prices are listed in BDT (৳)</li>
                  <li>Prices may change without prior notice</li>
                  <li>
                    Payments are accepted via:
                    <ul className="list-decimal list-inside ml-5">
                      <li>Bank transfer</li>
                      <li>Mobile payment (bKash, Rocket, Nagad)</li>
                    </ul>
                  </li>
                  <li>
                    Orders will be processed only after payment confirmation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              6
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Order Acceptance & Cancellation
              </h1>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>We reserve the right to accept or reject any order</li>
                  <li>
                    Orders may be canceled due to:
                    <ul className="list-decimal list-inside ml-5">
                      <li>Product unavailability</li>
                      <li>Pricing errors</li>
                      <li>Suspicious activity</li>
                    </ul>
                  </li>
                  <li>Customers may request cancellation before shipment</li>
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
                Shipping & Delivery
              </h1>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>
                    We deliver across Bangladesh through third-party courier
                    services
                  </li>
                  <li>Delivery time may vary depending on location</li>
                  <li>
                    Delays caused by couriers are beyond our direct control
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 8 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              8
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Returns & Refunds
              </h1>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>
                    Returns are accepted only for defective or incorrect items
                  </li>
                  <li>
                    Customers must report issues within [X] days of delivery
                  </li>
                  <li>Products must be unused and in original packaging</li>
                  <li>Refunds are processed after inspection and approval</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 9 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              9
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Product Usage Disclaimer
              </h1>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>
                    Our products are intended for professional or proper use
                  </li>
                  <li>
                    We are not liable for misuse or improper handling of medical
                    equipment
                  </li>
                  <li>
                    Users should follow manufacturer guidelines and safety
                    standards
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 10 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              10
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Intellectual Property
              </h1>
              <p className="text-[#161616]">
                All content on this website (text, images, logos, design) is the
                property of A Plus Mart BD Medical and may not be copied or
                reused without permission.
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
                Limitation of Liability
              </h1>
              <p className="text-[#161616]">
                We shall not be held responsible for:
              </p>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Indirect or incidental damages</li>
                  <li>Losses arising from misuse of products</li>
                  <li>Delays or service interruptions beyond our control</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 12 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              12
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">Privacy</h1>
              <p className="text-[#161616]">
                Your use of our website is also governed by our Privacy Policy.
              </p>
            </div>
          </div>

          {/* 13 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              13
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Changes to Terms
              </h1>
              <p className="text-[#161616]">
                We reserve the right to update these Terms & Conditions at any
                time. Continued use of the website means you accept the updated
                terms.
              </p>
            </div>
          </div>

          {/* 14 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              14
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Governing Law
              </h1>
              <p className="text-[#161616]">
                These Terms & Conditions are governed by the laws of Bangladesh.
              </p>
            </div>
          </div>

          {/* 15 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              15
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Contact Information
              </h1>
              <p className="text-[#161616]">
                For any inquiries regarding these Terms & Conditions:
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

          {/* 16 number */}
          <div className="w-full flex items-start gap-3">
            <div className="w-[30px] h-[30px] hidden sm:flex items-center justify-center bg-[#63202D] rounded-full text-[#ffda8a] font-bold text-lg">
              <MdPushPin />
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#161616]">
                Important Notice
              </h1>
              <p className="text-[#161616] font-bold">
                By placing an order on our website, you agree to these Terms &
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
