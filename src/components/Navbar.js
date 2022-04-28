import React from "react";
import { NavLink } from "react-router-dom";
import links from "../routes";

const Navbar = () => {

  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path}  className={({ isActive }) => (isActive ? 'active-link' : null)} >{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
