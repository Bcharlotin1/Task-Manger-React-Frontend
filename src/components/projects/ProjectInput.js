import { useState } from "react"
import { useDispatch } from "react-redux"
import { createProject } from "../../actions/projectAction"
import { useNavigate } from "react-router"

export default function ProjectInput() {
    
    const [title, setTitle] = useState("")
    //retuns ana array of 2 item  1.  inital stat 2.  funtion to change that value
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(description)

    function handleSubmit(event){
        event.preventDefault()
        //thakes conttne to redux
        dispatch(createProject({
            title: title,
            description: description
        }, navigate))

        setTitle("")
        setDescription("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>New Project</h3>
                <label>Title</label>
                <input 
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}>

                </input>

                <label>Description</label>
                <textarea
                type="text" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}>
                </textarea>

                <input type="submit"></input>
            </form>
        </div>
    )
    
}
