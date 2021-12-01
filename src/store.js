import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import userReducer from "../public/reducers/userReducer";

export default createStore(userReducer, applyMiddleware(thunk))