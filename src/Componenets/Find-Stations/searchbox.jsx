import React, { useState } from "react";
import search from '../Home/images/icons/search.png';
import './styles/searchbox.css';

function SearchBox({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    // Function to handle input change
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    // Function to handle search button click
    const searchStations = () => {
        console.log("Searching for:", searchText);
        onSearch(searchText); // Call the callback function with search text
    };

    return (
        <>
            <div className="searchbox">
                <h1>Find a Charger</h1>
                <div className="bar">
                    <input 
                        className="box" 
                        type="text" 
                        placeholder="Search Location Here..." 
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <button className="search-btn" onClick={searchStations}>
                        <img src={search} alt="search icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchBox;
