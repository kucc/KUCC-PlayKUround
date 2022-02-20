export interface NavbarProps {
  leftItems?: Array<{
    icon: JSX.Element;
    onClickLeftItems: () => void;
  }>;
  rightItems?: Array<{
    icon: JSX.Element;
    onClickRightItems: () => void;
  }>;
  text?: string;
  fontStyle?: React.CSSProperties;
}
