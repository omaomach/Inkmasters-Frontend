import React from "react";
import NavBar from "./NavBar";
import '../About.css'

function About() {

    return (
        <>
        <NavBar />
        <div className="about-parent">
            <div className="secondary-parent">
            <h3>Hi, I am Omao. I designed this website to link tattoo lovers to legit artists who can design
            and draw beautiful tattoos. Their are so many fake artists out there who may end up causing damage
            to your skin. Only credited and licensed artists will be allowed to register on the site.
            Click on an artist's card to view more information about the artist.
            </h3>
            <h3>On the artist page you can create an appointment to meet an artist of your choice</h3>
            </div>
        </div>
        </>
    )

}

export default About