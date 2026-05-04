"use client";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { RiMailSendFill, RiSpeakFill } from "react-icons/ri";
import { IoIosSend, IoLogoWhatsapp } from "react-icons/io";
import {
  IoCallSharp,
  IoLocation,
  IoMail,
  IoShareSocial,
} from "react-icons/io5";

export default function Contact() {
  const videos = ["/images/hero1.mp4", "/images/hero2.mp4"];
  const [current, setCurrent] = useState(0);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      type: "message",
    };

    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent!");
      e.target.reset();
    } else {
      alert("Failed!");
    }
  };

  const handleMeetingSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      type: "meeting",
    };
    
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Meeting request sent!");
      e.target.reset();
    } else {
      alert("Failed!");
    }
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
              <div className="w-fit flex items-center gap-2 mb-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#766540] uppercase">
                  get in touch
                </h3>
                <div className="w-[50px] h-[2.5px] bg-[#766540]"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#63202D]">
                Contact Us
              </h1>
              <p className="text-xl text-[#161616] w-full sm:w-[70%] md:w-[50%] mt-2">
                We're here to help you with any inquiries, product information,
                bulk orders or partnership opportunities. Reach out to us and
                we'll get back to you as soon as possible.
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
                  href="https://m.me/yourpage"
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

        <div className="fix_w h-auto flex flex-col md:flex-row gap-5 px-5">
          {/* Message Us section */}
          <div className="w-full h-auto border rounded-md bg-[#f2f2f2] p-5 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-md border shadow-md bg-white hidden md:flex items-center justify-center">
                <RiMailSendFill className="text-3xl text-[#63202D]" />
              </div>
              <div className="w-full flex flex-col gap-0">
                <h1 className="text-xl font-semibold capitalize text-[#63202D]">
                  message us
                </h1>
                <h2 className="text-base text-[#161616]">
                  Fill out the form below and we will get back to you as soon as
                  possible.
                </h2>
              </div>
            </div>

            <div className="w-full my-5">
              <form onSubmit={handleMessageSubmit}>
                <div className="w-full flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full py-1 px-3 rounded-md border"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full py-1 px-3 rounded-md border"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full mt-3 py-1 px-3 rounded-md border"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full mt-3 py-1 px-3 rounded-md h-[100px] border"
                ></textarea>
                <button
                  type="submit"
                  className="mt-3 bg-[#63202D] text-white py-1.5 text-lg px-3 rounded-lg hover:bg-[#4d1a21] transition duration-300 flex items-center gap-1"
                >
                  <IoIosSend /> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Schedule a Meeting section */}
          <div className="w-full h-auto border rounded-md bg-[#f2f2f2] p-5 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-md border shadow-md bg-white hidden md:flex items-center justify-center">
                <FaUsers className="text-3xl text-[#63202D]" />
              </div>
              <div className="w-full flex flex-col gap-0">
                <h1 className="text-xl font-semibold capitalize text-[#63202D]">
                  Schedule a Meeting
                </h1>
                <h2 className="text-base text-[#161616]">
                  Book a meeting with our team at your convenience.
                </h2>
              </div>
            </div>
            <div className="w-full p-5 my-5 rounded-md bg-[#63202d1a]">
              <div className="flex items-center gap-3 text-[#63202D] text-lg font-medium">
                <RiSpeakFill className="w-[20px] min-w-[20px] h-[20px]" /> Want
                to talk directly?
              </div>
              <p className="text-base font-normal text-[#686868]">
                Leave your number or preferred time, we will call you back.
              </p>
            </div>

            <form onSubmit={handleMeetingSubmit}>
              <div className="w-full flex flex-col md:flex-row items-center gap-3">
                <input
                  type="date"
                  name="date"
                  placeholder="Preferred Date"
                  className="w-full py-1 px-3 rounded-md border"
                />
                <input
                  type="time"
                  name="time"
                  placeholder="Preferred Time"
                  className="w-full py-1 px-3 rounded-md border"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full mt-3 py-1 px-3 rounded-md border"
              />
              <button
                type="submit"
                className="mt-3 bg-[#63202D] text-white py-1.5 text-lg px-3 rounded-lg hover:bg-[#4d1a21] transition duration-300 flex items-center gap-1"
              >
                <MdDateRange /> Schedule Meeting
              </button>
            </form>
          </div>
        </div>

        <div className="fix_w h-auto flex flex-wrap justify-evenly gap-5 px-5 my-5">
          {/* call us */}
          <div className="w-full md:w-fit p-5 rounded-md border shadow-md flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#63202D] font-semibold text-xl">
              <IoCallSharp /> Call Us
            </div>
            <a
              href="tel:+8801853838891"
              className="text-lg font-medium text-[#161616]"
            >
              +88 01853838891
            </a>
            <a
              href="tel:+8801635347489"
              className="text-lg font-medium text-[#161616]"
            >
              +88 01635347489
            </a>
            <p className="text-sm text-[#686868]">(Sat - Thu: 9 AM - 7 PM)</p>
          </div>

          {/* email us */}
          <div className="w-full md:w-fit p-5 rounded-md border shadow-md flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#63202D] font-semibold text-xl">
              <IoMail /> Email Us
            </div>
            <a
              href="mailto:info@company.com"
              className="text-lg font-medium text-[#161616]"
            >
              info@company.com
            </a>
            <a
              href="mailto:support@company.com"
              className="text-lg font-medium text-[#161616]"
            >
              support@company.com
            </a>
            <p className="text-sm text-[#686868]">
              (We respond within 24 hours)
            </p>
          </div>

          {/* Visit us */}
          <div className="w-full md:w-fit p-5 rounded-md border shadow-md flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#63202D] font-semibold text-xl">
              <IoLocation /> Visit Us
            </div>
            <p className="text-lg font-medium text-[#161616]">
              South Monipur, Dhaka.
            </p>
            <p className="text-sm text-[#686868]">(Sat - Thu: 9 AM - 7 PM)</p>
          </div>

          {/* whatsapp us */}
          <div className="w-full md:w-fit p-5 rounded-md border shadow-md flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#63202D] font-semibold text-xl">
              <IoLogoWhatsapp /> WhatsApp Us
            </div>
            <a
              href="https://wa.me/8801853838891"
              className="text-lg font-medium text-[#161616]"
            >
              +88 01853838891
            </a>
            <a
              href="https://wa.me/8801635347489"
              className="text-lg font-medium text-[#161616]"
            >
              +88 01635347489
            </a>
            <p className="text-sm text-[#686868]">(Sat - Thu: 9 AM - 7 PM)</p>
          </div>

          {/* Follow us */}
          <div className="w-full md:w-fit p-5 rounded-md border shadow-md flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#63202D] font-semibold text-xl">
              <IoShareSocial /> Follow Us
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61588858407537"
                target="_blank"
                className="text-lg font-medium text-[#161616] flex items-center gap-1"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                className="text-lg font-medium text-[#161616] flex items-center gap-1"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/yourpage"
                target="_blank"
                className="text-lg font-medium text-[#161616] flex items-center gap-1"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-sm text-[#686868]">(Follow us for updates)</p>
          </div>
        </div>
      </div>
    </>
  );
}
