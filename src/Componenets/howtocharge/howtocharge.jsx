import React from "react";
import Nav from "../Home/Nav";
import "./styles/howtocharge.css";
import Footer from "../Home/footer";
function Howtocharge()
{
    return(
        <>
        <Nav />
            <div className="howtocharge-container">
                <h1>How to Charge At Station</h1>
                <div className="steps">
                    <div className="step"><h1>1</h1>Activate the station</div>
                    <div className="step"><h1>2</h1>Park and turn off your vehicle</div>
                    <div className="step"><h1>3</h1>Open your vehicle's charging port</div>
                    <div className="step"><h1>4</h1>Select the correct charging gun</div>
                    <div className="step"><h1>5</h1>Remove the connector from the charger</div>
                    <div className="step"><h1>6</h1>Plug the connector into your vehicle's charging port until it clicks</div>
                    <div className="step"><h1>7</h1>Authenticate yourself using ChargeMate</div>
                    <div className="step"><h1>8</h1>Start charging</div>
                    <div className="step"><h1>9</h1>Monitor the charging session On ChargeMate</div>
                    <div className="step"><h1>10</h1>End the charge</div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Howtocharge;