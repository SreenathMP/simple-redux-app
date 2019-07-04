import {ADD_MESSAGE} from "../constants/action-types"

export function addMessage(payload) {
  return {type: ADD_MESSAGE,payload}
};
