import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      tweetUrl: "https://twitter.com/ryanflorence/status/1187951799442886656",

      name: "Ryan Florence",
      role: "Remix & React Training",
      image:
        "https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg",
      // avatar: require("@/img/avatars/ryan-florence.jpg").default,
      bg: "bg-gradient-to-br from-light-blue-400 to-indigo-500 rounded-b-lg",
      bgIcons: "text-light-blue-100",
    },
    {
      id: 2,
      content:
        "If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.",
      tweetUrl: "https://twitter.com/rauchg/status/1225611926320738304",
      name: "Guillermo Rauch",
      role: "Vercel",
      image:
        "https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg",
      // avatar: require("@/img/avatars/guillermo-rauch.jpg").default,
      bg: "bg-gradient-to-br from-cyan-400 to-light-blue-500 rounded-b-lg",
      bgIcons: "text-cyan-100",
    },

    {
      id: 3,
      content: `I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.`,

      name: "Sara Vieira",
      role: "CodeSandbox",
      image:
        "https://tailwindcss.com/_next/static/media/sara-vieira.53f08a9bc2787e4ee05e4678577a05fe.jpg",
      // avatar: require("@/img/avatars/sara-vieira.jpg").default,
      bg: "bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-b-lg",
      bgIcons: "text-fuchsia-100",
    },
    {
      id: 4,
      content: `I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.`,
      tweetUrl: "https://twitter.com/dacey_nolan/status/1303744545587441666",

      name: "Dacey Nolan",
      role: "Software Engineer",
      image:
        "https://tailwindcss.com/_next/static/media/dacey-nolan.7993f9fd2980845e8f8c5f97dceddc49.jpg",
      // avatar: require("@/img/avatars/dacey-nolan.jpg").default,
      bg: "bg-gradient-to-br from-green-400 to-cyan-500 rounded-b-lg",
      bgIcons: "text-green-100",
    },
  ];
  const [people, setPeople] = useState(testimonials);
  const [index, setIndex] = useState(0);
  const [isSocial, setIsSocial] = useState(false);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index, people]);
  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen body-bg">
        <div className="relative">
          <ul className="relative flex max-w-xl px-3 mx-auto mt-16 overflow-hidden rounded-t-lg sm:px-5 md:px-8 lg:px-0 sm:h-96 h-450 w-90">
            {people.map((testimonial, testimonialIndex) => {
              const { id, content, role, name, image, tweetUrl, bg, bgIcons } =
                testimonial;
              let position = "nextslide";
              if (testimonialIndex === index) {
                position = "activeSlide";
              }
              if (
                testimonialIndex === index - 1 ||
                (index === 0 && testimonialIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <li key={id} className={position}>
                  <blockquote className="px-6 py-8 text-lg font-extrabold leading-8 md:p-10 md:text-xl">
                    <svg
                      width="45"
                      height="36"
                      className={bgIcons}
                      fill="currentColor"
                    >
                      <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                    </svg>
                    <p className="mt-5 text-gray-900">{content}</p>
                  </blockquote>
                  <figcaption className={bg}>
                    <div className="flex items-center justify-between p-6 md:px-10 md:py-6">
                      <div className="flex space-x-3 font-semibold ">
                        <div className="flex items-center justify-center bg-white rounded-full cursor-pointer w-14 h-14">
                          <img
                            src={image}
                            alt={name}
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                        <div className="text-white">
                          <h2>{name}</h2>
                          <h2>{role}</h2>
                        </div>
                      </div>
                      <a
                        href={tweetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity duration-200 opacity-50 hover:opacity-75"
                      >
                        <span class="sr-only"></span>
                        <svg
                          className={bgIcons}
                          width="33"
                          height="32"
                          fill="currentColor"
                        >
                          <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z"></path>
                        </svg>
                      </a>
                    </div>
                  </figcaption>
                </li>
              );
            })}
          </ul>
          <button
            className="prev focus:outline-none"
            onClick={() => setIndex(index - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-50 w-12 h-12 transition-opacity duration-300 ease-linear sm:w-24 sm:h-24 text-clr-grey hover:opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="next focus:outline-none"
            onClick={() => setIndex(index + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-50 w-12 h-12 transition-opacity duration-300 ease-linear sm:w-24 sm:h-24 text-clr-grey hover:opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute flex flex-row items-center md:flex-row-reverse right-8 md:bottom-20 bottom-4">
          <button
            className="p-4 font-mono font-bold capitalize transition-opacity duration-500 rounded-full sm:text-2xl bg-cyan-500 text-gray-50 focus:outline-none hover:opacity-90"
            onClick={() => setIsSocial(!isSocial)}
          >
            follow me
          </button>
          <div
            className={
              !isSocial
                ? "hidden"
                : "flex space-x-3 mr-4 bg-white p-2 rounded-md"
            }
          >
            <a
              href="https://twitter.com/AbdulrahmanDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:opacity-90"
            >
              <svg
                className="text-twitter"
                fill="currentColor"
                aria-label="twitter"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
              </svg>
            </a>
            <a
              href="https://t.co/IFjTKAlShY?amp=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:opacity-90"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="CodePen"
                viewBox="0 0 512 512"
              >
                <rect width="512" height="512" fill="#111" rx="15%" />
                <g
                  fill="none"
                  stroke="#e6e6e6"
                  stroke-linejoin="round"
                  stroke-width="33"
                >
                  <path d="M81 198v116l175 117 175-117V198L256 81z" />
                  <path d="M81 198l175 116 175-116M256 81v117" />
                  <path d="M81 314l175-116 175 116M256 431V314" />
                </g>
              </svg>
            </a>
            <a
              href="https://t.co/JMiZdtxnDc?amp=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
