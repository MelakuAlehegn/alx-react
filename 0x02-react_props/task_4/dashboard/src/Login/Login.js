import React from 'react'
import "./Login.css";
export default function Login() {
    return (
        <div className='App-body'>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>Email: </label>
            <input type='email' id="email"></input>
            <label htmlFor='password'>Password: </label>
            <input type='password' id="password"></input>
            <button>OK</button>
        </div>
    )
}
