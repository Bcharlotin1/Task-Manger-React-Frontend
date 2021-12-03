import { SET_USER, GET_USER } from "./constants";


export function fetchUser(){
    return dispatch => {
        fetch('http://localhost:3000/current_user',  
       { headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else if (res.status == "401") {
              throw new Error("Unauthorized Request. Must be signed in.");
            }
          })
          .then((user) => {
              console.dir(user)
              dispatch({type:GET_USER, payload: user})
          })
          .catch((err) => console.error(err));
           
    }
}


export function createUser(user, navigate){
    
    return dispatch => {
        console.log(user)
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user})
        })
        .then((res) => {
            if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            console.log(res.json)
            return res.json();
            } else {
            throw new Error(res);
            }
        })
        .then((user) => {
            console.dir(user)
            dispatch({type: SET_USER, payload: user})
        
            navigate("/user")
        })
        .catch((err) => console.error(err));
            
         }
}