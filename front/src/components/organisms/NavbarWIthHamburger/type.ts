export type NavbarWIthHamburgerProps = {
  navbarTitle: string;
  rightItems?: Array<{
    icon: JSX.Element;
    onClickRightItems: () => void;
  }>;
};
