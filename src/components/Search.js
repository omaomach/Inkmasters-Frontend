import React from "react";
import '../Search.css'

function Search() {

    return (
        <div className="artist-filters">
            <select className="filters">
                <option value={0}>Filter by name</option>
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