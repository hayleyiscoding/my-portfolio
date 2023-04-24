import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container px-6 mx-auto py-24">
        <section className="text-white text-opacity-70 text-center">
          <h2 className="text-5xl md:text-5xl font-extralight text-white md:mt-3 text-center mb-8">
            <span className="relative inline-block">
              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-semibold">Projects</span>
            </span>
            <br className="block sm:hidden" />
          </h2>
          <p className="mt-12 mb-12 text-sm md:text-md font-light leading-6 text-white text-opacity-70 max-w-md mx-auto ">
            {" "}
            I have completed a number of projects - from a simple web2
            e-commerce app to full-stack decentralised apps built with
            blockchain technologies. I mainly code in React.js but I have some
            experience with Next.js, some Typescript and Solidity.
          </p>

          <div className="grid lg:grid-cols-3 gap-x-6 lg:gap-x-12 text-sm md:text-md text-opacity-70">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-custom-black block rounded-lg mb-6 lg:mb-0 pb-10 pt-10"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <div className="relative overflow-hidden bg-no-repeat bg-cover md:custom-zoom">
                  <img
                    src={project.image}
                    className="w-full rounded-t-lg grayscale contrast-200"
                  />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                  <svg
                    className="absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    style={{ left: "0", bottom: "0" }}
                  >
                    <path
                      fill="#191A21"
                      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3 pb-3 border-b border-b-custom-red border-b-80%">
                    {project.name}&nbsp;
                    <span className="custom-superscript">{project.type}</span>
                  </h5>
                  <p className="mb-4 pb-2 text-md font-extralight text-opacity-70">
                    {project.about}
                  </p>
                  <p className="mb-2 pb-2 text-white text-sm font-extralight custom-text-shadow">
                    {project.tech}
                  </p>
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      className="cursor-pointer inline-flex items-center justify-center px-1 py-1 mt-1 text-sm font-light leading-5 text-white transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black  hover:text-white"
                    >
                      Live Link
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
                    <a
                      href={project.github}
                      target="_blank"
                      className="cursor-pointer inline-flex items-center justify-center px-1 py-1 mt-1 ml-0 md:ml-7 text-sm font-light leading-5 text-white transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:text-white"
                    >
                      Github Repo
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
