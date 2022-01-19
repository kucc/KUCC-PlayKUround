export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  center?: boolean;
  centerH?: boolean;
  centerV?: boolean;
  width?: number;
  height?: number;
  row?: boolean;
  col?: boolean;
  // TODO: 이후에 추가하기
  // margin?: number;
  // marginL?: number;
  // marginR?: number;
  // marginT?: number;
  // marginB?: number;
  // marginH?: number;
  // marginV?: number;
  // padding?: number;
  // paddingL?: number;
  // paddingR?: number;
  // paddingT?: number;
  // paddingB?: number;
  style?: React.CSSProperties | undefined;
}
