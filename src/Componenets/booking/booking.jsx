import React from "react";
import stimg from '../Home/images/station-img.jpg';
function Booking()
{
    return(
        <>
        <div className="booking-container">
            <div className="st-img">
                <img src={stimg} alt="" />
            </div>
            <div className="st-details">
                <div className="slots">
                    
                </div>
            </div>

        </div>
        </>
    );
}