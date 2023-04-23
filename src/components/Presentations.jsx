import React from "react";
import solidityPresentation from "../assets/projects/solidity-presentation.png";
import womenWeb3Presentation from "../assets/projects/women-web3-presentation.png";

const Presentations = () => {
  return (
    <section className="py-20 bg-custom-black sm:py-16 lg:py-6 mb-10 mt-96">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="text-center pt-0">
            <h2 className="mt-4 text-5xl font-extralight text-white md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
                <span className="relative font-semibold">Presentations</span>
              </span>
              <br className="block sm:hidden" />
            </h2>
          </div>
          <p className="mt-12 text-sm font-light leading-6 text-white text-opacity-70">
            Video recordings of the final presentations of my projects for the
            3-month Women Build Web3 Accelerator Program (Dec 2022) and the
            Encode Club Solidity Bootcamp (Apr 2023)
          </p>
        </div>

        <div className="md:flex justify-around">
          <div className="mt-8 md:mt-12 rotate-img">
            <a
              href="https://www.youtube.com/watch?v=gWzAzkQoy-o&t=2939s"
              target="_blank"
            >
              <img
                className="w-full max-w-md mx-auto cursor-pointer"
                src={solidityPresentation}
                alt="Presentation that I did for the Encode Club Solidity Bootcamp"
              />
            </a>
          </div>
          <div className="md:mt-12 rotate-img">
            <a
              href="https://www.youtube.com/watch?v=_mut70FCiv4"
              target="_blank"
            >
              <img
                className="w-full max-w-md mx-auto cursor-pointer"
                src={womenWeb3Presentation}
                alt="Prsentation that I did for the Women Build Web3 Accelerator Program"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;
