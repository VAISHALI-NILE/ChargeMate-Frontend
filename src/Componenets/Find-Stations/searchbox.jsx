import React from "react";
import search from '../Home/images/icons/search.png'
import './styles/searchbox.css';
function SearchBox(){
    return(
        <>
            <div className="header">
                <h1>Find a Charger</h1>
                <div className="bar">
                <input className="box" type="text" placeholder="Search Location Here..." />
                <button className="search-btn"><img src={search} alt="" /></button>
                </div>
            </div>
        </>
    );
}

export default SearchBox;