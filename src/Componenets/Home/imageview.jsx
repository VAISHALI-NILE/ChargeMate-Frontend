import React from "react";
import stimg1 from './images/home-img2.jpg';
import './styles/imageview.css';
import { useNavigate } from "react-router-dom";

function ImageView(){
    const navigate = useNavigate()
    return(
        <div className="home-view">
            <img className="home-img" src={stimg1} alt="" />
            <div className="home-text">
                <h1>EV Charging Stations</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                <button className="learn-more" onClick={() => { navigate('/howtocharge'); }}>Learn More</button>
            </div>
        </div>
    );
}

export default ImageView;
