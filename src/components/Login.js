import React, { useState } from "react";
import '../Login.css'
import atlas3 from '../assets/atlas3.jpg'
import { NavLink } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'

function Login({ setClient }) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((client) => {
                setClient(client)
                navigate("/")
                localStorage.setItem("me", JSON.stringify(client))
            });
          }
        });
    }

    return (
        <div className="main-parent">
            <div className="left">
                <div className="awesome-image">
                    <img className="atlas" src={atlas3} alt="world" />
                </div>
                <div className="art-text">
                    <p>Take it upon yourself to design a better world through art!</p>
                </div>
            </div>
            <div className="right">
                
                <div className="sign-in-components">

                <div className="sign-in-header">
                    <h3>Hello, please login to access Inkmasters</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="username" className="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" id="password" className="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="sign-in" type="submit">Login</button>
                </form>
                </div>
                <div className="login-text">
                <NavLink to='/signup'><p>Already a member? Sign Up</p></NavLink>
                </div>
            </div>
        </div>
    )

}

export default Login