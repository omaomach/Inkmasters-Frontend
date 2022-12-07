import React, { useState } from "react";
import '../SignUp.css'
import atlas3 from '../assets/atlas3.jpg'
import { NavLink, useNavigate } from 'react-router-dom'


function SignUp({ setClient }) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [phone_number, setPhone_Number] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            phone_number,
            email,
            password,
            password_confirmation: passwordConfirmation,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((client) => {
                setClient(client)
                navigate('/')
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
                    <p>Art brings meaning to a dull world</p>
                </div>
            </div>
            <div className="right">
                
                <div className="sign-up-components">

                <div className="sign-up-header">
                    <h3>Hello, please sign up to access Inkmasters</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="username" className="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="text" id="email" className="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" id="phone_number" className="phone_number" placeholder="Phone Number" onChange={(e) => setPhone_Number(e.target.value)}/>
                    <input type="text" id="password" className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <input type="text" id="password_confirmation" className="password" placeholder="Password Confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                    <button className="signup" type="submit">Sign Up</button>
                </form>
                </div>
                <div className="login-text">
                <NavLink to='/login'><p>Already a member? Login</p></NavLink>
                </div>
            </div>
        </div>
    )

}

export default SignUp