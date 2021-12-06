import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../../actions/taskAction"
import { useNavigate } from "react-router"


export default function TaskInputs() {
    const [title, setTitle] = useState("")
    //retuns ana array of 2 item  1.  inital stat 2.  funtion to change that value
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
 

    function handleSubmit(event){
        event.preventDefault()
        
        dispatch(createTask({
            title: title,
       
            
            //completion_rate ussseeeffeect to get all task,  finnd the tasskees for  a particular  projeect, then devide them by 100 to distributee precentages,  eavee tasj chould have the same %

            //project id neees to bee sent through th get associated may be able to get once i determin dynamic routes neeed to send an whol projeect  objact to the back end 
        }, navigate))

        setTitle("")
        
    }
    return (
        <div>
              <div className="projects-section">
              <div className="projects-section-header">
              <p>New Task</p>
            
              <p className="time">December 12</p>
            
              </div>
              <div className="projects-section-line">
         
              <div className="view-actions">
              <button className="view-btn list-view" title="List View">
            
              </button>
          
              
              </div>
              
              </div>
            <form onSubmit={handleSubmit}>
            
                <label>Title</label>
                <input 
                type="text"
                placeholder="Your title.."
                value={title}
                onChange={(event) => setTitle(event.target.value)}>

                </input>

              

                <input type="submit"></input>
            </form>
        </div>
        </div>
    )
    
}





