import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '@0.75': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '@1.00': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '@1.50': {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        '@1.75': {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      // navigation={true}
      modules={[Pagination]}
      className="w-full h-auto"
    >
      {images &&
        images.map((image) => (
          <SwiperSlide key={image} className="flex justify-center items-start">
            <img
              className="w-full h-full object-cover block"
              src={`${image}`}
              alt="img"
            ></img>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Slider
