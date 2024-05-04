import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componenets/Home/home.jsx';
import Find_Stations from './Componenets/Find-Stations/findstations.jsx';
import Business from './Componenets/Business/business.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Business" element={<Business/>}/>
        <Route path="/Find-Stations" element={<Find_Stations />} />
      </Routes>
    </Router>
    
  );
}

export default App;
