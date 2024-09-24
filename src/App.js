import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componenets/Home/home.jsx";
import Find_Stations from "./Componenets/Find-Stations/findstations.jsx";
import Business from "./Componenets/Business/business.jsx";
import CustomerProfile from "./Componenets/User/Customer-Profile.jsx";
import Howtocharge from "./Componenets/howtocharge/howtocharge.jsx";
import AboutUs from "./Componenets/About/aboutus.jsx";
import VendorProfile from "./Componenets/User/Vendor-Profile.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Find-Stations" element={<Find_Stations />} />
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/Customer-Profile" element={<CustomerProfile />} />
        <Route path="/Vendor-Profile" element={<VendorProfile />} />
        <Route path="/howtocharge" element={<Howtocharge />} />
      </Routes>
    </Router>
  );
}

export default App;
