import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import Footer from './components/Footer';
import Gallery2 from './components/Gallery2';

function App() {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      <Venue id="venue" />
      <Events id="events" />
      <Gallery id="gallery" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
