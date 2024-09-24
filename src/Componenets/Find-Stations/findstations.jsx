import React from "react";

import Nav from "../Home/Nav";
import SearchBox from "./searchbox.jsx";
import Stations from "./stations.jsx";
import Footer from "../Home/footer.jsx";
import Googlemap from "./googlemap.jsx";
import { useState, useEffect } from "react";

function Find_Stations() {
  const [filteredStations, setFilteredStations] = useState([]);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    async function fetchStations() {
      try {
        const response = await fetch(
          "https://chargemate-backend-1.onrender.com/Backend/test/stations/"
        );
        const data = await response.json();
        setStations(data);
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    }
    fetchStations();
  }, []);
  // Function to handle search action
  const handleSearch = (searchText) => {
    // Perform search logic to filter stations based on searchText
    const filteredData = stations.filter((station) =>
      station.Address1.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredStations(filteredData);
  };
  return (
    <>
      <Nav />
      <SearchBox onSearch={handleSearch} />
      <Googlemap />
      <Stations
        stations={filteredStations.length > 0 ? filteredStations : stations}
      />
      <Footer />
    </>
  );
}

export default Find_Stations;
