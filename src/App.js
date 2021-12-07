import React from 'react';
import PageLayout from './components/layout/PageLayout';
import './App.css';

import Home from './components/Home';
import UserLogin from './components/users/UserLogin'
import UserSignup from './components/users/UserSignup'
import UserDisplay from './components/users/UserDisplay';
import AllTasks from './components/tasks/AllTasks';
import ProjectUpdate from './components/projects/ProjectUpdate'

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
  
  
      <Routes>
      <Route path="/projects/edit" element={<ProjectUpdate />} />
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/user" element={<UserDisplay />} />
        <Route path="/tasks" element={<AllTasks />} />
        <Route path="projects/*" element={<PageLayout />} />
     
      </Routes>
    </div>
  );
}

export default App;

