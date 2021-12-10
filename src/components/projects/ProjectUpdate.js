import { useForm } from 'react-hook-form';
import { useSelector, useDispatch,  } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import {  updateProject } from '../../actions/projectAction';


export default function ProjectUpdate() {
    
    const user = useSelector(state => state.user)

    const { id } = useParams()
    const currentProjectId = parseInt(id)
    const allProjects = useSelector(state => state.projects)
    const currentProject = allProjects.find(project => project.id === currentProjectId)

   
    const dispatch = useDispatch()
    const navigate = useNavigate()
 

    const preloadedValues = {
        id: currentProject.id,
        title: currentProject.title,
        description: currentProject.description,
        user_id: user.id

    }
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues
    })


    const onSubmit = (data) => {
    
        dispatch(updateProject(data, navigate))
    }


    return(
      <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Title</label>
                    <input 
                    {...register('title', { required: true })}
                    type="text" 
                    name ="title"
                    placeholder="Your title.." 
                   
                    />
                    

                    <label>Description</label>
                    <textarea
                        placeholder="Write something.."
                        {...register('description', { required: true })}
                        name ="description"
                        style={{ height: 200 }}
                    />
                    <input type="submit"></input>
                `</form>
      </div>
  )

}