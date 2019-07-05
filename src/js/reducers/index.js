import {
  ADD_MESSAGE,
  ADD_AUTHOR
} from "../constants/action-types"


const initialState = {
  messages:[{
    property_id: 12,
    members: [
      "User 1",
      "User 2"
    ],
    message: [{
        message: " Hello",
        author: "User 1"
      },
      {
        message: " How are you",
        author: "User 2"
      },
      {
        message: " Whats going on",
        author: "User 3"
      },
    ]
  },
  {
    property_id: 30,
    members: [
      "User 11",
      "User 22"
    ],
    message: [{
        message: "Was Gehts",
        author: "User 11"
      },

      {
        message: " Bis Gleich",
        author: "User 22"
      },
      {
        message: "Machen",
        author: "User 3"
      },
    ]
  }
]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MESSAGE) {
    return {
      ...state,
      messages:[...state.messages[action.group_index],
        {...state.messages[action.group_index],
          message:[...state.messages.message, action.newMessage]}
        ]
    }
  }
  if(action.type === ADD_AUTHOR){
    return Object.assign({},state,{
      messages: {...state.messages,members:[...state.messages.members,action.userName]}
    })
  }
  return state;
}

export default rootReducer;
