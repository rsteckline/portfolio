import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/Portfolio">Portfolio</NavLink>
      <NavLink to="/Timeline">Timeline</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </>
  );
};

const Nav = () => {
  return (
    <nav className="w-1/3">
      <div className="flex justify-between">
        <NavLinks />
      </div>
    </nav>
  );
};
export default Nav;
