export interface NavbarProps {
  leftItems?: Array<{
    icon: JSX.Element;
    onClickLeftItems: () => void;
  }>;
  rightItems?: Array<{
    icon: JSX.Element;
    onClickRightItems: () => void;
  }>;
  isMiddleSelect?: boolean;
  text?: string;
  fontStyle?: React.CSSProperties;
}
