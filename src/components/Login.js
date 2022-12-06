import React from "react";
import '../Login.css'
import atlas3 from '../assets/atlas3.jpg'

function Login() {

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

                    <input type="text" className="username" placeholder="Username"/>
                    <input type="text" className="password" placeholder="Password"/>
                    <button className="sign-in">Login</button>
                </div>
                <div className="login-text">
                <p>Already a member? Sign Up</p>
                </div>
            </div>
        </div>
    )

}

export default Login