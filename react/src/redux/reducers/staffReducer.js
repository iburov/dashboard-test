import { ACTION_TYPE } from "../actions/actionTypes";
import initialState from "../initialState";

export default function staffReducer(state = initialState.staff, action) {
  switch (action.type) {
    case ACTION_TYPE.loadStaffSuccess:
      return action.staff;
    case ACTION_TYPE.addEmployee:
      return [...state, action.employee];
    default:
      return state;
  }
}
