import { GET_USER, SET_TASK, SET_PROJECTS, ENABLE_OR_DISABLE_LOADING } from "./constants";


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
            } else if (res.status === "401") {
              
              dispatch({
                type: ENABLE_OR_DISABLE_LOADING,
                payload: {isLoading: false, msg: "loaded"}
            })
              throw new Error("Unauthorized Request. Must be signed in.");
              
            }
          })
          .then((user) => {
              console.dir(user)
              
              dispatch({type:GET_USER, payload: user})

              dispatch({
                type: ENABLE_OR_DISABLE_LOADING,
                payload: {isLoading: false, msg: "loaded"}
            })
              
          })
          .catch((err) => {
            
            dispatch({
              type: ENABLE_OR_DISABLE_LOADING,
              payload: {isLoading: false, msg: "loaded"}
          })
           
            });
           
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
            
                dispatch({type: GET_USER, payload: user.data})
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
            localStorage.setItem("token", res.headers.get("Authorization"));
            return res.json();
          } else {
            return res.text().then((text) => Promise.reject(text));
          }
        })
        .then((user) => {
            console.dir(user)
          
            dispatch({type: GET_USER, payload: user.data})
            dispatch({ type: SET_PROJECTS, payload: user.data.projects
            })
            dispatch({type:SET_TASK, payload: user.data.tasks})
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