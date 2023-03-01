import React from 'react';
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Activities from './components/Activities';
import Bookings from './components/Bookings'
import Gallery from './components/Gallery';
import Contacts from './components/Contacts'
import Footer from './components/Footer'
function App() {
  return (
    <div>
     <Topbar />
     <Navbar />
      <Hero />
      <Activities />
      <Bookings />
      <Gallery />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
