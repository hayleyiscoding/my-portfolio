import React from "react";

const Guestbook = () => {
  return (
    <section id="guestbook">
      <div className="container mx-auto py-24">
        <div className="text-center pt-0">
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight text-white md:mt-8">
            <span className="relative inline-block">
              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-semibold">Guestbook</span>
            </span>
            <br className="block sm:hidden" />
          </h2>
        </div>
        <div>
          <p>
            Do you have a Metamask wallet? Say 'Hello' by signing my address
            book!
          </p>
          <a
            href="https://docs.google.com/document/d/1lHoTErELU9S1_aOsUnKMKq04cCMyRBLEkbKAM9UyTIY/edit?usp=sharing"
            target="_blank"
            className="cursor-pointer inline-flex items-center justify-center px-6 py-3 mt-12 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-custom-red border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black hover:text-white"
          >
            Download Resume
            <svg
              className="w-6 h-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
