import React from "react";
import user from "./Images/user.png";
import "../User/Styles/customer-style.css";
import Footer from "../Home/footer.jsx";
import Nav from "../Home/Nav.jsx"

function CustomerProfile() {
  return (
    <>
      <Nav/>
      <div className="main-container">
        <div className="inner-container">
          <div className="profile-data">
            <img className="profileImg" src={user} alt="profile-img" />
            <div className="username">username</div>
          </div>
          <div className="other-data">
            <div className="info">email</div>
            <div className="info">name</div>
            <div className="info">contact</div>
            <div className="info">car info</div>
            <div className="info">money spent</div>
          </div>
        </div>

        <div className="card-info">
          <div className="payment-methods">
            <div className="method">UPI</div>
            <div className="method">CARD</div>
            <div className="method">Net banking</div>
            <div className="method">other</div>
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
