import { ACTION_TYPE } from '../actions/actionTypes';
import initialState from '../initialState';

export default function staffReducer(state = initialState.staff, action) {
  switch (action.type) {
    case ACTION_TYPE.loadStaffSuccess:
      return action.staff;
    default:
      return state;
  }
}
