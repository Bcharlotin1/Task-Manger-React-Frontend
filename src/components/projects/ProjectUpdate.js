

import { useForm } from "react-hook-form";
import { useSelector, useDispatch,  } from 'react-redux'
import { updateProject } from '../../actions/projectAction';




export default function ProjectUpdate(params) {
    
    const user = useSelector(state => state.user)

    // const userProjects = useSelector(state => state.user)
    const allProjects = useSelector(state => state.projects)
  
    const dispatch = useDispatch()

 

    const preloadedValues = {
        title: 'allProjects[0].title',
        description:' allProjects[0].description'

    }
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues
    });


    const onSubmit = (data) => {
    
        console.log(data)
    };


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