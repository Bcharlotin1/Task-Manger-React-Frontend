import React from 'react';
import './App.css';


import UserInputs from './components/users/UserInputs'
import UserDisplay from './components/users/UserDisplay'
import ProjectInput from './components/projects/ProjectInput';
import ProjectDisplay from './components/projects/ProjectDisplay';
import { Link, Route, Routes } from 'react-router-dom';
import Nav from './components/SideNav/Nav'

function App() {
  return (
    <div >
      <h1>Welcome</h1>
      <Nav />
      <Link to='/login-signup'>Login/Signup</Link>

      <Routes>
        <Route path="/login-signup" element={<UserInputs />} />
        <Route path="/user" element={<UserDisplay />} />
        <Route path="/user/projects" element={<ProjectDisplay />} />
        <Route path="/user/projects/new" element={<ProjectInput />} />
      </Routes>
    </div>
  );
}

export default App;
