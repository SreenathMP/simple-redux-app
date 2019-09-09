import { ADD_MESSAGE, ADD_AUTHOR, ADD_GROUP } from "../constants/action-type";

export function addMessage(payload) {
  return { type: ADD_MESSAGE, payload };
}

export function addAuthor(userName, id) {
  return {
    type: ADD_AUTHOR,
    payload: {
      userName: userName,
      id: id
    }
  };
}

export function addGroup(payload) {
  return { type: ADD_GROUP, payload };
}
