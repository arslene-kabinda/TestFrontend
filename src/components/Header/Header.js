import React from "react";
import Logo from "./layout/logo";
import Menu from "./layout/Menu";
import { HeaderContainer } from "./styles/HeaderStyle";

const Header = () => {
  return (
    <HeaderContainer className="navbar fixed-top ">
      <Logo />
      <Menu />
    </HeaderContainer>
  );
};
export default Header;
