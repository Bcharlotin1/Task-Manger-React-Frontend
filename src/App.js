import React from 'react';
import './App.css';


import UserDisplay from './components/users/UserDisplay';
import UserSignup from './components/users/UserSignup';
import UserLogin from './components/users/UserLogin';
import ProjectInput from './components/projects/ProjectInput';
import ProjectDisplay from './components/projects/ProjectDisplay';
import TaskDisplay from './components/tasks/TaskDisplay';
import TaskInputs from './components/tasks/TaskInputs';
import Home from './components/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Nav from './components/SideNav/Nav';

import DisplayTest from './components/projects/DisplayTest';


function App() {
  return (
    <div >
      <h1>Welcome</h1>
      <Nav />
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/user" element={<UserDisplay />} />
        <Route path="/projects" element={<ProjectDisplay />} />
       
        <Route path="/projects/:id" element={<ProjectDisplay />} />
        <Route path="/projects/:id" element={<DisplayTest />} />

        <Route path="/projects/new" element={<ProjectInput />} />
        <Route path="/projects/tasks" element={<TaskDisplay />} />
        <Route path="/projects/tasks/new" element={<TaskInputs />} />

     
        
        {/* <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/user" element={<UserDisplay />} />
        <Route path="/projects" element={<ProjectDisplay />} />
          <Route path="/projects/new" element={<ProjectInput />} />
         
        <Route path="/projects/new" element={<ProjectInput />} /> */}
      
       
      </Routes>

 
    </div>
  );
}

export default App;
