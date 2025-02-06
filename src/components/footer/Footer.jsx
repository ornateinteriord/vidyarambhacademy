import React from "react";
import { Container, Grid, Typography, IconButton, TextField, Button, Box, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box mt={2} className="footer">
    <footer className="footer">
      {/* <Box sx={{borderBottom:'1px solid #ccc',mb:3,background:'#fff'}}> 
      </Box> */}
      <Container maxWidth="lg">
        <Grid container spacing={10} justifyContent="center">
          
          {/* About Section */}
          <Grid item xs={12} sm={4} >
            <Typography variant="h5" mt={2} sx={{ color: '#fff',fontWeight:'bold',marginBottom:'20px'}}>Little Stars Kindergarten</Typography>
            <Typography variant="body1" className="footer-text">
              We create a joyful learning experience where children grow with curiosity and creativity.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" mt={2} className="footer-title">Quick Links</Typography>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} mt={2} sm={3}>
            <Typography variant="h6" className="footer-title">Contact Us</Typography>
            <p className="contact-item"><LocationOn /> 123 Happy St, Kids City</p>
            <p className="contact-item"><Phone /> +123 456 7890</p>
            <p className="contact-item"><Email /> info@littlestars.com</p>
          </Grid>

          {/* Newsletter Signup */}
          <Grid item xs={12} mt={2} sm={3}>
            <Typography variant="h6" className="footer-title">Stay Updated</Typography>
            <TextField 
              placeholder="Enter your email" 
              
              className="newsletter-input"
            />
            <Button variant="contained" color="primary" className="newsletter-btn">Subscribe</Button>
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <div className="social-section">
          <Typography variant="h6" sx={{ color: '#fff',fontWeight:'bold'}} >Follow Us</Typography>
          <div className="social-icons social-icons1">
            <IconButton color="primary"><Facebook /></IconButton>
            <IconButton color="primary"><Twitter /></IconButton>
            <IconButton color="primary"><Instagram /></IconButton>
            <IconButton color="primary"><YouTube /></IconButton>
          </div>
        </div>
        <Typography variant="body2" align="center" className="footer-copy">
          © {new Date().getFullYear()} Little Stars Kindergarten. All rights reserved.
        </Typography>
      </Container>
    </footer>
    </Box>
  );
};

export default Footer;
