import { applyMiddleware, createStore, combineReducers } from 'redux';

import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer';
import projecReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer'
import loadingReducer from './reducers/loadingReducer'

let rootReducer = combineReducers({user: userReducer, projects: projecReducer, tasks:taskReducer,  loading: loadingReducer})
export default createStore(rootReducer, applyMiddleware(thunk))