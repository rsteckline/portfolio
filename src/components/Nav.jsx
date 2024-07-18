import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/Portfolio" className="mx-3">Portfolio</NavLink>
      <NavLink to="/Contact" className="mx-3">Contact</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleNavbar} className="z-30">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 flex flex-col items-start bg-transparent">
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default Nav;
