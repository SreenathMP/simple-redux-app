//Redux store is the state of the whole application
//State in redux is from reducers

import {createStore} from "redux"
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
