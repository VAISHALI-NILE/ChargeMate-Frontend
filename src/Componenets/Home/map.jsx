import React from "react";
import map from './images/map.png'
import './styles/map.css';

function Map(){
    return(
        <>
         <div className="map-container">
            <div className="map-img">
                <img className="mapimg" src={map} alt="" />
            </div>
            <div className="map-discription">
                <h1>Convenient, Reliable, Affordable</h1>
            <p>We have over 950 fast charging stations. We’re on a mission to deliver a fast charging experience that leaves fossil fuels in the rearview mirror.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>

            </div>
         </div>
        </>
    );
}

export default Map;