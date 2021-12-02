import { SET_USER } from "../actions/constants";

export default function userReducer(state=[], actions) {
    switch(actions.type){
        case SET_USER:
           
            return actions.payload; 

        default:
            return state;
    }
    
    
}
