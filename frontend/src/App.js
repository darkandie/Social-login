import React, { useEffect, useState } from "react";
import './app.css'
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages/Routes";

function App() {

  const [ user, setUser ] = useState(false);

  useEffect(()=>{
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      }).then(response=> {
        if (response.status === 200) return response.json();
        throw new Error('Authentication has been failed') 
      }).then(resObject => {
        setUser(resObject.user)
      }).catch((err)=>{
        console.log(err);
      })
    }
    getUser();
  }, [])

  console.log(user, 'user')

  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <AppRoutes user={user}/>
    </BrowserRouter>    
  );
}

export default App;
