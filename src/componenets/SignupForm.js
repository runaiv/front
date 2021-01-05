import React, { useReducer, useState } from 'react'
//import { Button, Alert, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function signup({ Login, error}) {

    const [ details, setDetails ] = useState({name: "", email:"", password:""})

    const submitHandler = e => {
        e.preventDefault()

        Login(details)
    }   
    
    function handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.');
      }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != null) ? ( <div className="error">{error}</div>) : ""}

                <div className="form-group">
                    <label for="email">Email :</label>
                    <input type="email" class="form-control" name="email" id="email" onChange = {
                        e => setDetails({
                            ...details,
                            email: e.target.value
                        }
                        )
                    }
                    value={details.email}/>
                </div>

                <div className="form-group">
                    <label for="password">Password :</label>
                    <input type="password" class="form-control" name="password" id="password" onChange = {
                        e => setDetails({
                            ...details,
                            password: e.target.value
                        }
                        )
                    }
                    value={details.password}/>
                </div>
                <button type="submit" class="btn btn-dark">login</button>
            </div>
            <br />
            <div>
                <button type="submit" class="btn btn-dark" onClick={handleClick}>Signup</button>
            </div>
        </form>
    )
}