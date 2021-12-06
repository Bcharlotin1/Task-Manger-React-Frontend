import { useState } from "react"
import { useDispatch } from "react-redux"
import { createProject } from "../../actions/projectAction"
import { useNavigate } from "react-router"
import '/Users/biancacharlotin/Development/code/React-App/task-manager-frontend-copy/src/Form.css'

export default function ProjectInput() {
    
    const [title, setTitle] = useState("")
    
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(description)

    function handleSubmit(event){
        event.preventDefault()
     
        dispatch(createProject({
            title: title,
            description: description,
            completion_rate: 0
        }, navigate))

        setTitle("")
        setDescription("")
    }
    return (
        <div>
             <div className="projects-section">
              <div className="projects-section-header">
              <p>New Project</p>
            
              <p className="time">December 12</p>
            
              </div>
              <div className="projects-section-line">
         
              <div className="view-actions">
              <button className="view-btn list-view" title="List View">
            
              </button>
          
              </div>
              
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input 
                    type="text" 
                    
                    placeholder="Your title.." 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}/>
                    

                    <label>Description</label>
                    <textarea
                        placeholder="Write something.."
                        style={{ height: 200 }}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input type="submit"></input>
                `</form>
                </div>
            </div>
        </div>
    )
    
}






