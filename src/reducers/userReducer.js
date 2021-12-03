import { SET_USER, ADD_USER } from "../actions/constants";

export default function userReducer(state=[], action) {
    switch(action.type){
        case SET_USER:
           
            return action.payload; 
            
        case ADD_USER:
           
            return [...state, action.payload]; 

        default:
            return state;
    }
    
    
}
