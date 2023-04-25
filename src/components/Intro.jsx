import Fireworks from "@fireworks-js/react";
import { useState } from "react";
import Greeting from "./Greeting";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Intro = () => {
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showSkipIntro, setShowSkipIntro] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    if (name !== "") {
      let capitalisedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
      setFinalName(capitalisedName);
    } else {
      alert(
        "Please write your name. Don't worry, we don't store your data! 😉"
      );
    }
  }

  return (
    <div className="bg-custom-black h-screen">
      {showSkipIntro && (
        <Link to="/home">
          <div className="flex justify-end items-center p-4 hover:opacity-60">
            <h6 className="text-white text-md pb-1 mr-1 font-light self-center">
              Skip Intro&nbsp;
            </h6>
            <div className="flex flex-col justify-center bg-custom-red rounded-xl">
              <AiOutlineArrowRight size={15} style={{ color: "#ff00000" }} />
            </div>
          </div>
        </Link>
      )}

      <div className="bg-custom-black p-6 pt-20 md:p-40">
        {!finalName ? (
          <div className="bg-custom-black text-white text-center ">
            <h1 className="text-4xl font-extralight text-white sm:text-6xl xl:text-8xl pb-2 w-full max-w-7xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString("Hi there!")
                    .deleteAll()
                    .typeString("What's your name?")
                    .callFunction(() => {
                      setShowInput(true);
                    })
                    .start();
                }}
              />
            </h1>
            {showInput && (
              <form onSubmit={handleSubmit}>
                <div class="py-8 bg-custom-black">
                  <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-xl mx-auto">
                      <div>
                        <div class="mt-2">
                          <input
                            type="text"
                            name="name"
                            placeholder="Write your name"
                            onChange={(event) => setName(event.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={() => setShowSkipIntro((prevState) => !prevState)}
                    className="cursor-pointer inline-flex items-center justify-center px-10 py-3 mt-8 font-light leading-5 text-white transition-all duration-200 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-custom-red hover:text-white text-md"
                  >
                    Next
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
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <>
            {finalName && (
              <Fireworks
                options={{
                  acceleration: 1.0,
                  opacity: 0.5,
                  lineWidth: {
                    explosion: {
                      min: 0,
                      max: 0,
                    },
                    trace: {
                      min: 0,
                      max: 0.81,
                    },
                  },
                  rocketsPoint: {
                    min: 0,
                    max: 100,
                  },
                  mouse: {
                    click: false,
                    move: true,
                    max: 4,
                  },
                }}
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  background: "rgba(0,0,0,0)",
                }}
              />
            )}
            <Greeting name={finalName} />
          </>
        )}
      </div>
    </div>
  );
};

export default Intro;
