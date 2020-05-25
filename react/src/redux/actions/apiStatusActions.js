import { ACTION_TYPE } from './actionTypes';

export function beginApiCall() {
  return { type: ACTION_TYPE.beginApiCall };
}

export function apiCallError() {
  return { type: ACTION_TYPE.apiCallError };
}
