export type NavbarWithHamburgerProps = {
  navbarTitle: string;
  rightItems?: Array<{
    icon: JSX.Element;
    onClickRightItems: () => void;
  }>;
};
