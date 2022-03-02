import styled from 'styled-components';

import { Colors } from '@styles';

export const SwiperContainer = styled.div`
  > .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    background: ${Colors.primary};
  }
`;
