import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const FTLCartage = lazy(() => import('./pages/FTL Cartage'));
const LTLCartage = lazy(() => import('./pages/LTL Cartage'));
const WarehousingAndLogistics = lazy(() => import('./pages/WarehousingAndLogistics'));
const Technology = lazy(() => import('./pages/Technology'));
const About = lazy(() => import('./pages/About'));

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
