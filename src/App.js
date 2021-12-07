import React from 'react';
import PageLayout from './components/layout/PageLayout';
import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/userAction';

import Home from './components/Home';
import UserLogin from './components/users/UserLogin'
import UserSignup from './components/users/UserSignup'
import AllTasks from './components/tasks/AllTasks';
import ProjectUpdate from './components/projects/ProjectUpdate'

import { Route, Routes } from 'react-router-dom';


function App() {
  const dispatch = useDispatch()

    
    useEffect(() =>{
        dispatch(fetchUser())
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

