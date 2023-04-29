import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";
import "animate.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-black border-b border-black dark:bg-gray-800 dark:border-gray-700">
        <div className=" relative px-3 py-3 lg:px-5 lg:pl-0">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                onClick={() => setShowSidebar((prevState) => !prevState)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                {!showSidebar ? (
                  <svg
                    className="w-4 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>{" "}
                    :
                  </svg>
                ) : (
                  <div className="w-4 h-6 pt-1">
                    <AiOutlineCloseCircle />
                  </div>
                )}
              </button>
              <Link to="/home" className="flex md:mr-24" reloadDocument>
                <div className="h-8 mr-3 ml-3 md:ml-2 bg-custom-red text-white p-1">
                  H
                </div>
                <span className="text-white self-center tracking-wide font-bold sm:text-md whitespace-nowrap dark:text-white">
                  Hayley | React Developer
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed z-50 right-0 bottom-40 bg-black border-b border-black dark:bg-gray-800 dark:border-gray-700 rounded-xl align-left">
        <div className="px-1 py-2 lg:px-2 lg:pl-0 ">
          <div className="flex">
            <div className="w-7 md:w-7">
              <a
                href="https://github.com/hayleyiscoding"
                className="flex ml-1 md:ml-2 md:mr-24 mb-2 w-5 md:w-9"
                target="_blank"
              >
                <div className="h-6 p-1 md:h-8 bg-custom-red text-white flex justify-center items-center rounded-sm">
                  <AiFillGithub size={20} />
                </div>
              </a>
              <a
                href="https://twitter.com/hayleyiscoding"
                target="_blank"
                className="flex ml-1 md:ml-2 md:mr-24 mb-2 md:w-9"
              >
                <div className="h-6 p-1 md:h-8 bg-custom-red text-white flex justify-center items-center rounded-sm">
                  <AiFillTwitterCircle size={20} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/hayleyiscoding/"
                target="_blank"
                className="flex ml-1 md:ml-2 md:mr-24 mb-2 w-2 md:w-9"
              >
                <div className="h-6 p-1 md:h-8 bg-custom-red text-white flex justify-between items-center rounded-sm">
                  <AiFillLinkedin size={20} />
                </div>
              </a>
              <a
                href="https://hayleyiscoding.hashnode.dev/"
                target="_blank"
                className="flex ml-1 md:ml-2 md:mr-24 w-2 md:w-9"
              >
                <div className="h-6 p-1 md:h-8 bg-custom-red text-white flex justify-center items-center rounded-sm">
                  <SiHashnode size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 z-40 w-8 h-screen pt-20 transition-transform -translate-x-full bg-black border-r border-black sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full bg-black dark:bg-gray-800">
          <ul className="font-light flex flex-col justify-end space-y-2">
            <li className="w-6 h-[4rem]">
              <Link
                to="/home"
                className="flex flex-col text-sm items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 mt-3"
                reloadDocument
              >
                <span className="-rotate-90">Home</span>
              </Link>
            </li>

            <li className="w-6 h-[3.5rem]">
              <Link
                to="#about"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
                reloadDocument
              >
                <span className="-rotate-90">About</span>
              </Link>
            </li>

            <li className="w-6 h-[4.5rem]">
              <Link
                to="#core-skills"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
                reloadDocument
              >
                <span className="-rotate-90">Skills</span>
              </Link>
            </li>

            <li className="w-6 h-[4.5rem]">
              <Link
                to="#education"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red  dark:hover:bg-gray-700 focus:text-custom-red"
                reloadDocument
              >
                <span className="-rotate-90">Education</span>
              </Link>
            </li>

            <li className="w-6 h-[4.5rem]">
              <Link
                to="#work"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
                reloadDocument
              >
                <span className="-rotate-90">Work</span>
              </Link>
            </li>

            <li className="w-6 h-[5.5rem]">
              <Link
                to="#projects"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
                reloadDocument
              >
                <span className="-rotate-90">Projects</span>
              </Link>
            </li>

            <li className="w-6 h-[5.5rem]">
              <Link
                to="#testimonials"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
                reloadDocument
              >
                <span className="-rotate-90">Testimonials</span>
              </Link>
            </li>

            <li className="w-6 h-[3rem]">
              <Link
                to="#contact"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
                reloadDocument
              >
                <span className="-rotate-90">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* mobile menu */}

      <div
        className={`fixed z-10 h-full bg-custom-black dark:bg-custom-black w-screen animate__animated animate__fadeInLeft ${
          showSidebar ? "visible md:hidden" : "hidden"
        }`}
      >
        <ul className="font-light flex flex-col justify-end space-y-12">
          <li>
            <Link
              to="/home"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 mt-3"
              reloadDocument
            ></Link>
          </li>

          <li>
            <Link
              to="#about"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
              reloadDocument
            ></Link>
          </li>

          <li>
            <Link
              to="#core-skills"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
              reloadDocument
            >
              <span>Core Skills</span>
            </Link>
          </li>

          <li>
            <Link
              to="#education"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red  dark:hover:bg-gray-700"
              reloadDocument
            >
              <span>Education</span>
            </Link>
          </li>

          <li>
            <Link
              to="#work"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
              reloadDocument
            >
              <span>Work</span>
            </Link>
          </li>

          <li>
            <Link
              to="#projects"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red hover:no-underline dark:hover:bg-gray-700"
              reloadDocument
            >
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link
              to="#publications"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
              reloadDocument
            >
              <span>Publications</span>
            </Link>
          </li>

          <li>
            <Link
              to="#presentations"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
              reloadDocument
            >
              <span>Presentations</span>
            </Link>
          </li>

          <li>
            <Link
              to="#contact"
              onClick={() => setShowSidebar(false)}
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
              reloadDocument
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-4 sm:ml-64 bg-custom-black"></div>
    </>
  );
};

export default Navbar;
