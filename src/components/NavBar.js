import React from "react";
import '../NavBar.css'

function NavBar() {

    return (

        <div className="navbar">
            <div className="inkmasters">
                <h1>Inkmasters</h1>
            </div>

            <div className="nav-components">
                <button className="nav-buttons">Home</button>
                <button className="nav-buttons">About</button>
                <button className="nav-buttons">Contact Us</button>
            </div>

        </div>

    )

}

export default NavBar