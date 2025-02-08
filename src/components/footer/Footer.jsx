import React from "react";
import { Container, Grid, Typography, IconButton, TextField, Button, Box } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css";

const Footer = () => {
  return (
    <Box mt={0} className="footer1">
      <footer className="footer">
        <Container maxWidth="lg">
          <Grid container spacing={10} justifyContent="center">
            
            {/* About Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" mt={2} sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>
                Little Stars Kindergarten
              </Typography>
              <Typography variant="body1" className="footer-text">
                We create a joyful learning experience where children grow with curiosity and creativity.
              </Typography>
            </Grid>

            {/* Links Section */}
            <Grid item xs={12} sm={2}>
              <Typography variant="h6" mt={2} className="footer-title">Quick Links</Typography>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/admission">Admissions</Link></li>           
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
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
              <Box display={'flex'} sx={{width:'400px',alignItems:'center', justifyContent:'center',gap:'5px'}}>
              <TextField  placeholder="Enter your email" className="newsletter-input" />
              <Button variant="contained" size="small" color="primary" className="newsletter-btn">Subscribe</Button>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <div className="social-section">
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>Follow Us</Typography>
            <div className="social-icons social-icons1">
              <IconButton ><Facebook /></IconButton>
              <IconButton ><Twitter /></IconButton>
              <IconButton ><Instagram /></IconButton>
              <IconButton ><YouTube /></IconButton>
            </div>
          </div>

          <Typography variant="body2" align="center" className="footer-copy" >
            © {new Date().getFullYear()} Little Stars Kindergarten. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </Box>
  );
};

export default Footer;
