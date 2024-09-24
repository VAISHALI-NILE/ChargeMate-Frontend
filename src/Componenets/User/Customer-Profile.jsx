import React from "react";
import user2 from "../Home/images/potter.png";
import user from "../Home/images/station-img.jpg"
import "../User/Styles/customer-style.css";
import Footer from "../Home/footer.jsx";
import Nav from "../Home/Nav.jsx"

function CustomerProfile() {
  return (
    <>
      <Nav/>
      <div className="cust-container">
        <div className="cust-inner-container">
          <div className="profile-data">
            <img className="profileImg" src={user2} alt="profile-img" />
            <div className="username">Chosen-One</div>
          </div>
          <div className="other-data">
            <div className="info">harry@gmail.com</div>
            <div className="info">Harry Potter</div>
            <div className="info">+91 9867543210</div>
            <div className="info">Toyota Innova Hycross</div>
            <div className="info">570 RS</div>
          </div>
        </div>


        <div className="previous-bookings">
          <h4>Previous Bookings</h4>
          <div className="bookings">
            <img className="station-img" src={user} alt="station-img" />
            <h4>booking ID</h4>
            <h4>station name</h4>
            <h4>date & Time</h4>
            <h4>Cost</h4>
          </div>
          <div className="bookings">
            <img className="station-img" src={user} alt="station-img" />
            <h4>booking ID</h4>
            <h4>station name</h4>
            <h4>date & Time</h4>
            <h4>Cost</h4>
          </div>
          <div className="bookings">
            <img className="station-img" src={user} alt="station-img" />
            <h4>booking ID</h4>
            <h4>station name</h4>
            <h4>date & Time</h4>
            <h4>Cost</h4>
          </div>
          <div className="bookings">
            <img className="station-img" src={user} alt="station-img" />
            <h4>booking ID</h4>
            <h4>station name</h4>
            <h4>date & Time</h4>
            <h4>Cost</h4>
          </div>
          <div className="bookings">
            <img className="station-img" src={user} alt="station-img" />
            <h4>booking ID</h4>
            <h4>station name</h4>
            <h4>date & Time</h4>
            <h4>Cost</h4>
          </div>
        </div>
        <div className="previous-bookings">
          <h4>Upcomming Bookings</h4>
          <div className="bookings">
            <img className="station-img" src={user} alt="station-img" />
            <h4>booking ID</h4>
            <h4>station name</h4>
            <h4>date & Time</h4>
            <h4>Cost</h4>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default CustomerProfile;
