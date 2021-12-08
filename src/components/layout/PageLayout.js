import React from 'react'
import SideNavLayout from './SideNavLayout';
import logo from '../../images/logo3.png'; // with import

import ProjectDisplay from '../projects/ProjectDisplay';
import ProjectInput from '../projects/ProjectInput'
import ProjectUpdate from '../projects/ProjectUpdate';
import TaskDisplay from '../tasks/TaskDisplay'
import TaskInput from '../tasks/TaskInputs'
import AllTasks from '../tasks/AllTasks';

import {  Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PageLayout() {
  
  const user = useSelector(state => state.user)

    
  return (
    <div className="app-container">
    <div className="app-header">
      <div className="app-header-left">
        {/* <span className="app-icon" /> */}
       <div className="app-icon"><img alt="game conssroler" src={logo}/></div>
    
        <span></span>
        <p className="app-name"></p>
        <div className="search-wrapper">
        <p className="app-name">Task Manager App</p>
        
        </div>
      </div>
      <div className="app-header-right">

        <button className="profile-btn">
          <img  alt="line" src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
          <span>{user.username}</span>
        </button>
      </div>
      
    </div>
    <div className="app-content">
        <SideNavLayout />
  
        <Routes>
          
          <Route path="/" element={<ProjectDisplay />} />
          <Route path="new" element={<ProjectInput />} />
          <Route path=":id/edit" element={<ProjectUpdate />} />
          <Route path=":id/tasks" element={<TaskDisplay />} />
          <Route path=":id/tasks/new" element={<TaskInput />} />
          <Route path="/tasks" element={<AllTasks />} />
        </Routes>
      
        {/* ---------------------------------- */}
  
      
    </div>
    
    </div>
     
);
}

