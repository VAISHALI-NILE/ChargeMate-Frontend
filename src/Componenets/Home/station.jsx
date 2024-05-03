import React from "react";
import './styles/station.css';
import stimg from './images/station-img1.jpeg';

function Station(){
    return(
        <div className="container">
            <img src={stimg} alt="" />
            <h2>Station Name</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a</p>
            <button className="details">View Details</button>
        </div>
    );
}

export default Station;