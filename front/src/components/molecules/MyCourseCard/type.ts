export type MyCourseCardProps = {
  index?: number;
  MyCourseChipList: Array<{ id: number; imageSource?: string; place: string }>;
  onClick?: () => void;
};
