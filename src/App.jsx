import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Offers from './components/Offers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

console.log('app dot js file address:', window.location.href);

const App = () => (
  <>
    <Background />
    <Navbar />
    <Header />
    <About />
    <Services />
    <Offers />
    <Contact />
    <Footer />
  </>
);

export default App;