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
          <div className="text-white p-8 bg-transparent">
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
              <div className="text-md font-extralight text-opacity-70 leading-8">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "My name is Hayley (known online as @hayleyiscoding)."
                      )
                      .pauseFor(1500)
                      .typeString(
                        " I hope you are well and that you're not having a 'bad day at the office' today!"
                      )
                      .pauseFor(1500)
                      .typeString("I just wanted to say welcome and...")
                      .pauseFor(1000)
                      .typeString(
                        " maybe you can tell that I'm excited that you're here!"
                      )
                      .pauseFor(2000)
                      .typeString(
                        " Move your mouse around the screen slowly (or tap on mobile!) to personalise your fireworks show..."
                      )
                      .pauseFor(7000)
                      .typeString(
                        " I know you're really busy but It means a lot to me that you're taking the time to view my portfolio. Thank you!"
                      )
                      .pauseFor(1500)
                      .typeString(
                        " I used many things to make this portfolio a reality - Javascript array and string methods, React hooks such as useEffect, useRef and useNavigate, CSS grid and positioning methods using Tailwind CSS, data fetching using axios and GraphQL, error handling, libraries such as email.js, animate.css and CSV download, neumorphic design concepts and more..."
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
                    View portfolio
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
