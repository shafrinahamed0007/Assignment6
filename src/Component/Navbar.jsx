import React from "react";

const Navbar = () => {
  return (
    <div className="navbar  md:w-9/12 mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />{" "}
          </svg>
          <span className="badge badge-sm indicator-item ">0</span>
        </div>
        <h2 className="mx-2">Login</h2>
        <a className="btn bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full text-white">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Navbar;
