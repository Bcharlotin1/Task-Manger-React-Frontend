import { applyMiddleware, createStore, combineReducers } from "redux";

import thunk from "redux-thunk"
import userReducer from "./reducers/userReducer";
import projecReducer from "./reducers/projectReducer"


let rootReducer = combineReducers({user: userReducer, projects: projecReducer })
export default createStore(rootReducer, applyMiddleware(thunk))