import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import "./HeroSection.css";
import kid1 from "../../assets/kid1.avif";
import toy1 from "../../assets/toy1.png"; 
import toy2 from "../../assets/toy2.png";
import kidsbg from "../../assets/kidsGrp11-bg.png"
import kidsGrp8 from "../../assets/kidsGrp8.avif"
import { Link } from "react-router-dom";
import Gallery from "../gallery/Gallery";
import Activities from "../activities/Activities";

function HeroSection() {
  return (
    <Box>
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
    <Box
    className="hero-background"
      sx={{
        marginTop:'45px',
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={kidsGrp8}
        alt="Preschool"
        sx={{
          width: { xs: "90%", md: "50%" },
          height: "auto",
          borderRadius: "10px",
          boxShadow: 3,
        }}
      />
      <Box sx={{ p: 3, textAlign: { xs: "center", md: "left",marginLeft:'40px' } }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff" }}>
          About Preschool
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#333",fontWeight:'bold',fontSize:'20px' }}>
          We provide a safe, nurturing environment where children can learn, grow, 
          and develop essential life skills. Our focus is on early childhood education 
          and emotional well-being.
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: "bold", mt: 3, color: "#fff" }}>
          About Teachers
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: "#333",fontWeight:'bold',fontSize:'20px' }}>
          Our teachers are highly trained professionals who are passionate about 
          early childhood education. They create a warm and encouraging atmosphere 
          where every child can thrive.
        </Typography>

       <Link to={'/about'}> <Button
          variant="contained"
          size="large"
          
          sx={{ mt: 3, borderRadius: "20px", px: 3 ,background:'#ee186d',fontWeight:'bold',textTransform:'none'}}
        >
          Discover More
        </Button></Link>
      </Box>
    </Box>
  {/* Gallery */}
      <Gallery/>
      {/* Activities */}
    <Activities/>  



    {/* <Box sx={{borderBottom:'2px solid #ccc',mb:3,mt:2}}> 
    </Box> */}
      </Box>
  );
}

export default HeroSection;
