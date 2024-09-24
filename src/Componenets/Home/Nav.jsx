import React from "react";
import './styles/Nav.css';
import userimg from './images/icons/user-icon.png';
import { Link } from "react-router-dom";
function Nav()
{
    return (
        <div className="navbar">
            <ul className="menu-bar">
                <li>
                    <Link className="menu-nm logo" to="/">ChargeMate</Link>
                </li>
            </ul>
            <ul className="menu-bar">
                <li>
                    <Link className="menu-nm" to="/Find-Stations">Find Charger</Link>
                </li>
                <li>
                    <Link className="menu-nm" to="/Business">Business</Link>
                </li>
                <li>
                    <Link className="menu-nm" to="/About">About us</Link>
                </li>
            </ul>
            <ul className="menu-bar">
                <li style={{color: "#53ce98"}} >
                    <Link to="/Vendor-Profile" ><img className="search-icon" src={userimg} alt="" /></Link>
                    {/* <Link to="/Customer-Profile" ><img className="search-icon" src={userimg} alt="" /></Link>  */}
                    {/* <Link to="/Login" >SignUp / Login</Link> */}
                </li>
            </ul>
            
        </div>
    );
}

export default Nav;