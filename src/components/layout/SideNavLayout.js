import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/userAction';

export default function SideNavLayout() {
    
    const dispatch = useDispatch()

    function handleLogout(){
        dispatch(logoutUser())
    }

    return (
       <div className="app-sidebar">
        
            <NavLink to='/projects' className="app-sidebar-link">
                <svg className="link-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </NavLink>
         
            <NavLink to='/projects/tasks' className="app-sidebar-link">
  
                <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
            </NavLink>

            
            <NavLink to="/" onClick={()=>(handleLogout())} className="app-sidebar-link">
            <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"/></svg>
            </NavLink>


            
      </div>
    )
}
