import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import testimonial6 from "../assets/testimonials/testimonial-6.jpg";
import talkBadgeHashnode from "../assets/publications/talk-hashnode-badge.png";
import warriorBadgeHashnode from "../assets/publications/warrior-hashnode-badge.png";
import featuredBadgeHashnode from "../assets/publications/featured-hashnode-badge.png";
import "animate.css";
import { format } from "date-fns";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const endpoint = "https://api.hashnode.com/";

const ARTICLE_QUERY = `
  {
    user(username: "hayleyiscoding") {
      publication {
        posts(page: 0) {
          title 
          dateFeatured
          dateAdded
          slug
        }
      }
    }
  }`;

const Publications = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animate-element");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - elementHeight / 2) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { data, isLoading, error } = useQuery("launches", async () => {
    return await axios({
      url: endpoint,
      method: "POST",
      data: {
        query: ARTICLE_QUERY,
      },
    }).then((response) => response.data.data);
  });

  if (isLoading) return "Loading...";
  if (error) return <div>{error.message}</div>;

  return (
    <section id="publications" className="bg-custom-black">
      <div className="container mx-auto sm:px-6 lg:px-16 px-8 lg:py-12">
        <div className=" text-center md:text-left mb-24 pl-4">
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight text-white md:mt-8 mb-12">
            <span className="relative inline-block">
              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-semibold">Publications</span>
            </span>
            <br className="block sm:hidden" />
          </h2>
        </div>

        <div className="mx-auto mt-1 sm:mt-5 lg:mt-24 pb-5 lg:flex justify-between ">
          <div className="-my-8 divide-y divide-gray-900">
            {data.user?.publication.posts?.map((post, i) => (
              <div key={post[i]} className="py-6 group md:pl-4 lg:pl-0">
                <div className="sm:space-x-6 sm:items-start sm:flex">
                  <p className="text-md font-semibold tracking-widest text-white custom-text-shadow uppercase shrink-0">
                    {/* // Have to parse date string into date object -'new Date' */}
                    {format(new Date(post.dateAdded), "d MMM yyyy")}
                  </p>
                  <p className="mt-4 text-md font-light text-white text-opacity-70 transition-all duration-200 transform sm:mt-0 group-hover:translate-x-1">
                    <a
                      href={`https://hayleyiscoding.hashnode.dev/${post.slug}`}
                      target="_blank"
                      rel="noopener"
                    >
                      {" "}
                      {post.title}
                      <span className="custom-superscript font-normal custom-text-shadow ">
                        &nbsp;{" "}
                        {post.dateFeatured ? "* Featured on Hashnode" : ""}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#C0c0c0] rotate-3 md:w-[30%] w-[60%] md:flex justify-center align-center rounded-xl ml-10 md:mx-auto mt-24 md:mt-[6rem] lg:-mt-10 ">
            <LazyLoadImage
              src={testimonial6}
              effect="blur"
              alt="Twitter post announcing article being featured on Hashnode"
              className="text-white w-full origin-bottom rotate-12 md:ml-15 grayscale rounded-xl "
            />
          </div>
        </div>
      </div>

      <div className="bg-custom-red h-0.5 my-8 mx-auto w-[80%]">
        <div
          id="animate-element"
          className={`md:flex justify-around align-center gap-5 w-full md:max-w-7xl my-12 mt-20 mx-auto pt-20 ${
            animate ? "animate__animated animate__fadeIn" : ""
          }`}
        >
          {" "}
          <div id="target-element" className="md:-mt-0">
            <LazyLoadImage
              src={talkBadgeHashnode}
              effect="blur"
              alt="Talk of the Town HashNode Badge"
              className="text-white w-full object-cover grayscale rounded-xl contrast-200 md:custom-card-tilt custom-neumorphic-table p-5"
            />
          </div>
          <div className="mt-5 md:mt-20 rotate-img md:ml-3 md:mr-4 ">
            <LazyLoadImage
              src={warriorBadgeHashnode}
              effect="blur"
              alt="Word Warrior HashNode Badge"
              className="text-white w-full object-cover grayscale contrast-200 rounded-xl p-5 custom-neumorphic-table"
            />
          </div>
          <div className="mt-5 md:mt-0 ">
            {" "}
            <LazyLoadImage
              src={featuredBadgeHashnode}
              effect="blur"
              alt="Featured on HashNode Badge"
              className="text-white w-full object-cover grayscale contrast-200 rounded-xl md:custom-card-tilt2 custom-neumorphic-table p-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
