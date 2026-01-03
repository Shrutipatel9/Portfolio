const testimonialData = [
  {
    image: "/t-avt-3.png",
    name: "Akash",
    position: "Client - AIREA Studio",
    message:
      "Shruti was great to work with. She helped bring our platform from an idea to reality. She cared about the details and the UX, not just shipping code. It was as if my project was hers, and she was deeply invested in its success.",
  },
  {
    image: "/t-avt-3.png",
    name: "Akash",
    position: "Client - AIREA Studio",
    message:
      "Special recognition to @Shruti for leading the entire build effort and delivering our 'Quick Wins' in the final two weeks. Your dedication can't be overstated.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { FaQuoteLeft } from "react-icons/fa";

import { Navigation, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="text-lg text-start md:lext-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
