

import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/userAction';
import { fetchProjects } from './actions/projectAction';
import { fetchTasks } from './actions/taskAction';

import Home from './components/Home';
import UserLogin from './components/users/UserLogin';
import UserSignup from './components/users/UserSignup';
import PageLayout from './components/layout/PageLayout';
import './App.css';




function App() {
  const dispatch = useDispatch()

    
    useEffect(() =>{
        dispatch(fetchUser())
        dispatch(fetchProjects())
        dispatch(fetchTasks())
    }, [])
 
   

  return (
    <div >
  
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="projects/*" element={<PageLayout />} />
     
      </Routes>
    </div>
  );
}

export default App;

