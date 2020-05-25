import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  const navData = [
    { value: "Schedule", link: "/schedule" },
    { value: "Staff", link: "/staff" },
  ];

  let navButtonElements = navData.map((navButton, i) => (
    <NavLink
      key={i}
      to={navButton.link}
      className="nav-link"
      activeClassName="--is-active"
    >
      {navButton.value}
    </NavLink>
  ));

  return <div className="app-nav">{navButtonElements}</div>;
}

export default Nav;
