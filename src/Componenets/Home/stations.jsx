import React from "react";
import Station from "./station";
import './styles/stations.css';

function Stations(){
    return(
        <div className="stations">
            <Station/>
            <Station/>
            <Station/>
        </div>
    );
}

export default Stations;