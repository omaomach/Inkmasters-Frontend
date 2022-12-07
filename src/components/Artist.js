import React from "react";
import NavBar from "./NavBar";
import '../Artist.css'

function Artist() {

    return (
        <>
        <NavBar />
        <div className="artist-parent">
            <div className="artist-left">
                <div className="top-left">

                </div>

                <div className="bottom-left">
                    <div className="image-card">

                    </div>

                </div>

            </div>

            <div className="artist-right">
                <div className="artist-details">

                </div>
                <div className="create-appointment">
                    <button className="appointment-button">Create Appointment</button>
                </div>

            </div>

        </div>
        </>
    )

}

export default Artist