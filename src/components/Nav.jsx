import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleNavbar} className="md:hidden z-30 text-main">
        {isOpen ? <X size={32} /> : <Menu size={48} />}
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 p-1 flex flex-col items-start bg-white rounded-md text-main">
          <a href="#projects" className="block px-3">Projects</a>
          <a href="#contact" className="block px-3">Contact</a>
        </div>
      )}
      <div className="hidden md:flex">
        <a href="#projects" className="mx-3">Projects</a>
        <a href="#contact" className="mx-3">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
