import HayleyProfile from "../assets/hayley-profile.jpg";
import blob from "../assets/blob.png";
import { BiDownArrowAlt } from "react-icons/bi";
import "animate.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto pt-2 bg-custom-black md:pt-2 sm:pt-16 2xl:pt-4 p-5"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 place-items-center md:h-screen">
          <div className="order-2 lg:order-1 p-5 md:ml-0 lg:ml-24 pt-10 ">
            <h2 className="text-4xl lg:text-5xl font-extralight text-white md:mt-3 mb-5">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
                <span className="relative font-semibold"> Hi! I'm Hayley.</span>
              </span>
              <br className="block sm:hidden" />
            </h2>
            <h3 className="text-white text-xl md:text-2xl font-normal md:font-light text-opacity-90">
              React Developer (Remote)
            </h3>

            <p className="max-w-2xl mx-auto mt-3 text-md md:text-md font-extralight leading-relaxed text-white md:mt-8 text-opacity-70">
              I am an enthusiastic React developer with a passion for creating
              modern web applications. This portfolio showcases some of my
              projects - ranging from simple web2 applications to more complex
              web3 applications built with blockchain technologies.
              <br />
              <br />
              I work well in a remote team and I'm an experienced remote worker.
              I have lived on 6 continents so I am well-adapted to communicating
              with people from different cultures.
              <br />
              <br />I am open to working asynchronously in various time zones
              and can adapt to your time zone needs. I'm excited to contribute
              to your next project. Let's connect.
            </p>
            <div className="text-left">
              <a
                href="https://docs.google.com/document/d/1lHoTErELU9S1_aOsUnKMKq04cCMyRBLEkbKAM9UyTIY/edit?usp=sharing"
                target="_blank"
                className="cursor-pointer inline-flex items-center justify-center px-6 py-3 mt-12 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-custom-red border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black hover:text-white"
              >
                Download Resume
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
              <Link
                to="#core-skills"
                reloadDocument
                className="cursor-pointer inline-flex items-center justify-center px-6 py-3 mt-8 ml-0 md:ml-7 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black  hover:text-white"
              >
                Portfolio
                <div className="w-3 h-6 ml-2 mt-1">
                  {" "}
                  <BiDownArrowAlt size={20} />
                </div>
              </Link>
            </div>
          </div>

          {/* <div className="relative md:order-2 pt-5 md:pt-0">
            <LazyLoadImage
              className="text-white grayscale absolute inset-x-0 bottom-45 -mb-48 -translate-x-1/2 left-1/2 contract-200 mt-10 lg:mt-0"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt="Background blob"
            /> */}

          <div className="relative md:order-2 pt-5 md:pt-0">
            <LazyLoadImage
              className="text-white grayscale absolute inset-x-0 bottom-45 -mb-48 -translate-x-1/2 left-1/2 mt-10 lg:mt-20 rotate-30"
              src={blob}
              alt="Background blob"
            />

            <LazyLoadImage
              className="text-white grayscale relative w-full md:max-w-xs xl:max-w-md xl:mx-auto 2xl:origin-bottom 2xl:scale-110 fancy-border-radius p-12pb-2 md:p-14"
              src={HayleyProfile}
              alt="Hayley's profile picture"
              effect="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
