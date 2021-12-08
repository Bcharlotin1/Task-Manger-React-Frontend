import { SET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "./constants";

export function fetchProjects(navigate){
    return dispatch => {
        fetch('http://localhost:3000/projects', {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
              },
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
                navigate("/")
              return res.json().then((json) => Promise.reject(json));
            }
          })
        .then(projects => { 
            
            dispatch({type:SET_PROJECTS, payload: projects})})
    }
}

export function createProject(project, navigate){
    return dispatch => {
        fetch('http://localhost:3000/projects',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(project)
        })
        .then(r => r.json())
        .then( project => { 
            
            dispatch({type:ADD_PROJECT, payload: project})})
            navigate("/projects")
    }
}

export function deleteProject(project, navigate){
    return dispatch => {
        fetch(`http://localhost:3000/projects/${project.id}`,{
            method: "DELETE"  
        })
    
        .then( r => { 
    
            console.log(r)
            dispatch({type:DELETE_PROJECT, payload: project})})
            navigate("/projects")
    }
}

export function updateProject(project, navigate){
    return dispatch => {
        fetch(`http://localhost:3000/projects/${project.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(project)
        })
        .then(r => r.json())
        .then( project => { 
    
            dispatch({type:UPDATE_PROJECT, payload: project})})
            navigate("/projects")
    }
}