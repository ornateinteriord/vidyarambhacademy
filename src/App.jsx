import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import ContactUs from "./components/ContactUs/contactUs";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </div>
    
    </Router>
  );
}

export default App;
