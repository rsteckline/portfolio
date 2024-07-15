import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between mx-auto p-8">
        <Logo />
      <h1>Header</h1>
    </header>
  );
};

export default Header;
