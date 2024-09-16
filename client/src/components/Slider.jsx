import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        "@1.00": {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        "@1.50": {
          slidesPerView: 2,
          spaceBetween: 2,
        },
        "@1.75": {
          slidesPerView: 3,
          spaceBetween: 2,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className='w-full rounded-xl md:h-[40vh]'
    >
      {images &&
        images.map((image) => (
          <SwiperSlide key={image} className='flex justify-center items-start'>
            <img
              className='w-full h-full object-cover block rounded-2xl'
              src={`${image}`}
              alt='img'
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
