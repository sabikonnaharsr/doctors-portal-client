import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import  "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className='flex relative'>
        <div className='w-1/2 bg-gray-500 '>
            <h1 className='text-6xl'>slider</h1>
        </div>
        <div className='w-1/2 '>
        <>
      <Swiper
      
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-96 bg-black'>Slide 2</SwiperSlide>
        <SwiperSlide className='h-96 bg-black'>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
        </div>
    </div>
  
  );
}
