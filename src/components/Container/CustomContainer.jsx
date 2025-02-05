// CustomContainer.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "./Container.css";

const CustomContainer = ({ title, description, children }) => {
  return (
    <Box className="container">
      <Typography variant="h3" className="title-1">
        {title}
      </Typography>
      <Typography variant="body1" className="container-description">
        {description}
      </Typography>
      {children} 
    </Box>
  );
};

export default CustomContainer;
