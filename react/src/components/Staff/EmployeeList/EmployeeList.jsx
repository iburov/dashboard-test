import React from "react";
import PropTypes from "prop-types";
import "./EmployeeList.scss";

const EmployeeList = ({ staff }) => {
  return (
    <div className="app-employee-list">
      <table className="table" id="staffTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Group</th>
          </tr>
        </thead>

        <tbody>
          {staff.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>
                  {employee.firstName} {employee.lastName}
                </td>
                <td>{employee.group}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

EmployeeList.propTypes = {
  staff: PropTypes.array.isRequired,
};

export default EmployeeList;
