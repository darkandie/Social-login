import React from "react";
import { 
  Route, 
  Routes,
  Navigate } from "react-router-dom";
import { Post, Home, Login } from './index'

const AppRoutes = ({user}) => {
  return (
    <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to='/login'/>} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login"/>} />
    </Routes>
  )
}

export default AppRoutes;