import React, { useState } from 'react';

import SwiperCore, { Keyboard, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarouselProps } from './type';

SwiperCore.use([Keyboard, Pagination]);
export const Carousel = ({ CarouselList }: CarouselProps) => {
  //   const images = ['/pictures/profile.png', '/pictures/profile.png', '/pictures/profile.png'];
  //   const numbers = [1, 2, 3];
  return (
    <>
      <Swiper
        modules={[Keyboard, Pagination]}
        slidesPerView={1}
        spaceBetween={60}
        navigation={false}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}>
        {CarouselList.map(({ imageSource, description }, index) => (
          <SwiperSlide key={index}>
            <img src={imageSource} alt='없음' width='100%' height='270px' />
            <div>{description}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
