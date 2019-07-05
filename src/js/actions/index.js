import {ADD_MESSAGE,ADD_AUTHOR} from "../constants/action-types"

export function addMessage(addMessage) {
  return {type: ADD_MESSAGE, addMessage}
};

export function addAuthor(userName){
  return{type: ADD_AUTHOR, userName}
};
