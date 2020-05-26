import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import "./Staff.scss";
import * as staffActions from "../../redux/actions/staffActions";
import Spinner from "../common/Spinner";
import EmployeeList from "./EmployeeList/EmployeeList";
import AddEmployeeButton from "./AddEmployeeButton";

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
      <div className="app-staff">
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <div className="app-staff__header form-inline">
              <input
                type="text"
                className="form-control"
                placeholder="Filter..."
                onChange={(event) => {
                  this.setState({ keyword: event.target.value.toLowerCase() });
                }}
              />
              <AddEmployeeButton />
            </div>

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
