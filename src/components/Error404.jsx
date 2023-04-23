import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-custom-black">
      <h2 class="text-9xl font-extrabold text-white tracking-widest">404</h2>
      <div class="bg-custom-red text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-white group active:text-custom-red focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-custom-black border border-current">
            <Link to="/home">Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default Error404;
