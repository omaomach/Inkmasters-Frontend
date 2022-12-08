import React from "react";
import '../NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom'


function NavBar({ client, setClient }) {
    const navigate = useNavigate()
    function handleLogoutClick() {
        fetch("https://inkmasters-production.up.railway.app/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setClient(null);
            navigate('/login')
            localStorage.removeItem("me")
          }
        });
    }

    return (

        <div className="navbar">
            <div className="inkmasters">
                <NavLink to="/"><h1>Inkmasters</h1></NavLink>
            </div>

            <div className="nav-components">
                <NavLink to="/"><button className="nav-buttons">Home</button></NavLink>
                <NavLink to="/artist"><button className="nav-buttons">Designs</button></NavLink>
                <NavLink to="/about"><button className="nav-buttons">About</button></NavLink>
                <NavLink to="/contacts"><button className="nav-buttons">Contact Us</button></NavLink>
                <NavLink to="/logout"><button className="nav-buttons" onClick={handleLogoutClick}>Logout</button></NavLink>
                
            </div>

        </div>

    )

}

export default NavBar