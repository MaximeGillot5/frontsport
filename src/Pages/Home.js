import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import CardNumber from '../components/CardNumber';
import '../styles/home.css';
import Test from '../components/Test';

const Accueil = () => {
  return (
    <div className="cards-group">
      <div id="home-carousel" className='home-card'>
        <Carousel />
      </div>
      <div id='hero' className='home-card'>
        <Hero />
      </div>
      <div id='illustration' className="home-card">
      </div>
      <div id="card-number" className='home-card'>
        <CardNumber />
      </div>
      <div id='test' className='home-card'>
        <Test />
      </div>
    </div>
  );
};

export default Accueil;