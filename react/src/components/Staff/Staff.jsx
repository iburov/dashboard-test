import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import "./Staff.scss";
import * as staffActions from "../../redux/actions/staffActions";
import Spinner from "../common/Spinner.jsx";
import EmployeeList from "./EmployeeList/EmployeeList.jsx";

class StaffPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }

  componentDidMount() {
    const { actions, staff } = this.props;

    if (!staff.length) {
      actions.loadStaff().catch((error) => {
        alert("Loading staff failed: " + error);
      });
    }
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
              onChange={(event) => {
                // this.keyword = event.target.value.toLowerCase();
                this.setState({ keyword: event.target.value.toLowerCase() });
              }}
            />
            <button className="btn btn-primary">Add Employee</button>
            <EmployeeList
              staff={this.props.staff}
              keyword={this.state.keyword}
            ></EmployeeList>
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
