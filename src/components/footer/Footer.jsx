import React from "react";
import { Box, Grid, Typography, IconButton, TextField, Button } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box  className="footer1">
      <footer className="footer">
        <Box maxWidth="lg">
          <Grid container spacing={5} justifyContent="center">
            {/* About Section */}
            <Grid item xs={12} sm={4} >
              <Typography variant="h5" className="main-title"  sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>
                Little Stars Kindergarten
              </Typography>
              <Typography variant="body1" className="footer-text">
                We create a joyful learning experience where children grow with curiosity and creativity.
              </Typography>
            </Grid>

            {/* Links Section */}
            <Grid item xs={12} sm={2}  className="grid2"> 
              <Typography variant="h6"  className="footer-title">Quick Links</Typography>
             <Box className="footer-link">
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/admission">Admissions</Link></li>           
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
              </Box>
            </Grid>

            {/* Contact Details */}
            <Grid item xs={12} sm={3}  className="grid2">
              <Typography variant="h6" className="footer-title footer-contact">Contact Us</Typography>
              <Box className="footer-link-item">
                <p className="contact-item"><LocationOn /> 123 Happy St, Kids City</p>
                <p className="contact-item"><Phone /> +123 456 7890</p>
                <p className="contact-item"><Email /> info@littlestars.com</p>
              </Box>
            </Grid>

            {/* Newsletter Signup */}
            <Grid item xs={12} sm={3}  className="grid2">
              <Typography variant="h6" className="footer-title footer-input">Stay Updated</Typography>
              <Box className="newsletter-section" display='flex' sx={{ width: '400px', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <TextField size="medium" placeholder="Enter your email" className="newsletter-input" />
                <Button variant="contained" size="large"  className="newsletter-btn">Subscribe</Button>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Box className="social-section grid2" textAlign="center" mt={2} >
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>Follow Us</Typography>
            <Box className="social-icons social-icons1" display="flex" justifyContent="center" gap={2} mt={1}>
              <IconButton><Facebook /></IconButton>
              <IconButton><Twitter /></IconButton>
              <IconButton><Instagram /></IconButton>
              <IconButton><YouTube /></IconButton>
            </Box>
          </Box>

          <Typography variant="body2" align="center" className="footer-copy" mt={2}>
            © {new Date().getFullYear()} Little Stars Kindergarten. All rights reserved.
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};

export default Footer;
