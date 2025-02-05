import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./HeroSection.css";
import kid1 from "../../assets/kid1.avif";
import toy1 from "../../assets/toy1.png"; // Ensure PNG format for transparency
import toy2 from "../../assets/toy2.png";

function HeroSection() {
  return (
    <Box className="hero-container">
      <Box className="hero-content">
        {/* Toys placed before text */}
        <Box className="toys-container">
          <img src={toy1} className="toy toy1" alt="toy1" />
          <img src={toy2} className="toy toy2" alt="toy2" />
        </Box>

        {/* Main Heading */}
        <Typography className="bouncy-text gradient-text" sx={{ fontSize: "70px", fontWeight: "bold" }} gutterBottom>
          Better Future For<br /> Your Kids
        </Typography>
        
        {/* Subtext */}
        <Typography variant="h5" className="highlight-text" fontWeight={700} gutterBottom>
          Providing quality education with love and care.
        </Typography>
        
        <Button variant="contained" className="custom-button">
          Enroll Now
        </Button>
      </Box>

      {/* Kid Image Section */}
      <Box className="image-container">
        <img src={kid1} className="background-img shadow-img" alt="kid" />
      </Box>
    </Box>
  );
}

export default HeroSection;
