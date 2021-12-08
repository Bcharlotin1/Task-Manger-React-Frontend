

import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './actions/userAction';
import { fetchProjects } from './actions/projectAction';
import { fetchTasks } from './actions/taskAction';

import Home from './components/Home';
import UserLogin from './components/users/UserLogin';
import UserSignup from './components/users/UserSignup';
import PageLayout from './components/layout/PageLayout';
import './App.css';




function App() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

    
    useEffect(() =>{
        dispatch(fetchUser())
        dispatch(fetchProjects(navigate))
        dispatch(fetchTasks())
    }, [])

    const loading = useSelector(state => state.loading)
    const userExsists  = useSelector((state) => Object.keys(state.user).length > 0)
    console.log(loading)

    
  return (
    <div >
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="projects/*" element={<PageLayout />} />
        <Route render={<Navigate replace to="/projects" />} />

      </Routes>
    </div>
  );
}

export default App;

