import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCurrentDate } from '../../actions/constants';
import './Task.css';

export default function AllTasks() {
    
    const user = useSelector(state => state.user)
    const allTasks = useSelector(state => state.tasks)
    const allProjects = useSelector(state => state.projects)

    const userProject = allProjects.filter((project) => user.id === project.user_id)

  
    const filteredArray  = allTasks.filter(function(task){
        return userProject.filter(function(userProject){
           return userProject.id === task.project_id;
        })
    });
    
    
   
    const navigate = useNavigate()





    return (

        <div>
            <div className="projects-section">
                <div className="projects-section-header">
                    <p>All Tasks</p>

                    <p className="time">{getCurrentDate()}</p>

                </div>
                <div className="projects-section-line">

                    <div className="view-actions">
                        
                    </div>
                  
                     
                    </div>

                    {/* ----------------------------------- */}
                    <form id="task_form">
               
                        {filteredArray.map(t => {

                            return (
                    
                                    <div key={t.id}>
                                        <input type="checkbox" id={t.id}></input>
                                        <label htmlFor={t.id}>{t.title}</label>
                                    </div>

                            )
                        })}
                    </form>
                </div>
        </div>
    )
}



