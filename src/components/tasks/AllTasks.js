import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchTasks, deleteTask } from '../../actions/taskAction';
import './Task.css';

export default function AllTasks() {
    
    const user = useSelector(state => state.user)

  
    const allTasks = useSelector(state => state.tasks)
    const projectTasks =  allTasks.filter((task) => task.project_id === user.id)
    
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [complete, setToComplete] = useState("")
   


    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

 
    function onChange(event) {
     
        setToComplete(event.target.value)
        // setIsChecked(!isChecked)
        //complete  is  sesnd thee completion rate and i want this add to the project 
    }
    function handleClick(task) {

        dispatch(deleteTask(task, navigate))
    }

 

    return (

        <div>
            <div className="projects-section">
                <div className="projects-section-header">
                    <p>All Tasks</p>

                    <p className="time">December 12</p>

                </div>
                <div className="projects-section-line">

                    <div className="view-actions">
                        
                    </div>
                  
                     
                    </div>

                    {/* ----------------------------------- */}
                    <form id="task_form">
               
                        {allTasks.map(t => {

                            return (
                                <div>

                                    <div>
                                        <input type="checkbox" id={t.id}></input>
                                        <label for={t.id}>{t.title}</label>
                                        <button classname="task_delete_button" onClick={() => { handleClick(t) }}>Delete</button>
                                    </div>

                                </div>
                            )
                        })}
                    </form>
                </div>
        </div>
    )
}



