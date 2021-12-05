import { useEffect} from "react"
import { Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { fetchProjects, deleteProject} from '../../actions/projectAction'
import { useNavigate } from "react-router"


export default function ProjectDisplay() {
  

    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() =>{
        dispatch(fetchProjects())
    }, [])

    function handleClick(project){
        debugger
        dispatch(deleteProject(project, navigate))
    }
   
    
   
    
   return(
       <div>
            <h1>Projects</h1>
            <ul>
            
                {projects.map(p =>{
                return(
                    <li key={p.id}>
                        
                        
                        <p>{p.description}</p>
                        <p>{p. completion_rate}</p>
                        <button onClick={()=>{handleClick({p})}}>Delete</button>
                                    {/* <button onClick={()=>{handleEdit(p)}}>Edit</button> */}
                                    {/* <Outlet /> */}
                                    {/* //render any matching child you have ,set itn the route in app js */}
                    </li>
                )})}
            </ul>
        </div>             
        )
}

