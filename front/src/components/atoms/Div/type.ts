export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  center?: boolean;
  centerH?: boolean;
  centerV?: boolean;
  row?: boolean;
  col?: boolean;
  style?: React.CSSProperties | undefined;
}
