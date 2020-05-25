import React from "react";
import PropTypes from "prop-types";
import "./EmployeeList.scss";

const EmployeeList = ({ staff, keyword }) => {
  let filteredStaff = keyword
    ? staff.filter((el) => {
        return (
          el.firstName.toLowerCase().indexOf(keyword) >= 0 ||
          el.lastName.toLowerCase().indexOf(keyword) >= 0 ||
          el.group.toLowerCase().indexOf(keyword) >= 0
        );
      })
    : staff;

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
          {filteredStaff.map((employee) => {
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
  keyword: PropTypes.string.isRequired,
};

export default EmployeeList;
