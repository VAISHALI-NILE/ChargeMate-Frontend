import React from 'react';
import './aboutus.css';
import Nav from '../Home/Nav';
import user from "../Home/images/vaish.jpg"
import user2 from "../Home/images/mani.jpg"
import Footer from '../Home/footer';

const AboutUs = () => {
    return (
        <>
        <Nav/>
        <div className="about-page">
            <h1>About ChargeMate</h1>
            <p>ChargeMate is dedicated to providing a seamless and efficient electric vehicle (EV) charging experience. We connect EV drivers with reliable charging stations, ensuring that you can travel with confidence and ease. Our mission is to promote the adoption of electric vehicles by making charging accessible and convenient for everyone.</p>

            <div className="mission">
                <h2>Our Mission</h2>
                <p>At ChargeMate, we aim to create a comprehensive network of EV charging stations across the country. We strive to support sustainable transportation and reduce carbon emissions by providing easy access to charging infrastructure. Our goal is to empower EV owners and contribute to a cleaner, greener future.</p>
            </div>
            <h2>Meet the Team</h2>
            <div className="team">
                
                <div className="team-member">
                    <img src={user} alt="Team Member 1" />
                    <h3>Vaishali Nile</h3>
                    <p>Founder</p>
                </div>
                <div className="team-member">
                    <img src={user2} alt="Team Member 2" />
                    <h3>Manisha Pendharkar</h3>
                    <p>CO-Founder</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AboutUs;
