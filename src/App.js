import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import FTLCartage from './pages/FTL Cartage';
import LTLCartage from './pages/LTL Cartage';
import WarehousingAndLogistics from './pages/WarehousingAndLogistics';
import Technology from './pages/Technology';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ftlcartage" element={<FTLCartage />} />
          <Route path="/services/ltlcartage" element={<LTLCartage />} />
          <Route path="/services/warehousing&logistics" element={<WarehousingAndLogistics />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
