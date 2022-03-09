export type NavbarWIthHamburgerProps = {
  navbarTitle?: string;
  isMiddleSelect?: boolean;
  rightItems?: Array<{
    icon: JSX.Element;
    onClickRightItems: () => void;
  }>;
};
