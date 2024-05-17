import React from "react";
import './styles/app-ad.css';
import appimg from "./images/app-img.png";

function Appadd(){
    return(
        <>
            <div className="app-ad">
                <div className="left">
                    <h1>Discover Chargers On-the-Go</h1>
                    <ul>
                        <li>Find a Charger Near You!</li>
                        <li>Monitor your charging session</li>
                        <li>Pay with cash or mobile payments</li>
                    </ul>
                    <button className="store-btn">App Store</button>
                    <button className="store-btn">Play Store</button>
                </div>
                <div className="right">
                    <img src={appimg} alt="" />
                </div>
            </div>
        </>
    );

}

export default Appadd;