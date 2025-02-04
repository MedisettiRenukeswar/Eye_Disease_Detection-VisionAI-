import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Account from './pages/Account.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;