import {ENABLE_OR_DISABLE_LOADING} from "../actions/constants";


export default function loadingReducer(state={isLoading: true, msg: 'Please wait...'}, action) {
    
    switch(action.type){
        
        case ENABLE_OR_DISABLE_LOADING:
           
            return action.payload; 
        

        default:
            return state;
    }

}