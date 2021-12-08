import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createTask } from "../../actions/taskAction"
import { useParams, useNavigate } from "react-router"
import { getCurrentDate } from "../../actions/constants"


export default function TaskInputs() {
    
    const [title, setTitle] = useState("")

    const { id } = useParams()
    const currentProjectId = parseInt(id)
    const allProjects = useSelector(state => state.projects)
    const currentProject = allProjects.find(project => project.id === currentProjectId)

    const dispatch = useDispatch()
    const navigate = useNavigate()
 

    function handleSubmit(event){
        event.preventDefault()
        
        dispatch(createTask({
            title: title,
            project_id: currentProject.id,
            completion_rate: 25
            
           
        }, navigate))

        setTitle("")
        
    }

    
    return (
        <div>
              <div className="projects-section">
              <div className="projects-section-header">
              <p>New Task</p>
            
              <p className="time">{getCurrentDate()}</p>
            
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









