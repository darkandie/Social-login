import React from 'react';
import Google from '../images/google.png';
import Github from '../images/github.png';

const Login = () => {

  const googleHandleLoggin = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  const githubHandleLoggin = () => {
    window.open('http://localhost:5000/auth/github', '_self')
  }

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={googleHandleLoggin}>
            <img src={Google} alt="" className="icon"/>
            Google
          </div>
          <div className="loginButton github" onClick={githubHandleLoggin}>
            <img src={Github} alt="" className="icon"/>
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;