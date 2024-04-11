import React from "react";
import './styles/Nav.css';
import searchimg from '../images/icons/search.png'
function Nav()
{
    return (
        <div className="navbar">
            <ul className="menu-bar">
                <li>
                    <a className="menu-nm logo" href="">ChargeMate</a>
                </li>
            </ul>
            <ul className="menu-bar">
                <li>
                    <a className="menu-nm" href="">EV Drivers</a>
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