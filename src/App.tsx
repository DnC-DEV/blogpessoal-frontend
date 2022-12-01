import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/static/navbar/Navbar';
import Footer from './component/static/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router >
  );
}

export default App;
