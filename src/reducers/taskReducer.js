import {SET_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK} from "../actions/constants";


export default function taskReducer(state=[], action) {
    switch(action.type){
        
        case SET_TASK:
           
            return action.payload; 
        
        case ADD_TASK:
           
            return [...state, action.payload]; 
            
        case DELETE_TASK:
            return state.filter((task) => task !== action.payload) ;
        
        case UPDATE_TASK:
            const newStateArray = state.filter((project) => project.id !== action.payload.id)
            return [...newStateArray, action.payload];

        default:
            return state;
    }

}