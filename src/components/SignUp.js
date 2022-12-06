import React from "react";
import '../SignUp.css'
import atlas3 from '../assets/atlas3.jpg'

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
                <div className="sign-up-header">

                </div>
                <div className="sign-up-components">

                </div>
                <div className="login-text">

                </div>
            </div>
        </div>
    )

}

export default SignUp