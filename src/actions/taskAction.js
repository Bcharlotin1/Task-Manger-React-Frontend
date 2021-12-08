import { SET_TASK, ADD_TASK, DELETE_TASK} from "./constants";

export function fetchTasks(){
    return dispatch => {
        fetch('http://localhost:3000/tasks/',{
            headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((res) => {
            if (res.ok) {
                console.log("yup")
                return res.json();
            } else{
                throw new Error("Unauthorized Request. Must be signed in.")
                ;
            }
        })
        .then((tasks) => {
            console.dir(tasks)
            dispatch({ type: SET_TASK, payload: tasks })
        })
        .catch((err) => {
            console.error(err)
         
        });
        
    }
}

export function createTask(task, navigate){
    
    return dispatch => {
        fetch('http://localhost:3000/tasks/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: localStorage.getItem("token")
            },
            body: JSON.stringify({task})
        })
        .then(r => r.json())
        .then(task => { 
            
            dispatch({type:ADD_TASK, payload: task})})
            navigate(`/projects/${task.project_id}/tasks`)
           
    }
}

export function deleteTask(task, navigate){
   
    return dispatch => {
        fetch(`http://localhost:3000/tasks/${task.id}`,{
            method: "DELETE",
        })
        .then(r => { 
            console.log(r)
            dispatch({type:DELETE_TASK, payload: task})})
           
            navigate(`/projects/${task.project_id}/tasks`)
    }
}

