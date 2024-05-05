import React from "react";
import './styles/Info.css';
import stimg from './images/station-img2.jpg';

function Info(){
    return(
        <div className="Info">
            <img className="info-img" src={stimg} alt="" />
            <div className="details">
            <h2>Drivers</h2>
            <p>Charge any EV at our 900+ fast charging stations across the U.S.</p>
            <button className="learn-btn">Learn More</button>
            </div>
        </div>
    );
}

export default Info;