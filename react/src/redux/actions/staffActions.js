import { ACTION_TYPE } from './actionTypes';
import * as staffApi from '../../api/staff';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadStaffSuccess(staff) {
  return { type: ACTION_TYPE.loadStaffSuccess, staff };
}

export function loadStaff() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return staffApi
      .getStaff()
      .then(staff => {
        dispatch(loadStaffSuccess(staff));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
