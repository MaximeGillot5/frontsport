import React from 'react';
import './App.css'
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './Pages/About';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <About />
      <Footer />
    </div>
  );
};

export default App;
