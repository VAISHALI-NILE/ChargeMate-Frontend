import React, { useState, useEffect } from "react";
import './styles/station.css';
import errorimg from "../Home/images/station-img.jpg"
import loc from '../Home/images/icons/location.png';

function Station({ station }) {

    
    const handleLocationClick = () => {
        const googleMapsUrl = station.Location;
        window.open(googleMapsUrl, "_blank");
    };
    return (
        <div className="container">
            <div className="nm-img">
                {/* {notes.map(note =>
                    <p key={note.id}>{note.Place_name}</p>
                )} */}
                <img className="st-img" src={station.Featured_Image}  alt="" />
                <h2 key={station.id}>{station.Place_name}</h2>
            </div>
            <ul>
                <li>{station.Address1}</li>
                <li><img src={loc} className="loc" alt="" onClick={handleLocationClick}/></li>
            </ul>
            <ul>
                <li className="cost">75Rs/hr</li>
                <li>CCS</li> 
            </ul>
            <ul>
                <li>Open 24 Hours</li>
                <li>70.0kW</li>
            </ul>
            <p>{station.Phone}</p>
        </div>
    );
}

export default Station;
