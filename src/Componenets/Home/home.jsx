import Nav from './Nav.jsx';
import ImageView from './imageview.jsx';
import Infos from './Infos.jsx';
import Footer from './footer.jsx';
import Learn from './learn.jsx';
import Appadd from './app-ad.jsx';
import Map from './map.jsx';
import React from 'react';

function Home() {
  return (
    <div>
      <Nav />
      <ImageView/>

      <Infos/>
      <Map/>
      <Learn/>
      <Appadd/>
      <Footer/>
    </div>
  );
}
export default Home;