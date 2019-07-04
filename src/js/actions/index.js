import {ADD_MESSAGE,ADD_AUTHOR} from "../constants/action-types"

export function addMessage(payload) {
  return {type: ADD_MESSAGE, payload}
};

export function addAuthor(userName){
  return{type: ADD_AUTHOR, userName}
};
