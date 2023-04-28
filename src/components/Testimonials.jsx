import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import { testimonialData } from "../constants";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Testimonials = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center pt-0 mb-20">
        <h2 className="mt-4 text-5xl font-extralight text-white md:mt-8">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
            <span className="relative font-semibold">Testimonials</span>
          </span>
          <br className="block sm:hidden" />
        </h2>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {testimonialData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full rounded-xl text-center">
              <img
                className="w-[20%] mx-auto mt-10 grayscale contrast-200 rounded-[50%]"
                src={slide.avatar}
                alt=""
              />
              <blockquote className="mt-3 sm:mt-8 px-10">
                <p className="text-sm font-light text-white text-opacity-70 px-6">
                  {slide.testimonial}
                </p>
              </blockquote>
              <p className="mt-6 text-md font-semibold text-gray-200 sm:mt-10">
                {slide.name}
              </p>
              <p className="mt-1 text-sm font-light text-gray-400">
                {slide.company}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
