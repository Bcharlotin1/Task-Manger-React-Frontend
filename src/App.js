

import { Route, Routes, Navigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './actions/userAction';
import { fetchProjects } from './actions/projectAction';
import { fetchTasks } from './actions/taskAction';

import Home from './components/Home';
import UserLogin from './components/users/UserLogin';
import UserSignup from './components/users/UserSignup';
import PageLayout from './components/layout/PageLayout';
import Loading from './components/Loading';
import './App.css';



function App() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  const userExsists = useSelector((state) => Object.keys(state.user).length > 0)

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchProjects())
    dispatch(fetchTasks())
  }, [])

  function UserLoggedIn() {
    if (userExsists) {
      return <PageLayout />
    } else {
      return <Navigate to="/" />
    }
  }
 
  return (
    <div >
      {!loading.isLoading ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="projects/*" element={<UserLoggedIn />} />
        </Routes> : <Loading />
      }
    </div>
  );
}

export default App;

