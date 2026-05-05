import Link from "next/link";
import {
  FaBriefcase,
  FaBriefcaseMedical,
  FaEye,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";
import { GoGoal } from "react-icons/go";

export default function About() {
  return (
    <>
      <div className="w-full h-auto uni_col px-5">
        {/* who we are */}
        <div className="fix_w my-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-3">
            Who We Are
          </h1>

          <div className="w-full h-auto flex flex-col sm:flex-col md:flex-row items-stretch bg-[#F9F1EF] rounded-lg shadow-lg overflow-hidden">
            <div className="w-full sm:w-full md:w-[40%] h-[250px]">
              <img
                src="/images/whoweare.jpg"
                alt="who we are"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-full sm:w-full md:w-[60%] flex flex-col items-start justify-center gap-3 p-5">
              <p className="text-lg text-[#161616]">
                <strong>A Plus Mart BD Medical</strong> is a trusted and growing
                platform dedicated to supplying high-quality medical and
                surgical equipment at wholesale prices across Bangladesh.
              </p>
              <p className="text-lg text-[#161616]">
                As a part of the A Plus Group, we are committed to delivering
                reliability, affordability, and professional-grade healthcare
                products to clinics, hospitals, and individual practitioners.
              </p>
            </div>
          </div>
        </div>

        {/* our group structure */}
        <div className="fix_w my-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-5 text-center">
            Our Business Network
          </h1>

          <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 items-stretch gap-5 place-items-center">
            <div className="w-full rounded-lg shadow-xl hover:shadow-sm duration-300 max-w-[450px] uni_col gap-2 p-8 bg-[#F9F1EF]">
              <FaBriefcase className="text-xl sm:text-2xl md:text-3xl text-[#63202d]" />
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#63202d] text-center">
                A Plus Communication (Parent Company)
              </h1>
              <span className="w-full h-0.5 max-w-[300px] bg-[#63202d35]"></span>
              <p className="text-base sm:text-lg md:text-xl font-normal text-[#484848] text-center">
                The core foundation of our group, managing operations, strategy,
                and overall business direction.
              </p>
            </div>
            <div className="w-full rounded-lg shadow-xl hover:shadow-sm duration-300 max-w-[450px] uni_col gap-2 p-8 bg-[#63202d]">
              <FaBriefcaseMedical className="text-xl sm:text-2xl md:text-3xl text-[#F9F1EF]" />
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F9F1EF] text-center">
                A Plus Mart BD
              </h1>
              <span className="w-full h-0.5 max-w-[300px] bg-[#f9f1ef32]"></span>
              <p className="text-base sm:text-lg md:text-xl font-normal text-[#F9F1EF] text-center">
                A general e-commerce platform focused on delivering a wide range
                of products to customers across Bangladesh.
              </p>
            </div>
            <div className="w-full rounded-lg shadow-xl hover:shadow-sm duration-300 max-w-[450px] uni_col gap-2 p-8 bg-[#F9F1EF]">
              <FaBriefcase className="text-xl sm:text-2xl md:text-3xl text-[#63202d]" />
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#63202d] text-center">
                A Plus Advertising Ltd.
              </h1>
              <span className="w-full h-0.5 max-w-[300px] bg-[#63202d35]"></span>
              <p className="text-base sm:text-lg md:text-xl font-normal text-[#484848] text-center">
                Handles branding, marketing, and promotional activities to
                ensure strong market presence and growth.
              </p>
            </div>
          </div>
        </div>

        {/* our mission & vision */}
        <div className="fix_w my-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-5 text-center">
            Our Mission & Vision
          </h1>

          <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-stretch gap-5 place-items-center">
            <div className="w-full rounded-lg shadow-xl hover:shadow-sm duration-300 uni_col gap-2 p-8 bg-[#F9F1EF]">
              <div className="uni gap-5">
                <GoGoal className="text-2xl sm:text-3xl md:text-3xl text-[#63202d]" />
                <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-[#63202d] text-center">
                  Our Mission
                </h1>
              </div>
              <span className="w-full h-[2px] max-w-[300px] bg-[#63202d35]"></span>
              <p className="text-xl font-normal text-[#484848] text-center">
                To make high-quality medical and surgical equipment accessible
                at affordable prices for everyone in Bangladesh. We aim to
                support healthcare providers with reliable tools that enhance
                patient care and safety.
              </p>
            </div>
            <div className="w-full rounded-lg shadow-xl hover:shadow-sm duration-300 uni_col gap-2 p-8 bg-[#F9F1EF]">
              <div className="uni gap-5">
                <FaEye className="text-2xl sm:text-3xl md:text-3xl text-[#63202d]" />
                <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-[#63202d] text-center">
                  Our Vision
                </h1>
              </div>
              <span className="w-full h-[2px] max-w-[300px] bg-[#63202d35]"></span>
              <p className="text-xl font-normal text-[#484848] text-center">
                To become one of the leading medical and surgical equipment
                suppliers in Bangladesh, known for trust, quality,
                affordability, and continuous innovation.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="fix_w my-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-3">
            What We Offer
          </h1>

          <div className="w-full h-auto flex flex-col sm:flex-col md:flex-row items-stretch bg-[#F9F1EF] rounded-lg shadow-lg overflow-hidden">
            <div className="w-full sm:w-full md:w-[40%] h-[250px] bg-[#63202d33]">
              <img
                src="/images/whatweoffer.png"
                alt="what we offer"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-full sm:w-full md:w-[60%] flex flex-col items-start justify-center gap-3 p-5">
              <p className="text-xl text-[#161616]">
                We provide a wide range of medical and surgical products,
                including surgical instruments, diagnostic equipment, hospital
                accessories, orthopedic products, disposable supplies, and
                medical devices.
              </p>
              <p className="text-xl text-[#161616]">
                All our products are carefully selected to meet professional
                healthcare standards.
              </p>
            </div>
          </div>
        </div>

        {/* Global Sourcing */}
        <div className="fix_w my-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-3 text-end">
            Global Sourcing
          </h1>

          <div className="w-full h-auto flex flex-col sm:flex-col md:flex-row-reverse items-stretch bg-[#F9F1EF] rounded-lg shadow-lg overflow-hidden">
            <div className="w-full sm:w-full md:w-[40%] h-[250px] bg-[#63202d33]">
              <img
                src="/images/globalsource.jpg"
                alt="global sourcing"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-full sm:w-full md:w-[60%] flex flex-col items-start justify-center gap-3 p-5">
              <p className="text-xl text-[#161616]">
                We provide a wide range of medical and surgical products,
                including surgical instruments, diagnostic equipment, hospital
                accessories, orthopedic products, disposable supplies, and
                medical devices.
              </p>
              <p className="text-xl text-[#161616]">
                All our products are carefully selected to meet professional
                healthcare standards.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="fix_w my-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-3">
            Why Choose Us
          </h1>

          <div className="w-full h-auto flex flex-col sm:flex-col md:flex-row items-stretch bg-[#F9F1EF] rounded-lg shadow-lg overflow-hidden">
            <div className="w-full sm:w-full md:w-[40%] h-[250px] bg-[#63202d33]">
              <img
                src="/images/whychooseus.jpg"
                alt="why choose us"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-full sm:w-full md:w-[60%] flex flex-col items-start justify-center gap-3 p-5">
              <p className="text-xl text-[#161616]">
                <strong>Wholesale Pricing</strong> – Competitive bulk pricing
                for hospitals, clinics, and resellers.
              </p>
              <p className="text-xl text-[#161616]">
                <strong>Quality Assurance</strong> – Carefully selected products
                that meet professional standards.
              </p>
              <p className="text-xl text-[#161616]">
                <strong>Trusted Supply Chain</strong> – Strong sourcing network
                backed by A Plus Group.
              </p>
              <p className="text-xl text-[#161616]">
                <strong>Customer Focus</strong> – Dedicated to long-term
                relationships and customer satisfaction.
              </p>
              <p className="text-xl text-[#161616]">
                <strong>Fast Delivery</strong> – Reliable delivery service
                across Bangladesh.
              </p>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="fix_w my-10 relative h-[280px] flex items-center justify-between">
          <div className="w-full flex flex-col items-center md:items-start justify-center z-50">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-3">
              Global Reach
            </h1>
            <p className="text-xl text-center text-[#161616] my-3">
              Serving customers across the globe with our extensive network.
            </p>
            <img
              src="/images/flag.png"
              alt="what we offer"
              className="w-[160px] h-full object-contain mt-5 opacity-80"
            />
          </div>
          <img
            src="/images/world.png"
            alt="what we offer"
            className="w-fit h-full object-contain absolute top-0 right-0 z-10 opacity-30"
          />
        </div>

        {/* Call to action */}
        <div className="fix_w mt-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#63202D] mb-5 text-center">
            Call To Action
          </h1>
        </div>

        {/* looking for wholesale */}
        <div className="fix_w mb-5 p-5 rounded-lg shadow-xl hover:shadow-sm duration-300 uni_col bg-[#63202D]">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center text-[#c3c3c3]">
            Looking for reliable medical and surgical equipment at wholesale
            prices?
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl text-center text-[#d4d4d4] py-1">
            Get in touch with us today and experience quality, affordability,
            and trusted service.
          </h2>

          <div className="w-fit flex gap-1 sm:gap-2 md:gap-5 mt-2">
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
    </>
  );
}
