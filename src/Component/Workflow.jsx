import React from "react";

const Workflow = () => {
  return (
    <div className="  text-white bg-linear-to-br from-violet-900 to-fuchsia-500 mt-[60px] p-5 flex items-center ">
      <div className="justify-center  md:w-9/12 mx-auto">
        <div>
          <h2 className="font-extrabold text-2xl md:text-[40px] text-center">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-center mt-4 ">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br />
            Start your free trial today.
          </p>
        </div>
        <div className="mt-[40px]">
          <div className="flex w-11/12 md:w-6/12 mx-auto flex-col sm:flex-row gap-4  max-w-md sm:max-w-none ">
            

            <button className="relative  sm:w-auto p-[1.5px] rounded-2xl transition-all shadow-lg group active:scale-95">
              <div className="absolute inset-0 bg-linear-to-br from-violet-900 to-fuchsia-500 rounded-2xl"></div>

              {/* Button Inner Content */}
              <div className="relative px-8 py-[14px] bg-white rounded-[14px] flex items-center justify-center gap-3 transition-all">
                

                <span className="font-semibold bg-linear-to-br from-violet-900 to-fuchsia-500 bg-clip-text text-transparent">
                  Explore Products
                </span>
              </div>
            </button>
            <button className="border  border-zinc-100 rounded-2xl p-4">
                View Pricing
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
