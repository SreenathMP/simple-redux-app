//Reducers produce the state of the application
//State is changed by dispatching an application
import {
  ADD_MESSAGE,
  ADD_AUTHOR
} from "../constants/action-types"


const initialState = {
  messages: [{
    property_id: 12,
    members: [
      "user1",
      "user2"
    ],
    message: [{
        message: "Hello",
        author: "user1"
      },
      {
        message: "How are you",
        author: "user2"
      },
      {
        message: "Whats going on",
        author: "user3"
      },
    ]
  }]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MESSAGE) {
    return Object.assign({}, state, {
      messages: state.messages.concat(action.payload)
    });
  }
  if(action.type === ADD_AUTHOR){
    return Object.assign({},state,{
      messages: state.messages.concat(action.userName)
    })
  }
  return state;
}

export default rootReducer;
