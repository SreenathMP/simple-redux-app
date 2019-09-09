import { ADD_MESSAGE, ADD_AUTHOR, ADD_GROUP } from "../constants/action-type";

const initialState = {
  messages: [
    {
      property_id: 12,
      members: ["User 1", "User 2"],
      message: [
        {
          message: " Hello",
          author: "User 1"
        }
      ]
    }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MESSAGE) {
    var id1 = action.payload.id;
    var newstate1 = { ...state };
    newstate1.messages.find(el => el.property_id === id1).message = [
      ...newstate1.messages.find(el => el.property_id === id1).message,
      { message: action.payload.newmessage, author: action.payload.author }
    ];
    return Object.assign({}, state, {
      messages: [...newstate1.messages]
    });
  }
  if (action.type === ADD_AUTHOR) {
    var id = action.payload.id;
    var newstate = { ...state };
    newstate.messages.find(el => el.property_id === id).members = [
      ...newstate.messages.find(el => el.property_id === id).members,
      action.payload.userName
    ];
    return Object.assign({}, state, {
      messages: [...newstate.messages]
    });
  }

  if (action.type === ADD_GROUP) {
    var group = action.payload.group;
    var newstate2 = { ...state };

    newstate2.messages = [{ property_id: group }];

    return Object.assign({}, state, {
      messages: [...newstate2.messages]
    });
  }

  return state;
}

export default rootReducer;
