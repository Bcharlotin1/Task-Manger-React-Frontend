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
        
        fetch("http://localhost:3000/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user}),
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
                debugger
                dispatch({type: SET_USER, payload: user.data})
                navigate("/projects")
            })
            .catch((err) => console.error(err));
    }

}

export function loginUser(user, navigate){
  return dispatch => {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user}),
      })
        .then((res) => {
          if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            return res.json();
          } else {
            return res.text().then((text) => Promise.reject(text));
          }
        })
        .then((user) => {
            console.dir(user)
        
            dispatch({type: SET_USER, payload: user.data})
            navigate("/projects")
        })
        .catch((err) => console.error(err));
  }
    
}

export function logoutUser(){
    fetch("http://localhost:3000/logout", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((json) => Promise.reject(json));
          }
        })
        .then((json) => {
          console.dir(json);
          
        })
        .catch((err) => console.error(err));
}