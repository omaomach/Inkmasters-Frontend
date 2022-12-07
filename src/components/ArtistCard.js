import React from "react";
import '../ArtistCard.css'

function ArtistCard({ artist }) {
    // console.log(artist.email)

    return (
        <>
            <div className="artist-card" key={artist.id}>
                <img src={artist.image} alt="artist"/>
                <h4>Artist: {artist.name}</h4>
            </div>
        </>
    )

}

export default ArtistCard