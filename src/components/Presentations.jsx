import React from "react";
import solidityPresentation from "../assets/presentations/solidity-presentation.png";
import womenWeb3Presentation from "../assets/presentations/women-web3-presentation.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Presentations = () => {
  return (
    <section id="presentations" className="bg-custom-black lg:py-6 mb-10 mt-96">
      <div className="container pt-24 md:pt-0 lg:py-24 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="text-center pt-0">
            <h2 className="mt-36 text-4xl md:text-5xl font-extralight text-white md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
                <span className="relative font-semibold">Presentations</span>
              </span>
              <br className="block sm:hidden" />
            </h2>
          </div>
          <p className="mt-12 text-sm md:text-md font-light leading-6 text-white text-opacity-70">
            Video recordings of the final presentations of my projects for the
            Women Build Web3 Accelerator Program (Dec 2022) and the Encode Club
            Solidity Bootcamp (Apr 2023)
          </p>
        </div>

        <div className="md:flex justify-around mt-8">
          <div className="md:mt-12 rotate-img w-full">
            <a
              href="https://www.youtube.com/watch?v=gWzAzkQoy-o&t=2939s"
              target="_blank"
            >
              <LazyLoadImage
                className="text-white w-[70%] mx-auto cursor-pointer"
                src={solidityPresentation}
                effect="blur"
                alt="Presentation that I did for the Encode Club Solidity Bootcamp"
              />
            </a>
          </div>
          <div className="md:mt-12 rotate-img w-full">
            <a
              href="https://www.youtube.com/watch?v=_mut70FCiv4"
              target="_blank"
            >
              <LazyLoadImage
                className="text-white w-[70%] mx-auto cursor-pointer"
                src={womenWeb3Presentation}
                alt="Presentation that I did for the Women Build Web3 Accelerator Program"
                effect="blur"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;
