import React from "react";
import g5 from "../assets/Group5.png";
import banner from "../assets/banner.png";
import play from "../assets/Play.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden mt-[60px] w-11/12 mx-auto md:w-full">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-red-400 text-sm font-medium px-5 py-2 rounded-full">
            <img src={g5} alt="" />
            <h1 class="font-semibold bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </h1>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span className="bg-[#101727] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-[#627382] max-w-lg ">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full max-w-md sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto bg-linear-to-br from-violet-900 to-fuchsia-500 transition-all px-8 py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3 group text-white active:scale-95">
              Explore Products
            </button>

            <button className="relative w-full sm:w-auto p-[1.5px] rounded-2xl transition-all shadow-lg group active:scale-95">
              <div className="absolute inset-0 bg-linear-to-br from-violet-900 to-fuchsia-500 rounded-2xl"></div>

              {/* Button Inner Content */}
              <div className="relative px-8 py-[14px] bg-white rounded-[14px] flex items-center justify-center gap-3 transition-all">
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <img
                    src={play}
                    alt="watch demo"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </span>

                <span className="font-semibold bg-linear-to-br from-violet-900 to-fuchsia-500 bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain  rounded-3xl "
              src={banner}
              alt="DigiTools"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
