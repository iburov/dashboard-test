import React from "react";
import "./NavButton.scss";
import { NavLink } from "react-router-dom";

function NavButton(props) {
  return (
    <div className="dashboard-nav-button">
      <NavLink to={props.link} className="nav-link">
        {props.value}
      </NavLink>
    </div>
  );
}

export default NavButton;
