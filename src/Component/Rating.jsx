import React from "react";

const Rating = () => {
  return (
    <div className="h-[200px] bg-linear-to-br from-violet-900 to-fuchsia-500 mt-[60px] flex items-center ">
      <div className="grid grid-cols-3 w-full md:w-9/12 mx-auto ">
        <div className="text-center ">
          <h2 className="text-white font-extrabold text-[40px]">50K+</h2>
          <p className="text-white">Active Users</p>
        </div>
        <div className="text-center border-x-2 border-white">
          <h2 className="text-white font-extrabold text-[40px]">200+</h2>
          <p className="text-white">Premium Tools</p>
        </div>
        <div className="text-center">
         <h2 className="text-white font-extrabold text-[40px]">4.9</h2>
          <p className="text-white">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
