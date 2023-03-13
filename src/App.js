import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import SocialProof from './components/SocialProof/SocialProof';
import About from './components/About/About'
import Accordion from './components/Accordion/Accordion';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <div>
      <NavBar />
      <Header />
      <SocialProof />
      <About />
      <Accordion />
      <CTA />
      <Footer />
    </div>
  )
}

export default App;