
import { useSelector, useDispatch } from 'react-redux'
import {  deleteProject } from '../../actions/projectAction';
import { Link, useNavigate} from 'react-router-dom';


export default function ProjectDisplay() {
  
  
  const user = useSelector(state => state.user)
  const allProjects = useSelector(state => state.projects)
  const projects = allProjects.filter((project) => user.id === project.user_id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  


  function handleClick(project) {
    dispatch(deleteProject(project, navigate))
  }
  function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
      (25 + 70 * Math.random()) + '%,' +
      (85 + 10 * Math.random()) + '%)'
  }
  console.log(user)
  return (
    <div>
     
        <div className="projects-section">
          <div className="projects-section-header">
            <p>Projects</p>

            <p className="time">December 12</p>

          </div>
          <div className="projects-section-line">

            <div className="view-actions">



            </div>
            <Link to="/projects/new" >
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
          {/* ---------------------Body------------------------ */}
            {projects.map(p => {
            return (
              <div >

                <div className="project-box-wrapper">
                  <div className="project-box" style={{ backgroundColor: `${getColor()}` }}>
                    <div className="project-box-header">
                      <span>{Date(p.created_at)}</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <Link to={`/projects/${p.id}/tasks`} lassName="box-content-header">{p.title}
                      </Link> 

                      <p className="box-content-subheader">{p.description}</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Progress</p>
                      <div className="box-progress-bar">
                        <span className="box-progress" style={{ width: `${p.completion_rate}%`, backgroundColor: '#ff942e' }} />
                      </div>
                      <p className="box-progress-percentage">{p.completion_rate}%</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="participants">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
                        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" />

                      </div>
                      <Link to={`/projects/${p.id}/edit`}>
                      <button className="days-left" style={{ color: '#ff942e' }}>
                        Update
                      </button>
                      </Link>
                      <button className="days-left" style={{ color: '#ff942e' }} onClick={() => { handleClick(p) }}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}




