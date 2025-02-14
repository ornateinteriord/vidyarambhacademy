import React from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { LocationOn, Phone, Email, Facebook, Instagram, Pinterest, LinkedIn } from "@mui/icons-material";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <Box className="background">
      <Box className="contact-container">
        <Box className="contact-container1">
          <Box className="left-section">
            <Typography variant="h4" className="title">
              Let's Talk
            </Typography>
            <Typography variant="body1" className="description">
              Get in touch with us for any inquiries or project discussions. We're here to help!
            </Typography>
            <form className="contact-form">
              <Grid  spacing={2} className="input-fields">
                <Box className="inputs">
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    variant="outlined"
                    className="input-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    variant="outlined"
                    className="input-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Phone Number"
                    variant="outlined"
                    className="input-field"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Project Details"
                    variant="outlined"
                    className="input-field"
                  />
                </Grid>
                </Box>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Write your message"
                    variant="outlined"
                    multiline
                    rows={4}
                    className="input-field"
                  />
                </Grid>
              </Grid>
              <Box    className="cont-btn">
                <Button variant="contained" className="animated-button">
                  Submit
                </Button>
                <Button variant="contained" className="animated-button">
                  Clear
                </Button>
              </Box>
            </form>
          </Box>
          <Box className="right-section">
            <Typography variant="h4" className="title">
              Contact with us
            </Typography>
            <Typography variant="body1" className="description">
              Reach out to us at our office or through the contact details below.
            </Typography>
            <div className="contact-details">
              <p>
                <LocationOn />
                <span className="address">121 King Street, New York, USA</span>
              </p>
              <p>
                <Phone />
                <span className="address">+1 (800) 060-07-30</span>
              </p>
              <p>
                <Email />
                <span className="address">yourname@example.com</span>
              </p>
            </div>
            <Typography
              variant="h5"
              className="follow-title title"
              marginBottom={2}
            >
              Follow Us
            </Typography>
            <div className="cantact-icons">
              <Facebook />
              <Instagram />
              <Pinterest />
              <LinkedIn />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;