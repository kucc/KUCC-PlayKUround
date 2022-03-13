export type CarouselProps = {
  CarouselList: Array<any>;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
};
