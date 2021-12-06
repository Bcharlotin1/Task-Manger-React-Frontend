

import { useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch,  } from 'react-redux'
import { fetchProjects, updateProject } from '../../actions/projectAction';




export default function ProjectUpdate(params) {
    
    // const userProjects = useSelector(state => state.user)
    const allProjects = useSelector(state => state.projects)
    // const projects = allProjects.filter((project) => userProjects.id === project.user_id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProjects())

    }, [])

    const preloadedValues = {
        title: 'allProjects[0].title',
        description:' allProjects[0].description'
    }
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues
    });


    const onSubmit = (data) => {
        debugger
        console.log(data)
    };
console.log(params)


  return(
      <div>
           <form onSubmit={()=>(handleSubmit(onSubmit))}>
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