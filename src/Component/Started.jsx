import React from "react";
import user from "../assets/user.png";
import packages from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Started = () => {
  return (
    <div className="mt-[70px] ">
      <div className="w-10/12 mx-auto h-full  justify-center items-center">
        <div className="text-center">
          <h2 className="text-[#101727] font-extrabold text-3xl md:text-[48px]">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#627382] mt-4">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="mt-4 items-center grid md:grid-cols-2 lg:grid-cols-3 mt-[80px] gap-4  ">
          {/* cart 1 */}
          <div className="card bg-[#f1f1f1] md:w-96 shadow-lg p-8 relative">
            <span className="absolute top-4 right-4 flex items-center justify-center rounded-full h-[35px] w-[35px] bg-gradient-to-br from-violet-900 to-fuchsia-500 text-white text-sm font-bold">
              01
            </span>

            <div className="flex flex-col items-center">
              <figure className="mt-4">
                <img
                  src={user}
                  alt="user"
                  className="w-20 h-20 rounded-full bg-linear-to-bl from-violet-200 to-fuchsia-300 p-5"
                />
              </figure>

              <div className="card-body items-center text-center px-0">
                <h2 className="card-title text-xl font-bold">Create Account</h2>
                <p className="text-gray-600">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>

          {/* cart 2 */}
          <div className="card bg-[#f1f1f1] md:w-96 shadow-lg p-8 relative">
            <span className="absolute top-4 right-4 flex items-center justify-center rounded-full h-[35px] w-[35px] bg-gradient-to-br from-violet-900 to-fuchsia-500 text-white text-sm font-bold">
              02
            </span>

            <div className="flex flex-col items-center">
              <figure className="mt-4">
                <img
                  src={packages}
                  alt="packages"
                  className="w-20 h-20 rounded-full bg-linear-to-bl from-violet-200 to-fuchsia-300 p-5"
                />
              </figure>

              <div className="card-body items-center text-center px-0">
                <h2 className="card-title text-xl font-bold">
                  Choose Products
                </h2>
                <p className="text-gray-600">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>
          </div>

          {/* cart 3 */}
          <div className="card bg-[#f1f1f1] md:w-96 shadow-lg p-8 relative">
            <span className="absolute top-4 right-4 flex items-center justify-center rounded-full h-[35px] w-[35px] bg-gradient-to-br from-violet-900 to-fuchsia-500 text-white text-sm font-bold">
              03
            </span>

            <div className="flex flex-col items-center">
              <figure className="mt-4">
                <img
                  src={rocket}
                  alt="rocket"
                  className="w-20 h-20 rounded-full bg-linear-to-bl from-violet-200 to-fuchsia-300 p-5"
                />
              </figure>

              <div className="card-body items-center text-center px-0">
                <h2 className="card-title text-xl font-bold">Start Creating</h2>
                <p className="text-gray-600">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
