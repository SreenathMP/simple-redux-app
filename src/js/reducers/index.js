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
        message: " What?",
        author: "User 2"
      },
      {
        message: " Not nows",
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
  },
  {
    property_id: 58,
    members: [
      "User 102",
      "User 96"
    ],
    message: [{
        message: "Roger",
        author: "User 96"
      },

      {
        message: " Bis Spater",
        author: "User 5"
      },
      {
        message: "Gluckwunsch",
        author: "User 9"
      },
    ]
  },
  {
    property_id: 39,
    members: [
      "User 400",
      "User 500"
    ],
    message: [{
        message: "Bis Morgen",
        author: "User 11"
      },

      {
        message: " Kebab",
        author: "User 56"
      },
      {
        message: "Machen",
        author: "User 3"
      },
    ]
  },
  {
    property_id: 20,
    members: [
      "User 360",
      "User 120"
    ],
    message: [{
        message: "Pokemon",
        author: "User 360"
      },

      {
        message: "Avengers",
        author: "User 120"
      },
      {
        message: "Logan",
        author: "User 360"
      },
    ]
  },
  {
    property_id: 100,
    members: [
      "User 1500",
      "User 2000"
    ],
    message: [{
        message: "Life is Beautiful",
        author: "User 1500"
      },

      {
        message: "Schindlers List",
        author: "User 2000"
      },
      {
        message: "Endgame",
        author: "User 1500"
      },
    ]
  },
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
