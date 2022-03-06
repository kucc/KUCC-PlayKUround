export type HomeProps = {
  rightItems?: Array<{
    icon: JSX.Element;
    onClickRightItems: () => void;
  }>;
  navbarTitle: string;
};
