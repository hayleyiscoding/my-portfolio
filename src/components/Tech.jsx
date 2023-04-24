import React from "react";
import { technologies } from "../constants/index.js";

const Tech = () => {
  return (
    <section className="container mx-auto overflow-hidden bg-custom-black">
      <div className="py-24 pt-0">
        <div className="text-center pt-20 mb-4 md:mb-12">
          <h2 className="mt-4 text-5xl font-extralight text-white md:mt-8 md:pb-8">
            <span className="relative inline-block">
              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-semibold">Core Skills</span>
            </span>
            <br className="block sm:hidden" />
          </h2>
        </div>
        <ul className="md:flex justify-center align-center gap-[3rem]">
          {technologies.map((item, index) => (
            <li
              key={index}
              className="custom-neumorphic-tech p-5 flex flex-col justify-center items-center w-[50%] mb-5 mx-auto md:w-[80%]"
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                width={70}
                className=" w-full grayscale contrast-200 brightness-100"
              />
              <p className="text-white flex justify-center items-center mt-3">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tech;
