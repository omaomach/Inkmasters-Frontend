import React from "react";
import '../Search.css'

function Search({ filter, onSetFilter, filter2, onSetFilter2, onClearFilter, artists }) {

    return (
        <div className="artist-filters">
            <select className="filters" value={filter} onChange={(event) => onSetFilter(event.target.value === 0 ? "" : event.target.value)}>
                <option value={0}>Filter by name</option>

                {Object.keys(artists).length > 0 &&
                    artists.map((artist) => (
                        <option key={artist.id} value={artist.name}>{artist.name}</option>
                    ))}

            </select>

            <select className="filters" value={filter2} onChange={(event) => onSetFilter2(event.target.value)}>
                <option value={0}>Studios</option>

                {Object.keys(artists).length > 0 &&
                    artists.map((artist) => (
                        <option key={artist.id} value={artist.studio.name}>{artist.studio.name}</option>
                    ))}

            </select>

            <select className="filters">
                <option value={0}>Filter by location</option>
            </select>

        </div>
    )

}

export default Search