import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Nav({ staff }) {
  const navData = [
    { value: "Schedule", link: "/schedule" },
    { value: "Staff", link: "/staff", count: staff.length },
  ];

  let navButtonElements = navData.map((navButton, i) => (
    <NavLink
      key={i}
      to={navButton.link}
      className="nav-link"
      activeClassName="--is-active"
    >
      {navButton.value}
      {navButton.count ? (
        <span className="badge badge-danger float-right">
          {navButton.count}
        </span>
      ) : (
        ""
      )}
    </NavLink>
  ));

  return <div className="app-nav">{navButtonElements}</div>;
}

function mapStateToProps(state) {
  return {
    staff: state.staff,
  };
}

export default connect(mapStateToProps)(Nav);
