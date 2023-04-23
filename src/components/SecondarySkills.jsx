import React from "react";
import { secondarySkillsData } from "../constants";
import { RiCheckboxBlankFill } from "react-icons/ri";
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

const SecondarySkills = () => {
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
    <section className="py-24 sm:py-16 lg:py-28 bg-custom-black">
      <div className="py-19 sm:px-8 lg:px-12 max-w-7xl mx-auto ">
        <div className="grid max-w-md mx-auto lg:max-w-none grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-4 lg:gap-y-2 place-items-center lg:grid-rows-4">
          {secondarySkillsData.slice(0, 4).map((item, i) => {
            const Icon = icons[i];
            return (
              <div className="w-[60%] text-center my-3 p-5">
                {/* <img
              className="h-10 w-auto mx-auto opacity-70 object-contain"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-liva.png"
              alt=""
            /> */}
                <div className="flex justify-around items-center p-5 rotate-12 custom-neumorphic-tech">
                  <div className="text-custom-red">
                    <Icon size={20} />
                  </div>
                  <p className="text-white text-xl w-auto mx-auto font-light">
                    {item.name}
                  </p>
                </div>
                {/* <div className="bg-custom-red h-0.5 flex rotate-12">
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill
                    style={{ color: "white", marginLeft: "auto" }}
                    size={3}
                  />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                </div> */}
              </div>
            );
          })}

          <div className="col-span-2 lg:col-span-1 lg:row-span-2 rounded-lg bg-dark-gray">
            <div className="px-18 py-18 xl:p-10 border border-1 rounded-3xl">
              <div className="text-center pt-0">
                <h2 className="mt-4 text-5xl font-extralight text-white md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
                    <span className="relative font-semibold">Exploring</span>
                  </span>
                  <br className="block sm:hidden" />
                </h2>
              </div>
              <p className="text-white font-sm font-extralight p-3 mt-8 text-center">
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
                {/* <img
              className="h-10 w-auto mx-auto opacity-70 object-contain"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-liva.png"
              alt=""
            /> */}
                <div className="flex justify-around items-center p-5 rotate-12 custom-neumorphic-tech">
                  <div className="text-custom-red">
                    <Icon size={20} />
                  </div>
                  <p className="text-white text-xl font-light">{item.name}</p>
                </div>
                {/* <div className="bg-custom-red h-0.5 flex rotate-12">
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill
                    style={{ color: "white", marginLeft: "auto" }}
                    size={3}
                  />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                  <RiCheckboxBlankFill style={{ color: "white" }} size={5} />
                </div> */}
              </div>
            );
          })}

          {/* <div className="hidden lg:block">
            <img
              className="h-10 w-auto mx-auto opacity-70 object-contain"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-utosia.png"
              alt=""
            />
            <p className="text-white">SASS</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SecondarySkills;
