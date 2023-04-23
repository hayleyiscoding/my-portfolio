import React from "react";
import { moreAboutMeData } from "../constants";

const Achievements = () => {
  return (
    <section className="py-12 bg-custom-black sm:py-16 lg:py-20 xl:py-20">
      <div className=" container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center pt-0">
          <h2 className="mt-4 text-5xl font-extralight text-white md:mt-8">
            <span className="relative inline-block">
              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-semibold">Achievements</span>
            </span>
            <br className="block sm:hidden" />
          </h2>
        </div>
        <div className="grid items-center grid-cols-1 lg:grid-cols-1 gap-y-12 lg:gap-x-20 xl:gap-x-40">
          <div className="flow-root mt-12 xl:mt-20">
            <ul className="-my-8 divide-y divide-gray-200 xl:-my-10 flex flex-col items-center max-w-2xl mx-auto">
              {moreAboutMeData.map((fact) => (
                <li
                  key={fact.id}
                  className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start"
                >
                  <span className="text-3xl font-normal text-gray-300">
                    {`0${fact.id}`}.
                  </span>
                  <p className="mt-6 text-md font-extralight text-white sm:mt-0 sm:ml-9">
                    <span className="font-light">{fact.text}</span> test and
                    this is another test
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <div className="flow-root mt-12 xl:mt-20">
              <ul className="-my-8 divide-y divide-gray-200 xl:-my-10">
                <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                  <span className="text-4xl font-medium text-gray-300">
                    01.
                  </span>
                  <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">
                    <span className="font-semibold">
                      Clarity gives you the blocks
                    </span>{" "}
                    & components you need to create a website.
                  </p>
                </li>

                <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                  <span className="text-4xl font-medium text-gray-300">
                    02.
                  </span>
                  <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">
                    Clarity gives you the{" "}
                    <span className="font-semibold">blocks & components</span>{" "}
                    you need to create a website.
                  </p>
                </li>

                <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                  <span className="text-4xl font-medium text-gray-300">
                    03.
                  </span>
                  <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">
                    Clarity gives you the blocks & components you need to{" "}
                    <span className="font-semibold">create a website</span>.
                  </p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
