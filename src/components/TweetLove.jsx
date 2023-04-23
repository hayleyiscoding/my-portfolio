import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import testimonial1 from "../assets/testimonials/testimonial-1.jpg";
import testimonial2 from "../assets/testimonials/testimonial-2.jpg";
import testimonial3 from "../assets/testimonials/testimonial-3.jpg";
import testimonial4 from "../assets/testimonials/testimonial-4.jpg";
import testimonial5 from "../assets/testimonials/testimonial-5.jpg";
import testimonial7 from "../assets/testimonials/testimonial-7.jpg";
import testimonial8 from "../assets/testimonials/testimonial-8.jpg";
import testimonial9 from "../assets/testimonials/testimonial-9.jpg";
import testimonial10 from "../assets/testimonials/testimonial-10.jpg";
import testimonial11 from "../assets/testimonials/testimonial-11.jpg";
import testimonial12 from "../assets/testimonials/testimonial-12.jpg";
import testimonial13 from "../assets/testimonials/testimonial-13.jpg";

const tweetImages = [
  testimonial8,
  testimonial1,
  testimonial11,
  testimonial12,
  testimonial3,
  testimonial2,
  testimonial7,
  testimonial5,
  testimonial13,
  testimonial9,
  testimonial4,
  testimonial10,
];

const TweetLove = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center pt-0 mb-20">
        <h2 className="mt-4 text-5xl font-extralight text-white md:mt-8">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
            <span className="relative font-semibold">TweetLove ❤️</span>
          </span>
          <br className="block sm:hidden" />
        </h2>
      </div>
      <div className="">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={4} gutter="1.25rem">
            {tweetImages.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                className="grayscale contrast-200 hover:grayscale-0 rounded-md hover:border-t-8 border-t-8 border-t-white hover:border-t-custom-red"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default TweetLove;
