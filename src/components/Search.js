import React from "react";
import '../Search.css'

function Search({ filter, onSetFilter, artists }) {

    return (
        <div className="artist-filters">
            <select className="filters" value={filter} onChange={(event) => onSetFilter(event.target.value == 0 ? "" : event.target.value)}>
                <option value={0}>Find Artist</option>

                {Object.keys(artists).length > 0 &&
                    artists.map((artist) => (
                        <option key={artist.id} value={artist.name}>{artist.name}</option>
                    ))}

            </select>
        </div>
    )

}

export default Search