import React from "react";
import { TextField, Button, Grid, Typography, Paper, Box } from "@mui/material";
import { LocationOn, Phone, Email, Facebook, Instagram, Pinterest, LinkedIn } from "@mui/icons-material";
import "./ContactUs.css";
import CustomContainer from "../Container/CustomContainer";


const ContactUs = () => {
  return (
   
    <Box className="background">
    {/* <CustomContainer
     title="Contact Us"
     description="Lorem ipsum dolor sit amet consectetur. Quis sed donec quis nunc aliquet cursus mauris ut.">
      <p style={{color:'#fff'}}>Enim fermentum maecenas rutrum dapibus sodales quis.</p>
     </CustomContainer> */}
      <Box spacing={3}  className="contact-container">
        <Box className="contact-container1">
        <Grid item xs={12} md={6}  className="left-section" >
          <Typography variant="h4" className="title">
            Let's Talk
          </Typography>
          <Typography variant="body1" className="description">
            Get in touch with us for any inquiries or project discussions. We're here to help!
          </Typography>
          <form className="contact-form">
            <Grid container spacing={2} className="input-fields">
              <Grid item xs={6}>
                <TextField fullWidth label="Your Name" variant="outlined" className="input-field" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email Address" variant="outlined" className="input-field" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Phone Number" variant="outlined" className="input-field" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Project Details" variant="outlined" className="input-field" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Write your message" variant="outlined" multiline rows={4} className="input-field" />
              </Grid>
            </Grid>
          <Box display={'flex'} gap={1}>
              <Button variant="contained" color="primary" fullWidth className="animated-button">
                Submit
              </Button>
              <Button variant="contained" color="primary" fullWidth className="animated-button">
                Clear
              </Button>
              </Box>
          </form>
        </Grid>
        <Grid item xs={12} md={6} className="right-section">
          <Typography variant="h4" className="title">Contact with us</Typography>
          <Typography variant="body1" className="description">
            Reach out to us at our office or through the contact details below.
          </Typography>
          <div className="contact-details">
            <p><LocationOn /><span className="address"> 121 King Street, New York, USA</span> </p>
            <p><Phone /> <span className="address"> +1 (800) 060-07-30</span> </p>
            <p><Email />  <span className="address"> yourname@example.com </span></p>
          </div>
          <Typography variant="h5" className="follow-title" marginBottom={2} fontWeight={700} sx={{color:'#ee186d'}}>Follow Us</Typography>
          <div className="social-icons icons">
            <Facebook />
            <Instagram />
            <Pinterest />
            <LinkedIn />
          </div>
        </Grid>
        </Box>
      </Box>
    </Box>
  
  );
};

export default ContactUs;
