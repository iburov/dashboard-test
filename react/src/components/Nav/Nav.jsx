import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton/NavButton.jsx";

function Nav() {
  const navData = [
    { value: "Schedule", link: "/schedule" },
    { value: "Staff", link: "/staff" },
  ];

  let navButtonElements = navData.map((navButton, i) => (
    // <NavButton key={i} value={navButton.value} link={navButton.link} />
    <NavLink to={navButton.link} className="nav-link">
      {navButton.value}
    </NavLink>
  ));

  return (
    <div className="dashboard-nav flex-column col-2 bg-secondary">
      {navButtonElements}
    </div>
  );
}

export default Nav;
