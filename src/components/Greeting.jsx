import Typewriter from "typewriter-effect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Greeting = (props) => {
  const [showText, setShowText] = useState(false);

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
              <div className="text-md font-extralight text-opacity-70">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("I'm excited that you're here! ")
                      .callFunction(() => {
                        setShowText(true);
                      })
                      .start();
                  }}
                  options={{ delay: 20 }}
                />
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString(
                        "Move your mouse around the screen to see how happy I am about that..."
                      )
                      .callFunction(() => {
                        setShowText(true);
                      })
                      .start();
                  }}
                  options={{ delay: 20 }}
                />
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(10000)
                      .typeString(
                        "It means a lot to me that you're taking the time to view my portfolio. Thank you 🙏! I hope you'll love it!"
                      )
                      .callFunction(() => {
                        setShowText(true);
                      })
                      .start();
                  }}
                  options={{ delay: 20 }}
                />
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(13000)
                      .typeString("Let's get started...")
                      .callFunction(() => {
                        setShowText(true);
                      })
                      .start();
                  }}
                  options={{ delay: 20 }}
                />
                {/* <h4 className="md:visible text-xs font-extralight text-white sm:text-sm xl:text-lg mb-8 max-w-xl">
                  I'm excited that you're here! I hope you are having a great
                  day.
                  <br />
                  <br />
                  Thank you for taking a moment to view my portfolio 🙏 <br />
                  <br />
                  Hold you mouse at the top of the red line to see how happy I
                  am about that!
                  <br /> <br />
                  And then, let's get started...
                </h4> */}
                {/* Mobile */}
                {/* <h4 className="visible lg:hidden text-xs font-extralight text-white sm:text-sm xl:text-lg mb-8 max-w-xl">
                  I'm excited that you're here! I hope you are having a great
                  day.
                  <br />
                  <br />
                  Thank you for taking a moment to view my portfolio 🙏 <br />
                  <br />
                  Tap your finger around the screen to see how happy I am about
                  that! <br /> <br />
                  And then, let's get started...
                </h4> */}

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
