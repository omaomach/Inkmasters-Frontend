import React from "react";
import '../SignUp.css'
import atlas3 from '../assets/atlas3.jpg'
import { NavLink } from 'react-router-dom'

function SignUp() {

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

                    <input type="text" className="username" placeholder="Username"/>
                    <input type="text" className="email" placeholder="Email"/>
                    <input type="text" className="phone_number" placeholder="Phone Number"/>
                    <input type="text" className="password" placeholder="Password"/>
                    <input type="text" className="password" placeholder="Password Confirmation"/>
                    <button className="signup">Sign Up</button>
                </div>
                <div className="login-text">
                <NavLink to='/login'><p>Already a member? Login</p></NavLink>
                </div>
            </div>
        </div>
    )

}

export default SignUp