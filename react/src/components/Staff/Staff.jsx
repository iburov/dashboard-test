import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import "./Staff.scss";
import * as staffActions from "../../redux/actions/staffActions";
import Spinner from "../common/Spinner.jsx";
import EmployeeList from "./EmployeeList/EmployeeList.jsx";

class StaffPage extends React.Component {
  filteredStaff = [];

  componentDidMount() {
    const { actions, staff } = this.props;
    this.filteredStaff = this.props.staff;

    if (!staff.length) {
      actions.loadStaff().catch((error) => {
        alert("Loading staff failed: " + error);
      });
    }
  }

  filter(event) {
    const keyword = (event.target.value || "").toLowerCase();

    if (keyword) {
      this.filteredStaff = this.props.staff.filter((el) => {
        return (
          el.firstName.toLowerCase().indexOf(keyword) >= 0 ||
          el.lastName.toLowerCase().indexOf(keyword) >= 0 ||
          el.group.toLowerCase().indexOf(keyword) >= 0
        );
      });
    } else {
      this.filteredStaff = this.props.staff;
    }
    console.log(keyword);
    console.log(this.filteredStaff);
  }

  render() {
    return (
      <div className="dashboard-staff">
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <input
              type="text"
              placeholder="Filter..."
              onChange={this.filter.bind(this)}
            />
            <button className="btn btn-primary">Add Employee</button>
            <EmployeeList staff={this.filteredStaff}></EmployeeList>
          </>
        )}
      </div>
    );
  }
}

StaffPage.propTypes = {
  actions: PropTypes.object.isRequired,
  staff: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    staff: state.staff,
    loading: state.apiCallsInProgress > 0,
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffPage);
