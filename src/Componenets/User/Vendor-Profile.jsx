import React, { useState, useEffect } from "react";
import user from ".././Home/images/station-img2.jpg";
import user2 from "../Home/images/potter.png";
import "../User/Styles/vendor-profile.css";
import Footer from "../Home/footer.jsx";
import Nav from "../Home/Nav.jsx";

function VendorProfile() {
  const [stations, setStations] = useState([]);
  const [newStation, setNewStation] = useState({ name: "", location: "", hours: "", phone: "", emails: [""], latitude: "", longitude: "", website: "", category: "" });

  // Mock fetch function to get the stations data
  useEffect(() => {
    const fetchStations = async () => {
      // Replace with actual API call
      const response = await fetch('http://localhost:5038/Backend/test/stations/');
      const data = await response.json();
      setStations(data);
    };
    fetchStations();
  }, []);


  

  return (
    <>
      <Nav />
      <div className="vendor-bg">
        <div className="vendor-pr">
          <div className="profile-data">
            <img className="profileImg" src={user2} alt="profile-img" />
            <div className="username">Chosen-One</div>
          </div>
          <div className="other-data">
            <div className="info">harry@gmail.com</div>
            <div className="info">Harry Potter</div>
            <div className="info">+91 9867543210</div>
            <div className="info">Toyota Innova Hycross</div>
          </div>
        </div>
        <div className="extra-data">
          <div className="transaction">
            <h2>4000RS</h2>
            <p>Earned</p>
          </div>
          <div className="station-added">
            <h2>20</h2>
            <p>Total Stations</p>
          </div>
          <div className="current-customers">
            <h2>200</h2>
            <p>Customers</p>
          </div>
        </div>
        <div className="st_tr">
          <div className="vendor-stations">
            <h4>Charging Stations</h4>
            {stations.map(station => (
              <div className="st" key={station.id}>
                <img className="station-img" src={user} alt="station-img" />
                <div className="st-data">
                <li className="st-nm">{station.Place_name}</li>
                <li>{station.Address1}</li>
                </div>
              </div>
            ))}
          </div>
          

        </div>

       
      </div>
      <Footer />
    </>
  );
}

export default VendorProfile;
