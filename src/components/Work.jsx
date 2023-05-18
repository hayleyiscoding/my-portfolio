import React from "react";
import { workData } from "../constants";

const Work = () => {
  return (
    <section
      id="work"
      className="container experience lg:flex justify-around align-center mx-auto pt-18 pb-20 px-8"
    >
      <div className="text-left pt-0 ml-3">
        <h2 className="mt-4 text-4xl md:text-5xl font-extralight text-white md:mt-8">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
            <span className="relative font-semibold">Work</span>
          </span>
          <br className="block sm:hidden" />
        </h2>
      </div>
      <div className="col-1 w-full lg:w-[70%] p-5 mt-10 lg:pl-12">
        <ul class="container relative border-l border-custom-red dark:border-gray-700 mx-auto max-w-7xl">
          {workData.map((item) => (
            <li key={item.id} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-custom-red rounded-full -left-1.5 border border-white dark:border-custom-red dark:bg-gray-700"></div>
              <time className="mb-1 -mt-5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>

              <h3 className="text-lg font-normal text-white dark:text-white">
                {item.title}
                <span className="custom-superscript font-normal custom-text-shadow ">
                  &nbsp; {item.type}
                </span>
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.place}
              </p>
              <p className="mb-4 text-sm md:text-md text-opacity-70 font-extralight text-white dark:text-gray-400">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
