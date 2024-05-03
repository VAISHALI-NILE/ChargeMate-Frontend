import React from "react";
import './styles/learn.css';


function Learn()
{
    return(
        <>
        <h1 className="heading-learn" >How to Charge</h1>
        <div className="learn">
            
            <div className="subcontainer">
                <h1>1</h1>
                <h2>Plug in</h2>
                <p>Connect to your charging port.</p>
            </div>
            <div className="subcontainer">
                <h1>2</h1>
                <h2>Tap to Start Your Charge</h2>
                <p>By ChargeMate app.</p>
            </div>
            <div className="subcontainer">
                <h1>3</h1>
                <h2>Charge Up & Go</h2>
                <p>Your next destination awaits.</p>
            </div>
        </div>
        </>
    );
}

export default Learn;