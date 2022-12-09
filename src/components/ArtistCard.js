import React from "react";
import { Link } from "react-router-dom";
import '../ArtistCard.css'

function ArtistCard({ artist, setActive }) {
    // const navigate = useNavigate();
    // console.log(artist.email)

    return (
        <>
        <Link key={artist.id} to={`/artist/${artist.id}`}>
            <div className="artist-card" key={artist.id} onClick={() => setActive(artist.id)}>
                <img src={artist.image} alt="artist"/>
                <div className="artist-text">
                    <h4 id="artist">Artist: {artist.name}</h4>
                    <h4>Studio: {artist.studio.name}</h4>
                </div>
            </div>
        </Link>
        </>
    )

}

export default ArtistCard