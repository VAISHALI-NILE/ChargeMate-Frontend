import React from "react";

import Nav from "../Home/Nav";
import SearchBar from './searchbox.jsx';
import Stations from "./stations.jsx";
import Footer from "../Home/footer.jsx";

function Find_Stations(){
    return(
        <>
        <Nav/>
        <SearchBar/>
        <Stations/>
        <Stations/>
        <Stations/>
        <Stations/>
        <Footer/>
        </>
    );
}

export default Find_Stations;