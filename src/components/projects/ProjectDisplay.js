
import {  useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProjects, deleteProject } from '../../actions/projectAction'
import { useNavigate } from "react-router"

export default function ProjectDisplay() {
    

    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() =>{
        dispatch(fetchProjects())
    }, [])

    function handleClick(project){
        dispatch(deleteProject(project, navigate))
    }

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(p => {
                    return(
                        <div>
                            <li key={p.id}>{p.title}</li>
                            <p>{p.description}</p>
                            <p>{p.completion_rate}</p>
                            <button onClick={()=>{handleClick(p)}}>Delete</button>
                        </div>
                    )
                })}
            </ul>  
        </div>
    )
}
