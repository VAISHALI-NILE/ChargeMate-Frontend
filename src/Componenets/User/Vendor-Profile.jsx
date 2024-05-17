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

  const handleRemove = async (id) => {
    // Handle remove functionality
    await fetch(`http://localhost:5038/Backend/test/stations/${id}`, { method: 'DELETE' });
    setStations(stations.filter(station => station.id !== id));
  };

  const handleAddStation = async () => {
    // Handle add station functionality
    const response = await fetch('http://localhost:5038/Backend/test/stations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStation)
    });
    const addedStation = await response.json();
    setStations([...stations, addedStation]);
    setNewStation({ name: "", location: "", hours: "", phone: "", emails: [""], latitude: "", longitude: "", website: "", category: "" });
  };

  return (
    <>
      <Nav />
      <div className="main-container">
        <div className="inner-container">
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

        <div className="previous-bookings">
          <h4>Charging Stations</h4>
          {stations.map(station => (
            <div className="bookings" key={station.id}>
              <img className="station-img" src={user} alt="station-img" />
              <li>{station.Place_name}</li>
              <li>{station.Address1}</li>
              <button className="remove-button" onClick={() => handleRemove(station.id)}>Remove</button>
            </div>
          ))}
        </div>

       
      </div>
      <Footer />
    </>
  );
}

export default VendorProfile;
