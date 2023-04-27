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
              <Link to="/home" className="flex md:mr-24">
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
            {/* <li>
              <as
                href="#"
                className="flex  p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-8 -rotate-90">Dashboard</span>
              </a>
            </li> */}

            <li className="w-6 h-[4rem]">
              <Link
                to="/home"
                className="flex flex-col text-sm items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 mt-3"
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg> */}
                <span className="-rotate-90">Home</span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
              </Link>
            </li>

            <li className="w-6 h-[3.5rem]">
              <Link
                to="/home#about"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg> */}
                <span className="-rotate-90">About</span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
              </Link>
            </li>

            <li className="w-6 h-[4.5rem]">
              <Link
                to="/home#core-skills"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg> */}
                <span className="-rotate-90">Skills</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </Link>
            </li>

            <li className="w-6 h-[4.5rem]">
              <Link
                to="#education"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red  dark:hover:bg-gray-700 focus:text-custom-red"
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
                <span className="-rotate-90">Education</span>
              </Link>
            </li>

            <li className="w-6 h-[4.5rem]">
              <a
                href="#"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
                <span className="-rotate-90">Work</span>
              </a>
            </li>

            <li className="w-6 h-[5.5rem]">
              <Link
                to="/home/projects"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
                <span className="-rotate-90">Projects</span>
              </Link>
            </li>

            <li className="w-6 h-[5.5rem]">
              <a
                href="#"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
              >
                <span className="-rotate-90">Testimonials</span>
              </a>
            </li>

            <li className="w-6 h-[3rem]">
              <a
                href="#"
                className="flex flex-col items-center text-sm p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
              >
                <span className="-rotate-90">Contact</span>
              </a>
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
          <li className="">
            <Link
              to="/home"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 mt-3"
            ></Link>
          </li>

          <li className="">
            <Link
              to="/home#about"
              className="flex flex-col items-center p-2 text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700 focus:text-custom-red"
            ></Link>
          </li>

          <li className="">
            <Link
              to="/home#core-skills"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
            >
              <span className="">Core Skills</span>
            </Link>
          </li>

          <li className="">
            <Link
              to="#education"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red  dark:hover:bg-gray-700"
            >
              <span className="">Education</span>
            </Link>
          </li>

          <li className="">
            <a
              href="#"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
            >
              <span className="">Work</span>
            </a>
          </li>

          <li className="">
            <Link
              to="/home/projects"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red hover:no-underline dark:hover:bg-gray-700"
            >
              <span className="">Projects</span>
            </Link>
          </li>

          <li className="">
            <a
              href="#"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
            >
              <span className="">Publications</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
            >
              <span className="">Presentations</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="flex flex-col items-center text-white rounded-lg dark:text-white hover:text-custom-red dark:hover:bg-gray-700"
            >
              <span className="">Contact</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="p-4 sm:ml-64 bg-custom-black"></div>
    </>
  );
};

export default Navbar;
