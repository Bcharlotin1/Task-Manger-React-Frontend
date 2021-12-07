import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchTasks, deleteTask } from '../../actions/taskAction';
import { Link} from 'react-router-dom';
import './Task.css';

export default function AllTasks() {
    
    const user = useSelector(state => state.user)

  
    const allTasks = useSelector(state => state.tasks)
    // const projectTasks =  allTasks.filter((task) => task.project_id === id)
    
    
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

    //  console.log(tasks)

    return (

        <div>
            <div className="projects-section">
                <div className="projects-section-header">
                    <p>Tasks</p>

                    <p className="time">December 12</p>

                </div>
                <div className="projects-section-line">

                    <div className="view-actions">
                        
                    </div>
                    <Link to="/projects/tasks/new">
                        <button className="add-btn" title="Add New Project">
                            <svg
                                className="btn-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={3}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </button>
                    </Link>
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


