import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between mx-auto p-8">
        <Logo />
        <Nav />
      <h1>Header</h1>
    </header>
  );
};

export default Header;
