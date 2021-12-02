import { SET_USER } from "./constants";

export function fetchUser(){
    return dispatch => {
        fetch("http://localhost:3000/users")
        .then(r => r.json)
        .then( user => dispatch({type: SET_USER, payload: user}))
    }
}