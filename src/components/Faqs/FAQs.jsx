import React from "react";
import { Typography, Box, Button } from "@mui/material";
import "./FAQs.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is the age requirement for enrollment?",
    answer: "Children must be at least 3 years old to enroll in our kindergarten program.",
    color: "#F4A261",
  },
  {
    question: "What documents are required for admission?",
    answer: "You need to provide a birth certificate, medical records, and proof of residence.",
    color: "#2A9D8F",
  },
  {
    question: "Are meals provided at the kindergarten?",
    answer: "Yes, we offer healthy meals and snacks throughout the day.",
    color: "#E76F51",
  },
  {
    question: "What safety measures are in place?",
    answer: "We have a secure entry system, trained staff, and emergency protocols to ensure children's safety.",
    color: "#264653",
  },
  {
    question: "What are the school hours?",
    answer: "Our kindergarten operates from 8:00 AM to 3:00 PM, Monday to Friday.",
    color: "#E9C46A",
  },
  {
    question: "Is there a nap time for children?",
    answer: "Yes, children have a designated nap time in the afternoon.",
    color: "#8D99AE",
  },
];

const FAQs = () => {
  return (
    <Box className="faqs-bg">
      <Box className="faqs-container">
        <Typography variant="h3" className="faqs-title">
          General Questions
        </Typography>
        <Typography variant="body1" className="faqs-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </Typography>
        <Box className="faqs-grid">
          {faqs.map((faq, index) => (
            <Box key={index} className="faq-item" style={{ borderLeft: `5px solid ${faq.color}` }}>
              <HelpOutlineIcon style={{ color: faq.color }} className="faq-icon" />
              <Box>
                <Typography variant="h6" className="faq-question" style={{ color: faq.color }}>
                  {faq.question}
                </Typography>
                <Typography variant="body1" className="faq-answer">
                  {faq.answer}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="enroll-section">
          <Typography sx={{ color: '#34495e', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 'bold', mb: '15px' }}>
            Join Us Now
          </Typography>
          <Typography variant="h4" className="enroll-title">
            Don't Let Your Child's Childhood Pass
          </Typography>
          <Typography variant="body1" className="enroll-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </Typography>
          <Button
            variant="contained"
            className="enroll-button"
            component={Link}
            to="/admission"
            sx={{ textDecoration: "none", color: "white" }}
          >
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQs;