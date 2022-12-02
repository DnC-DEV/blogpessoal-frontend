import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './component/static/footer/Footer';
import Navbar from './component/static/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;