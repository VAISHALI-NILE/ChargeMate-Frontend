import React from "react";
import './styles/Header.css';
import Nav from '../Home/Nav.jsx';
function Header()
{
    return(
        <>
        <div className="header-main">
        <div class="overlay"></div>
            <Nav />

            <div className="header">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                <button className="add-station">Add Station</button>
            </div>
        </div>
        </>
    );
}

export default Header;