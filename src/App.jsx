import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import ContactUs from "./components/ContactUs/contactUs";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import Classes from "./components/classes/Classes";
import Testimonials from "./components/testimonials/Testimonials";
import FAQs from "./components/Faqs/FAQs";
import AdmissionInquiry from "./components/Admission/AdmissionInquiry";
import ScrollToTop from "./components/scroller/ScrollToTop";


function App() {
  return (
    <Router>
      <div className="App">
      <ScrollToTop /> 
      <Navbar/>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/admission" element={<AdmissionInquiry />} />
        </Routes>
        <Footer/>
      </div>
    
    </Router>
  );
}

export default App;
