import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import "./AdmissionInquiry.css";
import CustomContainer from "../Container/CustomContainer";

const AdmissionInquiry = () => {
  return (
    <Box className="admission">
         <CustomContainer
     title="Admissions"
     description="Lorem ipsum dolor sit amet consectetur. Quis sed donec quis nunc aliquet cursus mauris ut.">
      <p style={{color:'#fff'}}>Enim fermentum maecenas rutrum dapibus sodales quis.</p>
     </CustomContainer>
   
    <Box className="admission-inquiry">
      <Box className="admission-content">
        <Typography variant="h3" className="admission-title">
          Admissions Open for 2025-26
        </Typography>
        <Typography variant="h5" className="admission-subtitle">
          Enquire Now
        </Typography>
        <Box className="steps-container">
          {["Fill the Inquiry Form", "Get Invited", "Visit the Campus", "Join Us"].map((step, index) => (
            <Box key={index} className="step-box">
              <Typography variant="h4" className="step-number">{index + 1}</Typography>
              <Typography className="step-text">{step}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="inquiry-form">
        <Typography variant="h5" className="form-title">Enquire Now</Typography>
        <TextField label="First Name" variant="outlined" className="form-input" />
        <TextField label="Last Name" variant="outlined" className="form-input" />
        <TextField label="Email" variant="outlined" className="form-input" />
        <TextField label="Mobile" variant="outlined" className="form-input" />
        <TextField label="City" variant="outlined" className="form-input" />
        <Box display={'flex'} gap={'20px'}>
        <Button variant="contained" className="submit-button">Submit</Button>
        <Button variant="contained" className="submit-button">Clear</Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default AdmissionInquiry;
