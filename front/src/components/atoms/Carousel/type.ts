export type CarouselProps = {
  CarouselList: Array<{
    imageSource?: string;
  }>;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
