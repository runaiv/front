import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { facebookLoginButton } from 'react-social-login'
import React, { useState, request } from 'react'
import LoginForm from '../src/componenets/LoginForm'
import SignupForm from '../src/componenets/SignupForm'
import axios from 'axios'
import {Route, BrowserRouter as Router} from 'react-router-dom'


function App() {

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")

  const Login = async (details) => {
    console.log(details)
    
    const request = {
      email: details.email,
      password: details.password
    }

    const response = await axios.post('http://localhost:3001/auth/login', request)
    .then( res => {
      if(res.status !== 200)
        console.log('incorrect credentials')
        setUser({
          name: details.name,
          email: details.email
        })
    }).catch(err => {
      console.log(err)
      setError('Wrong Credentials')
      console.log('Wrong Credentials')
    })
  }

const Logout = () => {
  setUser({name: "", email: ""})
}

  return (
    <Router>
    <div className="App">
      {(user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick= {Logout}>Logout</button>
        </div> 
      ) : (
        <LoginForm Login={Login} error={error} />
      )
    }
    </div>
    <Route path= "/" component={SignupForm}  />
    </Router>
  );
}

export default App;
