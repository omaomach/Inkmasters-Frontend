import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import '../Artist.css'
import { useParams, Link } from "react-router-dom";
import ink1 from "../assets/ink1.jpg"

function Artist() {

    const { id } = useParams()
    const [artist, setArtist] = useState([])

    useEffect(() => {
        fetch(`https://inkmasters-production.up.railway.app/artists/${id}`)
            .then((r) => r.json())
            .then((artist) => setArtist(artist))
    }, [])

    return (
        <>
        <NavBar />
        <div className="artist-parent">
            <div className="artist-left">
                <div className="top-left">
                    <img src={ink1} alt="ink1" />
                </div>

                <div className="bottom-left">
                    {Object.keys(artist).length > 0 && artist.images.map((img) => (
                        <div className="image-card" key={img.id}>
                            <img src={img.image_url} alt="ink" id="img-image"/>
                        </div>
                    ))}

                </div>

            </div>

            <div className="artist-right">
                <div className="artist-details">
                    <div className="art-card" key={artist.id}>
                    <img src={artist.image} alt="artist"/>
                    <div className="artist-text">
                        <h4 id="artist">Artist: {artist.name}</h4>
                        <h4>Rating: {artist.rating}</h4>
                        <h4>Email: {artist.email}</h4>
                        <h4>Studio: {Object.keys(artist).length > 0 && artist.studio.name}</h4>
                    </div>
                </div>
                </div>
                <div className="create-appointment">
                    <Link key={artist.id} to={`/appointment/${artist.id}`}>
                    <button className="appointment-button">Create Appointment</button>
                    </Link>
                </div>

            </div>

        </div>
        </>
    )

}

export default Artist