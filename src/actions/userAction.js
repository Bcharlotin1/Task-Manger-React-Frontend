import { SET_USER, ADD_USER } from "./constants";

export function createUser(user, navigate){
    debugger
    return dispatch => {
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then((res) => {
            if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            return res.json();
            } else {
            throw new Error(res);
            }
        })
        .then((user) => {
            console.dir(user)
            dispatch({type: ADD_USER, payload: user})
        })
        .catch((err) => console.error(err));

            // .then( user => dispatch({type: ADD_USER, payload: user}))
            navigate("/users")
            }
}