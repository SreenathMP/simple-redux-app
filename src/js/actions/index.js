import {ADD_MESSAGE,ADD_AUTHOR} from "../constants/action-types"

export function addMessage(newMessage) {
  return {type: ADD_MESSAGE, newMessage}
};

export function addAuthor(userName){
  return{type: ADD_AUTHOR, userName}
};
