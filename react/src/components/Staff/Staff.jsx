import React from "react";
import "./Staff.scss";
import Spinner from "../common/Spinner.jsx";
import EmployeeList from "./EmployeeList/EmployeeList";

function Staff() {
  return (
    <div className="app-staff">
      <Spinner />
      <input type="text" placeholder="Filter..."></input>
      <button className="btn btn-primary">Add Employee</button>
      <EmployeeList staff={[]} />
    </div>
  );
}

export default Staff;
