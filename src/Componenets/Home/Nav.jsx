import React from "react";
import './styles/Nav.css';
import searchimg from './images/icons/search.png';
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
                    <Link className="menu-nm" to="/Find-Stations">EV Drivers</Link>
                </li>
                <li>
                    <a className="menu-nm" href="">Business</a>
                </li>
                <li>
                    <a className="menu-nm" href="">About us</a>
                </li>
            </ul>
            <ul className="menu-bar">
                <li>
                    <img className="search-icon" src={searchimg} alt="" />
                </li>
            </ul>
            
        </div>
    );
}

export default Nav;