import React, { useEffect, useState } from "react";
import '../Appointments.css'
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

function Appointments({ active }) {
    // const { id } = useParams();
    const [appointment, setAppointment] = useState([])

    const empty = { appointment_type: "", appointment_time: "" }

    const [formData, setFormData] = useState(empty)

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/appointments/${active}`)
          .then((r) => r.json())
          .then((appointment) => setAppointment(appointment));
    }, []);

    // console.log(appointment.client?.username)

    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        event.target.reset();
        const me = JSON.parse(localStorage.getItem("me"))
        const data = {
            client_id: me.id,
            artist_id: active,
            type: formData.appointment_type,
            time: formData.appointment_time
        }

        console.log(data)
        if (active) {
            fetch(`https://inkmasters-production.up.railway.app/appointments`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    data
                })
            })
            .then((res) => res.json())
            .then((new_appointment) => setAppointment(new_appointment))
        }else {
            alert("Please pick an artist")
        }
        

    }

    return (
        <>
        <NavBar />
        <div className="appointment-parent">
            <div className="appointment-left">
                <div className="contents">
                <div className="appointment-header">
                    
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="appointment_type" className="appointment-type" placeholder="Tattoo or Piercing" onChange={handleChange}/>
                    <input type="text" id="appointment_time" className="appointment-time" placeholder="Appointment Time" onChange={handleChange}/>
                    <button className="create-appointment" type="submit">Create</button>                    
                </form>
                </div>
            </div>

            <div className="appointment-right">
                <div className="appointments">
                    <div className="appointment-text">
                        <h2>Your Appointments</h2>
                            <h3 key={appointment.index}>Client: {`${Object.keys(appointment).length > 0 && appointment.client?.username}`}</h3>
                            <h3 key={appointment.index}>Appointment Type: {`${Object.keys(appointment).length > 0 && appointment?.appointment_type}`}</h3>
                            <h3 key={appointment.index}>Appointment Time: {`${Object.keys(appointment).length > 0 && appointment?.appointment_time}`}</h3>
                            <button className="update-button">Delete Appointment</button>
                    </div>

                </div>
            </div>

        </div>
        </>
    )

}

export default Appointments