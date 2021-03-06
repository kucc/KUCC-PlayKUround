import React from 'react';

import SwiperCore, { Keyboard, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { decodeImageLink } from '@util';

import { SwiperContainer } from './styled';
import { CarouselProps } from './type';

SwiperCore.use([Keyboard, Pagination]);
export const Carousel = ({ CarouselList, style, height = 270 }: CarouselProps) => {
  return (
    <SwiperContainer style={style} height={height}>
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
        {CarouselList.map((image, index) => (
          <SwiperSlide key={index}>
            {image.path.data ? (
              <img src={decodeImageLink(image.path.data)} style={{ objectFit: 'contain' }} />
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};
