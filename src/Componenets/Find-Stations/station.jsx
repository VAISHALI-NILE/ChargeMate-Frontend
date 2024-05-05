import React from "react";
import './styles/station.css';
import stimg from '../Home/images/station-img1.jpeg';

function Station(){
    return(
        <div className="container">
            <img src={stimg} alt="" />
            <h2>Station Name</h2>
            <ul>
                <li>Location</li>
                <li className="cost">75Rs/hr</li>
            </ul>
            <ul>
                <li>CCS</li> 
            </ul>
            <ul>
                <li>Open 24 Hours</li>
                <li>70.0kW</li>
            </ul>
            <p>It is a long established fact that a reader will be </p>
            <button className="book">Book Now</button>
        </div>
    );
}

export default Station;





