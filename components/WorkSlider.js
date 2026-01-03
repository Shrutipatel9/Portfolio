import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// icons
import { BsArrowRight } from "react-icons/bs";

import { Pagination } from "swiper";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "AIREA Studio",
          description: "AI Marketing Platform",
          path: "/thumb1.png",
          tech: "Vue.js, Supabase, Pinia",
          link: "https://app.aireastudio.ai/",
        },
        {
          title: "The Propsphere",
          description: "Real Estate Platform",
          path: "/thumb2.png",
          tech: "Angular, MongoDB, Node",
          link: "https://github.com/Shrutipatel9/PropSphere",
        },
      ],
    },
  ],
};
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer h-full">
              {slide.images.map((image, index) => {
                return (
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group w-full h-full"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                      <Image
                        src={image.path}
                        fill
                        className="object-cover"
                        alt={image.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#2e1d62] via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-700"></div>

                      {/* Text Content - Centered */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                        <div className="text-xl font-bold text-white tracking-wider mb-1">
                          {image.title}
                        </div>
                        <div className="text-xs text-white/80 mb-2">
                          {image.tech}
                        </div>
                        <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">VIEW</div>
                          <div className="delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
