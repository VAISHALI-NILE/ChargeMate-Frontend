import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componenets/Home/home.jsx';
import Find_Stations from './Componenets/Find-Stations/findstations.jsx';
import CustomerProfile from './Componenets/User/Customer-Profile.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/Find-Stations" element={<Find_Stations />} />
        <Route path="/Customer-Profile" element={<CustomerProfile />} />
      </Routes>
    </Router>
    
  );
}

export default App;
