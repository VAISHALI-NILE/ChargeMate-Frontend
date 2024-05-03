import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componenets/Home/home.jsx';
import Find_Stations from './Componenets/Find-Stations/findstations.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/Find-Stations" element={<Find_Stations />} />
      </Routes>
    </Router>
    
  );
}

export default App;
