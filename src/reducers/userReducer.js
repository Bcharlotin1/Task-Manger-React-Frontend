import { SET_USER, GET_USER } from "../actions/constants";

export default function userReducer(state={}, action) {
    
    switch(action.type){
       
        case SET_USER:
           
            return action.payload; 
            
        case GET_USER:

            return action.payload
    
        default:
            return state;
    }
    
    
}
