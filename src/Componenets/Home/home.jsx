import Nav from './Nav.jsx';
import ImageView from './imageview.jsx';
import Stations from './stations.jsx';
import Footer from './footer.jsx';
import Learn from './learn.jsx';
import Appadd from './app-ad.jsx';
import React from 'react';

function Home() {
  return (
    <div>
      <Nav />
      <ImageView/>
      <Stations/>
      <Learn/>
      <Appadd/>
      <Footer/>
    </div>
  );
}
export default Home;