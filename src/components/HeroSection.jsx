import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import HeroImg from "../assets/Heroimg.png";

export default function HeroSection() {
  return (
    <div className="bg-[#F8F7F1] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-3xl md:text-4xl font-figtree font-bold text-[#032737] mb-4">
            Hey There,
          </h1>
          <h2 className="text-5xl md:text-7xl font-figtree text-[#032737] font-bold mb-6">
            I'm Sallal
          </h2>
          <p className="font-figtree text-[#032737] text-[18px] leading-relaxed mb-6 text-left">
            <span className="block">
              A passionate Web Developer with over 6 years of
            </span>
            <span className="block">
              experience building responsive, user-friendly websites for
            </span>
            <span className="block">clients across 38+ countries.</span>
          </p>
          <p className="font-figtree text-[#032737] text-[20px] font-medium mb-6 flex flex-wrap gap-2">
            <span>⭐ Top Rated</span>|
            <span>✅ 100% Job Success Score</span>|
            <span>💼 Available: 24/7</span>
          </p>
          <a href="mailto:sallalzahid51@gmail.com">
            <button className="bg-[#f05228] font-figtree text-white text-[20px] font-semibold px-6 py-3 rounded shadow-md border-2 border-transparent hover:bg-white hover:text-[#f05228] hover:border-[#f05228] transition duration-300 mb-6">
              Contact Me
            </button>
          </a>
          <div className="flex space-x-6 mt-6">
            <a
              href="#"
              className="bg-white p-4 rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300"
            >
              <SiUpwork className="text-3xl text-gray-700 hover:text-white transition duration-300" />
            </a>
            <a
              href="https://www.facebook.com/salal.zahid"
              className="bg-white p-4 rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300"
            >
              <FaFacebookF className="text-3xl text-gray-700 hover:text-white transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/sallal-zahid-4984672bb"
              className="bg-white p-4 rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300"
            >
              <FaLinkedin className="text-3xl text-gray-700 hover:text-white transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6">
          {/* Image Container */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex justify-center">
            <img
              src={HeroImg}
              alt="Sallal"
              className="w-[280px] md:w-[350px] lg:w-[400px] object-cover transform scale-110 -mb-[8px] ml-[-10px]"
            />

            {/* Social Icons with animation */}
            <div className="absolute -top-2 -left-3 animate-zoom-loop">
              <FaInstagram className="text-6xl text-pink-500 bg-white p-3 rounded-full shadow-lg" />
            </div>
            <div className="absolute top-[400px] -translate-y-1/2 -right-20 animate-zoom-loop">
              <FaTiktok className="text-6xl text-black bg-white p-3 rounded-full shadow-lg" />
            </div>
            <div className="absolute top-[400px] -translate-y-1/2 left-[-150px] animate-zoom-loop">
              <SiUpwork className="text-6xl text-green-600 bg-white p-3 rounded-full shadow-lg" />
            </div>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full sm:w-auto">
            {/* Box 1 */}
            <div className="bg-white rounded-xl px-6 py-4 w-full shadow-[12px_12px_20px_0px_rgba(3,39,55,0.12)]">
              <div className="flex items-baseline space-x-1 mb-2">
                <h3 className="font-figtree text-[#032737] text-4xl font-bold">02</h3>
                <span className="font-figtree text-[#032737] text-xl font-bold">+</span>
              </div>
              <p className="font-figtree text-[#032737] text-sm font-semibold leading-tight">
                <span className="block">Years of</span>
                <span className="block">Experience</span>
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-xl px-6 py-4 w-full shadow-[12px_12px_20px_0px_rgba(3,39,55,0.12)]">
              <h3 className="font-figtree text-[#032737] text-4xl font-bold mb-2">15+</h3>
              <p className="font-figtree text-[#032737] text-sm font-semibold leading-tight">
                <span className="block">Project</span>
                <span className="block">Completed</span>
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-xl px-6 py-4 w-full shadow-[12px_12px_20px_0px_rgba(3,39,55,0.12)]">
              <div className="flex items-baseline space-x-1 mb-2">
                <h3 className="font-figtree text-[#032737] text-4xl font-bold">100</h3>
                <span className="font-figtree text-[#032737] text-xl font-bold">%</span>
              </div>
              <p className="font-figtree text-[#032737] text-sm font-semibold leading-tight">
                <span className="block">Job Success</span>
                <span className="block">Score</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
