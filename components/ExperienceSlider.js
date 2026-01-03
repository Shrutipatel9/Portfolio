import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
const experienceData = [
  {
    icon: <RxDesktop />,
    title: "Software Developer - L2",
    company: "Crest Infosystems Pvt. Ltd.",
    year: "01/2024 - Present",
    description: "Built core features for AIREA Studio using Vue.js, Pinia, Supabase. Integrated AI tools for productivity.",
  },
  {
    icon: <RxPencil2 />,
    title: "React Developer Intern",
    company: "Digital For Humanity",
    year: "05/2023 - 06/2023",
    description: "Enhanced UX/UI with React. Led intern team and optimized code performance.",
  },
];

const ExperienceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[350px] sm:h-[400px]"
    >
      {experienceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col gap-y-4 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="text-4xl text-accent">{item.icon}</div>
                <div className="text-sm font-light text-white/60">{item.year}</div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold mb-1">{item.title}</div>
                <div className="text-sm text-accent mb-2">{item.company}</div>
                <p className="text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto text-3xl self-end">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ExperienceSlider;
