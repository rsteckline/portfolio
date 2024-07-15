import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/Portfolio">Portfolio</NavLink>
      <NavLink to="/Timeline">Timeline</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </>
  );
};

export default Nav;
