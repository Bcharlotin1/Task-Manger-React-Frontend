import { useState, useEffect} from "react"
import { Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"
import { fetchTasks, deleteTask } from "../../actions/taskAction"
import d from "d"


export default function ProjectDisplay() {
  

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const [complete, setToComplete] = useState("")
    // const [isChecked, setIsChecked] = useState(false);
    
    
    useEffect(() =>{
        dispatch(fetchTasks())
    }, [])

    function onChange(event){
        // debugger
        setToComplete(event.target.value)
        // setIsChecked(!isChecked)
        //complete  is  sesnd thee completion rate and i want this add to the project 
    }
    function handleClick(task){
       
        dispatch(deleteTask(task, navigate))
    }

 
    
   return(
      
       <div>
            <h1>Tasks</h1>
            <button onClick={()=> navigate("/projects/tasks/new")}>New Task</button>
            {tasks.map(t => {
         
               return(
                <div>
                    <label>
                        <input 
                        type="radio"
                        name="tasks"
                        value={t.completion_rate}
                        onChange={onChange}/>
                        {t.title}
                    </label>
                    <p>{t.description}</p>
                    <button onClick={()=>{handleClick(t)}}>Delete</button>
                    
                </div>
               )
            })}

        </div>             
        )
}

