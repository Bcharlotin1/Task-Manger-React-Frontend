import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteTask } from '../../actions/taskAction';
import { v4 as uuidv4 } from 'uuid';
import './Task.css';

export default function AllTasks() {
    
    const user = useSelector(state => state.user)
    const allTasks = useSelector(state => state.tasks)
    const allProjects = useSelector(state => state.projects)

    const userProject = allProjects.filter((project) => user.id === project.user_id)


    const filteredArray  = allTasks.filter(function(task){
        return userProject.filter(function(userProject){
           return userProject.id == task.project_id;
        })
    });
    
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [complete, setToComplete] = useState("")
   

 
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
                    <form key={uuidv4()} id="task_form">
               
                        {filteredArray.map(t => {

                            return (
                                <div>

                                    <div>
                                        <input type="checkbox" id={t.id}></input>
                                        <label for={t.id}>{t.title}</label>
                                        <button className="task_delete_button" onClick={() => { handleClick(t) }}>Delete</button>
                                    </div>

                                </div>
                            )
                        })}
                    </form>
                </div>
        </div>
    )
}



