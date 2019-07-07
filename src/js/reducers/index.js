import { ADD_MESSAGE, ADD_AUTHOR } from "../constants/action-type";


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
        message: " Not now",
        author: "User 1"
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
        author: "User 11"
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
        author: "User 102"
      },
      {
        message: "Gluckwunsch",
        author: "User 96"
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
        author: "User 400"
      },

      {
        message: " Kebab",
        author: "User 500"
      },
      {
        message: "Machen",
        author: "User 400"
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

  return state;
}

export default rootReducer;
