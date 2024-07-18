import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-between sticky top-0 z-20 mx-auto p-8 text-lg max-w-full font-bold">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
