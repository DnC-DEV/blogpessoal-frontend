import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/static/navbar/Navbar';
import Footer from './component/static/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <>
      <Navbar />
       <Home />
      <Footer />
    </>
  );
}

export default App;
