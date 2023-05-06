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
                  className="text-md md:text-lg font-extralight text-opacity-90 leading-5 md:leading-8 h-auto"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(" Aren't these fireworks annoying?! ")
                        .pauseFor(2000)
                        .typeString(
                          " Move your mouse cursor down to move them out the way!"
                        )
                        .pauseFor(1500)
                        .typeString(" Or tap anywhere on mobile...")
                        .pauseFor(7000)
                        .typeString(" Great! Now that that's done...")
                        .pauseFor(1500)
                        .typeString(
                          " How are you? My name is Hayley (known online as @hayleyiscoding)."
                        )
                        .pauseFor(1500)
                        .typeString(
                          " I just wanted to say welcome and thank you for taking a moment to view my portfolio!"
                        )
                        .pauseFor(1000)

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
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
