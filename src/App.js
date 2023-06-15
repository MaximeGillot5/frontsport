import React from 'react';
import './App.css'
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
};

export default App;
