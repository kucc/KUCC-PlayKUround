import React from 'react';

import SwiperCore, { Keyboard, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowRight } from '@assets';

import { DescriptionContainer, MoreDescriptionContainer, SwiperContainer } from './styled';
import { CarouselProps } from './type';

SwiperCore.use([Keyboard, Pagination]);
export const Carousel = ({ CarouselList }: CarouselProps) => {
  const ClickHandler = (e: any) => {
    console.log(e);
  };
  return (
    <SwiperContainer>
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
            <img src={imageSource} alt='없음' />
            <DescriptionContainer>{description}</DescriptionContainer>
            <MoreDescriptionContainer onClick={ClickHandler}>
              자세히 보기
              <ArrowRight />
            </MoreDescriptionContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};
