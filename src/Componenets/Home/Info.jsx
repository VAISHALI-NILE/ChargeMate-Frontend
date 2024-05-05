import React from "react";
import './styles/Info.css';
import stimg from './images/station-img1.jpeg';

function Info(){
    return(
        <div className="Info">
            <img src={stimg} alt="" />
            <div className="details">
            <h2>title</h2>
            <p>discription</p>
            <button className="learn-btn">Learn More</button>
            </div>
        </div>
    );
}

export default Info;