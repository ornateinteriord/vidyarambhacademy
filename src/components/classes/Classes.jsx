import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Classes.css";
import img1 from "../../assets/classes/kidsClass3.avif";
import img2 from "../../assets/classes/kidsClass2.avif";
import img4 from "../../assets/classes/kidsClass7.avif";
import img5 from "../../assets/classes/kidsClass6.avif";
import img6 from "../../assets/classes/kidsClass5.avif";
import img7 from "../../assets/classes/kidsClass4.avif";
import img8 from "../../assets/classes/kidsClass1.avif";
import CustomContainer from "../Container/CustomContainer";

const classesData = [
    {
      title: "Playgroup",
      image: img1,
      description: "Fun and engaging activities for toddlers.",
      timing: "9:00 AM - 11:00 AM"
    },
    {
      title: "Nursery",
      image: img2,
      description: "Building foundational skills through play.",
      timing: "11:30 AM - 1:30 PM"
    },
    {
      title: "Junior KG",
      image: img4,
      description: "Interactive learning for early childhood.",
      timing: "2:00 PM - 4:00 PM"
    },
    {
      title: "Senior KG",
      image: img5,
      description: "Preparing kids for primary school.",
      timing: "9:00 AM - 11:00 AM"
    },
    {
      title: "Activity Club",
      image: img6,
      description: "Evening fun and learning activities.",
      timing: "4:30 PM - 6:30 PM"
    },
    {
      title: "Weekend Fun",
      image: img7,
      description: "Exciting weekend programs.",
      timing: "10:00 AM - 12:00 PM"
    }
  ];

const Classes = () => {
  return (
    <Box className="class-bg">
       <CustomContainer
     title="Classses"
     description="Lorem ipsum dolor sit amet consectetur. Quis sed donec quis nunc aliquet cursus mauris ut.">
      <p style={{color:'#fff'}}>Enim fermentum maecenas rutrum dapibus sodales quis.</p>
     </CustomContainer>
  
    <div className="classes-page">
      <Typography variant="h4" className="classes-title">Our Classes</Typography>
      <div className="classes-grid">
        {classesData.map((cls, index) => (
          <Card key={index} className="class-card">
            <CardMedia component="img" height="200" image={cls.image} alt={cls.title} />
            <CardContent>
              <Typography variant="h6" className="class-title">{cls.title}</Typography>
              <Typography variant="body2" color="textSecondary" className="class-description">
                {cls.description}
              </Typography>
              <Typography variant="body2" className="class-timing">
                Timing: {cls.timing}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </Box>
  );
};

export default Classes;
