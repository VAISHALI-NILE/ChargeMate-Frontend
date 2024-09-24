import React from "react";
import './styles/Header.css';
import Nav from '../Home/Nav.jsx';
import busimg from "../Home/images/business-home-img2.png";
function Header()
{
    return(
        <>
        <div className="header-main">
        <div class="overlay"></div>
            <Nav />

            <div className="header">
                <h1>Host EV Fast Charging Stations <br /> for Your Customers</h1>
                <p>Attract new customers and build brand loyalty</p>
            </div>


        </div>
        <div className="second">
                <div>
                <li>24/7 Access to chargers</li>
                <li>Located in dense EV markets</li>
                <li>Space for electrical equipment</li>
                <li>Can dedicate at least three parking stalls to EV fast charging</li>
                <li>ADA accessibility (if applicable)</li>
                <li>Convenient high traffic areas with public access</li>
                </div>
                <div>
                    <img src={busimg} alt="" />
                </div>
        </div>
        </>
    );
}

export default Header;