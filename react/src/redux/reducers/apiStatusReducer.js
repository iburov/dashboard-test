import initialState from "../initialState";
import { ACTION_TYPE } from '../actions/actionTypes';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === ACTION_TYPE.beginApiCall) {
    return state + 1;
  } else if (
    action.type === ACTION_TYPE.apiCallError ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
