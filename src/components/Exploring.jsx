import React from "react";
import { secondarySkillsData } from "../constants";
import {
  SiSass,
  SiSolidity,
  SiGraphql,
  SiNodedotjs,
  SiTypescript,
  SiAngular,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaEthereum, FaHardHat } from "react-icons/fa";

const Exploring = () => {
  const icons = [
    TbBrandNextjs,
    SiSolidity,
    FaEthereum,
    FaHardHat,
    SiGraphql,
    SiGraphql,
    SiNodedotjs,
    SiTypescript,
    SiAngular,
    SiSass,
  ];
  return (
    <section id="exploring" className="container mx-auto py-5 bg-custom-black">
      <div className="py-19 px-12 lg:px-12">
        <div className="grid max-w-md mx-auto lg:max-w-none grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-4 lg:gap-y-2 place-items-center lg:grid-rows-4">
          {secondarySkillsData.slice(0, 4).map((item, i) => {
            const Icon = icons[i];
            return (
              <div className="w-[60%] text-center md:my-3 md:p-5">
                <div className="flex justify-around items-center p-5 rotate-12 custom-neumorphic-tech">
                  <div className="text-custom-red mr-4 md:mr-0">
                    <Icon size={20} />
                  </div>
                  <p className="text-white text-sm md:text-xl w-auto mx-auto font-light">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="col-span-2 lg:col-span-1 lg:row-span-2 rounded-lg md:mt-0">
            <div className="px-8 py-24 xl:p-10 border border-1 rounded-3xl m-8">
              <div className="text-center pt-0">
                <h2 className="mt-4 text-5xl font-extralight text-white md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
                    <span className="relative font-semibold">Exploring</span>
                  </span>
                  <br className="block sm:hidden" />
                </h2>
              </div>
              <p className="text-white font-sm md:font-md font-extralight p-3 mt-8 text-center text-opacity-70">
                These are additional skills that I have explored and possess an
                introductory level of knowledge in.
              </p>
              <div className="mt-8"></div>
            </div>
          </div>

          {secondarySkillsData.slice(4, 11).map((item, i) => {
            const Icon = icons[i];
            return (
              <div className="w-[60%] text-center my-3 p-5">
                <div className="flex justify-around items-center p-5 rotate-12 custom-neumorphic-tech">
                  <div className="text-custom-red mr-4 md:mr-0">
                    <Icon size={20} />
                  </div>
                  <p className="text-white font-light text-sm md:text-xl">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exploring;
