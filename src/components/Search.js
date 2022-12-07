import React from "react";
import '../Search.css'

function Search({ filter, onSetFilter, onClearFilter, artists }) {

    return (
        <div className="artist-filters">
            <select className="filters" value={filter} onChange={(event) => onSetFilter(event.target.value == 0 ? "" : event.target.value)}>
                <option value={0}>Filter by name</option>

                {Object.keys(artists).length > 0 &&
                    artists.map((artist) => (
                        <option key={artist.id} value={artist.name}>{artist.name}</option>
                    ))}

            </select>

            <select className="filters">
                <option value={0}>Filter by location</option>
            </select>

            <select className="filters">
                <option value={0}>Filter by studio</option>
            </select>

        </div>
    )

}

export default Search