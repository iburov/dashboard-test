import { handleResponse, handleError } from "./utils";

const baseUrl = `${process.env.REACT_APP_API_URL}staff`;

export function getStaff() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
