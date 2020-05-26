import React from "react";
import "./NewEmployeeForm.scss";
import { bindActionCreators } from "redux";
import * as staffActions from "../../../redux/actions/staffActions";
import { connect } from "react-redux";
import { useState } from "react";

function NewEmployeeForm({ actions, hideModal }) {
  let groupOption = [
    { label: "Admin", value: "admin" },
    { label: "Doctor", value: "doctor" },
    { label: "Nurse", value: "nurse" },
  ];

  let options = groupOption.map((el, i) => (
    <option key={i} value={el.value}>
      {el.label}
    </option>
  ));

  let getNewEmployee = () => {
    return {
      id: new Date().getTime(),
      firstName,
      lastName,
      group,
    };
  };

  const [{ firstName, lastName, group }, setInput] = useState("");

  return (
    <div className="app-new-employee-form">
      <h3>Add Employee</h3>

      <label>First Name *</label>
      <input
        value={firstName || ""}
        type="text"
        className="form-control"
        onChange={(e) => {
          setInput({ firstName: e.target.value, lastName, group });
        }}
      />

      <br />

      <label>Last Name *</label>

      <input
        value={lastName || ""}
        type="text"
        className="form-control"
        onChange={(e) => {
          setInput({ firstName, lastName: e.target.value, group });
        }}
      />

      <br />

      <label>Group *</label>

      <select
        className="form-control"
        value={group || ""}
        onChange={(e) => {
          setInput({ firstName, lastName, group: e.target.value });
        }}
      >
        <option value></option>
        {options}
      </select>

      <br />

      {!firstName || !lastName || !group ? (
        <button className="btn btn-primary m-2" disabled>
          Create
        </button>
      ) : (
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            actions.addEmployee(getNewEmployee());
            hideModal();
          }}
        >
          Create
        </button>
      )}

      <button className="btn btn-danger m-2" onClick={hideModal}>
        Cancel
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...staffActions,
      },
      dispatch
    ),
  };
}

export default connect(null, mapDispatchToProps)(NewEmployeeForm);
