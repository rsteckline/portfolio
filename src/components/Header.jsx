import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-between z-20 mx-auto p-4 text-lg max-w-full font-bold bg-cream font-jetbrains">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
