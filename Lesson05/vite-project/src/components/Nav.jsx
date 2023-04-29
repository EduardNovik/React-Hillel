import { NavLink, Outlet } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];

const Nav = () => {
  return (
    <div className="container">
      <ul className="nav">
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <NavLink to={navLink !== "Home" ? navLink.toLocaleLowerCase() : "/"}>
              {navLink}
            </NavLink>
          </li>
        ))}
      </ul>
        <Outlet />
    </div>
  );
};

export default Nav;
