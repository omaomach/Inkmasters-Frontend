import React, { useEffect, useState } from "react";
import '../Appointments.css'
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

function Appointments() {
    // const { id } = useParams();
    // // const [appointment, setAppointment] = useState([])

    // const empty = { appointment_type: "", appointment_time: "" }

    // const [formData, setFormData] = useState(empty)

    // function handleChange(event) {
    //     const key = event.target.id
    //     setFormData({
    //         ...formData,
    //         [key]: event.target.value
    //     })
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     event.target.reset();
    // }

    // fetch(
    //     `https://inkmasters-production.up.railway.app` {
    //         method: "POST",
    //         headers: {
    //             "content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             client_id: 
    //         })
    //     }
    // )

    return (
        <>
        <NavBar />
        <div className="appointment-parent">
            <div className="appointment-left">
                <div className="contents">
                <div className="appointment-header">
                    
                </div>
                <form>
                    <input type="text" id="appointment_type" className="appointment-type" placeholder="Tattoo or Piercing"/>
                    <input type="text" id="appointment_time" className="appointment-time" placeholder="Appointment Time" />
                    <button className="create-appointment" type="submit">Create</button>                    
                </form>
                </div>
            </div>

            <div className="appointment-right">
                <div className="appointments">
                    <div className="appointment-text">
                        <h3>Your Appointments</h3>
                    </div>
                    <button className="update-button">Update Appointment</button>
                </div>
            </div>

        </div>
        </>
    )

}

export default Appointments