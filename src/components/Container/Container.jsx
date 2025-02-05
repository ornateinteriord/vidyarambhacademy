// ContactContainer.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "./Container.css"

const Container1 = () => {
  return (
    <Box className="container">
        <Typography variant="h3" className="title-1">
          Contact Us
        </Typography>
        <Typography variant="body1" className="container-description">
          Lorem ipsum dolor sit amet consectetur. Quis sed donec quis nunc
          aliquet cursus mauris ut.<span> Enim fermentum maecenas rutrum dapibus
          sodales quis.</span>
        </Typography>
      
    </Box>
  );
};

export default Container1;
