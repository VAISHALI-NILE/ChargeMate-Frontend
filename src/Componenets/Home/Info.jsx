import React from "react";
import './styles/Info.css';
import img1 from './images/station-img2.jpg';
import img2 from './images/station-img.jpg';
import img3 from './images/payment-img.jpg';

function Info(){
    return(
       <>
        <div className="Info">
            <img className="info-img" src={img1} alt="" />
            <div className="details">
            <h2>Drivers</h2>
            <p>Charge any EV at our 900+ fast charging stations across the U.S.</p>
            <button className="learn-btn">Learn More</button>
            </div>
        </div>
        <div className="Info">
            <img className="info-img" src={img2} alt="" />
            <div className="details">
            <h2>Vendors</h2>
            <p>Charge any EV at our 900+ fast charging stations across the U.S.</p>
            <button className="learn-btn">Learn More</button>
        </div>
        </div>
            <div className="Info">
            <img className="info-img" src={img3} alt="" />
            <div className="details">
            <h2>ChargeMate-App</h2>
            <p>Charge any EV at our 900+ fast charging stations across the U.S.</p>
            <button className="learn-btn">Learn More</button>
            </div>
        </div>
        </>
    );
}

export default Info;