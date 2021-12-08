
//users
export const SET_USER = "SET_USER"
export const GET_USER = "GET_USER"

//projects 

export const SET_PROJECTS = "SET_PROJECTS"
export const ADD_PROJECT = "ADD_PROJECT"
export const DELETE_PROJECT = "DELETE_PROJECT"
export const UPDATE_PROJECT = "UPDATE_PROJECT"

//tasks 

export const SET_TASK = "SET_TASK"
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"

//loading

export const ENABLE_OR_DISABLE_LOADING = "ENABLE_OR_DISABLE_LOADING"


//date time 

export function getCurrentDate(){
  
    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
   
   
    const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

  
    return `${months[month - 1]} ${date}`
    }

    // export function getOldDate(createdAt){
        
    //     const oldDate = Date(createdAt)
    //     const date = oldDate.getDate();
    //     const month = oldDate.getMonth() + 1;
       
    //     const months = [ "January", "February", "March", "April", "May", "June", 
    //            "July", "August", "September", "October", "November", "December" ];
    
      
    //     return `${months[month - 1]} ${date}`
    //     }