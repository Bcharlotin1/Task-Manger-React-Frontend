import {  useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser, logoutUser } from '../../actions/userAction'

export default function UserDisplay() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    
    useEffect(() =>{
        dispatch(fetchUser())
    }, [])

    function handleLogout(user){
        dispatch(logoutUser(user))
    }
  

    return (
        <div>
            <h2>User</h2>
            <h3>{user.username}</h3>
            <button onClick={()=>(handleLogout(user))}>logout</button>
            

        </div>
    )
}
