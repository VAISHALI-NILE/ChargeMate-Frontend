import React from "react";
import Station from "./station";
import './styles/stations.css';

function Stations({ stations }) {
    return(
        <div className="stations">
            {stations.map(station => <Station key={station.id} station={station} />)}
        </div>
    );
}

export default Stations;
