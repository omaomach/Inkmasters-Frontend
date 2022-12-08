import React from "react";
import '../ArtistCard.css'

function ArtistCard({ artist }) {
    // console.log(artist.email)

    return (
        <>
            <div className="artist-card" key={artist.id}>
                <img src={artist.image} alt="artist"/>
                <div className="artist-text">
                    <h4 id="artist">Artist: {artist.name}</h4>
                    <h4>Studio: {artist.studio.name}</h4>
                </div>
            </div>
        </>
    )

}

export default ArtistCard