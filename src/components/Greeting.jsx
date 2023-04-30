import Typewriter from "typewriter-effect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Greeting = (props) => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="greeting">
        {props.name && (
          <div className="text-white p-8 bg-transparent h-auto">
            <h2 className="text-3xl font-light text-white sm:text-5xl xl:text-7xl mb-8">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Hi ${props.name}!`)
                    .pauseFor(2500)
                    .callFunction(() => {
                      setShowText(true);
                    })
                    .start();
                }}
              />
            </h2>
            {showText ? (
              <div id="container">
                <div
                  id="typewriter"
                  className="text-sm md:text-md font-extralight text-opacity-90 leading-5 md:leading-8 overflow-y-scroll h-auto"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "How are you? My name is Hayley (known online as @hayleyiscoding)."
                        )
                        .pauseFor(1500)
                        .typeString(" But wait, just a second... ")
                        .pauseFor(1500)
                        .typeString(" aren't these fireworks annoying?!")
                        .pauseFor(1500)
                        .typeString(
                          " Move your mouse to the bottom of the screen (or tap on mobile) to move them out the way!"
                        )
                        .pauseFor(7000)
                        .typeString(" Great! Now that that's done...")
                        .pauseFor(1500)
                        .typeString(" I just wanted to say welcome and...")
                        .pauseFor(1000)
                        .typeString(
                          " maybe you can tell that I'm excited that you're here!"
                        )
                        .pauseFor(2000)
                        .typeString(
                          " Thank you for taking a moment to view my portfolio!"
                        )
                        .pauseFor(1500)
                        .typeString(
                          " I used a bunch of tech to make it a reality - Javascript array and string methods, React hooks such as useEffect, useRef and useNavigate, CSS grid and positioning methods using Tailwind CSS, data fetching using axios and GraphQL, libraries such as email.js and animate.css, neumorphic design concepts and more..."
                        )
                        .pauseFor(2000)
                        .typeString(
                          " I hope you'll love it as I really enjoyed making it!"
                        )
                        .pauseFor(2000)
                        .typeString(
                          " Please don't hesitate to contact me if you have any questions!"
                        )
                        .pauseFor(2000)
                        .typeString(" Let's get started...")
                        .callFunction(() => {
                          setShowButton(true);
                        })
                        .start();
                    }}
                    options={{ delay: 20 }}
                  />

                  {showButton && (
                    <button
                      type="submit"
                      onClick={navigateToHome}
                      className="red-btn text-sm cursor-pointer absolute inline-flex items-center justify-center px-10 py-3 mt-8 font-light leading-5 text-white transition-all duration-200 bg-custom-red border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black hover:text-white text-md"
                    >
                      View Portfolio
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
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Greeting;
