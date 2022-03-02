export type CarouselProps = {
  CarouselList: Array<{
    imageSource?: string;
    description?: string;
  }>;
  isHidden: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
