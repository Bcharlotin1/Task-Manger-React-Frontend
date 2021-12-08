import {SET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT} from "../actions/constants";

export default function projectReducer(state=[], action) {
    switch(action.type){
        case SET_PROJECTS:
        
            return action.payload; 
        
        case ADD_PROJECT:
           
            return [...state, action.payload]; 
            
        case DELETE_PROJECT:
            return state.filter((project) => project !== action.payload) ;
        
        case UPDATE_PROJECT:
           const newStateArray = state.filter((project) => project.id !== action.payload.id)
        
            return [...newStateArray, action.payload]; 

        default:
            return state;
    }
    
    
}
