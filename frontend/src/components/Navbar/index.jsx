import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = ({user}) => {

  const logoutFunction = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
  }

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">Social Login App</Link>
      </span>
      {user? (
        <ul className="list">
          <li className="listItem">
            <img 
            src={user.photos[0].value} 
            alt="" 
            className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logoutFunction}>Logout</li>
        </ul>
      ):(
        <Link to="/login" className="link">Login</Link>
      )}
    </div>
  )
}

export default Navbar;